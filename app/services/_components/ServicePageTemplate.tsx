import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type ServicePageTemplateProps = {
  badge: string;
  title: string;
  description: string;
  heroImage: string;
  highlights: readonly string[];
  capabilities: readonly string[];
  outcomes: readonly string[];
};

export function ServicePageTemplate({
  badge,
  title,
  description,
  heroImage,
  highlights,
  capabilities,
  outcomes,
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f4f8fd] py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(84,131,179,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(84,131,179,0.1)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#052659]">
              {badge}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-[#7DA0CA]/45 bg-white px-3 py-1.5 text-sm font-semibold text-[#052659]">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-5 shadow-[0_12px_30px_rgba(84,131,179,0.14)]">
            <Image src={heroImage} alt={title} width={640} height={420} className="h-auto w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-[#7DA0CA]/35 bg-[#f8fcff] p-7 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
            <h2 className="text-2xl font-bold">Capabilities</h2>
            <ul className="mt-5 space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="rounded-xl border border-[#7DA0CA]/25 bg-white px-4 py-3 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#7DA0CA]/35 bg-white p-6 shadow-[0_10px_24px_rgba(84,131,179,0.1)]">
              <h3 className="text-xl font-semibold">Business Outcomes</h3>
              <ul className="mt-4 space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="rounded-xl border border-[#7DA0CA]/25 bg-[#f8fcff] px-3 py-2 text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#7DA0CA]/30 bg-white p-4">
                <Image src="/window.svg" alt="Service visual 1" width={72} height={72} className="h-14 w-14" />
                <p className="mt-3 text-sm font-semibold text-[#052659]">Execution Visibility</p>
              </div>
              <div className="rounded-2xl border border-[#7DA0CA]/30 bg-white p-4">
                <Image src="/globe.svg" alt="Service visual 2" width={72} height={72} className="h-14 w-14" />
                <p className="mt-3 text-sm font-semibold text-[#052659]">Scalable Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
