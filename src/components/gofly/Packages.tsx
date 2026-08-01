import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, MapPin } from "lucide-react";
import { destinations, popularPackages } from "@/lib/gofly-data";
import { Carousel } from "./Carousel";
import { PackageCard } from "./PackageCard";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

export function PopularPackages() {
  return (
    <section className="relative overflow-hidden bg-soft py-20">
      <div className="container-gofly">
        <SectionTitle
          title="Popular Travel Package"
          subtitle="A curated list of the most popular travel packages based on different destinations."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularPackages.map((p) => (
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
    text: "You can hassle-free and fast tour & travel package booking by GoFly.",
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
          <div className="rounded-[32px] bg-[oklch(0.96_0.06_110)] px-6 py-12 sm:px-12">
            <h2 className="text-center font-display text-2xl font-semibold sm:text-[32px]">
              Travel Nest – Your Journey, Our Priority!
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
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
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <span className="rounded-full bg-dark px-6 py-3 font-display text-sm font-medium text-white">
                Find Your Favourite Travel Package!
              </span>
              <a href="#" className="btn-primary">
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
  const features = [
    { icon: "📦", label: "Customizable Package.", color: "bg-blue-50" },
    { icon: "🕐", label: "24/7 Support", color: "bg-orange-50" },
    { icon: "👥", label: "Trusted by Thousands", color: "bg-green-50" },
    { icon: "🌍", label: "Local Expertise", color: "bg-purple-50" },
  ];

  return (
    <section className="relative overflow-hidden bg-soft py-20">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-20 top-10 size-[300px] rounded-full border border-line/60" />
      <div className="pointer-events-none absolute -right-10 top-1/2 size-[200px] rounded-full border border-line/60" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-[250px] rounded-full border border-line/40" />

      <div className="container-gofly">
        {/* Header */}
        <div className="text-center">
          <span className="font-display text-sm font-medium uppercase tracking-widest text-brand">
            Best Agency Ever!
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-title sm:text-4xl lg:text-[42px]">
            We&apos;re Locked Top Destination
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            A curated list of the most popular travel packages based on different destinations.
          </p>
        </div>

        {/* Feature badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {features.map((f) => (
            <div
              key={f.label}
              className={`inline-flex items-center gap-3 rounded-full ${f.color} px-5 py-2.5`}
            >
              <span className="text-lg">{f.icon}</span>
              <span className="font-display text-sm font-medium text-title">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Destinations carousel */}
        <div className="mt-12">
          <Carousel
            arrows
            dots={false}
            slideClass="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_25%]"
            plugins={[Autoplay({ delay: 3800, stopOnInteraction: false })]}
          >
            {destinations.map((d) => (
              <a key={d.title} href="#" className="group flex flex-col items-center text-center">
                <div className="relative size-[160px] overflow-hidden rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] sm:size-[200px] lg:size-[240px]">
                  <img
                    src={d.img}
                    alt={d.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h5 className="mt-5 font-display text-lg font-bold text-title transition-colors group-hover:text-brand sm:text-xl">
                  {d.title}
                </h5>
                <p className="mt-1.5 text-sm font-medium text-body">{d.tours}</p>
              </a>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
