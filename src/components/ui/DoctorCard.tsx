import { SiteImage } from "./SiteImage";
import { MonoTag, MonoData } from "./MonoTag";
import { Card } from "./Card";
import type { Doctor } from "@/content/doctors";

/**
 * Clinical authority. The AHPRA registration number renders in the mono layer
 * on every card — it is public and verifiable, and treating it as data rather
 * than as a badge is the point.
 */
export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card interactive className="flex flex-col">
      <SiteImage
        id={doctor.portrait}
        ratio="4 / 5"
        code={doctor.ahpra}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
      />
      <div className="flex flex-1 flex-col gap-[var(--space-2)] p-[var(--card-padding)]">
        <MonoTag>
          {doctor.discipline} · {doctor.city}
        </MonoTag>
        <h3 className="t-h4 m-0 text-text-primary">{doctor.name}</h3>
        <p className="t-body-sm m-0 text-text-secondary">{doctor.bio}</p>
        <div className="mt-auto flex flex-wrap gap-x-[var(--space-4)] gap-y-[var(--space-1)] border-t border-border-hairline pt-[var(--space-3)]">
          <MonoData className="text-text-secondary">AHPRA {doctor.ahpra}</MonoData>
          <MonoData className="text-text-secondary">{doctor.years} years</MonoData>
          <MonoData className="text-text-secondary">Reads {doctor.reads}</MonoData>
        </div>
      </div>
    </Card>
  );
}
