import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Meditest Screening</h3>
            <p className="text-sm text-gray-300 mb-2">
              Railway medical screening and drug &amp; alcohol testing services.
            </p>
            <p className="text-sm text-gray-300">RISQS Accredited</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact / Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <strong className="text-white">OH Centre:</strong>
                <br />
                Stondon Road, Ongar, Essex, CM5 9RG
              </p>
              <p>
                <strong className="text-white">Correspondence:</strong>
                <br />
                3 Bellhouse Lane, Brentwood, Essex, CM14 5PP
              </p>
              <p>
                <strong className="text-white">Tel:</strong>{" "}
                <a href="tel:07786136470" className="hover:text-white transition-colors">
                  07786 136470
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:claire.lim@meditestscreening.com" className="hover:text-white transition-colors">
                  claire.lim@meditestscreening.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RISQS stamps and copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Meditest Screening. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/risqs-audit-stamp.png"
              alt="RISQS Audit Stamp"
              width={80}
              height={80}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/risqs-verified-stamp.png"
              alt="RISQS Verified Stamp"
              width={80}
              height={80}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
