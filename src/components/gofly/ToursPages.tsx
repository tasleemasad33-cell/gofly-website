import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Clock,
  MapPin,
  Plane,
  Shield,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import { IMG, galleryItems } from "@/lib/gofly-data";
import { PageHero } from "./PageHero";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

/* ────────────── Group Tours ────────────── */

const groupTours = [
  {
    img: `${IMG}/home1/tour-package-img11.jpg`,
    title: "Baku, Azerbaijan",
    duration: "5 Days / 4 Nights",
    departures: "29 Aug, 12 Sep, 26 Sep, 10 Oct",
    from: "Lahore",
    price: "PKR 235,000",
  },
  {
    img: `${IMG}/home2/tour-package-img2.jpg`,
    title: "Dubai",
    duration: "5 Days / 4 Nights",
    departures: "12 Aug (Karachi, Sialkot, Faisalabad, Multan)",
    from: "Karachi",
    price: "PKR 255,000",
  },
  {
    img: `${IMG}/home1/tour-package-img2.jpg`,
    title: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    departures: "25 Aug, 05 Sep",
    from: "Lahore",
    price: "PKR 395,000",
  },
  {
    img: `${IMG}/home1/tour-package-img1.jpg`,
    title: "Malaysia (Kuala Lumpur)",
    duration: "6 Days / 5 Nights",
    departures: "12 Aug, 12 Sep",
    from: "Lahore",
    price: "PKR 295,000",
  },
  {
    img: `${IMG}/home1/tour-package-img6.jpg`,
    title: "Thailand (Bangkok, Phuket & Krabi)",
    duration: "9 Days / 8 Nights",
    departures: "05 Aug, 12 Aug",
    from: "Lahore",
    price: "PKR 395,000",
  },
  {
    img: `${IMG}/home2/tour-package-img1.jpg`,
    title: "Bali & Malaysia",
    duration: "8 Days / 7 Nights",
    departures: "12 Aug, 05 Sep",
    from: "Lahore",
    price: "PKR 449,000",
  },
  {
    img: `${IMG}/home1/tour-package-img4.jpg`,
    title: "Thailand & Malaysia",
    duration: "8 Days / 7 Nights",
    departures: "Last week of July, Early Aug",
    from: "Lahore",
    price: "PKR 385,000",
  },
  {
    img: `${IMG}/home1/tour-package-img12.jpg`,
    title: "Sri Lanka, Thailand & Malaysia",
    duration: "9 Days / 8 Nights",
    departures: "10 Aug, 31 Aug, 21 Sep, 21 Oct",
    from: "Lahore",
    price: "PKR 385,000",
  },
  {
    img: `${IMG}/home2/tour-package-img3.jpg`,
    title: "Skardu, Pakistan",
    duration: "4 Days / 3 Nights",
    departures: "12 Aug – 15 Aug",
    from: "Islamabad",
    price: "PKR 115,000",
  },
];

const groupIncluded = [
  "Return Air Tickets",
  "4 Star Hotel Accommodation",
  "Tours & Transfers",
  "Visa Facilitation",
  "Daily Breakfast",
  "24/7 Support",
];

