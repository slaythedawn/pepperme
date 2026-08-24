import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { MonoTag } from "@/components/ui/MonoTag";
import { SITE } from "@/content/site";

/*
 * Deliberately unwritten.
 *
 * Pepper Me handles health information, which is sensitive information under
 * the Privacy Act 1988 and the Australian Privacy Principles. A privacy policy
 * or terms of service that were drafted to look right rather than to be right
 * would be worse than none at all — so this page carries the structure a lawyer
 * needs to fill and says plainly that it is unfinished.
 *
 * It is noindex until the copy lands. See LAUNCH.md: this is a launch blocker.
 */

export const metadata: Metadata = {
  title: "Legal",
  description: "Privacy, terms and contact details for Pepper Me.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  {
    id: "privacy",
    heading: "Privacy policy",
    intro:
      "Covering health information handled under the Privacy Act 1988 and the Australian Privacy Principles.",
    points: [
      "What personal and health information is collected, and at which step",
      "Why each category is collected, and the lawful basis for it",
      "Who it is disclosed to — treating doctors, the pathology lab, the dispensing pharmacy",
      "Where it is stored, for how long, and how it is destroyed",
      "Whether any of it leaves Australia, and to which countries",
      "How a patient accesses, corrects or exports their record",
      "How a privacy complaint is made, and the escalation path to the OAIC",
      "Cookies, analytics and any third-party tracking on this site",
    ],
  },
  {
    id: "terms",
    heading: "Terms of service",
    intro: "The agreement between a patient and Pepper Me Pty Ltd.",
    points: [
      "What the service is, and explicitly what it is not — it does not replace a GP or emergency care",
      "Eligibility: adults in Australia, and the conditions under which a doctor will decline",
      "What the $149 covers, when it is charged, and the refund on a decline",
      "How ongoing care is quoted, charged and cancelled",
      "Delivery, cold-chain handling and what happens to a failed delivery",
      "Limitation of liability, governing law and jurisdiction",
      "How these terms change, and how patients are told",
    ],
  },
  {
    id: "contact",
    heading: "Contact",
    intro: "The details a patient needs to reach a human.",
    points: [
      "Postal address of the registered entity",
      "Support email and hours",
      "The clinical escalation path, and what to do out of hours",
      "The complaints address, and the AHPRA notification pathway",
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      <Section ground="page">
        <MonoTag>Legal</MonoTag>
        <h1 className="t-h1 mt-[var(--space-4)] max-w-[22ch] text-text-primary">
          Not written yet<span className="mark">.</span>
        </h1>
        <p className="t-body-lg mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
          {SITE.legalName} handles health information, which is sensitive information under
          the Privacy Act. These documents are with our lawyers and this page will carry
          them in full before launch. Until then it lists what each one has to cover, so
          nothing is quietly missing — rather than showing you a policy that reads well and
          binds nobody.
        </p>
      </Section>

      {SECTIONS.map((section, i) => (
        <Section
          key={section.id}
          id={section.id}
          ground={i % 2 === 0 ? "page" : "muted"}
          hairlineTop={i === 0}
        >
          <MonoTag>Pending · with legal</MonoTag>
          <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">{section.heading}</h2>
          <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
            {section.intro}
          </p>
          <ul className="m-0 mt-[var(--space-5)] max-w-[var(--container-text)] list-none border-t border-border-hairline p-0">
            {section.points.map((point) => (
              <li
                key={point}
                className="t-body-sm border-b border-border-hairline py-[var(--space-3)] text-text-secondary"
              >
                {point}
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
