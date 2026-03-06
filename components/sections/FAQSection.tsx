"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    category: "it",
    q: "What technologies do you specialize in for web development?",
    a: "We specialize in React, Next.js, Node.js, TypeScript, Python, and cloud platforms including AWS, GCP, and Vercel.",
  },
  {
    category: "bim",
    q: "How does Tekla API automation benefit structural engineering projects?",
    a: "It automates drawing generation, BOM reporting, and repetitive workflows to reduce errors and accelerate delivery.",
  },
  {
    category: "it",
    q: "Do you develop SaaS products from scratch?",
    a: "Yes, from MVP to market-ready products with architecture, billing integration, and analytics dashboards.",
  },
  {
    category: "it",
    q: "Can you build a custom CRM for my business?",
    a: "Yes, we build tailored CRM systems with lead management, automation, and integrations.",
  },
  {
    category: "bim",
    q: "What is your typical project timeline and process?",
    a: "We follow Agile sprints, and most projects run between 4 to 12 weeks depending on scope.",
  },
  {
    category: "it",
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes, including monitoring, updates, security patches, and ongoing optimization.",
  },
] as const;

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);
  const [category, setCategory] = useState<"bim" | "it">("bim");
  const filteredFaqs = faqs.filter((f) => f.category === category);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Frequently Asked Questions</p>
        <h2 className="mt-4 text-center text-4xl font-bold tracking-tight text-[#021024]">Got Questions? We Have Answers</h2>
        </div>

        <div className="mx-auto mt-8 flex w-fit rounded-full border border-[#7DA0CA]/40 bg-[#f8fcff] p-1">
          <button
            type="button"
            onClick={() => {
              setCategory("bim");
              setOpen(null);
            }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              category === "bim" ? "bg-[#052659] text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            BIM & Tekla
          </button>
          <button
            type="button"
            onClick={() => {
              setCategory("it");
              setOpen(null);
            }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              category === "it" ? "bg-[#052659] text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            IT & Web Dev
          </button>
        </div>

        <div className="mt-10 space-y-3">
          {filteredFaqs.map((item, i) => {
            const key = `${category}-${i}`;
            const isOpen = open === key;
            return (
              <div key={item.q} className={`rounded-2xl border border-[#7DA0CA]/45 ${i % 2 === 0 ? "bg-[#f8fcff]" : "bg-white"}`}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-slate-900"
                  onClick={() => setOpen(isOpen ? null : key)}
                >
                  {item.q}
                  <span>{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen && <p className="px-5 pb-4 text-[var(--text-body)]">{item.a}</p>}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/contact-us">
          <Button className="h-12 rounded-2xl cursor-pointer bg-[#0077b6] px-8 text-white hover:bg-[#005f92]">Still have questions? Talk to us -&gt;</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
