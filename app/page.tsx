import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { DualSectorSection } from "@/components/sections/DualSectorSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { breadcrumbList, buildMetadata, faqSchema, routes, serviceSchema } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Web Development, BIM Automation & Custom Software Services",
  description:
    "OryenSolutions delivers web development, SaaS, CRM, BIM automation, and software integration services for businesses that need faster delivery and scalable systems.",
  path: routes.home,
  keywords: ["custom software development", "Tekla automation company", "software integration company"],
});

const homeFaqs = [
  {
    question: "What services does OryenSolutions provide?",
    answer:
      "OryenSolutions provides web development, SaaS product engineering, CRM development, BIM automation, Tekla custom development, and software integration services for growing businesses and engineering teams.",
  },
  {
    question: "How does OryenSolutions improve delivery speed?",
    answer:
      "The team uses agile delivery, structured discovery, focused sprint execution, and automation-first workflows to reduce manual work, shorten release cycles, and improve project visibility.",
  },
  {
    question: "Who should work with OryenSolutions?",
    answer:
      "OryenSolutions is a strong fit for businesses that need custom digital products, integration support, or BIM workflow automation with a practical, engineering-led delivery process.",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[var(--text-heading)]">
      <StructuredData
        data={[
          breadcrumbList([{ name: "Home", path: routes.home }]),
          faqSchema([...homeFaqs]),
          serviceSchema({
            name: "Web Development & Digital Solutions",
            description: "Custom websites, SaaS products, CRM systems, and scalable web applications.",
            path: routes.servicesWeb,
            serviceType: "Web Development",
          }),
          serviceSchema({
            name: "BIM Automation & Tekla Custom Development",
            description: "Tekla automation, custom BIM workflows, and structural engineering productivity tooling.",
            path: routes.servicesBim,
            serviceType: "BIM Automation",
          }),
          serviceSchema({
            name: "Software Integration & Custom Automation",
            description: "Business system integrations, automation pipelines, and workflow orchestration.",
            path: routes.servicesAutomation,
            serviceType: "Software Integration",
          }),
        ]}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <StatsSection /> */}
      <DualSectorSection />
      <ServicesSection />
      <ProcessSection />
      {/* <FeaturesSection /> */}
      <IntegrationsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
