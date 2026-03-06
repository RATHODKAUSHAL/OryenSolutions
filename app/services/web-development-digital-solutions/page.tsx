import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Web & Digital Services"
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
    />
  );
}
