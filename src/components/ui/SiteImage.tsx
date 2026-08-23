import Image from "next/image";
import { image } from "@/content/imagery";

/**
 * An image frame. Zero radius, no border, no overlay, no scrim — the treatment
 * is the whole styling. Portraits render B&W through the same filter the design
 * system specifies; programme and journal frames stay in colour.
 *
 * Sizing is passed as either a fixed `height` or an aspect `ratio`, matching how
 * the layouts are drawn.
 */
export function SiteImage({
  id,
  className = "",
  ratio,
  height,
  code,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px",
  priority = false,
}: {
  id: string;
  className?: string;
  ratio?: string;
  height?: string;
  /** Mono code badge, as the design places it over a frame corner. */
  code?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const slot = image(id);
  // Remote while the manifest still points at the generation CDN; local once
  // `npm run fetch:images` has run. Remote frames skip the optimiser.
  const remote = slot.src.startsWith("http");

  return (
    <figure
      className={`relative m-0 overflow-hidden bg-surface-muted ${className}`}
      style={{ aspectRatio: ratio, height }}
    >
      <Image
        src={slot.src}
        alt={slot.alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={remote}
        className="object-cover"
        style={
          slot.treatment === "mono"
            ? { filter: "grayscale(1) contrast(1.04)" }
            : undefined
        }
      />
      {code ? (
        <figcaption className="absolute right-[var(--space-2)] top-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] tracking-[var(--tracking-mono-sm)] uppercase text-[color:var(--color-paper)] mix-blend-difference">
          {code}
        </figcaption>
      ) : null}
    </figure>
  );
}
