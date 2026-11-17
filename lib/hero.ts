export const heroThemeKeys = ["creator", "wallpaper", "social", "business", "creative", "midnight", "ocean", "sunset", "emerald", "luxe"] as const;
export const heroCardKinds = ["portrait", "landscape", "square", "gradient"] as const;
export const heroGradientKeys = ["sunrise", "aurora", "social_red", "instagram", "facebook", "dark", "business_blue", "sale", "milestone", "launch", "indigo", "poster", "teal", "asset"] as const;

export type HeroThemeKey = (typeof heroThemeKeys)[number];
export type HeroCardKind = (typeof heroCardKinds)[number];
export type HeroGradientKey = (typeof heroGradientKeys)[number];

export type HeroCard = {
  id?: string;
  slotNumber?: number;
  image?: string;
  imageUrl?: string | null;
  storageKey?: string | null;
  deliveryUrl?: string | null;
  provider?: "cloudflare_r2" | "imagekit" | "external" | "none" | null;
  label?: string;
  sublabel?: string;
  altText?: string | null;
  kind?: HeroCardKind;
  gradient?: string;
  gradientKey?: HeroGradientKey | null;
  metadata?: Record<string, unknown>;
};

export type HeroSlide = {
  id?: string;
  internalName?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  themeKey: HeroThemeKey;
  status?: "draft" | "published" | "archived";
  isEnabled?: boolean;
  sortOrder?: number;
  background: string;
  waveStart: string;
  waveMid: string;
  waveEnd: string;
  secondaryStart: string;
  secondaryEnd: string;
  glowPrimary: string;
  glowSecondary: string;
  cards: HeroCard[];
};

export const HERO_THEMES: Record<HeroThemeKey, Pick<HeroSlide, "background" | "waveStart" | "waveMid" | "waveEnd" | "secondaryStart" | "secondaryEnd" | "glowPrimary" | "glowSecondary">> = {
  creator: {
    background: "linear-gradient(105deg,#fff2e7 0%,#ffe7e8 40%,#f8d8ef 72%,#ead8ff 100%)",
    waveStart: "#ffd9cf",
    waveMid: "#ffb4a8",
    waveEnd: "#f4a8d9",
    secondaryStart: "#ffd4e6",
    secondaryEnd: "#d8bcff",
    glowPrimary: "rgba(255,130,150,.20)",
    glowSecondary: "rgba(188,110,255,.24)",
  },
  wallpaper: {
    background: "linear-gradient(105deg,#eefaff 0%,#e5f3ff 38%,#e9e6ff 70%,#f1ddff 100%)",
    waveStart: "#ccecff",
    waveMid: "#8fd8ff",
    waveEnd: "#9ebcff",
    secondaryStart: "#bcefe9",
    secondaryEnd: "#c9b7ff",
    glowPrimary: "rgba(69,190,255,.22)",
    glowSecondary: "rgba(121,87,255,.22)",
  },
  social: {
    background: "linear-gradient(105deg,#fff0f6 0%,#f8e4ff 38%,#eadfff 66%,#deecff 100%)",
    waveStart: "#ffc2dc",
    waveMid: "#ef9be7",
    waveEnd: "#a99cff",
    secondaryStart: "#ffd0ef",
    secondaryEnd: "#8fc7ff",
    glowPrimary: "rgba(236,72,153,.20)",
    glowSecondary: "rgba(79,70,229,.22)",
  },
  business: {
    background: "linear-gradient(105deg,#fff7e7 0%,#ffe9dc 36%,#ffd9df 68%,#f4d9f2 100%)",
    waveStart: "#ffd49c",
    waveMid: "#ffae7d",
    waveEnd: "#e990bb",
    secondaryStart: "#ffe1b8",
    secondaryEnd: "#d8b0df",
    glowPrimary: "rgba(251,146,60,.22)",
    glowSecondary: "rgba(192,90,170,.20)",
  },
  creative: {
    background: "linear-gradient(105deg,#f2efff 0%,#e8e7ff 34%,#f5e4fa 66%,#fff0d8 100%)",
    waveStart: "#d8d0ff",
    waveMid: "#b8a8ff",
    waveEnd: "#e9a5d2",
    secondaryStart: "#cfc6ff",
    secondaryEnd: "#ffd3a3",
    glowPrimary: "rgba(99,102,241,.20)",
    glowSecondary: "rgba(245,158,11,.18)",
  },
  midnight: {
    background: "linear-gradient(105deg,#eef2ff 0%,#e8e5ff 34%,#ede0ff 68%,#f3e8ff 100%)",
    waveStart: "#c7d2fe",
    waveMid: "#818cf8",
    waveEnd: "#a855f7",
    secondaryStart: "#dbeafe",
    secondaryEnd: "#ddd6fe",
    glowPrimary: "rgba(79,70,229,.24)",
    glowSecondary: "rgba(168,85,247,.22)",
  },
  ocean: {
    background: "linear-gradient(105deg,#effcff 0%,#d9f7ff 34%,#c9efff 66%,#dcdcff 100%)",
    waveStart: "#9eeaf9",
    waveMid: "#38bdf8",
    waveEnd: "#4f46e5",
    secondaryStart: "#b7f5eb",
    secondaryEnd: "#b8b5ff",
    glowPrimary: "rgba(14,165,233,.22)",
    glowSecondary: "rgba(79,70,229,.18)",
  },
  sunset: {
    background: "linear-gradient(105deg,#fff5e8 0%,#ffe1c8 34%,#ffc8c9 66%,#f6c6e7 100%)",
    waveStart: "#ffd08a",
    waveMid: "#fb923c",
    waveEnd: "#ec4899",
    secondaryStart: "#ffe0ad",
    secondaryEnd: "#eab7eb",
    glowPrimary: "rgba(249,115,22,.22)",
    glowSecondary: "rgba(236,72,153,.20)",
  },
  emerald: {
    background: "linear-gradient(105deg,#f0fff7 0%,#d9fbea 34%,#cdf7ed 66%,#d9efff 100%)",
    waveStart: "#a7f3d0",
    waveMid: "#34d399",
    waveEnd: "#0ea5a4",
    secondaryStart: "#c7f9df",
    secondaryEnd: "#b7e8ef",
    glowPrimary: "rgba(16,185,129,.20)",
    glowSecondary: "rgba(6,182,212,.18)",
  },
  luxe: {
    background: "linear-gradient(105deg,#fffaf0 0%,#f8ead8 34%,#f5ddda 66%,#eadcf3 100%)",
    waveStart: "#e8c98f",
    waveMid: "#d9a96c",
    waveEnd: "#c58bb8",
    secondaryStart: "#f1dfbb",
    secondaryEnd: "#c9aed9",
    glowPrimary: "rgba(202,160,90,.20)",
    glowSecondary: "rgba(168,111,170,.18)",
  },
};

