import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

const testimonials: readonly Testimonial[] = [
  {
    quote: "This ERP transformed our operations, reduced manual effort, and improved collaboration across teams.",
    name: "Briana Patton",
    role: "Operations Manager",
    company: "NorthGrid Logistics",
    image: "https://i.pravatar.cc/120?img=32",
  },
  {
    quote: "Implementation was smooth and the intuitive interface made onboarding easy for everyone.",
    name: "Bilal Ahmed",
    role: "IT Manager",
    company: "Nexora Systems",
    image: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote: "Support was exceptional from setup to go-live, with quick and clear responses throughout.",
    name: "Saman Malik",
    role: "Customer Support Lead",
    company: "BrightServe Solutions",
    image: "https://i.pravatar.cc/120?img=15",
  },
  {
    quote: "Seamless integrations and automation improved efficiency and gave us stronger control over workflows.",
    name: "Omar Raza",
    role: "CEO",
    company: "OptiFlow Tech",
    image: "https://i.pravatar.cc/120?img=56",
  },
  {
    quote: "Our business functions improved significantly with a user-friendly experience and better reporting.",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
    company: "Skyline Retail",
    image: "https://i.pravatar.cc/120?img=22",
  },
  {
    quote: "They delivered beyond expectations and understood exactly what our team needed.",
    name: "Sana Sheikh",
    role: "Sales Manager",
    company: "PrimeEdge Commerce",
    image: "https://i.pravatar.cc/120?img=47",
  },
  {
    quote: "Reliable features and fast support improved execution quality across multiple departments.",
    name: "Zainab Hussain",
    role: "Project Manager",
    company: "BuildAxis Infra",
    image: "https://i.pravatar.cc/120?img=25",
  },
  {
    quote: "Our online presence and conversion performance improved after the rollout.",
    name: "Hassan Ali",
    role: "Growth Lead",
    company: "LaunchBridge Digital",
    image: "https://i.pravatar.cc/120?img=53",
  },
  {
    quote: "The platform made day-to-day operations easier and gave leadership much better visibility.",
    name: "Aliza Khan",
    role: "Business Analyst",
    company: "MetricWave Consulting",
    image: "https://i.pravatar.cc/120?img=49",
  },
];

function chunk<T>(arr: readonly T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size) as T[]);
  return out;
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Card className="rounded-3xl border-[#7DA0CA]/30 bg-white/90 shadow-[0_8px_22px_rgba(84,131,179,0.12)]">
      <CardContent className="p-6">
        <p className="text-base leading-7 text-slate-700">{item.quote}</p>
        <div className="mt-5 flex items-center gap-3">
          <Image
            src={item.image}
            alt={`${item.name} profile`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-[#7DA0CA]/40 object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-sm font-semibold text-[#021024]">{item.name}</p>
            <p className="text-sm text-slate-500">{item.role}</p>
            <p className="text-xs font-medium text-[#052659]/70">{item.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const cols = chunk(testimonials, 3);

  return (
    <section className="relative overflow-hidden bg-[#f4f8fd] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">
            Testimonials
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#021024] sm:text-5xl">Trusted by Teams Across India</h2>
          <p className="mt-4 text-lg text-slate-500">Engineering firms, SaaS founders, and operations teams rely on Oryen Solutions to deliver.</p>
        </div>

        <div className="relative mt-14 h-[660px] overflow-hidden sm:h-[700px]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#f4f8fd] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#f4f8fd] to-transparent" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {cols.map((col, colIdx) => (
              <div key={colIdx} className="relative h-[660px] overflow-hidden sm:h-[700px]">
                <div
                  className={`testimonials-vertical-track flex flex-col gap-5 ${
                    colIdx === 1 ? "testimonials-vertical-track-slow" : colIdx === 2 ? "testimonials-vertical-track-fast" : ""
                  }`}
                >
                  {[...col, ...col].map((item, i) => (
                    <TestimonialCard key={`${item.name}-${i}`} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
