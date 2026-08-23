import type { Metadata } from "next";
import { ProgramPage } from "@/components/pages/ProgramPage";
import { PROGRAMS } from "@/content/programs";

const program = PROGRAMS["sexual-health"];

export const metadata: Metadata = {
  title: "Sexual health care",
  description: program.intro,
  alternates: { canonical: "/protocols/sexual-health" },
  openGraph: { title: "Sexual health care", description: program.intro },
};

export default function SexualHealthPage() {
  return <ProgramPage program={program} />;
}
