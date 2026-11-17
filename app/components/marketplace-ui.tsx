import { templateCardWidthClass } from "../../lib/templates";

export type TemplateItem = {
  id: string;
  slug?: string;
  title: string;
  category: string;
  ratio: string;
  image: string;
  likes: string;
  downloads: string;
  views?: string;
  access?: "Free" | "Paid" | "Premium" | "Pro";
  price?: string;
  editorUrl?: string;
};

function templateHref(item: TemplateItem) {
  return `/templates/${item.slug ?? item.id}`;
}

export const aiStockImages = [
  {
    id: "ai-stock-1",
    title: "Studio Portrait",
    category: "People",
    access: "Premium",
    ratio: "9 / 16",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=86",
  },
  {
    id: "ai-stock-2",
    title: "Modern Founder",
    category: "Business",
    access: "Pro",
    ratio: "4 / 3",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=86",
  },
  {
    id: "ai-stock-3",
    title: "Mountain Escape",
    category: "Nature",
    access: "Paid",
    ratio: "16 / 9",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=86",
  },
  {
    id: "ai-stock-4",
    title: "Fresh Cuisine",
    category: "Food",
    access: "Premium",
    ratio: "1 / 1",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=86",
  },
  {
    id: "ai-stock-5",
    title: "Luxury Travel",
    category: "Travel",
    access: "Paid",
    ratio: "16 / 9",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=86",
  },
  {
    id: "ai-stock-6",
    title: "Creative Lifestyle",
    category: "Lifestyle",
    access: "Free",
    ratio: "9 / 16",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=86",
  },
  {
    id: "ai-stock-7",
    title: "Urban Fashion",
    category: "Fashion",
    access: "Premium",
    ratio: "9 / 16",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=86",
  },
  {
    id: "ai-stock-8",
    title: "Future Workspace",
    category: "Technology",
    access: "Pro",
    ratio: "4 / 3",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=86",
  },
  {
    id: "ai-stock-9",
    title: "Coastal Journey",
    category: "Travel",
    access: "Paid",
    ratio: "16 / 9",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=86",
  },
  {
    id: "ai-stock-10",
    title: "Healthy Table",
    category: "Food",
    access: "Free",
    ratio: "1 / 1",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=900&q=86",
  },
  {
    id: "ai-stock-11",
    title: "Creator Stage",
    category: "Lifestyle",
    access: "Premium",
    ratio: "16 / 9",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=86",
  },
  {
    id: "ai-stock-12",
    title: "Editorial Portrait",
    category: "People",
    access: "Free",
    ratio: "9 / 16",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=86",
  },
];

export const aiPromptPacks = [
  {
    id: "prompt-1",
    title: "Cinematic Portrait Master Pack",
    category: "Portrait",
    access: "Premium",
    count: "50 Prompts",
    ratio: "9:16",
    tools: ["ChatGPT Image", "Midjourney", "Flux"],
    preview: "Ultra-realistic cinematic portrait, soft rim light, natural skin texture, premium editorial mood...",
    accent: "from-fuchsia-600 via-violet-600 to-indigo-700",
  },
  {
    id: "prompt-2",
    title: "Product Photography Pro",
    category: "Product",
    access: "Pro",
    count: "40 Prompts",
    ratio: "4:5",
    tools: ["ChatGPT Image", "Flux", "SDXL"],
    preview: "Luxury studio product photo, controlled reflections, softbox lighting, clean commercial composition...",
    accent: "from-blue-600 via-cyan-500 to-teal-500",
  },
  {
    id: "prompt-3",
    title: "Festival Poster Creator",
    category: "Festival",
    access: "Paid",
    count: "30 Prompts",
    ratio: "4:5",
    tools: ["ChatGPT Image", "Midjourney"],
    preview: "Premium festive poster composition, elegant typography space, cinematic glow, rich cultural details...",
    accent: "from-orange-500 via-rose-500 to-fuchsia-600",
  },
  {
    id: "prompt-4",
    title: "Food Photography Collection",
    category: "Food",
    access: "Free",
    count: "20 Prompts",
    ratio: "1:1",
    tools: ["ChatGPT Image", "Flux"],
    preview: "Commercial food photography, appetizing texture, soft daylight, restaurant campaign quality...",
    accent: "from-emerald-500 via-lime-500 to-amber-400",
  },
  {
    id: "prompt-5",
    title: "Luxury Travel Visuals",
    category: "Travel",
    access: "Premium",
    count: "35 Prompts",
    ratio: "16:9",
    tools: ["Midjourney", "Flux", "SDXL"],
    preview: "High-end travel campaign image, dramatic landscape light, premium tourism editorial photography...",
    accent: "from-sky-500 via-blue-600 to-violet-700",
  },
  {
    id: "prompt-6",
    title: "Social Ad Creative Pack",
    category: "Marketing",
    access: "Pro",
    count: "60 Prompts",
    ratio: "1:1",
    tools: ["ChatGPT Image", "Midjourney", "Flux"],
    preview: "Scroll-stopping social media ad creative, bold focal subject, conversion-ready composition...",
    accent: "from-violet-600 via-fuchsia-500 to-orange-400",
  },
];

export const socialPlatforms = [
  { id: "youtube", name: "YouTube", subtitle: "Thumbnails • Banners • Intros", classes: "from-red-700 to-red-500", logo: "/social-icons/youtube.webp" },
  { id: "instagram", name: "Instagram", subtitle: "Posts • Reels • Stories", classes: "from-pink-500 via-fuchsia-500 to-orange-400", logo: "/social-icons/instagram.webp" },
  { id: "facebook", name: "Facebook", subtitle: "Posts • Covers • Ads", classes: "from-blue-700 to-blue-500", logo: "/social-icons/facebook.webp" },
  { id: "x", name: "X (Twitter)", subtitle: "Posts • Headers • Ads", classes: "from-slate-950 to-slate-700", logo: "/social-icons/x.webp" },
  { id: "linkedin", name: "LinkedIn", subtitle: "Posts • Banners • Ads", classes: "from-blue-700 to-cyan-500", logo: "/social-icons/linkedin.webp" },
  { id: "pinterest", name: "Pinterest", subtitle: "Pins • Boards • Covers", classes: "from-red-700 to-rose-500", logo: "/social-icons/pinterest.webp" },
];

