import { Badge } from "@/components/ui/badge";

const logosRow1 = [
  { name: "Microsoft Excel", logo: "https://cdn.simpleicons.org/microsoftexcel" },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot" },
  { name: "PayPal", logo: "https://cdn.simpleicons.org/paypal" },
  { name: "Google Drive", logo: "https://cdn.simpleicons.org/googledrive" },
  { name: "Google Ads", logo: "https://cdn.simpleicons.org/googleads" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier" },
  { name: "Nodejs", logo: "https://cdn.simpleicons.org/node.js" },
] as const;

const logosRow2 = [
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Nextjs", logo: "https://cdn.simpleicons.org/next.js" },
  { name: "Asana", logo: "https://cdn.simpleicons.org/asana" },
  { name: "Reactjs", logo: "https://cdn.simpleicons.org/react" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify" },
  { name: "Javascript", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
  { name: "Revit", logo: "https://cdn.simpleicons.org/revit" },
] as const;

function LogoRow({ items, reverse = false }: { items: readonly { name: string; logo: string }[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`marquee-wrap flex w-[200%] gap-4 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {doubled.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex min-w-[140px] items-center justify-center rounded-3xl border border-[#7DA0CA]/45 bg-white p-5 shadow-[0_6px_16px_rgba(84,131,179,0.14)] sm:min-w-[170px] sm:p-6"
          >
            <img src={item.logo} alt={`${item.name} logo`} className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" loading="lazy" />
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
            <button type="button" className="mt-6 text-sm font-semibold text-[#5483B3] underline underline-offset-4 hover:text-[#052659]">All Integrations</button>
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
