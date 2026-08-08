import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Calendar, Clock, MapPin, Minus, Plus, Users, X } from "lucide-react";
import { IMG } from "@/lib/gofly-data";
import { PageHero } from "./PageHero";
import { SectionTitle } from "./SectionTitle";
import { Carousel } from "./Carousel";
import { Reveal } from "./Reveal";
import { useCountUp } from "./useCountUp";

const experienceDestinations = [
  { img: `${IMG}/home7/destination-img1.jpg`, title: "Nepal", count: "Activities (08)" },
  { img: `${IMG}/home7/destination-img2.jpg`, title: "Patagonia", count: "Activities (34)" },
  { img: `${IMG}/home7/destination-img3.jpg`, title: "Hawaii, USA", count: "Activities (10)" },
  { img: `${IMG}/home7/destination-img4.jpg`, title: "Swiss Alps", count: "Activities (13)" },
  { img: `${IMG}/home7/destination-img5.jpg`, title: "Rome", count: "Activities (15)" },
  { img: `${IMG}/home7/destination-img6.jpg`, title: "Maldives", count: "Activities (21)" },
  { img: `${IMG}/home7/destination-img7.jpg`, title: "Indonesia", count: "Activities (12)" },
];

const trustFeatures = [
  {
    icon: `${IMG}/home7/icon/feature-icon1.svg`,
    title: "100% Verified & Safe Adventures",
    text: "We prioritize your safety and ensure that every adventure meets the highest standards.",
  },
  {
    icon: `${IMG}/home7/icon/feature-icon2.svg`,
    title: "Certified & Experienced Guides",
    text: "Our team of expert guides ensures you have a safe, enriching, & unforgettable adventure!",
  },
  {
    icon: `${IMG}/home7/icon/feature-icon3.svg`,
    title: "24/7 Customer Support",
    text: "No matter where your adventure takes you, our dedicated support team is available 24/7 to assist you.",
  },
];

const activities = [
  {
    img: `${IMG}/home6/tour-package-img1.jpg`,
    title: "Zip-lining & Canopy",
    location: "Himachal Pradesh, India",
    duration: "01 Hour",
    price: "$99",
    badge: "Sale on!",
  },
  {
    img: `${IMG}/home6/tour-package-img2.jpg`,
    title: "Snowboarding & Ice Thrills",
    location: "Maldives",
    duration: "30 Minute",
    price: "$49",
    badge: "Sale on!",
  },
  {
    img: `${IMG}/home6/tour-package-img13.jpg`,
    title: "Climbing & Mountaineering",
    location: "Nepal",
    duration: "45 Minute",
    price: "$89",
    badge: "Sale on!",
  },
  {
    img: `${IMG}/home6/tour-package-img6.jpg`,
    title: "Surfing & Waterfalls",
    location: "Goa, India",
    duration: "20 Minute",
    price: "$39",
    badge: "Sale on!",
  },
  {
    img: `${IMG}/home6/tour-package-img5.jpg`,
    title: "Skydiving & Paragliding",
    location: "Nepal",
    duration: "40 Minute",
    price: "$129",
    badge: "Sale on!",
  },
];

const guides = [
  { img: `${IMG}/home7/tour-guide-img1.png`, name: "Oliver Liam", role: "Skydiving Expert" },
  { img: `${IMG}/home7/tour-guide-img2.png`, name: "Mrs. Emelia Jong", role: "Paragliding Expert" },
  { img: `${IMG}/home7/tour-guide-img3.png`, name: "Alexander Benju", role: "Skydiving Expert" },
  { img: `${IMG}/home7/tour-guide-img4.png`, name: "Samuel Henry", role: "Rock Climbing Expert" },
  { img: `${IMG}/home7/tour-guide-img5.png`, name: "David Reynolds", role: "Zip-lining Expert" },
  { img: `${IMG}/home7/tour-guide-img6.png`, name: "Thomas Mitchell", role: "Scuba Expert" },
];

