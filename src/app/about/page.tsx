import Link from "next/link";

export const metadata = {
  title: "About Us | Meditest Screening",
  description:
    "Learn about Meditest Screening — a RISQS accredited railway medical screening company based in Essex providing drug & alcohol testing and fitness-to-work assessments.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Meditest Screening</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional, personal railway medical screening you can rely on.
          </p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-grey-text text-lg mb-6">
            Meditest Screening is an Occupational Health Centre providing medical
            and drug &amp; alcohol screening for Network Rail, and D&amp;A screening
            for London Underground. Based in Ongar, Essex, we are RISQS approved
            and hold all relevant insurances (copies of certificates can be
            provided upon request).
          </p>
          <p className="text-grey-text text-lg mb-6">
            Our OH Physician is an <strong className="text-dark-text">HSE approved Lead Medical Officer</strong>,
            ensuring that all assessments are carried out to the highest
            professional and regulatory standards.
          </p>
          <p className="text-grey-text text-lg">
            We understand that getting your medical clearance quickly and
            professionally is essential — whether you&apos;re a contractor needing
            PTS certification, or an employer managing a team of safety critical
            workers. That&apos;s why we offer a straightforward, efficient service
            with a personal touch.
          </p>
        </div>
      </section>

      {/* ===== OUR MISSION ===== */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-grey-text text-lg mb-6">
            Our mission is simple: to help keep railway workers safe and
            compliant. We do this by providing thorough, professional medical
            screenings that meet the highest industry standards.
          </p>
          <p className="text-grey-text text-lg">
            Every screening we carry out is conducted with care, accuracy, and
            respect for the individual. We know that behind every assessment is a
            person who needs to get to work — and we take that responsibility
            seriously.
          </p>
        </div>
      </section>

      {/* ===== WHY WE'RE DIFFERENT ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light-bg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">RISQS Accredited</h3>
              <p className="text-grey-text">
                We are fully RISQS accredited and verified, meaning our processes
                meet the rigorous standards required by the railway industry. You
                can book with confidence knowing your screening will be accepted.
              </p>
            </div>
            <div className="bg-light-bg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Railway Specialists</h3>
              <p className="text-grey-text">
                We focus specifically on railway medical screening. This means we
                understand the exact requirements for PTS medicals, D&amp;A testing,
                and safety critical assessments — no guesswork, no delays.
              </p>
            </div>
            <div className="bg-light-bg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Personal Service</h3>
              <p className="text-grey-text">
                When you contact us, you deal directly with our team — not a call
                centre. We pride ourselves on being approachable, responsive, and
                easy to work with.
              </p>
            </div>
            <div className="bg-light-bg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Compliance &amp; Standards</h3>
              <p className="text-grey-text">
                All our screenings are carried out in compliance with RSSB standards,
                Network Rail requirements, and TfL/London Underground protocols. We
                stay up to date so you don&apos;t have to worry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR LOCATION ===== */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Location</h2>
          <p className="text-grey-text text-lg mb-4">
            Our OH Centre is located in Ongar, Essex — easily accessible from
            London, Brentwood, Chelmsford, and the wider South East.
          </p>
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="font-semibold mb-2">Meditest Screening OH Centre</p>
            <p className="text-grey-text">Stondon Road, Ongar, Essex, CM5 9RG</p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            Book your railway medical screening today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Book a Screening
          </Link>
        </div>
      </section>
    </>
  );
}
