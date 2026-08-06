import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/gofly-data";
import { SearchWidget } from "./SearchWidget";

const bannerTexts = [
  "Enjoy Family Holiday Packages with Flexible Payment Options",
  "Book Your Dream Vacation at Unbeatable Prices Today",
  "Explore 500+ Destinations with Expert Guided Tours",
];

export function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
    Fade(),
  ]);
  const [selected, setSelected] = useState(0);
  const [bannerIdx, setBannerIdx] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  const prevBanner = () => setBannerIdx((i) => (i === 0 ? bannerTexts.length - 1 : i - 1));
  const nextBanner = () => setBannerIdx((i) => (i === bannerTexts.length - 1 ? 0 : i + 1));

  return (
    <section className="relative mt-[64px] sm:mt-[80px]">
      {/* Blue promotional banner */}
      <div className="bg-brand py-2 sm:py-3">
        <div className="container-gofly flex items-center justify-center gap-2 sm:gap-4">
          <button
            aria-label="Previous"
            onClick={prevBanner}
            className="grid size-7 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/20 sm:size-8"
          >
            <ChevronLeft className="size-3.5 sm:size-4" />
          </button>
          <p className="max-w-[200px] text-center font-display text-[11px] font-medium text-white sm:max-w-none sm:text-sm md:text-base">
            {bannerTexts[bannerIdx]}
          </p>
          <button
            aria-label="Next"
            onClick={nextBanner}
            className="grid size-7 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/20 sm:size-8"
          >
            <ChevronRight className="size-3.5 sm:size-4" />
          </button>
        </div>
      </div>

      {/* Hero slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide, i) => (
            <div key={slide.title} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[480px]">
                {"video" in slide && slide.video ? (
                  <video
                    src={slide.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`absolute inset-0 size-full object-cover transition-transform duration-[7000ms] ease-out ${
                      selected === i ? "scale-110" : "scale-100"
                    }`}
                  />
                ) : (
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className={`absolute inset-0 size-full object-cover transition-transform duration-[7000ms] ease-out ${
                      selected === i ? "scale-110" : "scale-100"
                    }`}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/20 to-dark/50" />
                <div className="container-gofly relative flex h-full flex-col items-center justify-center px-4 text-center">
                  <h1
                    key={`t-${selected}-${i}`}
                    className="max-w-3xl font-display text-2xl font-bold text-white sm:text-3xl lg:text-5xl lg:leading-[1.1]"
                    style={
                      selected === i
                        ? { animation: "gofly-rise 0.9s cubic-bezier(.16,1,.3,1) both" }
                        : undefined
                    }
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="mt-3 max-w-xl text-sm text-white/90 sm:mt-4 sm:text-base"
                    style={
                      selected === i
                        ? { animation: "gofly-rise 0.9s .18s cubic-bezier(.16,1,.3,1) both" }
                        : undefined
                    }
                  >
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero navigation arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => embla?.scrollPrev()}
        className="absolute left-3 top-[40%] z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/40 sm:left-6 sm:size-12"
      >
        <ChevronLeft className="size-5 sm:size-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => embla?.scrollNext()}
        className="absolute right-3 top-[40%] z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/40 sm:right-6 sm:size-12"
      >
        <ChevronRight className="size-5 sm:size-6" />
      </button>

      {/* Hero dots */}
      <div className="absolute inset-x-0 bottom-[45%] flex justify-center gap-2 sm:bottom-[42%]">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selected === i ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Search widget overlapping hero bottom */}
      <div className="relative -mt-16 -mb-10 z-20 px-4 sm:-mt-24 sm:px-6">
        <SearchWidget />
      </div>
    </section>
  );
}
