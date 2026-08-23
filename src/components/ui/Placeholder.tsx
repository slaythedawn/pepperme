/**
 * Photography placeholder.
 *
 * Every image in the handoff is a hotlinked Unsplash URL and the brief is
 * explicit that none of it ships. Rather than carry those URLs into the build,
 * each image slot renders as a framed, empty surface that holds the crop and
 * states the commissioning brief. Swap this component for <Image> once the
 * commissioned photography lands — and run the alt string past the compliance
 * rules first: alt text is public copy.
 *
 * No medicine, vial, pen, syringe, capsule or pharmacy interior may ever
 * appear in a frame this component is replaced by.
 */
export function Placeholder({
  brief,
  code,
  className = "",
  ratio,
  height,
}: {
  /** What the commissioned frame should show. Not alt text — see above. */
  brief: string;
  /** Mono code badge, as the design places it. */
  code?: string;
  className?: string;
  ratio?: string;
  height?: string;
}) {
  return (
    <figure
      className={`relative m-0 overflow-hidden bg-surface-muted ${className}`}
      style={{ aspectRatio: ratio, height }}
    >
      {/* Hairline field — a texture, not a picture. Nothing depicted. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--color-ink-10) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, var(--color-ink-10) 0 1px, transparent 1px 24px)",
        }}
      />
      {code ? (
        <figcaption className="absolute right-[var(--space-2)] top-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary">
          {code}
        </figcaption>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 border-t border-border-hairline bg-surface-muted p-[var(--space-3)]">
        <p className="m-0 font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] leading-[1.5] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary">
          Photography pending · {brief}
        </p>
      </div>
    </figure>
  );
}
