import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const principles = [
  {
    title: "Sprint-Based Execution",
    text: "We split large goals into short, focused sprints so each cycle delivers measurable business value.",
  },
  {
    title: "Fast Feedback Loops",
    text: "Client reviews happen early and often, reducing rework and keeping delivery aligned with evolving requirements.",
  },
  {
    title: "Continuous Improvement",
    text: "Each sprint retrospective improves process quality, communication, and delivery speed for the next cycle.",
  },
  {
    title: "Transparent Progress",
    text: "Clear milestones, demos, and priorities ensure all stakeholders see what is built and what is next.",
  },
] as const;

const workflow = [
  "Requirement Breakdown",
  "Sprint Planning",
  "Design + Development",
  "QA + Client Demo",
  "Release + Retrospective",
] as const;

const outcomes = [
  "Reduced project turnaround time through smaller release cycles",
  "Lower dependency on manual handoffs with defined sprint ownership",
  "Improved quality via continuous QA and early bug detection",
  "Faster decision-making through weekly stakeholder syncs",
] as const;

export default function AgileMindsetPage() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f4f8fd] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#052659]">
              Agile Mindset
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">How OryenSolutions Delivers Faster With Agile</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              At OryenSolutions, agile is not just a development process. It is how we structure collaboration, reduce delivery risk,
              and improve workflow speed across web, SaaS, CRM, and BIM automation projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Faster Iteration", "Less Rework", "Higher Visibility"].map((item) => (
                <span key={item} className="rounded-full border border-[#7DA0CA]/55 bg-white px-4 py-2 text-sm font-semibold text-[#052659]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white/90 p-4 shadow-[0_12px_30px_rgba(84,131,179,0.14)]">
            <Image src="/Assets/Agile.jpg" alt="Oryen Solutions" width={1320} height={752} className="h-auto w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Agile Principles In Practice</h2>
            <p className="mt-4 text-lg text-slate-600">
              We apply agile practices to improve project clarity, reduce delays, and accelerate value delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-6 shadow-[0_8px_24px_rgba(84,131,179,0.1)]">
                <p className="text-lg font-semibold text-[#021024]">{item.title}</p>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fcff] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-7 shadow-[0_10px_26px_rgba(84,131,179,0.12)]">
              <h3 className="text-2xl font-bold">Workflow Model We Use</h3>
              <p className="mt-3 text-slate-600">
                Our workflow is designed to maintain momentum, keep priorities visible, and ship meaningful improvements continuously.
              </p>
              <ol className="mt-6 space-y-3">
                {workflow.map((step, idx) => (
                  <li key={step} className="flex items-center gap-3 rounded-xl border border-[#7DA0CA]/25 bg-[#f8fcff] px-4 py-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e3f1ff] text-sm font-bold text-[#052659]">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-7 shadow-[0_10px_26px_rgba(84,131,179,0.12)]">
              <h3 className="text-2xl font-bold">How This Reduces Time</h3>
              <p className="mt-3 text-slate-600">
                We remove bottlenecks by validating early, shipping in increments, and continuously syncing product decisions with business goals.
              </p>
              <ul className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="rounded-xl border border-[#7DA0CA]/25 bg-[#f8fcff] px-4 py-3 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
