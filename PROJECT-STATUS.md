# Meditest Screening Website — Project Status

## DONE
- [x] Project setup (Next.js + TypeScript + Tailwind CSS)
- [x] Global styles and colour scheme (dark blue + white + blue accent)
- [x] Header component — logo, nav links, mobile hamburger menu, phone/email bar
- [x] Footer component — contact details, quick links, RISQS stamps, copyright
- [x] Home page — hero, 3 service cards, "How it works" steps, trust signals, CTA
- [x] Services page — 5 service sections with descriptions, inclusions, duration, who needs it
- [x] About page — company background, mission, what sets us apart, location
- [x] Contact/Book page — full enquiry form (name, email, mobile, Sentinel No, service checkboxes, message)
- [x] RISQS stamp images downloaded

## TO DO
- [ ] Add company logo (ask Claire for the file, place in public/logo.png and update Header.tsx)
- [ ] Set up proper email sending (currently uses mailto: link — consider Formspree, SendGrid, or a Next.js API route with Nodemailer for server-side email)
- [ ] Add Google Maps embed to the Contact page (optional)
- [ ] Add real content review — get Claire to check all text for accuracy
- [ ] SEO — add Open Graph tags, sitemap.xml, robots.txt
- [ ] Favicon — replace default Next.js favicon with Meditest branding
- [ ] Deploy to hosting (Vercel, Netlify, or custom domain)
- [ ] Connect custom domain (meditestscreening.com if available)
- [ ] Add Google Analytics or similar tracking (optional)
- [ ] Accessibility review — screen reader testing, alt text, colour contrast

## FILE GUIDE
```
src/
  app/
    layout.tsx         — Main layout (wraps all pages with Header + Footer)
    globals.css        — Global styles and colour variables
    page.tsx           — HOME PAGE
    services/
      page.tsx         — SERVICES PAGE (all 5 services)
    about/
      page.tsx         — ABOUT US PAGE
    contact/
      page.tsx         — CONTACT / BOOKING FORM PAGE
  components/
    Header.tsx         — Top navigation bar
    Footer.tsx         — Bottom footer with RISQS stamps
public/
    risqs-audit-stamp.png      — RISQS audit accreditation image
    risqs-verified-stamp.png   — RISQS verified accreditation image
```

## HOW TO RUN
```bash
cd ~/Projects/meditest-screening
npm run dev
# Open http://localhost:3000 in your browser
```

## TECH STACK
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Font: Inter (Google Fonts)
