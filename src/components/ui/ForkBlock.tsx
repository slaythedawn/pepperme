import { Button } from "./Button";
import { MonoTag } from "./MonoTag";
import { SiteImage } from "./SiteImage";

export type ForkPanel = {
  label: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  note?: string;
  /** Image slot id in imagery.json. */
  image: string;
  tags?: string[];
};

/**
 * The Him / Her split. Left panel Ink, right panel Cream — the ground change
 * is the divider, so there is no rule between them.
 *
 * Used only where the content genuinely forks. It encodes a real physiological
 * divergence; it is not a layout pattern to reach for when a section needs
 * visual interest.
 */
export function ForkBlock({ him, her }: { him: ForkPanel; her: ForkPanel }) {
  return (
    <div className="grid lg:grid-cols-2">
      <ForkSide panel={him} ground="inverse" />
      <ForkSide panel={her} ground="muted" />
    </div>
  );
}

function ForkSide({
  panel,
  ground,
}: {
  panel: ForkPanel;
  ground: "inverse" | "muted";
}) {
  return (
    <div
      data-ground={ground}
      className="flex min-h-[560px] flex-col justify-between gap-[var(--space-6)] p-[var(--space-6)] md:p-[var(--space-8)]"
    >
      <div className="flex flex-col gap-[var(--space-4)]">
        <MonoTag>{panel.label}</MonoTag>
        <h3 className="t-h2 m-0 text-text-primary">
          {panel.title}
          <span className="mark">.</span>
        </h3>
        <p className="t-body m-0 max-w-[46ch] text-text-secondary">{panel.body}</p>
      </div>

      <SiteImage id={panel.image} height="180px" sizes="(max-width: 1024px) 100vw, 50vw" />

      <div className="flex flex-col gap-[var(--space-3)]">
        <div className="flex flex-wrap items-center gap-[var(--space-4)]">
          <Button href={panel.href}>{panel.cta}</Button>
          {panel.note ? (
            <span className="font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary">
              {panel.note}
            </span>
          ) : null}
        </div>
        {panel.tags?.length ? (
          <ul className="m-0 flex list-none flex-wrap gap-[var(--space-2)] p-0">
            {panel.tags.map((t) => (
              <li
                key={t}
                data-chip
                className="border border-border-hairline px-[var(--space-1)] py-[2px] font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
