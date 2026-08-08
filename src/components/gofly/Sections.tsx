import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { IMG, blogPosts, getCounters, galleryImages, testimonials } from "@/lib/gofly-data";
import { Carousel } from "./Carousel";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { useCountUp } from "./useCountUp";

export function Blog() {
  return (
    <section className="py-20">
      <div className="container-gofly">
        <SectionTitle
          title="Travel Inspirations"
          subtitle="A curated list of the most popular travel packages based on different destinations."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 130}>
              <article className="group h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                <div className="zoom-img relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="h-[240px] w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background px-3 py-1 font-display text-xs font-medium text-title">
                    {post.date}
                  </span>
                </div>
                <div className="p-5">
                  <p className="inline-flex items-center gap-1.5 text-sm text-brand">
                    <MapPin className="size-4" /> {post.location}
                  </p>
                  <h4 className="mt-2 font-display text-xl font-semibold leading-snug text-title transition-colors group-hover:text-brand">
                    <a href="/experiences">{post.title}</a>
                  </h4>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/experiences" className="btn-outline">
            View All Inspiration <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-soft py-20">
      <div className="container-gofly">
        <SectionTitle
          title="Hear It from Travelers"
          subtitle="We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!"
        />
        <div className="mt-12">
          <Carousel arrows plugins={[Autoplay({ delay: 4200, stopOnInteraction: false })]}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="h-full rounded-2xl border border-line bg-card p-6 transition-shadow duration-500 hover:shadow-[var(--shadow-float)]"
              >
                <span className="flex gap-0.5 text-[oklch(0.75_0.16_140)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <h5 className="mt-4 font-display text-lg font-semibold text-title">{t.title}</h5>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display font-medium text-title">{t.name}</p>
                    <p className="text-sm text-body">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            { logo: `${IMG}/home1/icon/trustpilot-logo.svg`, label: "(2K reviews)" },
            { logo: `${IMG}/home1/icon/tripadvisor-logo.svg`, label: "Reviews" },
          ].map((r) => (
            <a
              key={r.logo}
              href="/experiences"
              className="flex items-center gap-3 rounded-xl border border-line bg-background px-5 py-3"
            >
              <span className="font-display text-xl font-semibold text-title">4.5</span>
              <img src={r.logo} alt="" className="h-5" loading="lazy" />
              <span className="text-sm text-body">{r.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-semibold text-title">
        <span ref={ref}>{current}</span>
        <span className="text-brand">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-body">{label}</p>
    </div>
  );
}

export function Counters() {
  const counters = getCounters();
  return (
    <section className="border-y border-line py-14">
      <div className="container-gofly grid grid-cols-2 gap-8 lg:grid-cols-4">
        {counters.map((c) => (
          <Counter key={c.label} {...c} />
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-gofly grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-[42px]">Travel Nest Gallery</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-body">
            We go beyond just booking trips—we create unforgettable travel experiences that match
            your dreams!
          </p>
          <a
            href="/gallery"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-title px-7 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand"
          >
            View Gallery <ArrowRight className="size-4" />
          </a>
          <div className="mt-10 flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-full border-2 border-title text-title">
              <svg viewBox="0 0 24 24" className="size-7 fill-current">
                <path d="M13.5 5.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM9.8 8.9L7 23h2.1l2.1-8.4 1.7 3.3v5.1h2v-6.5l-1.8-3.5 1.4-2.1c1.2 1.5 2.8 2.4 4.6 2.4v-2c-1.6 0-3-.9-3.9-2.2L15 8.9c-.6-.8-1.5-1.3-2.5-1.3h-.9c-1 0-1.9.5-2.5 1.3z" />
              </svg>
            </span>
            <div>
              <p className="font-display text-3xl font-bold text-title">8K+</p>
              <p className="text-sm font-medium text-body">Tour Completed</p>
            </div>
          </div>
        </Reveal>

        {/* Mobile: simple grid collage */}
        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
            <a
              href="/gallery"
              className="overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[0]}
                alt="Gallery"
                loading="lazy"
                className="h-[160px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[3]}
                alt="Gallery"
                loading="lazy"
                className="h-[160px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="col-span-2 overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[1]}
                alt="Gallery"
                loading="lazy"
                className="h-[200px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[4]}
                alt="Gallery"
                loading="lazy"
                className="h-[160px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[5]}
                alt="Gallery"
                loading="lazy"
                className="h-[160px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="col-span-2 overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[2]}
                alt="Gallery"
                loading="lazy"
                className="h-[180px] w-full object-cover"
              />
            </a>
          </div>

          {/* Desktop: absolute collage */}
          <div className="relative hidden h-[580px] w-full lg:block">
            <a
              href="/gallery"
              className="absolute left-[0%] top-[0%] z-[3] w-[30%] overflow-hidden rounded-2xl border-4 border-white shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[0]}
                alt="Gallery"
                loading="lazy"
                className="h-[180px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="absolute left-[30%] top-[0%] z-[2] w-[30%] overflow-hidden rounded-2xl border-4 border-white shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[3]}
                alt="Gallery"
                loading="lazy"
                className="h-[220px] w-full object-cover object-center"
              />
            </a>
            <a
              href="/gallery"
              className="absolute right-[0%] top-[0%] z-[2] w-[30%] overflow-hidden rounded-2xl border-4 border-white shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[4]}
                alt="Gallery"
                loading="lazy"
                className="h-[180px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="absolute left-[0%] top-[28%] z-[1] w-[60%] overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[1]}
                alt="Gallery"
                loading="lazy"
                className="h-[290px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="absolute right-[0%] top-[26%] z-[1] w-[40%] overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[5]}
                alt="Gallery"
                loading="lazy"
                className="h-[320px] w-full object-cover"
              />
            </a>
            <a
              href="/gallery"
              className="absolute left-[4%] bottom-[0%] z-[2] w-[40%] overflow-hidden rounded-2xl border-4 border-white shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={galleryImages[2]}
                alt="Gallery"
                loading="lazy"
                className="h-[200px] w-full object-cover"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
