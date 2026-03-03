import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Railway Medical Screening You Can Trust
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional drug &amp; alcohol testing and fitness-to-work assessments
            for Network Rail and London Underground personnel.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-hover text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Book a Screening
          </Link>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW (3 cards) ===== */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Drug & Alcohol Testing */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">&#128300;</div>
              <h3 className="text-xl font-semibold mb-3">Drug &amp; Alcohol Testing</h3>
              <p className="text-grey-text">
                Comprehensive screening for Network Rail PTS and London Underground
                staff. Fast, reliable results you can depend on.
              </p>
            </div>

            {/* Card 2: PTS Medicals */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">&#129657;</div>
              <h3 className="text-xl font-semibold mb-3">PTS Medicals</h3>
              <p className="text-grey-text">
                Full medical assessments including vision, hearing, and mobility
                checks to confirm fitness for trackside work.
              </p>
            </div>

            {/* Card 3: Safety Critical Medicals */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">&#9989;</div>
              <h3 className="text-xl font-semibold mb-3">Safety Critical Medicals</h3>
              <p className="text-grey-text">
                Thorough health assessments for safety critical workers, ensuring
                compliance with railway industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (3 steps) ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Enquire</h3>
              <p className="text-grey-text">
                Fill in our booking form or give us a call. Tell us what screening
                you need and we&apos;ll get back to you promptly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Attend</h3>
              <p className="text-grey-text">
                Visit our OH Centre in Ongar, Essex for your screening. The process
                is straightforward and professional.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Cleared</h3>
              <p className="text-grey-text">
                Receive your results quickly so you can get back to work on the
                railway with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY MEDITEST (trust signals) ===== */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Meditest Screening?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">&#127942;</div>
              <h3 className="font-semibold mb-2">RISQS Accredited</h3>
              <p className="text-sm text-grey-text">
                Fully accredited and verified by RISQS for railway industry compliance.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">&#9877;&#65039;</div>
              <h3 className="font-semibold mb-2">HSE Approved Physician</h3>
              <p className="text-sm text-grey-text">
                Our OH Physician is an HSE approved Lead Medical Officer.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">&#128205;</div>
              <h3 className="font-semibold mb-2">Essex Based</h3>
              <p className="text-sm text-grey-text">
                Conveniently located in Ongar, Essex with easy access for London and
                the South East.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">&#129309;</div>
              <h3 className="font-semibold mb-2">Personal Service</h3>
              <p className="text-sm text-grey-text">
                Direct contact with our team. No call centres, no runaround — just
                straightforward service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Screening?
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            Get in touch today and we&apos;ll arrange your appointment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
