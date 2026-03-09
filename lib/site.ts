import type { Metadata } from "next";

export const siteConfig = {
  name: "OryenSolutions",
  legalName: "Oryen Solutions",
  description:
    "Oryen Solutions builds web development, SaaS, CRM, BIM automation, and custom integration solutions for businesses that need faster, more reliable delivery.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.oryensolutions.com",
  email: "info@oryensolutions.com",
  phone: "+91 92658 85370",
  addressLocality: "Ahmedabad",
  addressRegion: "Gujarat",
  addressCountry: "IN",
  socialLinks: [
    "https://www.instagram.com/oryensolutions/",
    "https://www.linkedin.com/company/oryen-solutions/about/",
  ],
  keywords: [
    "web development company",
    "BIM automation services",
    "Tekla custom development",
    "SaaS development company",
    "CRM development",
    "software integration services",
    "Ahmedabad software company",
  ] as string[],
} as const;

export const routes = {
  home: "/",
  about: "/about",
  agileMindset: "/agile-mindset",
  careers: "/careers",
  contact: "/contact-us",
  servicesWeb: "/services/web-development-digital-solutions",
  servicesAutomation: "/services/software-integration-custom-automation",
  servicesBim: "/services/bim-automation-tekla-custom-development",
} as const;

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function buildMetadata({ title, description, path, keywords = [], image = "/Assets/Oryen_Solutions.png" }: MetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteUrl(image),
          width: 1320,
          height: 752,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function breadcrumbList(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/Assets/Oryen_Solutions.png"),
    image: absoluteUrl("/Assets/Oryen_Solutions.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.addressCountry,
    },
    sameAs: siteConfig.socialLinks,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };
}

export function faqSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
  };
}

export function articleSchema({
  headline,
  description,
  path,
  image = "/Assets/Agile.jpg",
}: {
  headline: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/Assets/Oryen_Solutions.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(path),
  };
}
