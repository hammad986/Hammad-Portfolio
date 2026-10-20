import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const siteUrl = "https://hammad986.dpdns.org";
const personName = "Muhammed Hammad";
const handle = "hammad986";
const defaultTitle =
  "Muhammed Hammad (hammad986) | AI/ML Engineer and Full-Stack Developer";
const defaultDescription =
  "Portfolio of Muhammed Hammad, also known as hammad986. AI/ML engineer and full-stack developer building production generative AI platforms, retrieval and agent systems, and web applications. Projects, experience, and verified certifications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${personName} (${handle})`
  },
  description: defaultDescription,
  applicationName: "Muhammed Hammad Portfolio",
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  publisher: personName,
  category: "technology",
  keywords: [
    "hammad986",
    "hammad986 portfolio",
    "hammad986 github",
    "hammad986 huggingface",
    "hammad986 leetcode",
    "hammad986 linkedin",
    "hammad986.dpdns.org",
    "Muhammed Hammad",
    "Muhammed Hammad portfolio",
    "Muhammed Hammad S",
    "AI Engineer",
    "AI ML Engineer",
    "GenAI",
    "LLM",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Next.js",
    "React",
    "Full Stack Developer",
    "RAG",
    "AI Agents",
    "Portfolio",
    "Software Engineer",
    "Automation",
    "Prompt Engineering",
    "Cloud",
    "Backend",
    "Frontend"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: defaultTitle,
    description:
      "AI/ML engineer and full-stack developer (hammad986) building production generative AI platforms, agent systems, and web applications.",
    url: siteUrl,
    siteName: "Muhammed Hammad Portfolio",
    images: [
      {
        url: "/assets/my_pic.webp",
        width: 1200,
        height: 630,
        alt: "Muhammed Hammad (hammad986), AI/ML Engineer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "AI/ML engineer and full-stack developer (hammad986) building production generative AI systems and web applications.",
    images: ["/assets/my_pic.webp"]
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/assets/aetherion_logo.webp"
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl
  }
};

export const viewport: Viewport = {
  themeColor: "#050814",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: personName,
    alternateName: [handle, "hammad986.dpdns.org"],
    identifier: handle,
    jobTitle: "AI/ML Engineer and Full-Stack Developer",
    email: "mailto:mdhammad2906@gmail.com",
    telephone: "+91 6369740522",
    url: siteUrl,
    image: `${siteUrl}/assets/my_pic.webp`,
    sameAs: [
      "https://github.com/hammad986",
      "https://www.linkedin.com/in/hammad986/",
      "https://huggingface.co/hammad986",
      "https://leetcode.com/u/hammad986/",
      "https://github.com/Aetherionlabs986",
      "https://aetherionlabs.qzz.io",
      "https://www.instagram.com/mud_.hammad"
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Retrieval Augmented Generation",
      "AI Agents",
      "Full-stack Development",
      "Autonomous Workflows"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personName} (${handle})`,
    alternateName: handle,
    url: siteUrl,
    inLanguage: "en",
    author: { "@id": `${siteUrl}/#person` }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
    url: siteUrl,
    about: { "@id": `${siteUrl}/#person` },
    mainEntity: personSchema
  };

  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} font-sans`}>
      <body>
        <Providers>{children}</Providers>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="portfolio-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
      </body>
    </html>
  );
}
