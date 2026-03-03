#!/bin/bash
# ============================================
# Meditest Screening Website — Test Script
# Run this to check the site is working properly
# Usage: bash test-site.sh
# ============================================

set -e

PROJECT_DIR="$HOME/Projects/meditest-screening"
BASE_URL="http://localhost:3000"
PASS=0
FAIL=0

echo ""
echo "========================================="
echo "  Meditest Screening — Site Test Script"
echo "========================================="
echo ""

# --- 1. Check project files exist ---
echo "--- Checking project files ---"

files=(
  "src/app/layout.tsx"
  "src/app/globals.css"
  "src/app/page.tsx"
  "src/app/services/page.tsx"
  "src/app/about/page.tsx"
  "src/app/contact/page.tsx"
  "src/components/Header.tsx"
  "src/components/Footer.tsx"
  "public/risqs-audit-stamp.png"
  "public/risqs-verified-stamp.png"
)

for file in "${files[@]}"; do
  if [ -f "$PROJECT_DIR/$file" ]; then
    echo "  PASS: $file exists"
    ((PASS++))
  else
    echo "  FAIL: $file is MISSING"
    ((FAIL++))
  fi
done

echo ""

# --- 2. Check Node.js and npm ---
echo "--- Checking dependencies ---"

if command -v node &> /dev/null; then
  echo "  PASS: Node.js installed ($(node --version))"
  ((PASS++))
else
  echo "  FAIL: Node.js not installed"
  ((FAIL++))
fi

if command -v npm &> /dev/null; then
  echo "  PASS: npm installed ($(npm --version))"
  ((PASS++))
else
  echo "  FAIL: npm not installed"
  ((FAIL++))
fi

echo ""

# --- 3. Check node_modules ---
echo "--- Checking node_modules ---"

if [ -d "$PROJECT_DIR/node_modules" ]; then
  echo "  PASS: node_modules directory exists"
  ((PASS++))
else
  echo "  FAIL: node_modules missing — run 'npm install' in the project directory"
  ((FAIL++))
fi

echo ""

# --- 4. Try building the project ---
echo "--- Building project (npm run build) ---"

cd "$PROJECT_DIR"
if npm run build > /dev/null 2>&1; then
  echo "  PASS: Project builds successfully"
  ((PASS++))
else
  echo "  FAIL: Build failed — check for errors with 'npm run build'"
  ((FAIL++))
fi

echo ""

# --- 5. Check if dev server is running and test pages ---
echo "--- Testing pages (dev server must be running on port 3000) ---"

if curl -s "$BASE_URL" > /dev/null 2>&1; then
  pages=("/" "/services" "/about" "/contact")
  for page in "${pages[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$page")
    if [ "$status" = "200" ]; then
      echo "  PASS: $page returns HTTP 200"
      ((PASS++))
    else
      echo "  FAIL: $page returns HTTP $status"
      ((FAIL++))
    fi
  done
else
  echo "  SKIP: Dev server not running on port 3000"
  echo "         Start it with: cd $PROJECT_DIR && npm run dev"
fi

echo ""

# --- Summary ---
echo "========================================="
echo "  Results: $PASS passed, $FAIL failed"
echo "========================================="
echo ""

if [ "$FAIL" -eq 0 ]; then
  echo "All checks passed!"
else
  echo "Some checks failed — see above for details."
fi
