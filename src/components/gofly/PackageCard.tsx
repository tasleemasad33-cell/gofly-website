import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import type { Pkg } from "@/lib/gofly-data";

export function PackageCard({ pkg }: { pkg: Pkg }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: pkg.images.length > 1 });
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const stop = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
      {/* Image Slider */}
      <div className="relative overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {pkg.images.map((img, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%]">
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={img}
                    alt={pkg.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* White shimmer overlay on hover */}
                  <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {pkg.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 font-display text-xs font-medium text-primary-foreground">
            {pkg.badge}
          </span>
        )}

        {/* Nav arrows */}
        {pkg.images.length > 1 && (
          <>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                stop(e);
                embla?.scrollPrev();
              }}
              className="absolute left-3 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-title opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-brand hover:text-primary-foreground"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                stop(e);
                embla?.scrollNext();
              }}
              className="absolute right-3 top-1/2 z-10 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-title opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-brand hover:text-primary-foreground"
            >
              <ChevronRight className="size-4" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {pkg.images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to image ${i + 1}`}
                  onClick={(e) => {
                    stop(e);
                    embla?.scrollTo(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selected === i ? "w-5 bg-brand" : "w-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h5 className="font-display text-base font-semibold text-title transition-colors hover:text-brand sm:text-lg">
          <a href={`/packages/${pkg.slug}`}>{pkg.title}</a>
        </h5>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-body sm:gap-4 sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-brand sm:size-4" />
            {pkg.location}
          </span>
          {pkg.duration && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-brand sm:size-4" />
              {pkg.duration}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-end justify-between pt-4">
          <a
            href={`/packages/${pkg.slug}`}
            className="btn-primary px-4 py-2.5 text-xs sm:px-5 sm:py-3 sm:text-sm"
          >
            Book Now
          </a>
          <div className="text-right">
            <p className="font-display text-[10px] font-medium text-body sm:text-xs">Per Person</p>
            <p className="font-display text-lg font-semibold text-title sm:text-xl">
              {pkg.oldPrice && (
                <span className="mr-1 text-xs font-normal text-body line-through sm:text-sm">
                  {pkg.oldPrice}
                </span>
              )}
              {pkg.price}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between pt-4">
          <button
            onClick={() => setOpen(open === "Experience" ? null : "Experience")}
            className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-title transition-colors hover:text-brand sm:gap-2 sm:text-sm"
          >
            <span className="grid size-5 place-items-center rounded-full border border-line text-[10px] text-brand sm:size-6">
              <svg viewBox="0 0 24 24" className="size-3 fill-current sm:size-3.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </span>
            Experience
            <span className="hidden size-5 place-items-center rounded-full border border-line text-[10px] text-body sm:grid">
              i
            </span>
          </button>
          <button
            onClick={() => setOpen(open === "Inclusion" ? null : "Inclusion")}
            className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-title transition-colors hover:text-brand sm:gap-2 sm:text-sm"
          >
            <span className="grid size-5 place-items-center rounded-full border border-line text-[10px] text-brand sm:size-6">
              <svg viewBox="0 0 24 24" className="size-3 fill-current sm:size-3.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
            </span>
            Inclusion
            <span className="hidden size-5 place-items-center rounded-full border border-line text-[10px] text-body sm:grid">
              i
            </span>
          </button>
        </div>

        {open && (
          <div className="mt-3 grid grid-rows-[1fr] transition-all duration-300">
            <div className="overflow-hidden rounded-xl bg-soft px-4 py-3">
              <p className="text-sm leading-relaxed text-body">
                {open === "Experience"
                  ? "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing with this premium package."
                  : "This package covers Accommodation, Daily Meals, Entry Fees & Local Transfers to ensure a worry-free trip."}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
