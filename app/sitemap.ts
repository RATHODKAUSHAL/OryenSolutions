import type { MetadataRoute } from "next";

import { routes, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}${routes.about}`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}${routes.agileMindset}`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${siteConfig.url}${routes.careers}`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}${routes.contact}`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}${routes.servicesBim}`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}${routes.servicesWeb}`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}${routes.servicesAutomation}`, lastModified, changeFrequency: "monthly", priority: 0.85 },
  ];
}
