"use client";

import { useEffect, useId, useRef, useState, type TouchEvent } from "react";
import { defaultHeroSlides, type HeroCard, type HeroSlide } from "../../lib/hero";

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function WaveBackground({ slide, idPrefix }: { slide: HeroSlide; idPrefix: string }) {
  const mobilePrimary = `${idPrefix}-heroMobilePrimary`;
  const mobileSecondary = `${idPrefix}-heroMobileSecondary`;
  const desktopPrimary = `${idPrefix}-heroDesktopPrimary`;
  const desktopSecondary = `${idPrefix}-heroDesktopSecondary`;

  return (
    <>
      <div className="absolute inset-0" style={{ background: slide.background }} />

      {/* Mobile-only atmosphere. Uses its own 390×430 geometry so the waves never look horizontally compressed. */}
      <div className="absolute -left-[20%] -top-[18%] h-[72%] w-[95%] rounded-full bg-white/45 blur-[55px] lg:hidden" />
      <div
        className="absolute left-[35%] top-[34%] h-[55%] w-[72%] rounded-full blur-[58px] lg:hidden"
        style={{ background: slide.glowPrimary }}
      />
      <div
        className="absolute right-[-18%] top-[8%] h-[60%] w-[70%] rounded-full blur-[55px] lg:hidden"
        style={{ background: slide.glowSecondary }}
      />

      <svg
        className="absolute inset-0 h-full w-full lg:hidden"
        viewBox="0 0 390 430"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={mobilePrimary} x1="0" x2="1">
            <stop offset="0%" stopColor={slide.waveStart} />
            <stop offset="48%" stopColor={slide.waveMid} />
            <stop offset="100%" stopColor={slide.waveEnd} />
          </linearGradient>
          <linearGradient id={mobileSecondary} x1="0" x2="1">
            <stop offset="0%" stopColor={slide.secondaryStart} />
            <stop offset="55%" stopColor={slide.waveEnd} />
            <stop offset="100%" stopColor={slide.secondaryEnd} />
          </linearGradient>
        </defs>

        <path
          d="M0 372 C 74 366, 132 345, 178 300 C 224 255, 247 187, 292 148 C 330 115, 360 120, 390 140 L390 430 L0 430 Z"
          fill={`url(#${mobilePrimary})`}
          opacity="0.88"
        />
        <path
          d="M0 410 C 96 396, 164 378, 214 334 C 264 290, 287 238, 329 212 C 353 197, 376 198, 390 207 L390 430 L0 430 Z"
          fill={`url(#${mobileSecondary})`}
          opacity="0.76"
        />
        <path
          d="M0 398 C 104 386, 174 366, 224 319 C 269 277, 292 226, 334 201 C 357 187, 378 189, 390 197"
          fill="none"
          stroke="rgba(255,255,255,.92)"
          strokeWidth="3.2"
        />
        <path
          d="M0 426 C 122 407, 194 391, 246 350 C 294 311, 319 272, 358 258 C 371 253, 382 253, 390 256"
          fill="none"
          stroke="rgba(255,255,255,.34)"
          strokeWidth="12"
        />
      </svg>

      {/* Desktop/tablet atmosphere stays unchanged. */}
      <div className="absolute -left-[10%] -top-[48%] hidden h-[125%] w-[68%] rounded-full bg-white/55 blur-[72px] lg:block" />
      <div
        className="absolute left-[37%] top-[22%] hidden h-[78%] w-[43%] rounded-full blur-[80px] lg:block"
        style={{ background: slide.glowPrimary }}
      />
      <div
        className="absolute right-[3%] -top-[14%] hidden h-[82%] w-[40%] rounded-full blur-[78px] lg:block"
        style={{ background: slide.glowSecondary }}
      />

      <svg
        className="absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1600 420"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={desktopPrimary} x1="0" x2="1">
            <stop offset="0%" stopColor={slide.waveStart} />
            <stop offset="45%" stopColor={slide.waveMid} />
            <stop offset="100%" stopColor={slide.waveEnd} />
          </linearGradient>
          <linearGradient id={desktopSecondary} x1="0" x2="1">
            <stop offset="0%" stopColor={slide.secondaryStart} />
            <stop offset="56%" stopColor={slide.waveEnd} />
            <stop offset="100%" stopColor={slide.secondaryEnd} />
          </linearGradient>
        </defs>

        <path
          d="M0 390 C 260 376, 430 365, 585 326 C 746 286, 812 208, 932 150 C 1090 74, 1280 78, 1600 132 L1600 420 L0 420 Z"
          fill={`url(#${desktopPrimary})`}
          opacity="0.84"
        />
        <path
          d="M0 414 C 288 390, 500 416, 724 366 C 900 327, 972 263, 1095 206 C 1260 131, 1412 139, 1600 180 L1600 420 L0 420 Z"
          fill={`url(#${desktopSecondary})`}
          opacity="0.67"
        />
        <path
          d="M0 400 C 330 366, 530 414, 790 370 C 1005 333, 1080 268, 1208 228 C 1365 178, 1492 191, 1600 216"
          fill="none"
          stroke="rgba(255,255,255,.82)"
          strokeWidth="3"
        />
        <path
          d="M250 420 C 540 384, 730 414, 970 359 C 1160 316, 1300 258, 1600 276"
          fill="none"
          stroke="rgba(255,255,255,.28)"
          strokeWidth="12"
        />
      </svg>
    </>
  );
}

