import HeroCarousel from "./components/hero-carousel";
import { defaultHeroSlides } from "../lib/hero";
import {
  WallpaperSectionHeading, WallpaperCard,
  desktopWallpapers, mobileWallpapers, tabletWallpapers, ultraWideWallpapers
} from "./components/marketplace-ui";

const sections = [
  { id: "desktop", kind: "desktop" as const, title: "Desktop & Laptop Wallpapers", subtitle: "Beautiful widescreen backgrounds for your setup.", items: desktopWallpapers },
  { id: "mobile", kind: "mobile" as const, title: "Mobile Wallpapers", subtitle: "Fresh looks for every phone screen.", items: mobileWallpapers },
  { id: "tablet", kind: "tablet" as const, title: "Tablet Wallpapers", subtitle: "Perfectly sized for tablet displays.", items: tabletWallpapers },
  { id: "ultrawide", kind: "ultrawide" as const, title: "Ultra-wide Wallpapers", subtitle: "Panoramic visuals for expansive screens.", items: ultraWideWallpapers }
];
const slides = defaultHeroSlides.map(slide => ({
  ...slide,
  primaryHref: "#wallpapers",
  secondaryHref: "#collections"
}));
export default function Home() {
  return <main className="min-h-screen w-full overflow-x-clip bg-white pt-[66px] text-slate-950">
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-violet-100/70 bg-white/95 shadow-[0_4px_20px_rgba(30,41,59,.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[66px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-[30px]">
        <a href="/" className="flex shrink-0 items-center gap-2" aria-label="KUMFU Shop home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 text-xl font-black text-white shadow-md">K</span>
          <span className="text-[19px] font-black tracking-[-.05em] text-slate-950">KUMFU<span className="text-violet-700">Shop</span></span>
        </a>
        <nav className="hidden items-center gap-6 text-xs font-extrabold text-slate-700 sm:flex" aria-label="Main navigation">
          <a href="/" className="hover:text-violet-700">Home</a>
          <a href="#wallpapers" className="hover:text-violet-700">Wallpapers</a>
          <a href="#collections" className="hover:text-violet-700">Collections</a>
          <a href="#delivery" className="hover:text-violet-700">Delivery</a>
        </nav>
        <a href="#wallpapers" className="rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-4 py-2.5 text-[11px] font-black text-white shadow-sm">Explore Wallpapers →</a>
      </div>
    </header>
    <div className="mx-auto flex w-full min-w-0 max-w-full flex-col px-4 pb-10 pt-0 sm:px-6 lg:px-[30px]">
      <HeroCarousel slides={slides} />
      <section id="collections" className="mt-5 rounded-[22px] border border-violet-100/80 bg-gradient-to-br from-[#f7f3ff] via-[#fff6fb] to-[#f3f7ff] px-4 py-5 shadow-[0_12px_34px_rgba(76,29,149,.08)] sm:px-6">
        <p className="text-[10px] font-black uppercase tracking-[.18em] text-violet-700">KUMFU Shop collections</p>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950">Wallpapers for every screen</h2>
        <p className="mt-2 text-xs font-medium leading-5 text-slate-600">The same original KUMFU visual experience, focused on wallpapers. Sample catalog previews are displayed while premium packs are prepared.</p>
        <div className="mt-4 flex flex-wrap gap-2">{sections.map(s=><a key={s.id} href={"#"+s.id} className="rounded-full border border-violet-200 bg-white px-4 py-2 text-[11px] font-extrabold text-violet-700 shadow-sm hover:bg-violet-50">{s.title} ↗</a>)}</div>
      </section>
      <div id="wallpapers" className="scroll-mt-24">
        {sections.map(section=><section key={section.id} id={section.id} className="mt-7 scroll-mt-24 rounded-[22px] border border-violet-100/80 bg-gradient-to-br from-[#f7f3ff] via-[#fff6fb] to-[#f3f7ff] px-3 py-4 shadow-[0_12px_34px_rgba(76,29,149,.08)] sm:px-4">
          <WallpaperSectionHeading kind={section.kind} title={section.title} subtitle={section.subtitle} href={"#"+section.id} />
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {section.items.map(item=><WallpaperCard key={item.id} item={item} mobile={section.kind==="mobile"} />)}
          </div>
        </section>)}
      </div>
      <section id="delivery" className="mt-8 rounded-[22px] border border-violet-100 bg-white px-5 py-7 shadow-[0_8px_25px_rgba(76,29,149,.06)] sm:px-8">
        <p className="text-[10px] font-black uppercase tracking-widest text-violet-700">Digital delivery</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950">Premium packs are coming soon</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">The images currently displayed are illustrative sample previews from the original KUMFU project. They are not paid products. Official prices, verified payment links, final policies and private Google Drive delivery will be enabled only when the real packs are ready.</p>
      </section>
    </div>
    <footer className="mt-10 border-t border-violet-900 bg-slate-950 px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row"><div><p className="text-xl font-black">KUMFU<span className="text-violet-300">Shop</span></p><p className="mt-2 text-xs text-slate-400">A brand of Narayan Industries.</p></div><div className="flex flex-wrap gap-5 text-xs font-semibold text-slate-300"><a href="#wallpapers">Wallpapers</a><a href="#collections">Collections</a><a href="#delivery">Delivery</a></div></div>
    </footer>
  </main>;
}
