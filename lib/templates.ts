import type { TemplateItem } from "../app/components/marketplace-ui";
import { normalizeTemplateRatioValue } from "./template-ratio";

export const accessFilters = ["all", "free", "paid", "premium", "pro"] as const;
export const ratioFilters = ["all", "9-16", "4-5", "1-1", "4-3", "3-2", "16-9", "21-9"] as const;

export const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Social Media", value: "social-media" },
  { label: "YouTube", value: "youtube" },
  { label: "Instagram", value: "instagram" },
  { label: "Business", value: "business" },
  { label: "Posters", value: "poster" },
  { label: "Stories", value: "story" },
  { label: "Invitations", value: "invitation" },
  { label: "Thumbnail", value: "thumbnail" },
] as const;

export function normalizeRatio(value?: string | null) {
  return normalizeTemplateRatioValue(value);
}

export function ratioParam(value: string) {
  return normalizeRatio(value).replace(" / ", "-");
}

export function templateCardWidthClass(ratio: string) {
  switch (normalizeRatio(ratio)) {
    case "9 / 16":
      return "w-[clamp(110px,7.1vw,136px)]";

    case "4 / 5":
      return "w-[clamp(150px,10.1vw,194px)]";

    case "1 / 1":
      return "w-[clamp(180px,12.55vw,241px)]";

    case "4 / 3":
      return "w-[clamp(240px,16.75vw,322px)]";

    case "3 / 2":
      return "w-[clamp(270px,18.85vw,362px)]";

    case "16 / 9":
      return "w-[clamp(320px,22.35vw,429px)]";

    case "21 / 9":
      return "w-[clamp(380px,29.4vw,565px)]";

    default:
      return "w-[clamp(150px,10.1vw,194px)]";
  }
}

function ratioKind(item: TemplateItem) {
  const ratio = normalizeRatio(item.ratio);
  if (ratio === "16 / 9" || ratio === "4 / 3" || ratio === "3 / 2" || ratio === "21 / 9") return "landscape";
  if (ratio === "1 / 1") return "square";
  if (ratio === "9 / 16") return "portrait";
  return "medium";
}

function categoryValue(item: TemplateItem) {
  return item.category.toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function isTemplateItem(item: TemplateItem | null | undefined): item is TemplateItem {
  return Boolean(item?.id && item.title && item.category && item.ratio && item.image);
}

export function matchesTemplateFilters(item: TemplateItem, filters: { q?: string; access?: string; ratio?: string; category?: string }) {
  if (!isTemplateItem(item)) return false;

  const query = filters.q?.trim().toLowerCase();
  const searchText = typeof (item as TemplateItem & { searchText?: string }).searchText === "string" ? (item as TemplateItem & { searchText?: string }).searchText : "";
  if (query && !`${item.title} ${item.category} ${searchText}`.toLowerCase().includes(query)) return false;

  if (filters.access && filters.access !== "all" && item.access?.toLowerCase() !== filters.access) return false;
  if (filters.ratio && filters.ratio !== "all" && ratioParam(item.ratio) !== filters.ratio) return false;

  if (filters.category && filters.category !== "all") {
    const haystack = `${categoryValue(item)} ${item.title.toLowerCase()}`;
    if (!haystack.includes(filters.category)) return false;
  }

  return true;
}

export function hasActiveTemplateFilters(filters: { q?: string; access?: string; ratio?: string; category?: string }) {
  return Boolean(filters.q?.trim() || (filters.access && filters.access !== "all") || (filters.ratio && filters.ratio !== "all") || (filters.category && filters.category !== "all"));
}

export function packTemplatesIntoRows(items: TemplateItem[]) {
  const remaining = items.filter(isTemplateItem);
  const pattern = ["portrait", "medium", "landscape", "square", "landscape", "portrait"];
  const rows: TemplateItem[][] = [];

  while (remaining.length) {
    const row: TemplateItem[] = [];
    for (const target of pattern) {
      if (!remaining.length) break;
      const matchIndex = remaining.findIndex((item) => ratioKind(item) === target);
      const [next] = remaining.splice(matchIndex >= 0 ? matchIndex : 0, 1);
      if (isTemplateItem(next)) row.push(next);
    }
    if (row.length) rows.push(row);
  }

  return rows;
}

export function uniqueTemplates(items: TemplateItem[]) {
  const seenIds = new Set<string>();
  const seenTitles = new Set<string>();
  return items.filter(isTemplateItem).filter((item) => {
    const id = item.id.toLowerCase();
    const title = item.title.toLowerCase();
    if (seenIds.has(id) || seenTitles.has(title)) return false;
    seenIds.add(id);
    seenTitles.add(title);
    return true;
  });
}
