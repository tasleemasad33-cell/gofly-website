import { useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, MapPin } from "lucide-react";
import { destinations, popularPackages, getAdminPackages } from "@/lib/gofly-data";
import { Carousel } from "./Carousel";
import { PackageCard } from "./PackageCard";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

export function PopularPackages() {
  const allPopular = useMemo(() => {
    const adminPkgs = getAdminPackages().filter((p) => !p.category || p.category === "group" || p.category === "honeymoon");
    return [...popularPackages, ...adminPkgs];
  }, []);

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage:
          "url(/home2-package-slider-bg.png), linear-gradient(180deg, #E7EEFF 0%, #E7EEFF 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-gofly">
        <SectionTitle
          title="Popular Travel Package"
          subtitle="A curated list of the most popular travel packages based on different destinations."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {allPopular.map((p) => (
            <Reveal key={p.title}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "One Click Booking",
    text: "You can hassle-free and fast tour & travel package booking by Travel Nest.",
    icon: "⚡",
  },
  {
    title: "Deals & Discounts",
    text: "Agencies have special discounts on flights, hotels, & packages.",
    icon: "🏷️",
  },
  {
    title: "Local Guidance",
    text: "Travel agencies have experienced professionals guidance.",
    icon: "🧭",
  },
];

export function Features() {
  return (
    <section className="py-16">
      <div className="container-gofly">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[#fdf5ec] px-6 py-12 sm:px-12">
            {/* Decorative concentric arches - top left */}
            <svg
              className="absolute -left-10 -top-6 size-[280px] text-[#f0dcc8]"
              viewBox="0 0 300 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M60 200 a90 90 0 0 1 180 0" />
              <path d="M35 200 a115 115 0 0 1 230 0" />
              <path d="M10 200 a140 140 0 0 1 280 0" />
            </svg>
            {/* Blue accent dot */}
            <div className="absolute left-8 top-8 size-5 rounded-full bg-[#7eb8e6]" />
            {/* Decorative concentric arches - bottom right */}
            <svg
              className="absolute -bottom-12 -right-10 size-[250px] text-[#f0dcc8]"
              viewBox="0 0 300 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M60 200 a90 90 0 0 1 180 0" />
              <path d="M35 200 a115 115 0 0 1 230 0" />
              <path d="M10 200 a140 140 0 0 1 280 0" />
            </svg>

            <h2 className="relative text-center font-display text-2xl font-semibold sm:text-[32px]">
              Travel Nest – Your Journey, Our Priority!
            </h2>
            <div className="relative mt-10 grid gap-8 md:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 120}>
                  <div className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-background text-xl">
                      {f.icon}
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-semibold">{f.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-body">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
              <span className="rounded-full bg-dark px-6 py-3 font-display text-sm font-medium text-white">
                Find Your Favourite Travel Package!
              </span>
              <a href="/packages" className="btn-primary">
                Discover Today <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TopDestinations() {
  return (
    <section className="py-20">
      <div className="container-gofly">
        <SectionTitle title="Top Destination" />
        <div className="mt-12">
          <Carousel
            arrows
            dots={false}
            slideClass="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_25%]"
            plugins={[Autoplay({ delay: 3800, stopOnInteraction: false })]}
          >
            {destinations.map((d) => (
              <a key={d.title} href="/destinations" className="group block">
                <div className="relative overflow-hidden rounded-[20px]">
                  <img
                    src={d.img}
                    alt={d.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="px-2.5 pt-5 text-center">
                  <h5 className="font-display text-lg font-semibold text-title transition-colors group-hover:text-brand sm:text-xl">
                    {d.title}
                  </h5>
                  <span className="mt-1.5 block text-sm font-semibold text-body">{d.tours}</span>
                </div>
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