export function HeroCardView({
  card,
  index,
  active,
}: {
  card: HeroCard;
  index: number;
  active: boolean;
}) {
  const mobilePositions = [
    "left-[3%] top-[44px] w-[30%] -rotate-[6deg] z-10",
    "left-[31%] top-[18px] w-[38%] rotate-[1deg] z-30",
    "left-[67%] top-[46px] w-[30%] -rotate-[4deg] z-20",
    "hidden",
  ];

  const desktopPositions = [
    "lg:left-[12%] lg:top-[42px] lg:w-[18%] lg:-rotate-[6deg] lg:z-10",
    "lg:left-[31%] lg:top-[20px] lg:w-[20%] lg:rotate-[2deg] lg:z-30",
    "lg:left-[51%] lg:top-[44px] lg:w-[18%] lg:-rotate-[5deg] lg:z-20",
    "lg:left-[70%] lg:right-auto lg:top-[36px] lg:block lg:w-[17%] lg:rotate-[6deg] lg:z-10",
  ];

  return (
    <div
      className={
        "absolute overflow-hidden rounded-[15px] border-2 border-white/95 bg-white shadow-[0_20px_48px_rgba(75,35,120,.22)] transition-all duration-700 " +
        mobilePositions[index] +
        " " +
        desktopPositions[index] +
        (active ? " translate-y-0 opacity-100" : " translate-y-4 opacity-0")
      }
      style={{ transitionDelay: active ? index * 65 + "ms" : "0ms" }}
    >
      <div
        className={card.kind === "landscape" ? "aspect-[16/10]" : card.kind === "square" ? "aspect-square" : "aspect-[4/5]"}
        style={card.gradient ? { background: card.gradient } : undefined}
      >
        {card.image ? <img src={card.image} alt={card.altText ?? ""} className="h-full w-full object-cover" /> : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />
        {card.label ? (
          <div className="absolute left-3 top-4 whitespace-pre-line text-[8px] font-extrabold uppercase leading-3 tracking-[0.15em] text-white sm:text-[9px] lg:left-4 lg:top-5 lg:text-[10px] lg:leading-4">
            {card.label}
          </div>
        ) : null}
        {card.sublabel ? (
          <span className="absolute bottom-3 left-3 rounded-full bg-black/20 px-2 py-1 text-[7px] font-extrabold uppercase tracking-[0.1em] text-white backdrop-blur sm:text-[8px]">
            {card.sublabel}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function HeroSlideView({
  slide,
  active = true,
  idPrefix,
}: {
  slide: HeroSlide;
  active?: boolean;
  idPrefix: string;
}) {
  return (
    <div key={slide.title} className="relative h-full animate-[heroFade_.65s_ease-out]">
      <WaveBackground slide={slide} idPrefix={idPrefix} />

      <div className="relative z-20 h-full px-5 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-8">
        <div className="relative z-30 max-w-[610px] lg:w-[44%]">
          <p className="text-[8px] font-extrabold uppercase tracking-[0.32em] text-pink-600 sm:text-[9px] lg:text-[10px]">
            {slide.eyebrow}
          </p>

          <h1 className="mt-3 max-w-[650px] text-[34px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#0b1027] sm:text-[42px] lg:text-[52px]">
            {slide.title}
          </h1>

          <p className="mt-3 max-w-[510px] text-[12px] font-medium leading-[1.55] text-slate-700 sm:text-[13px] lg:text-[14px]">
            {slide.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 lg:mt-4">
            <a
              href={slide.primaryHref}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 px-5 py-2.5 text-[11px] font-extrabold text-white shadow-lg shadow-pink-200/50 sm:text-xs lg:px-6 lg:py-3"
            >
              {slide.primaryLabel} →
            </a>
            <a
              href={slide.secondaryHref}
              className="hidden rounded-full border border-pink-300 bg-white/65 px-5 py-2.5 text-xs font-bold text-slate-800 backdrop-blur sm:inline-flex lg:px-6 lg:py-3"
            >
              {slide.secondaryLabel}
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[24px] left-1/2 z-20 h-[188px] w-[86%] -translate-x-1/2 sm:bottom-0 sm:left-auto sm:right-0 sm:h-[205px] sm:w-[64%] sm:translate-x-0 lg:top-0 lg:h-full lg:w-[58%]">
          {slide.cards.slice(0, 4).map((card, cardIndex) => (
            <HeroCardView key={card.id ?? cardIndex} card={card} index={cardIndex} active={active} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroCarousel({ slides = defaultHeroSlides }: { slides?: HeroSlide[] }) {
  const safeSlides = slides.length ? slides : defaultHeroSlides;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const id = useId().replace(/:/g, "");
  const slide = safeSlides[active] ?? safeSlides[0];
  const hasMultipleSlides = safeSlides.length > 1;

  useEffect(() => {
    if (paused || !hasMultipleSlides) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % safeSlides.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [hasMultipleSlides, paused, safeSlides.length]);

  const goTo = (index: number) => {
    if (!hasMultipleSlides) return;
    setActive((index + safeSlides.length) % safeSlides.length);
  };

  const onTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 45) return;
    goTo(active + (delta < 0 ? 1 : -1));
  };

  return (
    <section
      className="group relative h-[430px] overflow-hidden rounded-[22px] sm:h-[360px] sm:rounded-[24px] lg:h-[300px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <HeroSlideView slide={slide} idPrefix={`${id}-${active}`} />

      {hasMultipleSlides ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(active - 1)}
            className="absolute left-3 top-1/2 z-40 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-slate-700 shadow-lg ring-1 ring-white/70 backdrop-blur transition hover:bg-white sm:grid lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ArrowLeft />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(active + 1)}
            className="absolute right-3 top-1/2 z-40 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-slate-700 shadow-lg ring-1 ring-white/70 backdrop-blur transition hover:bg-white sm:grid lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ArrowRight />
          </button>

          <div className="absolute bottom-2.5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/78 px-2.5 py-1.5 shadow-sm backdrop-blur sm:bottom-3">
            {safeSlides.map((item, index) => (
              <button
                key={item.id ?? item.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={"Go to slide " + (index + 1)}
                className={
                  "h-1.5 rounded-full transition-all duration-300 " +
                  (active === index ? "w-5 bg-violet-600" : "w-1.5 bg-slate-400/60")
                }
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
