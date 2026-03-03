"use client";

import { useState } from "react";

const serviceOptions = [
  "Network Rail (PTS) Medical",
  "Network Rail (PTS) D&A",
  "Network Rail (PTS) Medical and D&A together",
  "London Underground D&A",
  "Safety Critical Medical",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    sentinelNo: "",
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleServiceToggle(service: string) {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xpqjvzjk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          sentinelNo: formData.sentinelNo || "N/A",
          services: formData.services.join(", "),
          message: formData.message || "N/A",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us on 07786 136470.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us on 07786 136470.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact &amp; Book</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to book a screening? Fill in the form below and we&apos;ll get
            back to you to arrange your appointment.
          </p>
        </div>
      </section>

      {/* ===== FORM + CONTACT DETAILS ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Enquiry Form (takes 2 columns) */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Screening Enquiry Form</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">&#9989;</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Enquiry Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for your enquiry. We&apos;ll get back to you as soon
                    as possible to arrange your appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-accent hover:text-accent-hover font-medium"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label htmlFor="mobile" className="block font-medium mb-2">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      required
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="07xxx xxxxxx"
                    />
                  </div>

                  {/* Sentinel No */}
                  <div>
                    <label htmlFor="sentinelNo" className="block font-medium mb-2">
                      Sentinel No{" "}
                      <span className="text-grey-text font-normal">(if you have one)</span>
                    </label>
                    <input
                      type="text"
                      id="sentinelNo"
                      value={formData.sentinelNo}
                      onChange={(e) =>
                        setFormData({ ...formData, sentinelNo: e.target.value })
                      }
                      className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your Sentinel number"
                    />
                  </div>

                  {/* Service checkboxes */}
                  <div>
                    <p className="font-medium mb-3">
                      What service do you need?{" "}
                      <span className="text-red-500">*</span>
                    </p>
                    <div className="space-y-3">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-5 h-5 rounded border-border text-accent focus:ring-accent"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional message */}
                  <div>
                    <label htmlFor="message" className="block font-medium mb-2">
                      Additional Message{" "}
                      <span className="text-grey-text font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical"
                      placeholder="Anything else you'd like us to know..."
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                      {error}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-accent hover:bg-accent-hover disabled:bg-gray-400 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    {submitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details sidebar */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="bg-light-bg rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:07786136470"
                    className="text-accent hover:text-accent-hover text-lg"
                  >
                    07786 136470
                  </a>
                </div>

                <div className="bg-light-bg rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:claire.lim@meditestscreening.com"
                    className="text-accent hover:text-accent-hover break-all"
                  >
                    claire.lim@meditestscreening.com
                  </a>
                </div>

                <div className="bg-light-bg rounded-xl p-6">
                  <h3 className="font-semibold mb-2">OH Centre</h3>
                  <p className="text-grey-text">
                    Meditest Screening
                    <br />
                    Stondon Road
                    <br />
                    Ongar, Essex
                    <br />
                    CM5 9RG
                  </p>
                </div>

                <div className="bg-light-bg rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Correspondence Address</h3>
                  <p className="text-grey-text">
                    3 Bellhouse Lane
                    <br />
                    Brentwood, Essex
                    <br />
                    CM14 5PP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
