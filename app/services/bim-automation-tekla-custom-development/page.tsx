import type { Metadata } from "next";

import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";
import { buildMetadata, routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "BIM Automation & Tekla Custom Development",
  description:
    "Improve structural engineering workflows with BIM automation, Tekla custom development, drawing automation, and reporting tools from OryenSolutions.",
  path: routes.servicesBim,
  keywords: ["Tekla custom development", "BIM automation company", "drawing automation services"],
  image: "/Assets/BIM & Tekla Services.png",
});

export default function BimAutomationPage() {
  return (
    <ServicePageTemplate
      badge="BIM & Tekla Services"
      slug={routes.servicesBim}
      title="BIM Automation & Tekla Custom Development"
      description="We build custom Tekla tools and BIM automation workflows to reduce manual effort, improve model consistency, and accelerate engineering delivery."
      heroImage="/Assets/BIM & Tekla Services.png"
      highlights={["Tekla Open API", "Drawing Automation", "Faster Detailing"]}
      capabilities={[
        "Custom Tekla plugin and macro development",
        "Automated drawing creation and sheet generation",
        "BOM and reporting customization",
        "Tekla + Excel workflow automation",
        "Model validation and rule-based checks",
      ]}
      outcomes={[
        "Reduced repetitive drafting time",
        "Improved detail accuracy and consistency",
        "Faster issue resolution in project cycles",
        "Higher visibility in structural deliverables",
      ]}
      faqs={[
        {
          question: "What is BIM automation in Tekla workflows?",
          answer:
            "BIM automation in Tekla workflows uses custom tools, plugins, and rules to reduce repetitive modeling, drawing, and reporting tasks across structural engineering projects.",
        },
        {
          question: "How does Tekla custom development help engineering teams?",
          answer:
            "Tekla custom development improves consistency, shortens detailing time, reduces manual errors, and gives teams better control over recurring engineering workflows.",
        },
      ]}
    />
  );
}
