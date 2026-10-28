import { Header } from "@/components/header";
import { CertificationsAndStack } from "@/components/sections/Certifications";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verified Certifications Vault",
  description:
    "A collection of verified industry certifications from Stanford Online, AWS, Google Cloud, and Deloitte with live document verification.",
  alternates: { canonical: "https://hammad986.dpdns.org/certifications/" }
};

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <CertificationsAndStack />
      </main>
      <Footer />
    </>
  );
}
