import { ServicePageTemplate } from "@/app/services/_components/ServicePageTemplate";

export default function BimAutomationPage() {
  return (
    <ServicePageTemplate
      badge="BIM & Tekla Services"
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
    />
  );
}
