import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";

export default function SoftwareIntegrationPage() {
  return (
    <ServicePageTemplate
      badge="Integration Services"
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
    />
  );
}
