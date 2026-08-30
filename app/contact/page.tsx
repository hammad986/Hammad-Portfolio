import { Header } from "@/components/header";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaboration | Muhammed Hammad",
  description:
    "Direct communication channels, contact form, and engineering inquiries for Muhammed Hammad."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
