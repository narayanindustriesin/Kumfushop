export const FALLBACK_TEMPLATE_RATIO = "4 / 5";

const SUPPORTED_TEMPLATE_RATIOS = new Set(["9 / 16", "4 / 5", "1 / 1", "4 / 3", "3 / 2", "16 / 9", "21 / 9"]);

export function normalizeTemplateRatioValue(value?: string | null) {
  const normalized = String(value || FALLBACK_TEMPLATE_RATIO)
    .trim()
    .replace(/\s*:\s*/g, " / ")
    .replace(/\s*\/\s*/g, " / ");

  return SUPPORTED_TEMPLATE_RATIOS.has(normalized) ? normalized : FALLBACK_TEMPLATE_RATIO;
}

export function templateRatioNumber(value?: string | null) {
  const [width, height] = normalizeTemplateRatioValue(value).split(" / ").map(Number);
  return width / height;
}

export function templateRatioKind(value?: string | null) {
  const ratio = templateRatioNumber(value);
  if (ratio < 0.7) return "portrait";
  if (ratio < 0.95) return "tall";
  if (ratio < 1.15) return "square";
  if (ratio < 1.55) return "classic";
  return "wide";
}
