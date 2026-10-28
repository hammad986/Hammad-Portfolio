import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using the portfolio of Muhammed Hammad (hammad986) at hammad986.dpdns.org.",
  alternates: { canonical: "https://hammad986.dpdns.org/terms/" }
};

const sections = [
  {
    heading: "Acceptance of terms",
    body: "By accessing this website you agree to these terms. If you do not agree with them, please do not use the site."
  },
  {
    heading: "Purpose of the site",
    body: "This website presents the work, experience, and credentials of Muhammed Hammad. Content is provided for information and portfolio purposes only."
  },
  {
    heading: "Intellectual property",
    body: "Unless stated otherwise, the text, design, code, and project materials on this site belong to Muhammed Hammad. You may view and share links to the site, but you may not copy or republish substantial portions without written permission. Third-party names and logos remain the property of their respective owners."
  },
  {
    heading: "Project and certificate content",
    body: "Project descriptions, screenshots, and certificate documents are provided to demonstrate work and qualifications. Live project links and downloadable files are offered as-is and may change or be removed at any time."
  },
  {
    heading: "No warranty",
    body: "The site is provided on an as-is basis without warranties of any kind. While care is taken to keep information accurate, no guarantee is made that all content is complete, current, or error-free."
  },
  {
    heading: "External links",
    body: "The site links to external websites such as GitHub, LinkedIn, and live demos. Muhammed Hammad is not responsible for the content or practices of those third-party sites."
  },
  {
    heading: "Limitation of liability",
    body: "To the extent permitted by law, Muhammed Hammad is not liable for any loss or damage arising from the use of this website or reliance on its content."
  },
  {
    heading: "Changes to these terms",
    body: "These terms may be updated at any time. Continued use of the site after changes are published means you accept the revised terms."
  },
  {
    heading: "Contact",
    body: "Questions about these terms can be sent to mdhammad2906@gmail.com."
  }
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="px-4 sm:px-6 pt-28 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyanCore">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            Last updated: October 13, 2026
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