export function GroupToursPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Find Your Perfect Group Tour"
        crumb="Tours / Group Tours"
        image={`${IMG}/home2/banner-img1.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Travel the World Together"
            subtitle="Travel the world with expertly planned group tours designed for comfort, safety and unforgettable memories. Voyage with like-minded explorers while our team manages your flights, hotels, visas and guided experiences from start to finish."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {groupTours.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 100}>
                <article className="group h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 font-display text-xs font-medium text-primary-foreground">
                      Starting From
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-title">{t.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-body sm:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5 text-brand" /> {t.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-brand" /> {t.from}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-body">
                      Departures: <span className="text-title">{t.departures}</span>
                    </p>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <p className="font-display text-[10px] font-medium text-body">Per Person</p>
                        <p className="font-display text-xl font-semibold text-title">{t.price}</p>
                      </div>
                      <a href="#" className="btn-primary px-5 py-2.5 text-sm">
                        Book Now
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-background p-8 sm:p-10">
            <h3 className="text-center font-display text-2xl font-semibold text-title">
              Every Group Tour Includes
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groupIncluded.map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-xl bg-soft px-4 py-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                    <Check className="size-4" />
                  </span>
                  <span className="font-display text-sm font-medium text-title">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Honeymoon Trips ────────────── */

const honeymoonDests = [
  { name: "Bali", desc: "Tropical beauty, private villas, sunsets, and romantic dining" },
  { name: "Dubai", desc: "Luxury, shopping, desert experiences, and stylish stays" },
  { name: "Maldives", desc: "Luxury overwater stays and peaceful island romance" },
  { name: "Thailand", desc: "Beaches, nightlife, island escapes, and couple adventures" },
  { name: "Turkey", desc: "Scenic beauty, culture, and dreamy couple moments" },
  { name: "Baku", desc: "Elegant city vibes, seaside views, and cozy escapes" },
  { name: "Malaysia", desc: "A mix of city life, islands, and luxury comfort" },
  { name: "Sri Lanka", desc: "Nature, beaches, tea hills, and unique experiences" },
];

const honeymoonIncluded = [
  {
    icon: Plane,
    title: "Flights & Hotels",
    desc: "Easy flight booking with best options and comfortable hotel/resort stays.",
  },
  {
    icon: Shield,
    title: "Visa Assistance",
    desc: "Trusted visa support for smooth and stress-free processing.",
  },
  {
    icon: Building2,
    title: "Airport Transfers",
    desc: "Timely pick-up and drop-off for hassle-free travel.",
  },
  {
    icon: Star,
    title: "Honeymoon Experiences",
    desc: "Special room décor, candlelight dinners, and memorable moments for couples.",
  },
  {
    icon: MapPin,
    title: "Sightseeing & Activities",
    desc: "Tours and couple experiences to explore together.",
  },
  {
    icon: Wallet,
    title: "Custom Itineraries",
    desc: "Travel plans tailored to your style and budget.",
  },
  {
    icon: Users,
    title: "Luxury Experiences",
    desc: "Beaches, nightlife, shopping, desert stays & getaways.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    desc: "Full assistance before and during your trip for peace of mind.",
  },
];

export function HoneymoonPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Begin Your Forever with a Journey to Remember"
        crumb="Tours / Honeymoon Trips"
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Most Loved Honeymoon Destinations"
            subtitle="Choose the perfect backdrop for your love story — from tropical islands to romantic city escapes."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {honeymoonDests.map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) * 80}>
                <article className="group h-full overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <div className="relative h-[180px] overflow-hidden">
                    <img
                      src={galleryItems[i % galleryItems.length].img}
                      alt={d.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 font-display text-lg font-bold text-white">
                      {d.name}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-body">{d.desc}</p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-medium text-brand transition-colors hover:text-title"
                    >
                      Show More <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-soft p-8 sm:p-12">
            <h2 className="text-center font-display text-2xl font-semibold text-title sm:text-3xl">
              What's Included in Your Honeymoon Planning?
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {honeymoonIncluded.map((f, i) => (
                <Reveal key={f.title} delay={(i % 4) * 80}>
                  <div className="h-full rounded-2xl border border-line bg-background p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                    <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand/15 text-brand">
                      <f.icon className="size-5" />
                    </span>
                    <h4 className="mt-4 font-display text-base font-semibold text-title">
                      {f.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-body">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-background p-8 sm:p-12">
            <h2 className="text-center font-display text-2xl font-semibold text-title">
              Plan Your Honeymoon With Us
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-body">
              Tell us about your dream honeymoon and our team will create a plan tailored to your
              style and budget.
            </p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Departure City</span>
                <span className="font-display text-sm font-medium text-title">Lahore</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Budget Range</span>
                <span className="font-display text-sm font-medium text-title">3–5 Lac PKR</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Hotel Preference</span>
                <span className="font-display text-sm font-medium text-title">5 Star</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Visa Assistance</span>
                <span className="font-display text-sm font-medium text-title">Yes</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Create My Honeymoon Plan <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Corporate Tours ────────────── */

const corporateWhy = [
  {
    title: "End-to-End Corporate Planning",
    desc: "Flights, hotels, venues and transport managed under one roof.",
  },
  { title: "Tailor-Made Experiences", desc: "Custom experiences per team, objectives and budget." },
  {
    title: "Dedicated Corporate Support",
    desc: "A dedicated coordinator throughout your journey.",
  },
  {
    title: "Global Destinations",
    desc: "Dubai, Baku, Bali, Malaysia, Thailand, Turkey, Europe and more.",
  },
  { title: "Budget-Friendly Luxury", desc: "Premium experiences within your company budget." },
  {
    title: "Seamless Visa Assistance",
    desc: "Fast, reliable visa facilitation for groups and business.",
  },
];

const corporateArrange = [
  "International & Domestic Air Tickets",
  "Hotel & Resort Bookings",
  "Conference & Meeting Venues",
  "Visa Facilitation Services",
  "Transportation & Airport Transfers",
  "Gala Dinners & Networking Events",
  "Team Building Activities",
  "Cruise Experiences",
  "Corporate Branding Support",
  "Group Photography & Videography",
  "Dedicated Tour Guides",
  "Corporate Retreat Planning",
];

const corporateProcess = [
  "Consultation",
  "Proposal & Budgeting",
  "Planning & Coordination",
  "Execution",
  "Post-Tour Support",
];

const corporateFor = [
  "Corporate Retreats",
  "Incentive Journeys",
  "Annual Company Tours",
  "Leadership Summits",
  "Conferences & Exhibitions",
  "Startup Retreats",
  "Educational Institutes",
  "Networking Events",
  "Staff Reward Plans",
];

export function CorporatePage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Corporate Tours & Retreats"
        crumb="Tours / Corporate Tours"
        image={`${IMG}/home2/banner-img1.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Connecting Teams Beyond Borders"
            subtitle="Plan impactful corporate journeys, executive retreats, conferences, and team experiences. From planning to execution, we handle every detail while your team focuses on growth, collaboration, and meaningful experiences."
          />

          <h2 className="mt-14 text-center font-display text-2xl font-semibold text-title sm:text-3xl">
            Why Companies Choose Travel Nest
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corporateWhy.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand/15 text-brand">
                    <Check className="size-5" />
                  </span>
                  <h4 className="mt-4 font-display text-lg font-semibold text-title">{f.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold text-title sm:text-3xl">
                  What We Can Arrange
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  One dedicated team for every corporate need — so your team can focus on what
                  matters.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {corporateArrange.map((s) => (
                    <div key={s} className="flex items-center gap-2.5 rounded-xl bg-soft px-4 py-3">
                      <Check className="size-4 shrink-0 text-brand" />
                      <span className="text-sm font-medium text-title">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-title sm:text-3xl">
                  Our Process
                </h2>
                <div className="mt-6 space-y-4">
                  {corporateProcess.map((p, i) => (
                    <div
                      key={p}
                      className="flex items-center gap-4 rounded-2xl border border-line bg-background px-5 py-4"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="font-display text-base font-medium text-title">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 rounded-2xl bg-soft p-8 sm:p-10">
            <h2 className="text-center font-display text-xl font-semibold text-title sm:text-2xl">
              Perfect For
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {corporateFor.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-line bg-background px-5 py-2 font-display text-sm font-medium text-title"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Request a Customized Corporate Proposal <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Customized Tours ────────────── */

const customizedDests = [
  "Thailand",
  "Malaysia",
  "Azerbaijan",
  "Turkey",
  "Pakistan",
  "Indonesia",
  "Sri Lanka",
  "Maldives",
  "China",
  "Japan",
  "Qatar",
  "Bahrain",
  "Uzbekistan",
  "Egypt",
  "Singapore",
  "Saudi Arabia",
  "Dubai",
  "Cambodia",
  "Philippines",
  "Vietnam",
];

export function CustomizedPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero title="Explore The World Your Way" crumb="Tours / Customized Tours" />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Destinations We Cover Across The World"
            subtitle="At Travel Nest, we create personalized travel experiences designed around your budget, interests, and travel style. Our team handles everything from flights and visas to hotels, transportation, and complete itinerary planning — making your journey smooth, comfortable, and unforgettable."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {customizedDests.map((d, i) => (
              <Reveal key={d} delay={(i % 4) * 80}>
                <article className="group relative h-[150px] overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={galleryItems[i % galleryItems.length].img}
                    alt={d}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 z-10 p-4">
                    <h3 className="font-display text-lg font-bold text-white">{d}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-background p-8 sm:p-12">
            <h2 className="text-center font-display text-2xl font-semibold text-title">
              Customized Tours Inquiry
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-body">
              Tell us where you'd like to go and how you like to travel — we'll craft the perfect
              journey for you.
            </p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Type of Trip</span>
                <span className="font-display text-sm font-medium text-title">Family Holiday</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Hotel Category</span>
                <span className="font-display text-sm font-medium text-title">4 Star</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Budget (Per Person)</span>
                <span className="font-display text-sm font-medium text-title">$1,000 – $2,000</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Flexible Dates</span>
                <span className="font-display text-sm font-medium text-title">Yes</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Plan My Trip <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Educational Tours ────────────── */

const educationalDests = [
  { name: "Spain", tours: "7 Tours" },
  { name: "Thailand", tours: "10 Tours" },
  { name: "Australia", tours: "13 Tours" },
  { name: "Italy", tours: "2 Tours" },
  { name: "Egypt", tours: "2 Tours" },
  { name: "England", tours: "10 Tours" },
  { name: "Sweden", tours: "12 Tours" },
  { name: "Norway", tours: "11 Tours" },
];

export function EducationalPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Educational Tours"
        crumb="Tours / Educational Tours"
        image={`${IMG}/home2/banner-img1.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Learning Beyond the Classroom"
            subtitle="Inspiring educational journeys that combine culture, history and discovery — perfect for schools, colleges and study groups. Every destination is planned with safety, learning outcomes and comfort in mind."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {educationalDests.map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) * 80}>
                <article className="group relative h-[220px] overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={galleryItems[i % galleryItems.length].img}
                    alt={d.name}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 z-10 p-4">
                    <p className="text-xs font-medium text-white/80">{d.tours}</p>
                    <h3 className="mt-1 font-display text-lg font-bold text-white">{d.name}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 rounded-2xl bg-soft p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-title">
              Plan an Educational Tour
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-body">
              Our team designs safe, engaging and curriculum-aligned tours with dedicated guides,
              group travel support and complete logistics.
            </p>
            <a href="#" className="btn-primary mt-8">
              Request a Tour Proposal <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
