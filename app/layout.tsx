import type { Metadata } from "next";
import { Roboto_Mono, Rubik } from "next/font/google";
import { StructuredData } from "@/components/seo/StructuredData";
import { organizationSchema, siteConfig, websiteSchema } from "@/lib/site";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "OryenSolutions | Web Development, BIM Automation & Custom Software",
    template: "%s | OryenSolutions",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "OryenSolutions | Web Development, BIM Automation & Custom Software",
    description: siteConfig.description,
    images: [
      {
        url: "/Assets/Oryen_Solutions.png",
        width: 1320,
        height: 752,
        alt: "Oryen Solutions logo and brand graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OryenSolutions | Web Development, BIM Automation & Custom Software",
    description: siteConfig.description,
    images: ["/Assets/Oryen_Solutions.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico" }],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${robotoMono.variable} antialiased`}>
        <StructuredData data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
