import Link from "next/link";

import { LogoImage } from "@/components/ui/logo-image";

const logosRow1 = [
  { name: "Microsoft Excel", short: "XL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg" },
  { name: "ChatGPT", short: "AI", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
  { name: "PayPal", short: "PP", logo: "https://cdn.simpleicons.org/paypal/00457C" },
  { name: "Google Drive", short: "GD", logo: "https://cdn.simpleicons.org/googledrive/4285F4" },
  { name: "Claude", short: "CL", logo: "https://cdn.simpleicons.org/claude/D97757" },
  { name: "AngularJS", short: "NG", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg" },
  { name: "Node.js", short: "ND", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "PostgreSQL", short: "PG", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
] as const;

const logosRow2 = [
  { name: "Figma", short: "FG", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Next.js", short: "NX", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "CAD", short: "CD", logo: "https://cdn.simpleicons.org/autocad/E51050" },
  { name: "React", short: "RC", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "MySQL", short: "MY", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "JavaScript", short: "JS", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "MongoDB", short: "MG", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Google Analytics", short: "GA", logo: "https://cdn.simpleicons.org/googleanalytics/E37400" },
  { name: "Stripe Payments", short: "SP", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Autodesk", short: "AD", logo: "https://cdn.simpleicons.org/autodesk/0696D7" },
] as const;

function LogoRow({ items, reverse = false }: { items: readonly { name: string; short: string; logo: string }[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`marquee-wrap flex w-[200%] gap-4 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {doubled.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex min-w-[140px] items-center gap-3 rounded-3xl border border-[#7DA0CA]/45 bg-white p-5 shadow-[0_6px_16px_rgba(84,131,179,0.14)] sm:min-w-[170px] sm:p-6"
          >
            <LogoImage name={item.name} short={item.short} logo={item.logo} />
            <span className="text-sm font-semibold text-[#052659]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-grid rounded-3xl border border-[#7DA0CA]/40 bg-[#f8fcff] px-6 py-14 text-[#021024] sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-[#7DA0CA]/70 bg-white px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--primary)]">Integrations</p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight">Don&apos;t replace. Integrate.</h2>
            <p className="mt-4 text-[#052659]/80">We understand the hassle of replacing tools your team already uses. That&apos;s why our solutions integrate with the platforms you rely on daily.</p>
            <Link href="/services/software-integration-custom-automation" className="mt-6 inline-block text-sm font-semibold text-[#5483B3] underline underline-offset-4 hover:text-[#052659]">
              Explore integration services
            </Link>
          </div>

          <div className="mt-10 space-y-4">
            <LogoRow items={logosRow1} />
            <LogoRow items={logosRow2} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
