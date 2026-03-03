import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book | Meditest Screening",
  description:
    "Book a railway medical screening or drug & alcohol test with Meditest Screening. Contact us today.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
