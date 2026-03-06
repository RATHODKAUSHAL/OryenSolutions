"use client";

import { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Founded", value: 2024, suffix: "" },
  { label: "Projects", value: 50, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
] as const;

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      requestAnimationFrame(() => setCount(value));
      return;
    }

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const duration = 2000;
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(value * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-[var(--gray-100)] p-8 text-center">
      <p className="text-5xl font-bold text-[var(--primary-dark)]">{count}{suffix}</p>
      <p className="mt-2 text-[var(--text-body)]">{label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="label-font rounded-full border border-[#7DA0CA]/70 bg-[#eaf4fd] px-4 py-1 uppercase tracking-[0.14em] text-[var(--primary)]">By The Numbers</Badge>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}
