import { Header } from "@/components/header";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Direct communication channels, contact form, and engineering inquiries for Muhammed Hammad (hammad986).",
  alternates: { canonical: "https://hammad986.dpdns.org/contact/" }
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
