/* Original KUMFU Shop wallpaper data and components, extracted without editor/CMS code. */
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
      href="#wallpapers"
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

