"use client";

import { useState, FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const serviceOptions = [
  { value: "", label: "Select a service (optional)" },
  { value: "airport-transfer", label: "Airport Transfer" },
  { value: "hotel-transfer", label: "Hotel Transfer" },
  { value: "custom-tour", label: "Custom Day Tour" },
  { value: "group-trip", label: "Group / Family Trip" },
  { value: "corporate", label: "Corporate Transport" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#009688] transition";

  return (
    <section id="contact" className="bg-[#f8f8f8] py-20">
      <div className="text-center pb-12">
        <p className="inline-block text-xl font-bold text-[#009688] relative z-10 after:content-[''] after:absolute after:w-[50px] after:h-[35px] after:bg-gradient-to-b after:from-[#019587] after:to-white after:-top-5 after:left-0 after:-z-10 after:rotate-[10deg] after:rounded-tl-[35px] after:rounded-br-[35px]">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Get a Quote / Contact Us
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto px-4">
          Fill in the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="w-[90%] max-w-[600px] mx-auto">
        {status === "success" && (
          <div
            role="alert"
            className="mb-6 rounded-lg bg-green-50 border border-green-300 p-4 text-green-800 text-center"
          >
            ✅ Thank you! Your message has been sent. We&apos;ll be in touch soon.
          </div>
        )}
        {status === "error" && (
          <div
            role="alert"
            className="mb-6 rounded-lg bg-red-50 border border-red-300 p-4 text-red-800 text-center"
          >
            ❌ Something went wrong. Please try again or email us directly at{" "}
            <a href="mailto:ShaanWocker@gmail.com" className="underline">
              ShaanWocker@gmail.com
            </a>
            .
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
              className={`${inputClass} ${errors.name ? "border-red-400" : "border-gray-300"}`}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
              className={`${inputClass} ${errors.email ? "border-red-400" : "border-gray-300"}`}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+27 71 234 5678"
              value={form.phone}
              onChange={handleChange}
              className={`${inputClass} border-gray-300`}
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-1">
              Service Type <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${inputClass} border-gray-300 bg-white`}
            >
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message / Pickup Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us where you're travelling from, destination, date, number of passengers..."
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none ${errors.message ? "border-red-400" : "border-gray-300"}`}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-[#009688] text-white text-lg font-semibold rounded-lg hover:bg-[#00766c] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
