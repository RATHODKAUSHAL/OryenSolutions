"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

function StrengthIcon({ label }: { label: string }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#8eb8ff]/35 bg-[linear-gradient(180deg,#eff6ff_0%,#dbeafe_100%)] text-[#0b63ce] shadow-[0_12px_32px_rgba(11,99,206,0.16)] transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-0.5">
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="10" y="12" width="44" height="28" rx="3" />
        <path d="M25 25 19 31 25 37" />
        <path d="m39 25 6 6-6 6" />
        <path d="m35 22-6 18" />
        <path d="M24 48h16" />
        <path d="M32 40v8" />
        <circle cx="16" cy="18" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="21" cy="18" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="26" cy="18" r="1.2" fill="currentColor" stroke="none" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

const stats = [
  { value: 80, suffix: "%", label: "Reduction in drafting time", sublabel: "via automation" },
  { value: 12, suffix: "+", label: "Completed Projects", sublabel: "across India & globally" },
  { value: 24, suffix: "/7", label: "Support & monitoring", sublabel: "zero-downtime commitment" },
] as const;

const strengths = [
  {
    icon: "ST",
    title: "Skilled Team",
    text: "Specialized engineers and developers delivering consistent excellence across IT and structural engineering domains.",
    accent: "from-[#052659]/10 to-[#7DA0CA]/10",
    border: "border-[#7DA0CA]/30",
    glow: "group-hover:shadow-[0_8px_32px_rgba(84,131,179,0.22)]",
  },
  {
    icon: "AD",
    title: "Accurate Delivery",
    text: "Precision-driven development with strong process control, sprint-based Agile execution, and on-time project completion.",
    accent: "from-[#052659]/10 to-[#C8D9F0]/20",
    border: "border-[#052659]/20",
    glow: "group-hover:shadow-[0_8px_32px_rgba(5,38,89,0.18)]",
  },
  {
    icon: "TQ",
    title: "Trusted Quality",
    text: "Recognized for reliability and performance backed by enterprise-grade security practices and thorough QA.",
    accent: "from-[#7DA0CA]/10 to-[#C8D9F0]/20",
    border: "border-[#7DA0CA]/25",
    glow: "group-hover:shadow-[0_8px_32px_rgba(125,160,202,0.25)]",
  },
  {
    icon: "AT",
    title: "Advanced Technology",
    text: "React, Next.js, Node.js, Revit, Open API, and cloud-native platforms with modern, reliable tooling.",
    accent: "from-[#C8D9F0]/20 to-[#052659]/8",
    border: "border-[#C8D9F0]/50",
    glow: "group-hover:shadow-[0_8px_32px_rgba(200,217,240,0.4)]",
  },
  {
    icon: "24",
    title: "24/7 Support",
    text: "Continuous monitoring and responsive technical support to keep your business running without interruption.",
    accent: "from-[#052659]/12 to-[#7DA0CA]/12",
    border: "border-[#052659]/15",
    glow: "group-hover:shadow-[0_8px_32px_rgba(5,38,89,0.15)]",
  },
  {
    icon: "FL",
    title: "Founder-Led Projects",
    text: "You work directly with founders and senior engineers so your vision is understood and executed properly.",
    accent: "from-[#7DA0CA]/15 to-[#052659]/10",
    border: "border-[#7DA0CA]/30",
    glow: "group-hover:shadow-[0_8px_32px_rgba(84,131,179,0.20)]",
  },
] as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-[#f4f8fd] py-24 sm:py-32">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7DA0CA]/50 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#052659] backdrop-blur-sm">
          <p className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            About Oryen Solutions
          </p>
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#021024] sm:text-5xl">
            Built on Precision. <span className="text-[#052659]">Driven by Technology.</span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Oryen Solutions delivers modern digital products and Revit, BIM automation to reduce manual work,
            accelerate delivery, and help teams scale confidently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-5 shadow-[0_4px_24px_rgba(84,131,179,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(84,131,179,0.18)]"
            >
              <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-3xl bg-gradient-to-bl from-[#C8D9F0]/40 to-transparent" />

              <p className="text-3xl font-extrabold tracking-tight text-[#052659] sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-sm font-semibold text-slate-700">{s.label}</p>
              <p className="mt-0.5 text-[11px] text-slate-400">{s.sublabel}</p>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-[#052659] to-[#7DA0CA] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </motion.div>

        <div className="my-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7DA0CA]/30 to-transparent" />
          <span className="rounded-full border border-[#7DA0CA]/40 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
            Core Strengths
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#7DA0CA]/30 to-transparent" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
              whileHover={{ y: -8 }}
            >
              <Card
                className={`group relative h-full overflow-hidden rounded-[2rem] border bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(239,246,255,0.92)_100%)] p-5 backdrop-blur-md transition-all duration-300 ${s.border} ${s.glow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-70 ${s.accent}`} />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#bfdbfe] via-[#3b82f6] to-[#1d4ed8] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #052659 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <CardContent className="relative flex h-full min-h-[340px] flex-col gap-6 p-7">
                  <StrengthIcon label={s.title} />

                  <div className="max-w-[18rem]">
                    <h3 className="text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[#0f172a]">
                      {s.title}
                    </h3>
                  </div>

                  <div className="mt-auto max-w-[18rem]">
                    <p className="text-lg leading-8 text-slate-500">{s.text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
