import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { DualSectorSection } from "@/components/sections/DualSectorSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

const agilePractices = [
  {
    title: "Daily Alignment",
    text: "Short daily syncs help engineers, designers, and stakeholders remove blockers quickly and keep priorities aligned.",
    image: "/globe.svg",
  },
  {
    title: "Sprint Reviews",
    text: "Weekly demos validate outcomes early so we can refine scope fast and avoid late-stage rework.",
    image: "/window.svg",
  },
  {
    title: "Iteration Planning",
    text: "Each iteration turns feedback into actionable tasks, helping teams improve workflow quality release after release.",
    image: "/next.svg",
  },
] as const;

const impact = [
  "Reduced delivery time by replacing big-bang releases with short sprint cycles",
  "Lower risk through frequent validation and early issue detection",
  "Higher transparency across planning, development, and stakeholder communication",
  "Improved team efficiency through better prioritization and decision velocity",
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f4f8fd] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#052659]">
              About Us
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Building Better Workflows Through Agile Engineering</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              OryenSolutions combines agile software delivery with deep engineering domain understanding. Our approach improves workflow visibility,
              reduces manual effort, and helps clients deliver faster with confidence.
            </p>
          </div>
          <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-5 shadow-[0_12px_30px_rgba(84,131,179,0.14)]">
            <Image src="/Assets/Oryen_Solutions.png" alt="Oryen Solutions" width={1320} height={752} className="h-auto w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How We Use Agile to Reduce Time</h2>
            <p className="mt-4 text-lg text-slate-600">
              We apply agile methods in practical ways to improve execution speed and reduce workflow friction for every project.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {agilePractices.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-6 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7DA0CA]/35 bg-white">
                  <Image src={item.image} alt={item.title} width={32} height={32} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-7 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
            <h3 className="text-2xl font-semibold">What This Means for Client Workflows</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {impact.map((item) => (
                <li key={item} className="rounded-xl border border-[#7DA0CA]/25 bg-white px-4 py-3 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DualSectorSection />
      <ProcessSection />
      <IntegrationsSection />
      <Footer />
    </main>
  );
}