type Activity = {
  title: string;
  location: string;
  duration: string;
  price: string;
};

const activityTabs = [
  {
    id: "scuba",
    label: "Scuba diving",
    img: `${IMG}/home7/activity-tab-img1.jpg`,
    title: "Adventure Scuba Diving",
    text: "Experience the breathtaking beauty of the ocean like never before! With 35% OFF on scuba diving experiences across all destinations.",
    location: "Maldives",
    duration: "01 Hour",
    price: "$99",
  },
  {
    id: "paragliding",
    label: "Paragliding",
    img: `${IMG}/home7/activity-tab-img2.jpg`,
    title: "Thrilling Paragliding Ride",
    text: "Soar through the skies and take in stunning views from above! Enjoy 25% OFF on paragliding adventures at all destinations.",
    location: "Nepal",
    duration: "40 Minute",
    price: "$129",
  },
  {
    id: "rafting",
    label: "Rafting",
    img: `${IMG}/home7/activity-tab-img3.jpg`,
    title: "Exciting River Rafting",
    text: "Feel the adrenaline rush as you conquer wild rapids! Get 20% OFF on rafting experiences across all destinations.",
    location: "Goa, India",
    duration: "01 Hour",
    price: "$59",
  },
  {
    id: "bungee",
    label: "Bungee Jump",
    img: `${IMG}/home7/activity-tab-img4.jpg`,
    title: "Extreme Bungee Jumping",
    text: "Take the leap of a lifetime from breathtaking heights! Enjoy 35% OFF on bungee jump adventures in all locations.",
    location: "Hawaii, USA",
    duration: "30 Minute",
    price: "$109",
  },
];

const offers = [
  {
    title: "Get 30% Off Scuba Adventures",
    img: `${IMG}/home7/offer-banner-img1.jpg`,
    bullets: ["Safe & Verified Equipment.", "Breathtaking Views."],
  },
  {
    title: "Snowboarding 30% Off — All Winter Spots!",
    img: `${IMG}/home7/offer-banner-img2.jpg`,
    bullets: ["Safe & Verified Equipment.", "Breathtaking Views."],
  },
  {
    title: "Paragliding 35% Off in All Destination.",
    img: `${IMG}/home7/offer-banner-img3.jpg`,
    bullets: ["Safe & Verified Equipment.", "Breathtaking Views."],
  },
];

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

/* ───────────── Activity booking modal ───────────── */

