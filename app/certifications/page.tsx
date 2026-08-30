import { Header } from "@/components/header";
import { CertificationsAndStack } from "@/components/sections/Certifications";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "37+ Verified Certifications Vault | Muhammed Hammad",
  description:
    "A comprehensive vault of 37+ verified industry certifications from Stanford Online, AWS, Google Cloud, and Deloitte with live PDF verification."
};

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <CertificationsAndStack />
      </div>
      <Footer />
    </>
  );
}