export const desktopWallpapers = [
  { id: "desk-1", title: "Snow Peaks", ratio: "16:9", access: "Free", pack: "5 Pack", image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=82" },
  { id: "desk-2", title: "Aurora Flow", ratio: "16:9", access: "Premium", pack: "10 Pack", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=82" },
  { id: "desk-3", title: "Calm Interior", ratio: "16:9", access: "Pro", pack: "20 Pack", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=82" },
  { id: "desk-4", title: "Wide Interior", ratio: "21:9", access: "Paid", pack: "10 Pack", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=82" },
  { id: "desk-5", title: "Color Wave", ratio: "21:9", access: "Premium", pack: "20 Pack", image: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1400&q=82" },
  { id: "desk-6", title: "Quiet Horizon", ratio: "16:9", access: "Free", pack: "5 Pack", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=82" },
];

export const mobileWallpapers = [
  { id: "mob-1", title: "Neon City", ratio: "9:16", access: "Premium", pack: "10 Pack", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=82" },
  { id: "mob-2", title: "Palm Sunset", ratio: "9:16", access: "Free", pack: "5 Pack", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=82" },
  { id: "mob-3", title: "Soft Flowers", ratio: "9:16", access: "Pro", pack: "20 Pack", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=700&q=82" },
  { id: "mob-4", title: "Moon Night", ratio: "9:16", access: "Premium", pack: "10 Pack", image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=700&q=82" },
  { id: "mob-5", title: "Shine Bright", ratio: "9:16", access: "Paid", pack: "5 Pack", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=82" },
  { id: "mob-6", title: "Pink Sky", ratio: "9:16", access: "Free", pack: "5 Pack", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=82" },
];

export const tabletWallpapers = [
  { id: "tab-1", title: "Serene Lake", ratio: "4:3", access: "Free", pack: "10 Pack", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=82" },
  { id: "tab-2", title: "Vibrant Shapes", ratio: "4:3", access: "Premium", pack: "20 Pack", image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1000&q=82" },
  { id: "tab-3", title: "Cozy Space", ratio: "4:3", access: "Free", pack: "5 Pack", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82" },
  { id: "tab-4", title: "Ocean Life", ratio: "4:3", access: "Pro", pack: "15 Pack", image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=82" },
  { id: "tab-5", title: "Dreamy Skies", ratio: "4:3", access: "Paid", pack: "12 Pack", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=82" },
  { id: "tab-6", title: "Autumn Calm", ratio: "4:3", access: "Free", pack: "10 Pack", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=82" },
];

export const ultraWideWallpapers = [
  { id: "uw-1", title: "Snowy Horizons", ratio: "21:9", access: "Premium", pack: "10 Pack", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=82" },
  { id: "uw-2", title: "Lost in Space", ratio: "32:9", access: "Free", pack: "20 Pack", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=82" },
  { id: "uw-3", title: "Island View", ratio: "21:9", access: "Pro", pack: "15 Pack", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=82" },
  { id: "uw-4", title: "Aurora Stretch", ratio: "32:9", access: "Paid", pack: "12 Pack", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1800&q=82" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 8H7" />
      <circle cx="9.5" cy="19" r="1.2" />
      <circle cx="17.5" cy="19" r="1.2" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="m6 8 4 4 4-4" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 9-8 9 8" />
      <path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6" />
    </svg>
  );
}

function NavDropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: Array<{ label: string; href: string; description: string }>;
}) {
  return (
    <div className="group relative">
      <a
        href={href}
        className="flex items-center gap-1 rounded-full px-2.5 py-2 font-bold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
      >
        <span>{label}</span>
        <ChevronDownIcon />
      </a>

      <div className="pointer-events-none invisible absolute left-1/2 top-[calc(100%-4px)] z-[120] w-[262px] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-violet-100/90 bg-white/98 p-2 shadow-[0_20px_55px_rgba(30,41,59,.18)] ring-1 ring-white/80 backdrop-blur-xl">
          <div className="mb-1 rounded-xl bg-gradient-to-r from-violet-50 via-fuchsia-50/70 to-orange-50 px-3 py-2">
            <p className="text-[8px] font-black uppercase tracking-[0.14em] text-violet-700">{label}</p>
            <p className="mt-0.5 text-[8px] text-slate-500">Explore KUMFU Shop collections</p>
          </div>
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group/item flex rounded-xl px-3 py-2.5 transition hover:bg-gradient-to-r hover:from-violet-50 hover:to-fuchsia-50"
            >
              <span className="min-w-0">
                <span className="block text-[12px] font-extrabold text-slate-900 group-hover/item:text-violet-700">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-[9px] leading-3.5 text-slate-500">
                  {item.description}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const templateMenu = [
    { label: "All Templates", href: "/templates", description: "Browse the complete template library." },
    { label: "Social Media", href: "/social", description: "Posts, stories, covers and creator designs." },
    { label: "Business Designs", href: "/templates#business", description: "Promotions and business-ready creatives." },
    { label: "Popular Templates", href: "/#popular-templates", description: "Trending designs picked for you." },
  ];

  const wallpaperMenu = [
    { label: "All Wallpapers", href: "/wallpapers", description: "Explore every wallpaper collection." },
    { label: "Desktop & Laptop", href: "/wallpapers#desktop", description: "16:9 backgrounds for wide screens." },
    { label: "Mobile", href: "/wallpapers#mobile", description: "Vertical 9:16 phone wallpapers." },
    { label: "Tablet", href: "/wallpapers#tablet", description: "4:3 wallpapers for tablets and iPad." },
    { label: "Ultra-wide", href: "/wallpapers#ultrawide", description: "21:9 and 32:9 cinematic backgrounds." },
  ];

  const graphicsMenu = [
    { label: "AI Prompt Marketplace", href: "/ai-prompts", description: "Ready-to-use image generation prompt packs." },
    { label: "AI Stock Images", href: "/#ai-stock-images", description: "Realistic AI-generated stock visuals." },
    { label: "Social Media Graphics", href: "/social", description: "Platform-ready creator graphics." },
    { label: "Business Creatives", href: "/templates#business", description: "Sales, launch and promotional visuals." },
    { label: "Digital Assets", href: "/#more", description: "More creative assets and collections." },
  ];

  const moreMenu = [
    { label: "Blog", href: "/blog", description: "Ideas, guides and creative inspiration." },
    { label: "About KUMFU", href: "/about", description: "Learn more about KUMFU Shop." },
    { label: "Advertise", href: "/advertise", description: "Advertising and brand opportunities." },
    { label: "Privacy", href: "/privacy", description: "Privacy and data information." },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full border-b border-violet-100/70 bg-white/95 shadow-[0_4px_20px_rgba(30,41,59,.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[66px] w-full min-w-0 items-center gap-3 px-4 sm:px-6 lg:px-[30px]">
        <a href="/" className="min-w-0 shrink-0 transition hover:opacity-90">
          <img src="/brand/kumfu-logo-v2.webp" alt="KUMFU Shop" className="h-10 w-auto sm:h-12" />
        </a>

        <form
          action="/search"
          className="group/search hidden min-w-0 max-w-[560px] flex-1 rounded-[18px] bg-gradient-to-r from-violet-300 via-fuchsia-300 to-orange-300 p-[1.5px] shadow-[0_8px_24px_rgba(124,58,237,.10)] transition focus-within:shadow-[0_10px_30px_rgba(168,85,247,.18)] md:block"
        >
          <div className="flex h-[44px] min-w-0 items-center rounded-[16.5px] bg-white px-1.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[11px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-white shadow-[0_5px_14px_rgba(168,85,247,.28)]">
              <SearchIcon />
            </span>

            <span className="ml-2 hidden shrink-0 items-center rounded-lg bg-violet-50 px-2 py-1.5 text-[9px] font-black uppercase tracking-[0.08em] text-violet-700 ring-1 ring-violet-100 lg:inline-flex">
              All
            </span>

            <span className="mx-2 hidden h-5 w-px shrink-0 bg-slate-200 lg:block" />

            <input
              name="q"
              type="search"
              aria-label="Search KUMFU Shop"
              className="min-w-0 flex-1 bg-transparent px-1.5 text-[12px] font-semibold text-slate-900 outline-none placeholder:font-medium placeholder:text-slate-400 lg:text-[13px]"
              placeholder="Search templates, AI images, wallpapers..."
            />

            <button
              type="submit"
              className="ml-2 hidden h-8 shrink-0 items-center gap-1.5 rounded-[11px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-4 text-[10px] font-black text-white shadow-[0_5px_14px_rgba(168,85,247,.22)] transition hover:brightness-105 xl:inline-flex"
            >
              <SearchIcon />
              <span>Search</span>
            </button>
          </div>
        </form>

        <nav className="ml-auto hidden items-center gap-1 text-[12px] xl:flex">
          <a
            href="/"
            className="flex items-center gap-1.5 rounded-full px-2.5 py-2 font-bold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
          >
            <HomeIcon />
            <span>Home</span>
          </a>
          <NavDropdown label="Templates" href="/templates" items={templateMenu} />
          <NavDropdown label="Wallpapers" href="/wallpapers" items={wallpaperMenu} />
          <NavDropdown label="Graphics" href="/social" items={graphicsMenu} />
          <NavDropdown label="More" href="#more" items={moreMenu} />
        </nav>

        <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2 xl:ml-0">
          <a
            href="/search"
            aria-label="Search"
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-50 to-fuchsia-50 text-violet-700 ring-1 ring-violet-100 transition hover:scale-[1.03] hover:ring-violet-200 md:hidden"
          >
            <SearchIcon />
          </a>

          <a
            href="/cart"
            aria-label="Cart"
            className="relative grid h-10 w-10 place-items-center rounded-full text-slate-800 ring-1 ring-transparent transition hover:bg-violet-50 hover:text-violet-700 hover:ring-violet-100"
          >
            <CartIcon />
            <span className="absolute -right-0.5 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-1 text-[10px] font-black text-white shadow-sm">
              3
            </span>
          </a>

          <span className="hidden h-9 w-9 rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-100 ring-1 ring-violet-100 xl:block" />

          <a
            href="https://auth.kumfushop.com/login"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-violet-700 sm:inline-flex"
          >
            Sign In
          </a>

          <details className="relative xl:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full text-slate-800 transition hover:bg-violet-50 hover:text-violet-700 [&::-webkit-details-marker]:hidden">
              <MenuIcon />
            </summary>

            <div className="absolute right-0 top-12 w-[290px] overflow-hidden rounded-2xl border border-violet-100 bg-white p-2.5 shadow-[0_20px_55px_rgba(30,41,59,.18)]">
              <div className="mb-2 rounded-xl bg-gradient-to-r from-violet-50 to-fuchsia-50 px-3 py-2.5">
                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-violet-700">Explore KUMFU</p>
                <p className="mt-0.5 text-[9px] text-slate-500">Templates, images and wallpapers in one place.</p>
              </div>

              {[
                ["Home", "/"],
                ["Templates", "/templates"],
                ["AI Prompt Marketplace", "/ai-prompts"],
                ["AI Stock Images", "/#ai-stock-images"],
                ["Social Media", "/social"],
                ["All Wallpapers", "/wallpapers"],
                ["Desktop Wallpapers", "/wallpapers#desktop"],
                ["Mobile Wallpapers", "/wallpapers#mobile"],
                ["Tablet Wallpapers", "/wallpapers#tablet"],
                ["Ultra-wide Wallpapers", "/wallpapers#ultrawide"],
                ["Blog", "/blog"],
                ["About KUMFU", "/about"],
                ["Advertise", "/advertise"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block rounded-xl px-3 py-2 text-[12px] font-semibold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
                >
                  {label}
                </a>
              ))}

              <a
                href="https://auth.kumfushop.com/login"
                className="mt-2 block rounded-xl bg-slate-950 px-3 py-2.5 text-center text-sm font-bold text-white sm:hidden"
              >
                Sign In
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SocialMediaTemplatesHeading() {
  return (
    <div className="mb-2.5 flex items-end justify-between gap-3">
      <div className="flex min-w-0 items-start gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white text-violet-700 shadow-sm ring-1 ring-violet-200/80">
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="18" cy="5" r="2.5" />
            <circle cx="6" cy="12" r="2.5" />
            <circle cx="18" cy="19" r="2.5" />
            <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
          </svg>
        </span>

        <div className="min-w-0">
          <h2 className="text-[14px] font-extrabold tracking-[-0.025em] text-slate-950 sm:text-[15px]">
            Social Media Templates
          </h2>
          <p className="mt-0.5 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
            Platform-specific templates to grow your presence.
          </p>
        </div>
      </div>

      <a
        href="/social"
        className="shrink-0 rounded-full px-2 py-1.5 text-[9px] font-extrabold text-violet-600 transition hover:bg-violet-50 sm:text-[10px]"
      >
        View All →
      </a>
    </div>
  );
}

export function SectionHeading({ icon, title, subtitle, href }: { icon: string; title: string; subtitle: string; href: string }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-4 sm:mb-3">
      <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-50 text-base text-violet-600 sm:h-8 sm:w-8">{icon}</span>
        <div className="min-w-0">
          <h2 className="text-[18px] font-black tracking-[-0.03em] text-slate-950 sm:text-[21px]">{title}</h2>
          <p className="mt-0.5 text-[12px] leading-4 text-slate-500 sm:text-[13px]">{subtitle}</p>
        </div>
      </div>
      <a href={href} className="shrink-0 text-[12px] font-extrabold text-violet-600 sm:text-[13px]">View All →</a>
    </div>
  );
}

export function TemplateCard({ item, compact = false }: { item: TemplateItem; compact?: boolean }) {
  return (
    <a href={templateHref(item)} className={"block overflow-hidden bg-white shadow-[0_6px_22px_rgba(15,23,42,.09)] ring-1 ring-slate-100 " + (compact ? "w-full rounded-xl" : "rounded-2xl")}>
      <div className={(compact ? "h-[138px] p-1.5" : "h-[180px] p-2 sm:h-[205px] xl:h-[220px]") + " flex items-center justify-center bg-slate-50"}>
        <div style={{ aspectRatio: item.ratio, height: "100%", width: "auto", maxWidth: "100%" }} className={(compact ? "rounded-lg" : "rounded-xl") + " relative overflow-hidden shadow-sm"}>
          <img src={item.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-black/5" />
          <span className={(compact ? "right-1.5 top-1.5 px-1.5 py-0.5 text-[9px]" : "right-2 top-2 px-2 py-1 text-[9px]") + " absolute rounded-md bg-black/60 font-black text-white backdrop-blur"}>{item.ratio.replace(" / ", ":")}</span>
          <div className={(compact ? "bottom-2.5 left-2.5 right-2" : "bottom-3 left-3 right-3") + " absolute text-white"}>
            <div className={(compact ? "text-[13px]" : "text-[17px]") + " max-w-[92%] font-black leading-[.95] tracking-[-0.03em]"}>{item.title.replace(" Template", "")}</div>
          </div>
        </div>
      </div>

      <div className={compact ? "p-2.5" : "p-3"}>
        <h3 className={(compact ? "text-[11px]" : "text-[12px] sm:text-[13px]") + " truncate font-extrabold text-slate-950"}>{item.title}</h3>
        <p className={(compact ? "text-[9px]" : "text-[10px] sm:text-[11px]") + " mt-0.5 truncate font-medium text-slate-500"}>{item.category}</p>
        <div className={(compact ? "mt-2 text-[9px]" : "mt-2 text-[10px]") + " flex items-center justify-between text-slate-400"}>
          <div className={compact ? "flex items-center gap-2" : "flex items-center gap-3"}>
            <span>♡ {item.likes}</span>
            <span>⇩ {item.downloads}</span>
          </div>
          <span>⌑</span>
        </div>
      </div>
    </a>
  );
}

function TrendingCollectionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 17 9 12l3 3 7-8" />
      <path d="M14 7h5v5" />
    </svg>
  );
}

export function PopularTemplatesHeading() {
  const filterOptions = [
    ["All", "all"],
    ["Free", "free"],
    ["Paid", "paid"],
    ["Premium", "premium"],
    ["Pro", "pro"],
  ];

  return (
    <div className="mb-2.5 flex items-end justify-between gap-3">
      <div className="flex min-w-0 items-start gap-2">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700 ring-1 ring-violet-200/70">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 17 9 12l3 3 7-8" />
            <path d="M14 7h5v5" />
          </svg>
        </span>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h2 className="text-[14px] font-extrabold tracking-[-0.025em] text-slate-950 sm:text-[15px]">
              Popular Templates
            </h2>

            <span className="hidden rounded-full bg-violet-50 px-2 py-0.5 text-[7px] font-extrabold uppercase tracking-[0.1em] text-violet-700 ring-1 ring-violet-100 sm:inline-flex">
              Curated
            </span>

            <details className="relative">
              <summary
                aria-label="Filter popular templates"
                className="grid h-6 w-6 cursor-pointer list-none place-items-center rounded-md border border-violet-100 bg-white/90 text-violet-700 shadow-sm transition hover:border-violet-200 hover:bg-violet-50 [&::-webkit-details-marker]:hidden"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 5h16M7 12h10M10 19h4" />
                </svg>
              </summary>

              <div className="absolute left-0 top-8 z-50 w-36 overflow-hidden rounded-xl border border-violet-100 bg-white p-1.5 shadow-[0_16px_38px_rgba(76,29,149,.16)]">
                {filterOptions.map(([label, value], index) => (
                  <a
                    key={value}
                    href={index === 0 ? "/templates" : "/templates?access=" + value}
                    className="flex items-center justify-between rounded-lg px-2.5 py-2 text-[10px] font-semibold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
                  >
                    <span>{label}</span>
                    <span
                      className={
                        "h-2 w-2 rounded-full " +
                        (value === "free"
                          ? "bg-emerald-500"
                          : value === "paid"
                            ? "bg-violet-600"
                            : value === "premium"
                              ? "bg-amber-400"
                              : value === "pro"
                                ? "bg-blue-500"
                                : "bg-slate-300")
                      }
                    />
                  </a>
                ))}
              </div>
            </details>
          </div>

          <p className="mt-0.5 text-[8px] leading-3 text-slate-500 sm:text-[9px]">
            Fresh, useful and trending designs picked for you.
          </p>
        </div>
      </div>

      <a
        href="/templates"
        className="shrink-0 rounded-full px-2 py-1.5 text-[9px] font-extrabold text-violet-600 transition hover:bg-violet-50 sm:text-[10px]"
      >
        View All →
      </a>
    </div>
  );
}

function AccessBadge({ access = "Free" }: { access?: TemplateItem["access"] }) {
  const classes =
    access === "Pro"
      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white ring-1 ring-blue-300/40"
      : access === "Premium"
        ? "bg-slate-950 text-amber-300 ring-1 ring-amber-300/35"
        : access === "Paid"
          ? "bg-violet-600 text-white ring-1 ring-violet-300/40"
          : "bg-emerald-500 text-white ring-1 ring-emerald-300/40";

  return (
    <span className={"inline-flex items-center rounded-full px-2.5 py-1 text-[8.5px] font-black leading-none tracking-[0.015em] antialiased shadow-[0_3px_10px_rgba(15,23,42,.18)] [text-rendering:geometricPrecision] " + classes}>
      {access}
    </span>
  );
}

function ratioNumber(ratio: string) {
  const normalized = String(ratio || "4 / 5")
    .trim()
    .replace(/\s*:\s*/g, " / ")
    .replace(/\s*\/\s*/g, " / ");
  const [width, height] = normalized.split(" / ").map(Number);
  return Number.isFinite(width) && Number.isFinite(height) && height > 0 ? width / height : 4 / 5;
}

export function CanvaTemplateCard({
  item,
  compact = false,
}: {
  item: TemplateItem;
  compact?: boolean;
}) {
  return (
    <a href={templateHref(item)} className={"group flex min-w-0 flex-col overflow-hidden rounded-[12px] bg-white/90 ring-1 ring-violet-100/90 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:ring-violet-200 hover:shadow-[0_12px_28px_rgba(76,29,149,.13)] " + (compact ? "h-full shadow-[0_4px_14px_rgba(76,29,149,.08)]" : "shadow-[0_6px_20px_rgba(76,29,149,.09)]")}>
      <div
        className={compact ? "relative h-[142px] overflow-hidden bg-slate-100" : "relative w-full overflow-hidden bg-slate-100"}
        style={compact ? undefined : { aspectRatio: item.ratio }}
      >
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute left-1.5 top-1.5 z-20">
          <AccessBadge access={item.access} />
        </div>

        <span className="absolute right-1.5 top-1.5 rounded-md bg-slate-950/78 px-1.5 py-1 text-[7.5px] font-extrabold leading-none text-white shadow-sm backdrop-blur">
          {item.ratio.replace(" / ", ":")}
        </span>
      </div>

      <div className="flex h-[48px] min-w-0 flex-col justify-center px-2.5">
        <h3 className="truncate text-[10.5px] font-black leading-[1.15] tracking-[-0.015em] text-slate-950 antialiased xl:text-[11px] [text-rendering:geometricPrecision]">
          {item.title}
        </h3>
        <p className="mt-0.5 truncate text-[8.5px] font-semibold leading-3 text-slate-600 antialiased xl:text-[9px] [text-rendering:geometricPrecision]">
          {item.category}
        </p>
      </div>
    </a>
  );
}

export function CanvaTemplateRow({
  items,
}: {
  items: TemplateItem[];
}) {
  return (
    <div
      className="flex w-full min-w-0 items-start justify-between"
      style={{ gap: "clamp(10px, .72vw, 14px)" }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={"min-w-0 flex-none shrink-0 " + templateCardWidthClass(item.ratio)}
        >
          <CanvaTemplateCard item={item} />
        </div>
      ))}
    </div>
  );
}

export function PopularTemplateCard({ item, compact = false }: { item: TemplateItem; compact?: boolean }) {
  return (
    <a href={templateHref(item)} className={"group relative block overflow-hidden border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_16px_36px_rgba(15,23,42,.12)] " + (compact ? "w-full rounded-2xl shadow-[0_6px_20px_rgba(15,23,42,.08)]" : "rounded-2xl shadow-[0_7px_24px_rgba(15,23,42,.07)]")}>
      <div className={(compact ? "h-[150px] p-2.5" : "h-[154px] p-3 xl:h-[164px]") + " relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50"}>
        <div className="absolute left-2.5 top-2.5 z-20">
          <AccessBadge access={item.access} />
        </div>

        <div
          style={{ aspectRatio: item.ratio, height: "100%", width: "auto", maxWidth: "100%" }}
          className="relative overflow-hidden rounded-xl bg-slate-200 shadow-[0_10px_25px_rgba(15,23,42,.18)] ring-1 ring-black/5 transition duration-300 group-hover:scale-[1.025]"
        >
          <img src={item.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-white/5" />
          <span className="absolute right-1.5 top-1.5 rounded-md bg-slate-950/65 px-1.5 py-0.5 text-[8px] font-extrabold text-white backdrop-blur">
            {item.ratio.replace(" / ", ":")}
          </span>
        </div>
      </div>

      <div className={compact ? "px-3 pb-3 pt-2.5" : "px-3.5 pb-3.5 pt-3"}>
        <div className="flex min-w-0 items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className={(compact ? "text-[12px]" : "text-[12px] xl:text-[13px]") + " truncate font-extrabold tracking-[-0.02em] text-slate-950"}>{item.title}</h3>
            <p className="mt-0.5 truncate text-[9px] font-medium text-slate-500 xl:text-[10px]">{item.category}</p>
          </div>
          <span className="shrink-0 rounded-full bg-slate-50 px-2 py-1 text-[9px] font-extrabold text-slate-600 ring-1 ring-slate-100">{item.price ?? item.access}</span>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[9px] font-medium text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">♡ {item.likes}</span>
            <span className="inline-flex items-center gap-1">⇩ {item.downloads}</span>
          </div>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-50 text-slate-500 transition group-hover:bg-violet-50 group-hover:text-violet-600">⌑</span>
        </div>
      </div>
    </a>
  );
}

export function TemplateStripCard({ item }: { item: TemplateItem }) {
  const widthClass =
    item.ratio === "16 / 9"
      ? "w-[250px] xl:w-[285px]"
      : item.ratio === "9 / 16"
        ? "w-[112px] xl:w-[130px]"
        : item.ratio === "1 / 1"
          ? "w-[176px] xl:w-[190px]"
          : "w-[146px] xl:w-[165px]";

  return (
    <a href={templateHref(item)} className={"block shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(15,23,42,.08)] ring-1 ring-slate-100 " + widthClass}>
      <div className="flex h-[168px] items-center justify-center bg-white p-1.5 xl:h-[174px]">
        <div
          style={{ aspectRatio: item.ratio, height: "100%", width: "auto", maxWidth: "100%" }}
          className="relative overflow-hidden rounded-lg"
        >
          <img src={item.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />
          <span className="absolute right-1.5 top-1.5 rounded-md bg-slate-950/60 px-1.5 py-0.5 text-[8px] font-black text-white backdrop-blur">
            {item.ratio.replace(" / ", ":")}
          </span>
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <div className="max-w-[95%] text-[13px] font-black leading-[.95] tracking-[-0.02em] xl:text-[14px]">
              {item.title.replace(" Template", "")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[70px] flex-col justify-between px-2.5 pb-2.5 pt-1.5">
        <div>
          <h3 className="truncate text-[10px] font-extrabold text-slate-950 xl:text-[11px]">{item.title}</h3>
          <p className="mt-0.5 truncate text-[8px] text-slate-500 xl:text-[9px]">{item.category}</p>
        </div>
        <div className="flex items-center justify-between text-[8px] text-slate-400">
          <div className="flex items-center gap-2.5">
            <span>♡ {item.likes}</span>
            <span>⇩ {item.downloads}</span>
          </div>
          <span>⌑</span>
        </div>
      </div>
    </a>
  );
}

function SocialIcon({
  id,
  name,
  logo,
}: {
  id: string;
  name: string;
  logo: string;
}) {
  return (
    <img
      src={logo}
      alt={name + " logo"}
      className={
        "block h-7 w-7 object-contain " +
        (id === "youtube" ? "h-6 w-8" : "")
      }
      loading="lazy"
    />
  );
}

export function PlatformTile({ platform }: { platform: (typeof socialPlatforms)[number] }) {
  return (
    <a href={"/social#" + platform.id} className={"group flex min-h-[74px] items-center justify-between rounded-xl bg-gradient-to-r " + platform.classes + " px-3 py-3 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:min-h-[72px] sm:px-4 sm:py-3"}>
      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-white/50">
          <SocialIcon id={platform.id} name={platform.name} logo={platform.logo} />
        </span>
        <div className="min-w-0">
          <div className="truncate text-[12px] font-black sm:text-[14px]">{platform.name}</div>
          <div className="mt-0.5 truncate text-[9px] text-white/80 sm:text-[10px]">{platform.subtitle}</div>
        </div>
      </div>
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15 text-sm transition group-hover:translate-x-0.5">→</span>
    </a>
  );
}

function WallpaperAccessBadge({ access }: { access: string }) {
  const classes =
    access === "Pro"
      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white ring-1 ring-blue-300/50"
      : access === "Premium"
        ? "bg-slate-950 text-amber-300 ring-1 ring-amber-300/40"
        : access === "Paid"
          ? "bg-violet-600 text-white ring-1 ring-violet-300/50"
          : "bg-emerald-500 text-white ring-1 ring-emerald-300/50";

  return (
    <span
      className={
        "px-2.5 py-1 text-[8.5px] font-black leading-none tracking-[0.01em] antialiased [text-rendering:geometricPrecision] " +
        classes
      }
    >
      {access}
    </span>
  );
}

export function WallpaperSectionHeading({
  kind,
  title,
  subtitle,
  href,
}: {
  kind: "desktop" | "mobile" | "tablet" | "ultrawide";
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div className="flex min-w-0 items-start gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white text-violet-700 shadow-sm ring-1 ring-violet-200/80">
          {kind === "desktop" ? (
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="12" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          ) : kind === "mobile" ? (
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
              <path d="M10.5 5h3M11 18.5h2" />
            </svg>
          ) : kind === "tablet" ? (
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
              <path d="M11 17.5h2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.5" y="6" width="19" height="10" rx="2" />
              <path d="M8 20h8M12 16v4" />
            </svg>
          )}
        </span>

        <div className="min-w-0">
          <h2 className="text-[14px] font-extrabold tracking-[-0.025em] text-slate-950 sm:text-[15px] antialiased [text-rendering:geometricPrecision]">
            {title}
          </h2>
          <p className="mt-0.5 text-[8.5px] font-medium leading-3 text-slate-600 sm:text-[9px] antialiased [text-rendering:geometricPrecision]">
            {subtitle}
          </p>
        </div>
      </div>

      <a href={href} className="shrink-0 rounded-full px-2 py-1.5 text-[9px] font-extrabold text-violet-600 transition hover:bg-violet-50 sm:text-[10px]">
        View All →
      </a>
    </div>
  );
}

export function WallpaperCard({
  item,
  mobile = false,
  collectionLabel,
  previewRatio,
}: {
  item: { id: string; title: string; ratio: string; image: string; access: string; pack: string };
  mobile?: boolean;
  collectionLabel?: string;
  previewRatio?: string;
}) {
  return (
    <a
      href="/wallpapers"
      className="group flex min-w-0 flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_6px_18px_rgba(76,29,149,.09)] ring-1 ring-violet-100/90 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(76,29,149,.14)]"
    >
      <div
        className="relative overflow-hidden bg-slate-100"
        style={{ aspectRatio: (previewRatio ?? item.ratio).replace(":", " / ") }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
        />

        <div className="absolute left-2 top-2 z-10 inline-flex items-center overflow-hidden rounded-full bg-white/95 shadow-[0_4px_12px_rgba(15,23,42,.18)] ring-1 ring-white/80 backdrop-blur">
          <WallpaperAccessBadge access={item.access} />
          <span className="border-l border-slate-200/80 px-2 py-1 text-[8px] font-black leading-none text-slate-900 antialiased [text-rendering:geometricPrecision]">
            {item.pack}
          </span>
        </div>

        <span className={"absolute right-2 top-2 z-10 rounded-md bg-slate-950/88 font-black leading-none text-white shadow-sm backdrop-blur antialiased [text-rendering:geometricPrecision] " + (mobile ? "px-1.5 py-1 text-[7.5px]" : "px-2 py-1 text-[8.5px]")}>
          {item.ratio}
        </span>
      </div>

      <div className="flex min-h-[52px] flex-col justify-center bg-white px-2.5 py-2">
        <h3 className="truncate text-[11px] font-black leading-[1.15] tracking-[-0.01em] text-slate-950 antialiased [text-rendering:geometricPrecision]">
          {item.title}
        </h3>
        <p className="mt-1 truncate text-[9px] font-semibold leading-3 text-slate-600 antialiased [text-rendering:geometricPrecision]">
          {collectionLabel ?? (mobile ? "Mobile Wallpaper Pack" : "Desktop Wallpaper Pack")}
        </p>
      </div>
    </a>
  );
}

export function AiStockImagesHeading() {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div className="flex min-w-0 items-start gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-100 via-violet-50 to-white text-violet-700 shadow-sm ring-1 ring-violet-200/80">
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <circle cx="9" cy="10" r="2" />
            <path d="m5 17 4-4 3 3 2-2 5 3" />
            <path d="M18 3v4M16 5h4" />
          </svg>
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <h2 className="text-[14px] font-extrabold tracking-[-0.025em] text-slate-950 sm:text-[15px]">
              AI Stock Images
            </h2>
            <span className="rounded-full bg-fuchsia-50 px-2 py-0.5 text-[7px] font-extrabold uppercase tracking-[0.1em] text-fuchsia-700 ring-1 ring-fuchsia-100">
              1000+ Ready
            </span>
          </div>
          <p className="mt-0.5 text-[8.5px] font-medium leading-3 text-slate-600 sm:text-[9px]">
            Realistic AI-generated visuals for creators, brands and campaigns.
          </p>
        </div>
      </div>

      <a
        href="/ai-images"
        className="shrink-0 rounded-full px-2 py-1.5 text-[9px] font-extrabold text-violet-600 transition hover:bg-violet-50 sm:text-[10px]"
      >
        View All →
      </a>
    </div>
  );
}

export function AiStockImageCard({
  item,
  compact = false,
}: {
  item: { id: string; title: string; category: string; access: string; ratio: string; image: string };
  compact?: boolean;
}) {
  const badgeClasses =
    item.access === "Pro"
      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
      : item.access === "Premium"
        ? "bg-slate-950 text-amber-300"
        : item.access === "Paid"
          ? "bg-violet-600 text-white"
          : "bg-emerald-500 text-white";

  return (
    <a
      href="/ai-images"
      className={
        "group flex min-w-0 flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_5px_16px_rgba(76,29,149,.08)] ring-1 ring-violet-100/90 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(76,29,149,.13)] " +
        (compact ? "h-full" : "")
      }
    >
      <div
        className={compact ? "relative h-[210px] overflow-hidden bg-slate-100" : "relative overflow-hidden bg-slate-100"}
        style={compact ? undefined : { aspectRatio: item.ratio }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.015]"
          loading="lazy"
        />

        <span className={"absolute left-2 top-2 rounded-full px-2.5 py-1 text-[8px] font-black leading-none shadow-sm ring-1 ring-white/30 " + badgeClasses}>
          {item.access}
        </span>

        <span className="absolute right-2 top-2 rounded-md bg-slate-950/82 px-1.5 py-1 text-[7.5px] font-black leading-none text-white shadow-sm backdrop-blur">
          {item.ratio.replace(" / ", ":")}
        </span>

        <span className="absolute bottom-2 left-2 rounded-full bg-white/92 px-2 py-1 text-[7px] font-black uppercase tracking-[0.08em] text-slate-700 shadow-sm backdrop-blur">
          AI Generated
        </span>
      </div>

      <div className="flex min-h-[48px] flex-col justify-center px-2.5 py-2">
        <h3 className="truncate text-[10px] font-black leading-3 text-slate-950 antialiased [text-rendering:geometricPrecision]">
          {item.title}
        </h3>
        <p className="mt-0.5 truncate text-[8px] font-semibold leading-3 text-slate-500">
          {item.category} • Stock Image
        </p>
      </div>
    </a>
  );
}

export function AiStockImageRow({
  items,
}: {
  items: typeof aiStockImages;
}) {
  return (
    <div className="flex w-full min-w-0 items-start gap-2.5">
      {items.map((item) => (
        <div
          key={item.id}
          className="min-w-0"
          style={{
            flexGrow: ratioNumber(item.ratio),
            flexBasis: 0,
          }}
        >
          <AiStockImageCard item={item} compact />
        </div>
      ))}
    </div>
  );
}

export function AiPromptMarketplaceHeading() {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div className="flex min-w-0 items-start gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-100 via-fuchsia-50 to-orange-50 text-violet-700 shadow-sm ring-1 ring-violet-200/80">
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3 14 8l5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
            <path d="m18 15 .9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15Z" />
          </svg>
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <h2 className="text-[14px] font-extrabold tracking-[-0.025em] text-slate-950 sm:text-[15px]">
              AI Prompt Marketplace
            </h2>
            <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[7px] font-extrabold uppercase tracking-[0.1em] text-violet-700 ring-1 ring-violet-100">
              Prompt Packs
            </span>
          </div>
          <p className="mt-0.5 text-[8.5px] font-medium leading-3 text-slate-600 sm:text-[9px]">
            Ready-to-use image generation prompts for creators, brands and campaigns.
          </p>
        </div>
      </div>
      <a href="/ai-prompts" className="shrink-0 rounded-full px-2 py-1.5 text-[9px] font-extrabold text-violet-600 transition hover:bg-violet-50 sm:text-[10px]">
        View All →
      </a>
    </div>
  );
}

export function AiPromptCard({
  item,
  mobileCompact = false,
}: {
  item: {
    id: string;
    title: string;
    category: string;
    access: string;
    count: string;
    ratio: string;
    tools: string[];
    preview: string;
    accent: string;
  };
  mobileCompact?: boolean;
}) {
  const accessClass =
    item.access === "Pro"
      ? "bg-blue-600 text-white"
      : item.access === "Premium"
        ? "bg-slate-950 text-amber-300"
        : item.access === "Paid"
          ? "bg-violet-600 text-white"
          : "bg-emerald-500 text-white";

  return (
    <a
      href="/ai-prompts"
      className="group flex min-w-0 flex-col overflow-hidden rounded-[15px] bg-white shadow-[0_7px_20px_rgba(76,29,149,.09)] ring-1 ring-violet-100/90 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(76,29,149,.15)]"
    >
      <div className={"relative overflow-hidden bg-gradient-to-br text-white " + item.accent + (mobileCompact ? " min-h-[108px] p-2.5" : " min-h-[138px] p-3.5")}>
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/20 bg-white/10" />
        <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-black/10 blur-xl" />
        <div className="relative flex items-center justify-between gap-2">
          <span className={"rounded-full px-2.5 py-1 text-[8px] font-black leading-none shadow-sm " + accessClass}>
            {item.access}
          </span>
          <span className="rounded-full bg-white/16 px-2 py-1 text-[8px] font-black text-white backdrop-blur">
            {item.count}
          </span>
        </div>
        <div className={mobileCompact ? "relative mt-5" : "relative mt-7"}>
          <p className={mobileCompact ? "text-[7px] font-black uppercase tracking-[0.12em] text-white/75" : "text-[8px] font-black uppercase tracking-[0.14em] text-white/75"}>
            {item.category} Prompts
          </p>
          <h3 className={mobileCompact ? "mt-1 max-w-[96%] text-[13px] font-black leading-[1.02] tracking-[-0.03em] text-white" : "mt-1.5 max-w-[90%] text-[16px] font-black leading-[1.05] tracking-[-0.035em] text-white"}>
            {item.title}
          </h3>
        </div>
      </div>

      <div className={mobileCompact ? "flex flex-1 flex-col p-2.5" : "flex flex-1 flex-col p-3"}>
        <div className={mobileCompact ? "rounded-lg bg-slate-50 px-2 py-1.5 ring-1 ring-slate-100" : "rounded-xl bg-slate-50 px-2.5 py-2 ring-1 ring-slate-100"}>
          <p className={mobileCompact ? "line-clamp-1 text-[7.5px] font-medium leading-3 text-slate-600" : "line-clamp-2 text-[8.5px] font-medium leading-4 text-slate-600"}>
            “{item.preview}”
          </p>
        </div>

        <div className={mobileCompact ? "mt-1.5 flex flex-wrap gap-1" : "mt-2 flex flex-wrap gap-1"}>
          {item.tools.slice(0, mobileCompact ? 2 : 3).map((tool) => (
            <span key={tool} className={mobileCompact ? "rounded-full bg-violet-50 px-1.5 py-0.5 text-[6.5px] font-bold text-violet-700 ring-1 ring-violet-100" : "rounded-full bg-violet-50 px-2 py-1 text-[7px] font-bold text-violet-700 ring-1 ring-violet-100"}>
              {tool}
            </span>
          ))}
        </div>

        <div className={mobileCompact ? "mt-1.5 flex items-center justify-between border-t border-slate-100 pt-1.5" : "mt-2 flex items-center justify-between border-t border-slate-100 pt-2"}>
          <span className={mobileCompact ? "text-[7px] font-bold text-slate-500" : "text-[8px] font-bold text-slate-500"}>Image Prompt Pack</span>
          <span className={mobileCompact ? "rounded-md bg-slate-950 px-1.5 py-0.5 text-[6.5px] font-black text-white" : "rounded-md bg-slate-950 px-1.5 py-1 text-[7.5px] font-black text-white"}>{item.ratio}</span>
        </div>
      </div>
    </a>
  );
}

export function CategoryChips() {
  const chips = [
    { label: "All", href: "/", icon: "all" },
    { label: "Social Media", href: "/social", icon: "social" },
    { label: "YouTube", href: "/social#youtube", logo: "/social-icons/youtube.webp" },
    { label: "Instagram", href: "/social#instagram", logo: "/social-icons/instagram.webp" },
    { label: "Facebook", href: "/social#facebook", logo: "/social-icons/facebook.webp" },
    { label: "X / Twitter", href: "/social#x", logo: "/social-icons/x.webp" },
    { label: "LinkedIn", href: "/social#linkedin", logo: "/social-icons/linkedin.webp" },
    { label: "Pinterest", href: "/social#pinterest", logo: "/social-icons/pinterest.webp" },
    { label: "Wallpapers", href: "/wallpapers", icon: "wallpaper" },
    { label: "Presentations", href: "/templates", icon: "presentation" },
    { label: "Print", href: "/templates", icon: "print" },
    { label: "More", href: "#more", icon: "more" },
  ];

  const UtilityIcon = ({ type }: { type?: string }) => {
    if (type === "all") {
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      );
    }
    if (type === "social") {
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="6" cy="12" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
          <circle cx="18" cy="17" r="2.2" />
          <path d="m8 11 7.8-3M8 13l7.8 3" />
        </svg>
      );
    }
    if (type === "wallpaper") {
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m6 16 4-4 3 3 2-2 3 3" />
        </svg>
      );
    }
    if (type === "presentation") {
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 5h16v11H4zM8 20h8M12 16v4" />
        </svg>
      );
    }
    if (type === "print") {
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M7 8V4h10v4M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
          <path d="M7 14h10v6H7z" />
        </svg>
      );
    }
    return <span className="text-[13px] font-black leading-none">•••</span>;
  };

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {chips.map((chip, index) => (
        <a
          key={chip.label}
          href={chip.href}
          className={
            "flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-bold transition sm:px-4 sm:text-[12px] " +
            (index === 0
              ? "border-violet-600 bg-violet-600 text-white"
              : "border-slate-200 bg-white text-slate-700 hover:border-violet-200 hover:text-violet-700")
          }
        >
          {chip.logo ? (
            <span className="grid h-[18px] w-[18px] shrink-0 place-items-center overflow-hidden rounded-[5px] bg-white p-[1px]">
              <img src={chip.logo} alt="" className="h-full w-full object-contain" loading="lazy" />
            </span>
          ) : (
            <UtilityIcon type={chip.icon} />
          )}
          <span>{chip.label}</span>
        </a>
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[250px] overflow-hidden rounded-[22px] bg-gradient-to-r from-[#fff1e4] via-[#ffe6f0] to-[#eddcff] px-5 py-7 sm:min-h-[270px] sm:px-8 sm:py-8 lg:min-h-[285px] lg:px-12">
      <div className="relative z-20 max-w-[600px] pr-[38%] sm:pr-[42%] lg:w-[46%] lg:pr-0">
        <p className="text-[8px] font-black uppercase tracking-[0.3em] text-pink-600 sm:text-[9px] lg:text-[10px]">
          Premium templates for creators
        </p>
        <h1 className="mt-3 text-[32px] font-black leading-[.96] tracking-[-0.06em] text-slate-950 sm:text-[40px] lg:text-[52px]">
          Create. Share. Grow.
        </h1>
        <p className="mt-3 max-w-[490px] text-[11px] leading-4.5 text-slate-600 sm:text-[13px] sm:leading-5 lg:text-[14px]">
          Beautiful templates, wallpapers and creative assets for your next big idea. Carefully crafted. Instantly ready.
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <a href="/templates" className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 px-5 py-2.5 text-[11px] font-black text-white shadow-lg shadow-pink-200/50 sm:text-xs">
            Browse Templates →
          </a>
          <a href="/wallpapers" className="hidden rounded-full border border-pink-300 bg-white/60 px-5 py-2.5 text-xs font-bold text-slate-800 sm:inline-flex">
            Explore Wallpapers
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] sm:w-[54%] lg:w-[56%]">
        <div className="absolute bottom-[-12%] left-[2%] w-[27%] -rotate-6 overflow-hidden rounded-[16px] border-2 border-white/90 shadow-[0_20px_45px_rgba(82,37,129,.18)]">
          <div className="relative aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=85" alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/35 to-transparent" />
            <div className="absolute left-4 top-7 text-[9px] font-black uppercase leading-4 tracking-[0.18em] text-white sm:text-[11px]">Good<br/>Ideas<br/>Brighter<br/>Future</div>
          </div>
        </div>

        <div className="absolute bottom-[-16%] left-[23%] z-30 w-[31%] rotate-2 overflow-hidden rounded-[16px] border-2 border-white/95 shadow-[0_24px_55px_rgba(82,37,129,.24)]">
          <div className="aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=88" alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="absolute bottom-[-10%] right-[15%] z-20 w-[29%] rotate-[-5deg] overflow-hidden rounded-[16px] border-2 border-white/95 shadow-[0_20px_48px_rgba(82,37,129,.2)]">
          <div className="relative aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=86" alt="" className="h-full w-full object-cover" />
            <div className="absolute bottom-5 right-4 text-right font-serif text-[12px] italic leading-4 text-white sm:text-[14px]">Keep<br/>Going</div>
          </div>
        </div>

        <div className="absolute bottom-[-14%] right-[-3%] w-[25%] rotate-6 overflow-hidden rounded-[16px] border-2 border-white/90 shadow-[0_18px_44px_rgba(82,37,129,.16)]">
          <div className="relative aspect-[4/5] bg-gradient-to-br from-pink-200 via-orange-200 to-fuchsia-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.7),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,.35),transparent_35%)]" />
            <div className="absolute right-3 top-[28%] text-right text-[7px] font-bold uppercase leading-3 tracking-[0.2em] text-pink-700 sm:text-[8px]">
              Create<br/>Something<br/>Amazing<br/>Today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const explore = [
    ["Home", "/"],
    ["Templates", "/templates"],
    ["AI Prompt Marketplace", "/ai-prompts"],
    ["AI Stock Images", "/#ai-stock-images"],
    ["Social Media", "/social"],
    ["Wallpapers", "/wallpapers"],
  ];

  const wallpaperLinks = [
    ["Desktop & Laptop", "/wallpapers#desktop"],
    ["Mobile", "/wallpapers#mobile"],
    ["Tablet", "/wallpapers#tablet"],
    ["Ultra-wide", "/wallpapers#ultrawide"],
  ];

  const company = [
    ["About KUMFU", "/about"],
    ["Blog", "/blog"],
    ["Advertise", "/advertise"],
  ];

  const support = [
    ["Search", "/search"],
    ["Cart", "/cart"],
    ["Contact", "/contact"],
    ["Terms", "/terms"],
    ["Privacy", "/privacy"],
    ["Refund Policy", "/refund"],
  ];

  return (
    <footer className="mt-14 overflow-hidden border-t border-violet-100 bg-slate-950 text-white">
      <div className="relative">
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-violet-600/20 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[100px]" />

        <div className="relative border-b border-white/10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-violet-200">
                KUMFU Shop
              </span>
              <h2 className="mt-3 max-w-2xl text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                Create faster. Publish better. Find everything in one marketplace.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Premium templates, AI stock images, social media designs and wallpapers for creators, businesses and everyday projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              <a
                href="/templates"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-5 py-3 text-xs font-black text-white shadow-[0_10px_28px_rgba(168,85,247,.25)] transition hover:brightness-110"
              >
                Explore Templates →
              </a>
              <a
                href="/#ai-stock-images"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                Browse AI Images
              </a>
            </div>
          </div>
        </div>

        <div className="relative grid gap-9 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.5fr_.85fr_.85fr_.85fr_.95fr] lg:px-8">
          <div>
            <a href="/" className="inline-flex items-center gap-2.5" aria-label="KUMFU Shop home">
              <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[9px] bg-white shadow-[0_6px_18px_rgba(255,255,255,.08)]">
                <img
                  src="/brand/kumfu-icon.webp"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex items-start">
                <span className="text-[19px] font-black leading-none tracking-[-0.045em] text-white">
                  KUMFU<span className="font-extrabold">Shop</span>
                </span>
                <span className="ml-0.5 -mt-0.5 text-[7px] font-black text-slate-400">™</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-[12px] leading-6 text-slate-400">
              A digital marketplace for ready-to-use creative assets, built to make design faster and simpler.
            </p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-300">
              A brand of Narayan Industries (NRI)
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Free Assets", "Premium Packs", "Creator Ready"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-[8px] font-bold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-white">Explore</h3>
            <div className="mt-4 grid gap-3">
              {explore.map(([label, href]) => (
                <a key={label} href={href} className="text-[11px] font-semibold text-slate-400 transition hover:translate-x-0.5 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-white">Wallpapers</h3>
            <div className="mt-4 grid gap-3">
              {wallpaperLinks.map(([label, href]) => (
                <a key={label} href={href} className="text-[11px] font-semibold text-slate-400 transition hover:translate-x-0.5 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-white">Company</h3>
            <div className="mt-4 grid gap-3">
              {company.map(([label, href]) => (
                <a key={label} href={href} className="text-[11px] font-semibold text-slate-400 transition hover:translate-x-0.5 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.14em] text-white">Help & Legal</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 lg:grid-cols-1">
              {support.map(([label, href]) => (
                <a key={label} href={href} className="text-[11px] font-semibold text-slate-400 transition hover:translate-x-0.5 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 KUMFU Shop. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a href="/terms" className="transition hover:text-white">Terms</a>
              <a href="/privacy" className="transition hover:text-white">Privacy</a>
              <a href="/refund" className="transition hover:text-white">Refund</a>
              <span className="text-slate-600">Built by Narayan Industries</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