function ActivityBookingModal({
  activity,
  image,
  onClose,
}: {
  activity: Activity;
  image: string;
  onClose: () => void;
}) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const total = adults + children;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-dark/60 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line pb-4">
          <h3 className="font-display text-xl font-semibold text-title">{activity.title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full border border-line text-body hover:bg-soft"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-4 flex items-center gap-3 overflow-hidden rounded-xl border border-line p-3">
          <img
            src={image}
            alt={activity.title}
            className="size-16 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold text-title">{activity.title}</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-body">
              <MapPin className="size-3.5 text-brand" /> {activity.location}
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-body">
              <Clock className="size-3.5 text-brand" /> {activity.duration}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <label className="flex items-center gap-3 rounded-xl border border-line px-4 py-3">
            <Calendar className="size-5 text-brand" />
            <div>
              <span className="block text-xs text-body">Select Date</span>
              <input
                type="date"
                className="w-full bg-transparent font-display text-sm text-title outline-none"
              />
            </div>
          </label>

          <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
            <div className="flex items-center gap-3">
              <Users className="size-5 text-brand" />
              <div>
                <span className="block text-xs text-body">Travelers</span>
                <span className="font-display text-sm font-medium text-title">
                  {adults} Adults, {children} Child
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[
                { label: "Adult", val: adults, set: setAdults },
                { label: "Child", val: children, set: setChildren },
              ].map((g) => (
                <div key={g.label} className="flex items-center gap-2">
                  <button
                    aria-label={`Remove ${g.label}`}
                    onClick={() => g.set(Math.max(0, g.val - 1))}
                    className="grid size-7 place-items-center rounded-full border border-line text-body hover:border-brand hover:text-brand"
                  >
                    <Minus className="size-3" />
                  </button>
                  <span className="w-6 text-center font-display text-sm font-semibold text-title">
                    {g.val}
                  </span>
                  <button
                    aria-label={`Add ${g.label}`}
                    onClick={() => g.set(g.val + 1)}
                    className="grid size-7 place-items-center rounded-full border border-line text-body hover:border-brand hover:text-brand"
                  >
                    <Plus className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-soft px-4 py-3">
            <span className="font-display text-sm font-medium text-title">
              Total ({total} persons)
            </span>
            <span className="font-display text-lg font-semibold text-title">{activity.price}</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand2"
            >
              Book Now <ArrowRight className="size-4" />
            </button>
            <button
              onClick={onClose}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-title px-6 py-3.5 font-display text-sm font-medium text-title transition-colors hover:bg-title hover:text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperiencesPage() {
  const [active, setActive] = useState(activityTabs[0].id);
  const [booking, setBooking] = useState<{ activity: Activity; image: string } | null>(null);

  return (
    <div className="overflow-x-hidden">
      <PageHero title="Travel Experiences" crumb="Experiences" />

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Featured Destination"
            subtitle="A curated list of the most popular travel packages based on different destinations."
          />
          <div className="mt-12">
            <Carousel
              arrows
              dots={false}
              slideClass="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_25%]"
              plugins={[Autoplay({ delay: 3800, stopOnInteraction: false })]}
            >
              {experienceDestinations.map((d) => (
                <a key={d.title} href="/destinations" className="group block text-center">
                  <div className="relative mx-auto size-[160px] overflow-hidden rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] sm:size-[200px] lg:size-[240px]">
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
                  <span className="mt-1.5 block text-sm font-medium text-body">{d.count}</span>
                </a>
              ))}
            </Carousel>
          </div>

          {/* Trust features */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {trustFeatures.map((f) => (
              <Reveal key={f.title}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-card p-6 transition-shadow duration-500 hover:shadow-[var(--shadow-float)]">
                  <img src={f.icon} alt="" loading="lazy" className="size-12 shrink-0" />
                  <div>
                    <h4 className="font-display text-lg font-semibold text-title">{f.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-body">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Rating + customize */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-soft px-6 py-8 sm:flex-row sm:px-10">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
              <span className="flex gap-1 text-[oklch(0.75_0.16_140)]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="size-6 fill-current">
                    <path d="M10 1l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8l-5.3 2.8 1-5.8L1.5 7.2l5.9-.9z" />
                  </svg>
                ))}
              </span>
              <p className="text-sm text-body">5.0 Rating out of 5.0 based on 24,000 reviews</p>
            </div>
            <a
              href="/customized-tours"
              className="inline-flex items-center gap-2 rounded-full bg-title px-7 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              Customize Package <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-soft py-20">
        <div className="container-gofly grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-title sm:text-[40px]">
              Conquer Heights, Dive Deep, Explore Freely!
            </h2>
            <p className="mt-5 leading-relaxed text-body">
              We believe that adventure is more than just a journey — it's a way of life! Our
              mission is to bring thrill-seekers, explorers, and nature lovers the most exciting and
              safe adventure experiences across the globe.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              We are passionate about creating extraordinary adventures that go beyond the ordinary.
              Our goal is to offer travelers of all types an opportunity to break free from the
              routine and immerse themselves in thrilling experiences that will leave them with
              unforgettable memories.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Counter value={25} suffix="k+" label="Customers Worldwide" />
              <Counter value={12} suffix="+" label="Years of Experience" />
              <Counter value={40} suffix="+" label="Adventure Experts" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <img
                src={`${IMG}/home7/about-img.jpg`}
                alt="Adventure"
                loading="lazy"
                className="w-full rounded-[32px] object-cover"
              />
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-background px-6 py-5 shadow-[var(--shadow-float)] sm:-left-8">
                <p className="font-display text-3xl font-bold text-brand">12+</p>
                <p className="mt-1 text-sm font-medium text-body">Years of Experience</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Popular Activities */}
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Popular Activities"
            subtitle="A curated list of the most popular travel packages based on different destinations."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <div className="relative overflow-hidden">
                    <img
                      src={a.img}
                      alt={a.title}
                      loading="lazy"
                      className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-title px-3 py-1 font-display text-xs font-semibold text-white">
                      {a.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-xl font-semibold text-title transition-colors group-hover:text-brand">
                      {a.title}
                    </h4>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-body">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-4 text-brand" /> {a.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-4 text-brand" /> {a.duration}
                      </span>
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                      <div>
                        <p className="text-xs text-body">Per Person</p>
                        <p className="font-display text-2xl font-bold text-title">{a.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setBooking({ activity: a, image: a.img })}
                        className="rounded-full bg-brand px-6 py-3 font-display text-sm font-medium text-white transition-colors hover:bg-dark"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="pb-20">
        <div className="container-gofly">
          <Carousel
            dots={false}
            slideClass="flex-[0_0_100%]"
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          >
            {offers.map((o) => (
              <div
                key={o.title}
                className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(100deg,oklch(0.35_0.1_255),oklch(0.5_0.12_230))] px-6 py-10 sm:px-12"
              >
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div>
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1 font-display text-xs font-medium text-white">
                      Limited Time Offer
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-4xl">
                      {o.title}
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {o.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-sm text-white/90">
                          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-white/25 text-[10px] text-white">
                            ✓
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/packages"
                      className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-sm font-medium text-title transition-colors hover:bg-brand hover:text-white"
                    >
                      View All Activities <ArrowRight className="size-4" />
                    </a>
                  </div>
                  <img
                    src={o.img}
                    alt={o.title}
                    loading="lazy"
                    className="w-full max-w-md justify-self-center rounded-2xl object-cover shadow-2xl md:justify-self-end"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Activities Guider */}
      <section className="bg-soft py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Activities Guider"
            subtitle="Meet our certified experts who make every adventure safe, fun and unforgettable."
          />
          <div className="mt-12">
            <Carousel
              dots
              slideClass="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_33.333%]"
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
            >
              {guides.map((g) => (
                <div key={g.name} className="group text-center">
                  <div className="relative mx-auto w-56 overflow-hidden rounded-[24px] bg-background shadow-sm transition-shadow duration-500 group-hover:shadow-[var(--shadow-float)]">
                    <img
                      src={g.img}
                      alt={g.name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <h5 className="mt-5 font-display text-lg font-semibold text-title">{g.name}</h5>
                  <p className="mt-1 text-sm font-medium text-brand">{g.role}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* All Tour Activities */}
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="All Tour Activities"
            subtitle="A curated list of the most popular travel packages based on different destinations."
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {activityTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={`rounded-full px-6 py-3 font-display text-sm font-medium transition-colors ${
                  active === t.id ? "bg-brand text-white" : "bg-soft text-title hover:bg-brand/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="mt-12">
            {activityTabs
              .filter((t) => t.id === active)
              .map((t) => (
                <Reveal key={t.id}>
                  <div className="grid items-center gap-8 overflow-hidden rounded-[32px] border border-line bg-card p-6 sm:p-10 lg:grid-cols-2">
                    <img
                      src={t.img}
                      alt={t.title}
                      loading="lazy"
                      className="h-full max-h-[380px] w-full rounded-2xl object-cover"
                    />
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-title sm:text-[32px]">
                        {t.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-body">{t.text}</p>
                      <button
                        type="button"
                        onClick={() => setBooking({ activity: t, image: t.img })}
                        className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-dark"
                      >
                        Book Now <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {booking && (
        <ActivityBookingModal
          activity={booking.activity}
          image={booking.image}
          onClose={() => setBooking(null)}
        />
      )}
    </div>
  );
}
