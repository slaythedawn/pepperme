import type { Marker } from "@/components/ui/ReferenceRangeBar";

/**
 * A sample of the endocrine panel, rendered through the reference range bar.
 * Values and intervals only — no interpretation, no target, no arrow.
 * Intervals are the Australian reference intervals the panel is read against.
 */
export const SAMPLE_PANEL: Marker[] = [
  { name: "Total testosterone", value: 11.4, unit: "nmol/L", low: 8.3, high: 29.0 },
  { name: "SHBG", value: 62, unit: "nmol/L", low: 18, high: 54 },
  { name: "Free testosterone", value: 158, unit: "pmol/L", low: 170, high: 620 },
  { name: "Oestradiol", value: 94, unit: "pmol/L", low: 40, high: 160 },
  { name: "TSH", value: 2.1, unit: "mIU/L", low: 0.4, high: 4.0 },
  { name: "Ferritin", value: 38, unit: "µg/L", low: 30, high: 300 },
];
