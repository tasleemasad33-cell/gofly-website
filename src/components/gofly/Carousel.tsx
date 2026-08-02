import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({
  children,
  options,
  className = "",
  arrows = false,
  dots = true,
  slideClass = "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
  plugins = [],
}: {
  children: ReactNode[];
  options?: EmblaOptionsType;
  className?: string;
  arrows?: boolean;
  dots?: boolean;
  slideClass?: string;
  plugins?: EmblaOptionsType["plugins"];
}) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", ...options }, plugins);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
    onSelect();
    embla.on("select", onSelect).on("reInit", () => {
      setSnaps(embla.scrollSnapList());
      onSelect();
    });
  }, [embla]);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex">
          {children.map((child, i) => (
            <div key={i} className={`min-w-0 pl-6 ${slideClass}`}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {arrows && (
        <>
          <button
            aria-label="Previous"
            onClick={() => embla?.scrollPrev()}
            className="absolute -left-3 top-1/2 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-background text-title shadow-[var(--shadow-card)] transition-colors hover:border-brand hover:bg-brand hover:text-primary-foreground sm:grid sm:-left-4 2xl:-left-8"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => embla?.scrollNext()}
            className="absolute -right-3 top-1/2 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-background text-title shadow-[var(--shadow-card)] transition-colors hover:border-brand hover:bg-brand hover:text-primary-foreground sm:grid sm:-right-4 2xl:-right-8"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      {dots && snaps.length > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selected === i ? "w-7 bg-brand" : "w-2 bg-line"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
