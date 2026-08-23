import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramPage } from "@/components/pages/ProgramPage";
import { PROGRAMS } from "@/content/programs";

/**
 * The unisex programs. Hormonal and sexual health have their own routes because
 * they fork Him/Her; everything else is one page.
 */
const UNISEX = ["recovery", "performance", "sleep", "longevity"] as const;

export function generateStaticParams() {
  return UNISEX.map((program) => ({ program }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ program: string }>;
}): Promise<Metadata> {
  const { program } = await params;
  const content = PROGRAMS[program];
  if (!content) return {};
  return {
    title: `${content.eyebrow} care`,
    description: content.intro,
    alternates: { canonical: `/protocols/${program}` },
    openGraph: { title: `${content.eyebrow} care`, description: content.intro },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ program: string }>;
}) {
  const { program } = await params;
  const content = PROGRAMS[program];
  if (!content || !UNISEX.includes(program as (typeof UNISEX)[number])) notFound();
  return <ProgramPage program={content} />;
}
