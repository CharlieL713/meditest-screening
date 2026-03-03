import Link from "next/link";

export const metadata = {
  title: "Services | Meditest Screening",
  description:
    "Railway medical screening services including PTS medicals, drug & alcohol testing, and safety critical medicals for Network Rail and London Underground.",
};

const services = [
  {
    id: "pts-medical",
    title: "Network Rail (PTS) Medical",
    description:
      "A comprehensive medical assessment required for anyone who needs Personal Track Safety (PTS) certification to work on or near the railway.",
    includes: [
      "General health questionnaire and review",
      "Vision assessment (distance and near vision, colour vision)",
      "Audiometry (hearing test)",
      "Mobility and musculoskeletal assessment",
      "Blood pressure and BMI check",
      "Urinalysis",
    ],
    duration: "Approximately 30-45 minutes",
    whoNeeds:
      "Anyone applying for or renewing their PTS certification to work trackside on the Network Rail infrastructure.",
  },
  {
    id: "pts-da",
    title: "Network Rail (PTS) Drug & Alcohol Testing",
    description:
      "Drug and alcohol screening as required for PTS certification. We provide reliable, fully compliant testing with fast turnaround on results.",
    includes: [
      "Urine sample collection for drug screening",
      "Breath alcohol test",
      "Chain of custody documentation",
      "Results reported to the appropriate authority",
    ],
    duration: "Approximately 15-20 minutes",
    whoNeeds:
      "Anyone requiring drug and alcohol clearance as part of their PTS certification or as part of random/for-cause testing programmes.",
  },
  {
    id: "pts-combined",
    title: "Network Rail (PTS) Medical and D&A Together",
    description:
      "Save time by combining your PTS medical and drug & alcohol test into a single appointment. This is the most popular option for new PTS applications.",
    includes: [
      "Everything included in the PTS Medical",
      "Everything included in the PTS Drug & Alcohol Test",
      "Single appointment — no need to visit twice",
    ],
    duration: "Approximately 45-60 minutes",
    whoNeeds:
      "Anyone who needs both a medical and D&A test for their PTS certification — recommended for new applications.",
  },
  {
    id: "lu-da",
    title: "London Underground Drug & Alcohol Testing",
    description:
      "Drug and alcohol screening specific to London Underground requirements. We ensure full compliance with TfL standards.",
    includes: [
      "Urine sample collection for drug screening",
      "Breath alcohol test",
      "Chain of custody documentation",
      "Results reported in line with TfL/LU requirements",
    ],
    duration: "Approximately 15-20 minutes",
    whoNeeds:
      "London Underground staff and contractors who require drug and alcohol clearance.",
  },
  {
    id: "safety-critical",
    title: "Safety Critical Medical",
    description:
      "A thorough fitness-to-work medical assessment for workers in safety critical roles on the railway. This ensures individuals are medically fit to carry out their duties safely.",
    includes: [
      "Comprehensive health questionnaire and review",
      "Vision assessment including colour vision",
      "Audiometry (hearing test)",
      "Cardiovascular assessment",
      "Musculoskeletal and mobility checks",
      "Blood pressure, BMI, and urinalysis",
      "Mental health and cognitive assessment",
    ],
    duration: "Approximately 45-60 minutes",
    whoNeeds:
      "Workers in safety critical roles such as signallers, train drivers, track workers, and other roles where health directly impacts safety.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We provide a full range of railway medical screening and drug &amp;
            alcohol testing services, all fully RISQS accredited.
          </p>
        </div>
      </section>

      {/* ===== SERVICE SECTIONS ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`rounded-xl p-8 ${
                index % 2 === 0 ? "bg-light-bg" : "bg-white border border-border"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-grey-text mb-6">{service.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">What&apos;s included:</h3>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">&#10003;</span>
                      <span className="text-grey-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="bg-white rounded-lg px-4 py-3 border border-border">
                  <strong>Duration:</strong>{" "}
                  <span className="text-grey-text">{service.duration}</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-3 border border-border flex-1">
                  <strong>Who needs this:</strong>{" "}
                  <span className="text-grey-text">{service.whoNeeds}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            Get in touch and we&apos;ll help you work out exactly what&apos;s required.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
