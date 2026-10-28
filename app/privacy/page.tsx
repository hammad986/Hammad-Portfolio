import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Muhammed Hammad (hammad986) handles analytics and contact form data on hammad986.dpdns.org.",
  alternates: { canonical: "https://hammad986.dpdns.org/privacy/" }
};

const sections = [
  {
    heading: "Overview",
    body: "This website is a personal portfolio for Muhammed Hammad. It is a static website with no user accounts, no payment processing, and no advertising. This policy explains the limited data that is collected when you visit the site or use the contact form."
  },
  {
    heading: "Analytics",
    body: "The live site loads Cloudflare Web Analytics and real-user performance reporting. These services process visit and performance information. This portfolio does not use advertising trackers. Consult Cloudflare’s privacy policy for its processing practices."
  },
  {
    heading: "Contact form",
    body: "If you submit the contact form, the name, email address, subject, and message you enter are transmitted through EmailJS and delivered to the site owner's email inbox. That information is used only to respond to your enquiry and is not sold or shared for marketing."
  },
  {
    heading: "Cookies and local storage",
    body: "The site does not set advertising or tracking cookies. Any browser storage used by the site is limited to functional preferences and does not track you across other websites."
  },
  {
    heading: "Third-party services",
    body: "The site is hosted on Cloudflare Pages. The contact form is delivered by EmailJS. The Portfolio FAQ runs locally without sending search text to an AI service. External profile, project and issuer links open third-party sites; document previews use files hosted with this site. Each provider processes data under its own privacy policy."
  },
  {
    heading: "Your choices",
    body: "You can contact the site owner at mdhammad2906@gmail.com to ask about, correct, or request deletion of any personal information you have submitted through the contact form."
  },
  {
    heading: "Changes",
    body: "This policy may be updated as the site changes. The revision date below reflects the most recent update."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="px-4 sm:px-6 pt-28 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyanCore">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            Last updated: October 28, 2026
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-semibold text-white">
                  {section.heading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
