import { Check, Compass, Mail, MapPin, MessageCircle, Phone, Quote, Sparkles } from "lucide-react";
import { IMG } from "@/lib/gofly-data";
import { Reveal } from "./Reveal";

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
          Travel Nest
        </h1>
        <p
          className="mt-3 font-display text-lg font-medium italic sm:text-xl"
          style={{ color: "#fff" }}
        >
          Journeys Crafted. Memories Nested.
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

/* ─── Our Story ─── */
function OurStory() {
  return (
    <section className="overflow-hidden py-20">
      <div className="container-gofly">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Decorative frame */}
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

              {/* Floating badge */}
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

          {/* Text side */}
          <Reveal delay={120}>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                <Compass className="size-3.5" />
                Our Story
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Travel is more than reaching a destination—
                <span className="text-brand"> it is about creating memories.</span>
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                  AM
                </div>
                <div>
                  <p className="font-display font-bold text-title">Amer Manzoor</p>
                  <p className="text-sm text-body">Founder, Travel Nest</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Checklist section ─── */
function ChecklistSection({
  title,
  items,
  light = false,
}: {
  title: string;
  items: string[];
  light?: boolean;
}) {
  return (
    <section className={light ? "bg-soft py-16" : "py-16"}>
      <div className="container-gofly">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-3.5" />
                </span>
                <span className="text-[15px] leading-relaxed text-body">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
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
    <section className="py-16">
      <div className="container-gofly">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Our Commitment</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-body">
            At Travel Nest, we believe that trust is the foundation of every successful journey. We
            work with carefully selected destination management companies (DMCs), hotels, transport
            providers and tourism partners to deliver reliable, high-quality travel solutions.
          </p>
          <p className="mt-4 font-display font-semibold text-title">We are committed to:</p>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Check className="size-3.5" />
                </span>
                <span className="text-[15px] leading-relaxed text-body">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Vision & Mission ─── */
function VisionMission() {
  return (
    <section className="bg-soft py-16">
      <div className="container-gofly grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-line bg-background p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Vision</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              To become one of Pakistan's most trusted boutique travel companies, recognised for
              delivering personalised travel experiences and building long-term relationships with
              travellers and global partners.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-3xl border border-line bg-background p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Mission</h2>
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
    { icon: MapPin, label: "Location", value: "Islamabad, Pakistan" },
    { icon: Phone, label: "Mobile / WhatsApp", value: "+92 322 96 6256" },
    { icon: Mail, label: "Email", value: "info@travelnest.pk" },
  ];

  return (
    <section className="py-16">
      <div className="container-gofly">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-card p-8 sm:p-10">
            <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">Contact</h2>
            <div className="mt-6 space-y-4">
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
      <OurStory />
      <ChecklistSection
        title="Our Services"
        items={[
          "Customised International Holidays",
          "Family Vacations",
          "Honeymoon Tours",
          "Group Tours",
          "Corporate Travel",
          "Visa Assistance",
          "Hotel Reservations",
          "Airport Transfers",
          "Sightseeing",
          "Travel Insurance Assistance",
        ]}
        light
      />
      <ChecklistSection
        title="Why Choose Travel Nest"
        items={[
          "Tailor-made itineraries",
          "Trusted international partners",
          "Transparent pricing",
          "Dedicated travel consultant",
          "Professional planning",
          "Customer-first approach",
        ]}
      />
      <CommitmentSection />
      <VisionMission />
      <AboutContact />
    </>
  );
}
