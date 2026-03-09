import type { Metadata } from "next";

import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";
import { buildMetadata, routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Web Development & Digital Solutions",
  description:
    "Custom web development, SaaS engineering, CRM implementation, and SEO-ready digital platforms built by OryenSolutions.",
  path: routes.servicesWeb,
  keywords: ["Next.js development services", "SaaS development company", "custom CRM development"],
  image: "/Assets/Web Development & Digital Solutions.png",
});

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Web & Digital Services"
      slug={routes.servicesWeb}
      title="Web Development & Digital Solutions"
      description="From business websites to full SaaS products, we build modern digital platforms focused on performance, UX quality, and scalable architecture."
      heroImage="/Assets/Web Development & Digital Solutions.png"
      highlights={["Next.js & React", "SaaS Platforms", "Modern UX"]}
      capabilities={[
        "Custom website and web app development",
        "SaaS product engineering from MVP to scale",
        "CRM and dashboard implementation",
        "Frontend performance optimization",
        "SEO-ready architecture and content structure",
      ]}
      outcomes={[
        "Faster feature rollout cycles",
        "Improved user retention and engagement",
        "Better conversion through cleaner UX flows",
        "Reliable and scalable long-term architecture",
      ]}
      faqs={[
        {
          question: "What does OryenSolutions build in web development projects?",
          answer:
            "OryenSolutions builds business websites, SaaS platforms, dashboards, portals, CRM systems, and custom web applications with a focus on performance and maintainability.",
        },
        {
          question: "How do you make websites SEO-ready?",
          answer:
            "The team uses semantic HTML, structured metadata, optimized images, clear content architecture, and a scalable Next.js foundation that supports strong technical SEO.",
        },
      ]}
    />
  );
}