export const HERO_GRADIENTS: Record<HeroGradientKey, string> = {
  sunrise: "linear-gradient(155deg,#ffb8cb,#ffd6bc 44%,#d99cff)",
  aurora: "linear-gradient(145deg,#14b8a6,#8b5cf6,#ec4899)",
  social_red: "linear-gradient(145deg,#e11d48,#f97316)",
  instagram: "linear-gradient(145deg,#7c3aed,#ec4899,#f97316)",
  facebook: "linear-gradient(145deg,#1d4ed8,#0ea5e9)",
  dark: "linear-gradient(145deg,#020617,#334155)",
  business_blue: "linear-gradient(145deg,#1f2937,#1d4ed8)",
  sale: "linear-gradient(145deg,#ff5a36,#ff2f84)",
  milestone: "linear-gradient(145deg,#0f172a,#7c3aed)",
  launch: "linear-gradient(145deg,#065f46,#10b981)",
  indigo: "linear-gradient(145deg,#4f46e5,#8b5cf6)",
  poster: "linear-gradient(145deg,#ec4899,#fb7185)",
  teal: "linear-gradient(145deg,#0f766e,#14b8a6)",
  asset: "linear-gradient(145deg,#f59e0b,#ef4444)",
};

function withTheme(slide: Omit<HeroSlide, keyof typeof HERO_THEMES.creator | "background" | "waveStart" | "waveMid" | "waveEnd" | "secondaryStart" | "secondaryEnd" | "glowPrimary" | "glowSecondary"> & { themeKey: HeroThemeKey }): HeroSlide {
  return {
    ...slide,
    ...HERO_THEMES[slide.themeKey],
    cards: slide.cards.map((card) => ({
      ...card,
      gradient: card.gradientKey ? HERO_GRADIENTS[card.gradientKey] : card.gradient,
      image: card.deliveryUrl || card.imageUrl || card.image,
    })),
  };
}

