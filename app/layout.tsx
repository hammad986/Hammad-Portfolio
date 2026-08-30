import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const siteUrl = "https://hammad.dpdns.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portfolio - Muhammed Hammad S",
  description:
    "Muhammed Hammad is an AI/ML Engineer and Software Developer specializing in Generative AI, LLMs, and full-stack autonomous agents. View projects, experience, and technical portfolio.",
  applicationName: "Muhammed Hammad Portfolio",
  authors: [{ name: "Muhammed Hammad S" }],
  keywords: [
    "Muhammed Hammad",
    "AI Engineer",
    "AI ML Engineer",
    "GenAI",
    "LLM",
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Next.js",
    "React",
    "Full Stack",
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
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Portfolio - Muhammed Hammad S",
    description:
      "AI/ML Engineer and Generative AI Developer building intelligent systems, AI-powered applications, autonomous workflows, and full-stack products.",
    url: siteUrl,
    siteName: "Muhammed Hammad Portfolio",
    images: [
      {
        url: "/assets/my_pic.webp",
        width: 1200,
        height: 630,
        alt: "Muhammed Hammad S - AI/ML Engineer"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Muhammed Hammad S",
    description:
      "AI/ML Engineer and Generative AI Developer building intelligent systems and full-stack AI products.",
    images: ["/assets/my_pic.webp"]
  },
  icons: {
    icon: "/assets/aetherion_logo.webp",
    apple: "/assets/aetherion_logo.webp"
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#050816",
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
    name: "Muhammed Hammad S",
    jobTitle: "AI/ML Engineer and Generative AI Developer",
    email: "mailto:mdhammad2906@gmail.com",
    telephone: "+91 6369740522",
    url: siteUrl,
    sameAs: [
      "https://github.com/hammad986",
      "https://www.linkedin.com/in/muhammed-hammad-42659726a",
      "https://www.instagram.com/mud_.hammad"
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Full-stack Development",
      "Autonomous Workflows"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Portfolio - Muhammed Hammad S",
    url: siteUrl
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
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
