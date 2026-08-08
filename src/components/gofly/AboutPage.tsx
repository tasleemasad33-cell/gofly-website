import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Briefcase,
  Bus,
  Camera,
  Check,
  ChevronDown,
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
import {
  clientAboutHero,
  clientStoryImage,
  clientCollageImages,
  clientJourneyImages,
} from "@/lib/client-images";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Counters } from "./Sections";

/* ─── Hero ─── */
function AboutHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <img
        src={clientAboutHero}
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
                  world. During my time in <span className="font-semibold text-title">Austria</span>
                  , I had the privilege of travelling extensively across Europe and witnessing
                  firsthand how travel enriches lives, broadens perspectives, and builds
                  understanding between cultures. Those journeys continued across Asia, the Middle
                  East, and Africa, where every destination offered its own unique history,
                  traditions, hospitality, and way of life.
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
                  SA
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-title">Saadia Amer</p>
                  <p className="text-sm text-body">Founder at Travel Nest</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Image side — collage */}
          <Reveal delay={120} className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-3xl border-2 border-dashed border-brand/40 sm:block" />
              <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 rounded-3xl bg-brand/10 sm:block" />

              <div className="grid grid-cols-2 gap-3">
                {clientCollageImages.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={src}
                      alt={`Travel Nest story ${i + 1}`}
                      className={`w-full object-cover ${i % 2 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-line bg-background px-4 py-3 shadow-lg">
                <span className="grid size-11 place-items-center rounded-full bg-brand text-white">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-title">Inspired in Austria</p>
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
    img: clientJourneyImages[0],
    title: "The Inspiration",
    text: "During time in Austria, the vision of Travel Nest began — travelling across Europe and witnessing how travel enriches lives, broadens perspectives and builds understanding between cultures.",
  },
  {
    img: clientJourneyImages[1],
    title: "Wider Horizons",
    text: "Those journeys continued across Asia, the Middle East and Africa, where every destination offered its own unique history, traditions, hospitality and way of life.",
  },
  {
    img: clientJourneyImages[2],
    title: "The Vision",
    text: "Every traveller has different expectations — adventure, relaxation, culture, family time or celebrations. What they all deserve is a journey carefully planned, professionally managed and genuinely memorable.",
  },
  {
    img: clientJourneyImages[3],
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

/* ─── FAQ ─── */
const faqs = [
  {
    q: "What Services Does Your Travel Agency Provide?",
    a: "A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience — including hotel booking, flight booking, visa facilitation, and customized travel packages.",
  },
  {
    q: "Do You Offer Customized Travel Packages?",
    a: "Absolutely! We offer fully customized travel packages based on your interests, budget, and schedule. Whether you're planning a solo adventure, a family vacation, a romantic getaway, or a group tour, our team will tailor every detail to create a personalized travel experience just for you.",
  },
  {
    q: "Can I Book Flights, Hotels, and Tours Separately?",
    a: "Yes, you can! We provide the flexibility to book flights, hotels, and tours separately based on your specific needs. Whether you need just a flight, only accommodation, or want to add a tour later — we're here to help you plan each part of your trip your way.",
  },
  {
    q: "Do You Provide Visa Assistance?",
    a: "Yes, we do! Our team offers complete visa assistance services to help you navigate the application process smoothly. From providing guidance on required documents to scheduling appointments and submitting applications, we're here to support you every step of the way.",
  },
  {
    q: "What Payment Methods Do You Accept?",
    a: "We accept a variety of payment methods to make your booking process easy and convenient. These include cash, bank transfers, mobile payments, and major debit/credit cards. If you have a preferred payment option, feel free to let us know!",
  },
  {
    q: "What Travel Documents are Required for International Travel?",
    a: "For international travel, you'll typically need several important travel documents, including a valid passport, visa (if required), airline tickets, travel insurance, and any related health certificates. Depending on your destination, additional documents may be necessary. Our team will guide you through the specific requirements for your trip.",
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="container-gofly">
        <SectionTitle
          title="Questions & Answer"
          subtitle="We're committed to offering more than just products — we provide exceptional experiences."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-line bg-card">
                <button
                  type="button"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[15px] font-semibold text-title">{faq.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-body transition-transform duration-300 ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIdx === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-body">{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
      <FAQSection />
    </>
  );
}