export const defaultHeroSlides: HeroSlide[] = [
  withTheme({
    internalName: "Creator Marketplace",
    eyebrow: "Premium templates for creators",
    title: "Create. Share. Grow.",
    description: "Beautiful templates, wallpapers and creative assets for your next big idea. Carefully crafted. Instantly ready.",
    primaryLabel: "Browse Templates",
    primaryHref: "/templates",
    secondaryLabel: "Explore Wallpapers",
    secondaryHref: "/wallpapers",
    themeKey: "creator",
    status: "published",
    isEnabled: true,
    sortOrder: 10,
    cards: [
      { image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=90", label: "GOOD\nIDEAS\nBRIGHTER\nFUTURE", kind: "portrait", provider: "external", altText: "Landscape creative template preview" },
      { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=90", kind: "portrait", provider: "external", altText: "Portrait creator template preview" },
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=90", label: "Keep\nGoing", kind: "portrait", provider: "external", altText: "Beach creative template preview" },
      { gradientKey: "sunrise", label: "CREATE\nSOMETHING\nAMAZING\nTODAY", kind: "gradient", provider: "none", altText: "Gradient motivational creative card" },
    ],
  }),
  withTheme({
    internalName: "Wallpaper Collection",
    eyebrow: "Wallpapers for every screen",
    title: "Make every screen yours.",
    description: "4K desktop backgrounds and vertical mobile wallpapers, curated for wide screens and phones.",
    primaryLabel: "Browse Wallpapers",
    primaryHref: "/wallpapers",
    secondaryLabel: "Desktop Collection",
    secondaryHref: "/wallpapers#desktop",
    themeKey: "wallpaper",
    status: "published",
    isEnabled: true,
    sortOrder: 20,
    cards: [
      { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1100&q=90", label: "4K\nDESKTOP", kind: "landscape", provider: "external", altText: "Mountain lake desktop wallpaper" },
      { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=90", label: "AURORA", kind: "portrait", provider: "external", altText: "Aurora wallpaper preview" },
      { image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=90", label: "9:16\nMOBILE", kind: "portrait", provider: "external", altText: "Night sky mobile wallpaper" },
      { image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=90", label: "SOFT\nFLORAL", kind: "portrait", provider: "external", altText: "Floral wallpaper preview" },
    ],
  }),
  withTheme({
    internalName: "Social Media Studio",
    eyebrow: "Social media studio",
    title: "Publish for every platform.",
    description: "YouTube thumbnails, Instagram posts, Facebook creatives, X, LinkedIn and Pinterest — ready in the right formats.",
    primaryLabel: "Explore Social Templates",
    primaryHref: "/social",
    secondaryLabel: "View Platforms",
    secondaryHref: "/social",
    themeKey: "social",
    status: "published",
    isEnabled: true,
    sortOrder: 30,
    cards: [
      { gradientKey: "social_red", label: "YOUTUBE\nTHUMBNAILS", sublabel: "16:9", kind: "landscape", provider: "none", altText: "YouTube thumbnail gradient card" },
      { gradientKey: "instagram", label: "INSTAGRAM\nPOSTS + REELS", sublabel: "4:5", kind: "portrait", provider: "none", altText: "Instagram template gradient card" },
      { gradientKey: "facebook", label: "FACEBOOK\nCREATIVES", sublabel: "1:1", kind: "square", provider: "none", altText: "Facebook creative gradient card" },
      { gradientKey: "dark", label: "X / TWITTER\nPOSTS", sublabel: "16:9", kind: "landscape", provider: "none", altText: "X social post gradient card" },
    ],
  }),
  withTheme({
    internalName: "Business Designs",
    eyebrow: "Business designs",
    title: "Promote your business faster.",
    description: "Sales, openings, announcements, congratulations and promotional designs without starting from scratch.",
    primaryLabel: "Business Templates",
    primaryHref: "/templates",
    secondaryLabel: "See Promotions",
    secondaryHref: "/templates",
    themeKey: "business",
    status: "published",
    isEnabled: true,
    sortOrder: 40,
    cards: [
      { gradientKey: "business_blue", label: "GRAND\nOPENING", sublabel: "BUSINESS", kind: "portrait", provider: "none", altText: "Grand opening gradient card" },
      { gradientKey: "sale", label: "MEGA\nSALE", sublabel: "UP TO 50%", kind: "portrait", provider: "none", altText: "Mega sale gradient card" },
      { gradientKey: "milestone", label: "CONGRATULATIONS", sublabel: "MILESTONE", kind: "landscape", provider: "none", altText: "Milestone gradient card" },
      { gradientKey: "launch", label: "NEW\nLAUNCH", sublabel: "SOCIAL POST", kind: "square", provider: "none", altText: "New launch gradient card" },
    ],
  }),
  withTheme({
    internalName: "Creative Assets",
    eyebrow: "More creative assets",
    title: "Design beyond social posts.",
    description: "Presentations, print creatives, posters, banners and digital assets — all inside one consistent marketplace.",
    primaryLabel: "Explore Creative Assets",
    primaryHref: "/templates",
    secondaryLabel: "View More",
    secondaryHref: "#more",
    themeKey: "creative",
    status: "published",
    isEnabled: true,
    sortOrder: 50,
    cards: [
      { gradientKey: "indigo", label: "PRESENTATION", sublabel: "16:9", kind: "landscape", provider: "none", altText: "Presentation gradient card" },
      { gradientKey: "poster", label: "POSTER", sublabel: "A4", kind: "portrait", provider: "none", altText: "Poster gradient card" },
      { gradientKey: "teal", label: "PRINT\nDESIGN", sublabel: "READY", kind: "portrait", provider: "none", altText: "Print design gradient card" },
      { gradientKey: "asset", label: "DIGITAL\nASSETS", sublabel: "CREATOR PACK", kind: "square", provider: "none", altText: "Digital assets gradient card" },
    ],
  }),
];

export function applyHeroTheme(slide: Omit<HeroSlide, keyof typeof HERO_THEMES.creator | "background" | "waveStart" | "waveMid" | "waveEnd" | "secondaryStart" | "secondaryEnd" | "glowPrimary" | "glowSecondary"> & { themeKey: HeroThemeKey }): HeroSlide {
  return withTheme(slide);
}
