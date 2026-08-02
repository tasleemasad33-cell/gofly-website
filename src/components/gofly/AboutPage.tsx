import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Briefcase,
  Bus,
  Camera,
  Check,
  Compass,
  Eye,
  Globe,
  Handshake,
  Heart,
  Headset,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlaneTakeoff,
  Quote,
  ShieldCheck,
  Sparkles,
  StampIcon,
  Target,
  Users,
  Wallet,
} from "lucide-react";
import { IMG } from "@/lib/gofly-data";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Counters } from "./Sections";

/* ─── Hero ─── */
function AboutHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <img
        src={`${IMG}/home2/banner-img1.jpg`}
        alt="Travel Nest"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-display text-5xl font-bold sm:text-6xl" style={{ color: "#fff" }}>
          About Us
        </h1>
        <p
          className="mt-3 font-display text-lg font-medium italic sm:text-xl"
          style={{ color: "#fff" }}
        >
          Travel Nest — Journeys Crafted. Memories Nested.
        </p>
        <p className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: "#fff" }}>
          <a href="/" className="hover:underline" style={{ color: "#fff" }}>
            Home
          </a>
          <span style={{ color: "#fff" }}>•</span>
          <span style={{ color: "#fff" }}>About Us</span>
        </p>
      </div>
    </section>
  );
}

/* ─── About intro (Our Story) ─── */
function AboutIntro() {
  return (
    <section className="overflow-hidden py-20">
      <div className="container-gofly">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Text side */}
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                <Compass className="size-3.5" />
                Our Story
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Welcome to Travel Nest —{" "}
                <span className="text-brand">your gateway to unforgettable journeys!</span>
              </h2>

              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-body">
                <p>
                  The inspiration behind Travel Nest comes from years of personally experiencing the
                  world. During my time in{" "}
                  <span className="font-semibold text-title">Vienna, Austria</span>, I had the
                  privilege of travelling extensively across Europe and witnessing firsthand how
                  travel enriches lives, broadens perspectives, and builds understanding between
                  cultures. Those journeys continued across Asia, the Middle East, and Africa, where
                  every destination offered its own unique history, traditions, hospitality, and way
                  of life.
                </p>
                <p>
                  These experiences taught me that every traveller has different expectations. Some
                  seek adventure, others relaxation, cultural discovery, family time, business
                  opportunities, or once-in-a-lifetime celebrations. What they all deserve is a
                  journey that is carefully planned, professionally managed, and genuinely
                  memorable.
                </p>
              </div>

              <div className="relative mt-6 rounded-2xl border-l-4 border-brand bg-soft p-6">
                <Quote className="absolute right-5 top-5 size-8 text-brand/20" />
                <p className="font-display text-xl font-bold italic leading-snug text-title">
                  That vision became Travel Nest.
                </p>
              </div>

              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-body">
                <p>
                  Our goal is not simply to sell travel packages—we are committed to crafting
                  personalised travel experiences tailored to each client's interests, budget, and
                  aspirations. By working with carefully selected international partners, trusted
                  Destination Management Companies (DMCs), quality hotels, and reliable service
                  providers, we strive to deliver journeys that are seamless from the moment you
                  start planning until you return home with unforgettable memories.
                </p>
                <p>
                  Whether you are planning a family holiday, a honeymoon, a corporate trip, or a
                  customised international adventure, we believe every journey should be designed
                  with care, integrity, and attention to detail.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                  AM
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-title">Amer Manzoor</p>
                  <p className="text-sm text-body">Founder at Travel Nest</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Image side */}
          <Reveal delay={120} className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border-2 border-dashed border-brand/40 sm:block" />
              <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-3xl bg-brand/10 sm:block" />

              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/story-vienna.jpg"
                  alt="Travel Nest journey"
                  className="aspect-[4/5] w-full object-cover sm:aspect-square lg:aspect-[4/5]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-line bg-background px-4 py-3 shadow-lg">
                <span className="grid size-11 place-items-center rounded-full bg-brand text-white">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-title">Inspired in Vienna</p>
                  <p className="text-xs text-body">Where the vision began</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  { icon: Globe, title: "Customised International Holidays" },
  { icon: Users, title: "Family Vacations" },
  { icon: Heart, title: "Honeymoon Tours" },
  { icon: Bus, title: "Group Tours" },
  { icon: Briefcase, title: "Corporate Travel" },
  { icon: StampIcon, title: "Visa Assistance" },
  { icon: BedDouble, title: "Hotel Reservations" },
  { icon: PlaneTakeoff, title: "Airport Transfers" },
  { icon: Camera, title: "Sightseeing" },
  { icon: ShieldCheck, title: "Travel Insurance Assistance" },
];

