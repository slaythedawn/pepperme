import type { ComponentProps } from "react";

/**
 * Label above, 48px control, 1px Ink 20 border, zero radius. Focus shifts the
 * border to Lab 500 and adds the ring (the ring comes from :focus-visible in
 * the token base).
 */
export function Field({
  label,
  id,
  helper,
  ...props
}: { label: string; id: string; helper?: string } & ComponentProps<"input">) {
  return (
    <div className="flex flex-col gap-[var(--space-1)]">
      <label htmlFor={id} className="t-ui text-text-primary">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="h-[var(--field-height)] border border-border-inactive bg-surface-raised px-[var(--field-padding-x)] t-body text-text-primary focus:border-[color:var(--focus-ring)]"
      />
      {helper ? <p className="t-body-sm m-0 text-text-secondary">{helper}</p> : null}
    </div>
  );
}

/** A multi- or single-select option. Selected shifts border and ground only. */
export function OptionButton({
  selected,
  disabled,
  children,
  onClick,
  role = "checkbox",
}: {
  selected: boolean;
  disabled?: boolean;
  children: string;
  onClick: () => void;
  role?: "checkbox" | "radio";
}) {
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      disabled={disabled}
      onClick={onClick}
      className={`flex min-h-[var(--field-height)] items-center gap-[var(--space-3)] border px-[var(--space-3)] py-[var(--space-2)] text-left t-ui transition-colors duration-[var(--duration-fast)] ${
        selected
          ? "border-[color:var(--color-pepper-600)] bg-surface-alert text-text-primary"
          : "border-border-inactive text-text-primary hover:border-border-strong"
      } ${disabled ? "cursor-not-allowed text-text-disabled" : ""}`}
    >
      <span
        aria-hidden="true"
        data-avatar
        className={`inline-block h-[10px] w-[10px] shrink-0 border ${
          selected
            ? "border-[color:var(--color-pepper-600)] bg-[color:var(--color-pepper-600)]"
            : "border-border-inactive"
        }`}
      />
      {children}
    </button>
  );
}
