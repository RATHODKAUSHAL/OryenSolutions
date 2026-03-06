"use client";

import { useState } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const res = await fetch("/api/contact-submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (res.ok) {
      form.reset();
      setStatus("Thank you. Your inquiry has been submitted.");
      return;
    }
    setStatus("Submission failed. Please try again.");
  }

  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f4f8fd] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#052659]">
              Contact Us
            </p>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">Let&apos;s Discuss Your Project</h1>
            <p className="mt-4 text-lg text-slate-600">
              Reach out to OryenSolutions for web development, BIM automation, CRM, SaaS, and integration solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-7 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-3 text-slate-600">Share your requirements and our team will connect with you to plan the right solution.</p>

            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="rounded-xl border border-[#7DA0CA]/30 bg-white px-4 py-3">
                <p className="font-semibold text-[#052659]">Email</p>
                <p className="mt-1">info@oryensolutions.com</p>
              </div>
              <div className="rounded-xl border border-[#7DA0CA]/30 bg-white px-4 py-3">
                <p className="font-semibold text-[#052659]">Phone</p>
                <p className="mt-1">+91 92658 85370</p>
              </div>
              <div className="rounded-xl border border-[#7DA0CA]/30 bg-white px-4 py-3">
                <p className="font-semibold text-[#052659]">Location</p>
                <p className="mt-1">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-7 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="fullName" placeholder="Full Name" required className="h-11 rounded-xl border-[#7DA0CA]/40 bg-[#f8fcff]" />
                <Input name="companyName" placeholder="Company Name" className="h-11 rounded-xl border-[#7DA0CA]/40 bg-[#f8fcff]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="email" type="email" required placeholder="Email Address" className="h-11 rounded-xl border-[#7DA0CA]/40 bg-[#f8fcff]" />
                <Input name="phone" placeholder="Phone Number" className="h-11 rounded-xl border-[#7DA0CA]/40 bg-[#f8fcff]" />
              </div>
              <Input name="subject" placeholder="Subject" className="h-11 rounded-xl border-[#7DA0CA]/40 bg-[#f8fcff]" />
              <textarea
                name="message"
                required
                placeholder="Tell us about your project requirements..."
                className="min-h-32 w-full rounded-xl border border-[#7DA0CA]/40 bg-[#f8fcff] px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-[#5483B3]"
              />
              <Button disabled={loading} type="submit" className="h-11 rounded-xl bg-[#0077b6] px-6 text-white hover:bg-[#005f92]">
                {loading ? "Submitting..." : "Submit Inquiry"}
              </Button>
              {status && <p className="text-sm text-slate-600">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