function ServicesSection() {
  return (
    <section className="bg-soft py-20">
      <div className="container-gofly">
        <SectionTitle
          title="We're Providing Best Service Ever!"
          subtitle="From customised international holidays to visa assistance and group tours — Travel Nest takes care of every detail of your journey."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={(i % 5) * 100}>
              <div className="group h-full rounded-2xl border border-line bg-background p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[var(--shadow-float)]">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <h4 className="mt-4 font-display text-[15px] font-semibold leading-snug text-title">
                  {title}
                </h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Behind The Journey ─── */
const journey = [
  {
    img: `${IMG}/innerpages/about-page-journey-img1.jpg`,
    title: "The Inspiration",
    text: "During time in Vienna, Austria, the vision of Travel Nest began — travelling across Europe and witnessing how travel enriches lives, broadens perspectives and builds understanding between cultures.",
  },
  {
    img: `${IMG}/innerpages/about-page-journey-img2.jpg`,
    title: "Wider Horizons",
    text: "Those journeys continued across Asia, the Middle East and Africa, where every destination offered its own unique history, traditions, hospitality and way of life.",
  },
  {
    img: `${IMG}/innerpages/about-page-journey-img3.jpg`,
    title: "The Vision",
    text: "Every traveller has different expectations — adventure, relaxation, culture, family time or celebrations. What they all deserve is a journey carefully planned, professionally managed and genuinely memorable.",
  },
  {
    img: `${IMG}/innerpages/about-page-journey-img4.jpg`,
    title: "Travel Nest Today",
    text: "Working with carefully selected DMCs, quality hotels and reliable providers, we craft personalised journeys that are seamless from the moment you start planning until you return home.",
  },
];

function JourneySection() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-20">
      <div className="container-gofly">
        <SectionTitle
          title="Behind The Journey"
          subtitle="The story of Travel Nest — from a personal passion for travel to a trusted boutique travel company."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Tabs */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {journey.map((m, i) => (
                <button
                  key={m.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group overflow-hidden rounded-2xl border text-left transition-all duration-500 ${
                    active === i
                      ? "border-brand bg-brand shadow-[var(--shadow-float)]"
                      : "border-line bg-background hover:border-brand/40 hover:shadow-[var(--shadow-card)]"
                  }`}
                >
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    className="h-28 w-full object-cover"
                  />
                  <p
                    className={`px-4 py-3 font-display text-sm font-semibold ${
                      active === i ? "text-white" : "text-title"
                    }`}
                  >
                    {m.title}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-line bg-background shadow-[var(--shadow-card)]">
              <div className="relative">
                <img
                  src={journey[active].img}
                  alt={journey[active].title}
                  loading="lazy"
                  className="h-64 w-full object-cover sm:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-display text-2xl font-bold text-white">
                  {journey[active].title}
                </h3>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[15px] leading-relaxed text-body">{journey[active].text}</p>
                <ul className="mt-5 space-y-2">
                  {["Personalised planning", "Trusted global partners", "Seamless journeys"].map(
                    (f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-body">
                        <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                          <Check className="size-3" />
                        </span>
                        {f}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Travel with Us? ─── */
const reasons = [
  { icon: Compass, title: "Tailor-made Itineraries" },
  { icon: Handshake, title: "Trusted International Partners" },
  { icon: Wallet, title: "Transparent Pricing" },
  { icon: Headset, title: "Dedicated Travel Consultant" },
  { icon: Target, title: "Professional Planning" },
  { icon: BadgeCheck, title: "Customer-first Approach" },
];

function WhyChooseSection() {
  return (
    <section className="bg-soft py-20">
      <div className="container-gofly">
        <SectionTitle
          title="Why Travel with Us?"
          subtitle="We specialize in crafting personalized journeys that suit every traveler's dream."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={(i % 3) * 110}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[var(--shadow-float)]">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h4 className="font-display text-lg font-semibold text-title">{title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    We deliver every journey with care, integrity and attention to detail.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Our Commitment ─── */
function CommitmentSection() {
  const items = [
    "Personalised travel planning",
    "Transparent pricing",
    "Prompt customer support",
    "Reliable global partnerships",
    "Professional service from enquiry to return",
  ];

  return (
    <section className="py-20">
      <div className="container-gofly">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
              <Heart className="size-3.5" />
              Our Commitment
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Trust is the foundation of{" "}
              <span className="text-brand">every successful journey.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-body">
              At Travel Nest, we work with carefully selected destination management companies
              (DMCs), hotels, transport providers and tourism partners to deliver reliable,
              high-quality travel solutions.
            </p>
            <a href="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
              Talk to Our Team <ArrowRight className="size-4" />
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-line bg-soft p-8 sm:p-10">
              <p className="font-display font-semibold text-title">We are committed to:</p>
              <ul className="mt-5 space-y-3.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Vision & Mission ─── */
function VisionMission() {
  return (
    <section className="bg-soft py-20">
      <div className="container-gofly grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-background p-8 sm:p-10">
            <span className="grid size-14 place-items-center rounded-full bg-brand/10 text-brand">
              <Eye className="size-6" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">Vision</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              To become one of Pakistan's most trusted boutique travel companies, recognised for
              delivering personalised travel experiences and building long-term relationships with
              travellers and global partners.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-3xl border border-line bg-background p-8 sm:p-10">
            <span className="grid size-14 place-items-center rounded-full bg-brand/10 text-brand">
              <Target className="size-6" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">Mission</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              To connect people with extraordinary destinations through thoughtful planning,
              dependable service and trusted travel partnerships while creating memorable journeys
              that exceed expectations.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function AboutContact() {
  const contacts = [
    { icon: MapPin, label: "Location", value: "Gulberg Greens, Islamabad" },
    { icon: Phone, label: "Mobile / WhatsApp", value: "92 322 9606256" },
    { icon: Mail, label: "Email", value: "Info@travelnest.com" },
  ];

  return (
    <section className="py-20">
      <div className="container-gofly">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-card p-8 sm:p-10">
            <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-[15px] text-body">
              Visit our studio or reach out to our team — we're here to help plan your next journey.
            </p>
            <div className="mt-8 space-y-4">
              {contacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center justify-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                    <Icon className="size-4" />
                  </span>
                  <p className="text-[15px] text-body">
                    <span className="font-display font-semibold text-title">{label}:</span> {value}
                  </p>
                </div>
              ))}
              <div className="flex items-center justify-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <MessageCircle className="size-4" />
                </span>
                <p className="text-[15px] text-body">
                  <span className="font-display font-semibold text-title">Instagram:</span>{" "}
                  @gramofytravel
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="size-4" />
                </span>
                <p className="text-[15px] text-body">
                  <span className="font-display font-semibold text-title">Website:</span>{" "}
                  www.travelnest.pk
                </p>
              </div>
              <div className="pt-2 text-center">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Contact Us <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Main ─── */
export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <ServicesSection />
      <JourneySection />
      <WhyChooseSection />
      <CommitmentSection />
      <Counters />
      <VisionMission />
      <AboutContact />
    </>
  );
}
