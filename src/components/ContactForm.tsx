"use client";

import { useState, FormEvent } from "react";

// Replace with your Formspree endpoint: https://formspree.io/
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get a Quote
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Request a Free Quote
          </h2>
          <p className="text-gray-500 text-lg">
            Fill out the form and we&apos;ll call or text you back within 30 minutes
            during business hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-extrabold text-emerald-800 mb-2">
              Got it! We&apos;ll be in touch soon.
            </h3>
            <p className="text-emerald-600">
              Expect a call or text within 30 minutes during business hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(510) 555-0100"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Property Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="123 Main St, Hayward, CA 94541"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">Select a service...</option>
                <option value="move-out">Move-Out Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Bedrooms, bathrooms, move-out date, special requests..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                Something went wrong. Please call us directly instead.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-extrabold py-4 px-8 rounded-xl text-lg transition-colors duration-200 shadow-md"
            >
              {status === "sending" ? "Sending..." : "Get My Free Quote →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              We respect your privacy. No spam — ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
