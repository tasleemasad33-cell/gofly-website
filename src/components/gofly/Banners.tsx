import { ArrowRight } from "lucide-react";
import { IMG, partners } from "@/lib/gofly-data";
import { Reveal } from "./Reveal";

export function OfferBanner() {
  return (
    <section className="py-16">
      <div className="container-gofly">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(100deg,oklch(0.62_0.14_150),oklch(0.86_0.16_95))] px-6 py-10 sm:px-12">
            <img
              src={`${IMG}/home2/vector/offer-banner-vector1.svg`}
              alt=""
              className="pointer-events-none absolute left-0 top-0 w-40 opacity-40"
            />
            <img
              src={`${IMG}/home2/vector/offer-banner-vector2.svg`}
              alt=""
              className="pointer-events-none absolute bottom-0 right-1/3 w-40 opacity-40"
            />
            <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-between">
              <div className="max-w-md text-center md:text-left">
                <span className="inline-block rounded-full bg-dark px-4 py-1 font-display text-xs font-medium text-white">
                  Limited Offer
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-[38px]">
                  Flash 50% off all tour packages
                </h2>
                <a href="#" className="btn-primary mt-6 bg-dark hover:bg-brand">
                  Grab the Deal Now <ArrowRight className="size-4" />
                </a>
              </div>
              <img
                src={`${IMG}/home2/home2-offer-banner-img.png`}
                alt="Happy family travelling"
                loading="lazy"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AwardBanner() {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{
        backgroundImage: `url(${IMG}/home2/home2-award-banner-bg.jpg)`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-dark/50" />

      {/* Dashed border frame */}
      <div className="absolute inset-6 rounded-3xl border-2 border-dashed border-white/30 sm:inset-10 lg:inset-16" />

      <div className="container-gofly relative text-center">
        <Reveal>
          {/* Trophy icon */}
          <div className="mx-auto mb-4 flex justify-center">
            <img
              src={`${IMG}/home2/travel-award.png`}
              alt="World travel award"
              loading="lazy"
              className="w-28"
            />
          </div>

          {/* Title */}
          <h4 className="font-display text-2xl font-semibold italic text-white">
            Premium Travel Experiences
          </h4>

          {/* Stars */}
          <div className="mt-3 flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-xl text-white">
                ★
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <h3 className="mt-6 font-display text-2xl font-medium text-white sm:text-3xl">
            Creating
          </h3>

          {/* BEST */}
          <h2 className="font-display text-5xl font-black tracking-tight text-white sm:text-[80px] lg:text-[100px]">
            UNFORGETTABLE JOURNEYS
          </h2>

          {/* Button */}
          <a
            href="#"
            className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-display text-sm font-medium text-white shadow-lg transition-all hover:bg-brand/90 hover:shadow-xl"
          >
            View All Package <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Partners() {
  const items = [...partners, ...partners];
  return (
    <section className="py-16">
      <div className="container-gofly">
        <h5 className="text-center font-display text-sm font-medium uppercase tracking-[0.2em] text-body">
          Those Company You Can Easily Trust!
        </h5>
        <div className="mt-8 overflow-hidden">
          <div className="marquee-track items-center gap-16">
            {items.map((p, i) => (
              <img
                key={i}
                src={p}
                alt="Partner logo"
                loading="lazy"
                className="h-8 w-auto shrink-0 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
