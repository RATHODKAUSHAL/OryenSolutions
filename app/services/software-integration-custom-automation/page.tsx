import type { Metadata } from "next";

import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";
import { buildMetadata, routes } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Software Integration & Custom Automation",
  description:
    "Connect business systems, automate manual workflows, and improve operational control with OryenSolutions integration and automation services.",
  path: routes.servicesAutomation,
  keywords: ["API integration services", "workflow automation company", "custom software integration"],
  image: "/Assets/Web Development & Digital Solutions.png",
});

export default function SoftwareIntegrationPage() {
  return (
    <ServicePageTemplate
      badge="Integration Services"
      slug={routes.servicesAutomation}
      title="Software Integration & Custom Automation"
      description="We connect your business tools, remove repetitive manual handoffs, and create automation pipelines that improve speed, accuracy, and operational control."
      heroImage="/Assets/Web Development & Digital Solutions.png"
      highlights={["API Integrations", "Automation Pipelines", "Workflow Sync"]}
      capabilities={[
        "Third-party API integrations and middleware",
        "Cross-system data sync and transformation",
        "Custom process automation scripts/services",
        "Notification and workflow orchestration",
        "Reporting and dashboard data consolidation",
      ]}
      outcomes={[
        "Reduced manual operational workload",
        "Lower integration errors and duplicated effort",
        "Improved process visibility across teams",
        "Higher execution speed with connected systems",
      ]}
      faqs={[
        {
          question: "What kinds of systems can OryenSolutions integrate?",
          answer:
            "OryenSolutions can integrate CRM platforms, payment systems, internal dashboards, spreadsheets, reporting tools, and third-party APIs used in day-to-day operations.",
        },
        {
          question: "Why invest in custom automation?",
          answer:
            "Custom automation reduces repetitive manual work, improves data consistency, and helps teams move faster with fewer operational bottlenecks.",
        },
      ]}
    />
  );
}
