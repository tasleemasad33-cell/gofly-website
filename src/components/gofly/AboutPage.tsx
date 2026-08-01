import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Compass, CreditCard, Globe, MapPin, Shield, Star, Users, Wallet } from "lucide-react";
import { IMG } from "@/lib/gofly-data";
import { Reveal } from "./Reveal";
import { useCountUp } from "./useCountUp";

/* ─── Hero ─── */
function AboutHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <img
        src={`${IMG}/home2/banner-img1.jpg`}
        alt="About Us"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-display text-5xl font-bold text-white sm:text-6xl" style={{ color: "#fff" }}>About GoFly</h1>
        <p className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: "#fff" }}>
          <a href="/" className="hover:underline" style={{ color: "#fff" }}>Home</a>
          <span style={{ color: "#fff" }}>•</span>
          <span style={{ color: "#fff" }}>About Us</span>
        </p>
      </div>
    </section>
  );
}

/* ─── Why We're Best Agency ─── */
function WhyBestAgency() {
  return (
    <section className="py-20">
      <div className="container-gofly grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Why We're Best Agency</h2>
            <p className="mt-2 font-display text-lg text-brand">Welcome to GoFly Travel Agency – Your Gateway to Unforgettable Journeys!</p>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              GoFly Travel Agency is a trusted name in the travel industry, offering seamless travel planning, personalized itineraries, and unforgettable adventures. With a passion for exploration and a commitment to customer satisfaction, we handle every detail—from flights and accommodations to guided tours and exclusive experiences—so you can focus on making memories.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-body">
              We believe that travel is more than just moving from one place to another—it's about discovering new cultures, creating extraordinary experiences, and making lifelong connections.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src={`${IMG}/home1/testimonial-author-img1.png`} alt="Robert Harrington" className="size-12 rounded-full object-cover" />
              <div>
                <p className="font-display font-semibold text-title">Robert Harrington</p>
                <p className="text-sm text-body">Founder at GoFly</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative">
            <img src={`${IMG}/home2/blog-img1.jpg`} alt="Travel" className="rounded-2xl shadow-lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Service Banner ─── */
function ServiceBanner() {
  const features = [
    { icon: MapPin, title: "Local Guidance", desc: "Your go-to experts with experienced professionals' guidance." },
    { icon: Star, title: "Deals & Discounts", desc: "Exclusive offers on flights, hotels, & packages." },
    { icon: Wallet, title: "Saves Money", desc: "Affordable fares, compare a search trips. Multi-destination & budget-friendly options." },
  ];

  return (
    <section className="bg-soft py-16">
      <div className="container-gofly text-center">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">We're Providing Best Service Ever!</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center">
                <span className="grid size-14 place-items-center rounded-full border-2 border-brand bg-white text-brand shadow-sm">
                  <f.icon className="size-6" />
                </span>
                <h4 className="mt-4 font-display text-lg font-semibold text-title">{f.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-body">{f.desc}</p>
              </div>
            ))}
          </div>
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-title">
            Get 30% Discounts All Package – Check Offer <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Behind The Journey ─── */
function BehindJourney() {
  const milestones = [
    { year: "1986", label: "1986 – The Birth of Travel Agencies", desc: "The first-ever travel agency was founded by Thomas Cook in England. He organized group trips, starting with a short train ride from Leicester to Loughborough, and later expanded to trips to Paris and beyond. He introduced the first-ever travel brochures, guiding travelers on destinations & makes." },
    { year: "1996", label: "1996", desc: "Digital revolution begins in the travel industry with online booking systems." },
    { year: "2006", label: "2006", desc: "Social media and mobile apps transform how travelers discover and book trips." },
    { year: "2016", label: "2016", desc: "AI-powered personalization and immersive experiences become mainstream." },
    { year: "2022", label: "2022", desc: "Sustainable and responsible tourism gains global momentum." },
    { year: "2023", label: "2023", desc: "Hyper-personalized travel with cutting-edge technology." },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-20">
      <div className="container-gofly text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Behind The Journey</h2>
          <p className="mt-3 text-[15px] text-body">With years of experience in the travel industry, we specialize in crafting personalized journeys.</p>
        </Reveal>

        <Reveal delay={100}>
          {/* Timeline images */}
          <div className="mt-12 flex items-end justify-start gap-3 overflow-x-auto pb-4 sm:justify-center sm:gap-4">
            {milestones.map((m, i) => (
              <button
                key={m.year}
                onClick={() => setActive(i)}
                className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className={`mb-3 overflow-hidden rounded-full border-4 transition-all duration-300 ${
                  active === i ? "size-16 border-brand sm:size-20" : "size-11 border-line sm:size-14"
                }`}>
                  <img
                    src={`${IMG}/home2/destination-img${(i % 6) + 1}.jpg`}
                    alt={m.year}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className={`font-display text-xs font-bold sm:text-sm ${active === i ? "text-brand" : "text-title"}`}>
                  {m.year}
                </span>
              </button>
            ))}
          </div>

          {/* Timeline content */}
          <div className="mx-auto mt-10 max-w-2xl text-left">
            <h3 className="font-display text-lg font-bold text-title">{milestones[active].label}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-body">{milestones[active].desc}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Why Travel With Us ─── */
function WhyTravelWithUs() {
  const features = [
    { icon: Compass, title: "Expertly Curated Tours." },
    { icon: CreditCard, title: "Affordable & Flexible Packages." },
    { icon: Shield, title: "24/7 Customer Support" },
    { icon: Users, title: "Certified & Experienced Guides." },
  ];

  const partners = [1, 2, 3, 4, 5, 6].map((n) => `${IMG}/home1/partner-0${n}.png`);

  return (
    <section className="bg-soft py-20">
      <div className="container-gofly text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Why Travel with Us?</h2>
          <p className="mt-3 text-[15px] text-body">We specialize in crafting personalized journeys that suit every traveler's dream.</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                <span className="mx-auto grid size-14 place-items-center rounded-full border-2 border-brand bg-white text-brand">
                  <f.icon className="size-6" />
                </span>
                <h4 className="mt-4 font-display text-sm font-semibold text-title">{f.title}</h4>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-10 text-sm font-medium text-body">These Company You Can Easily Trust!</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <img key={p} src={p} alt="" className="h-8 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0" loading="lazy" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Paragliding Image ─── */
function ParaglidingSection() {
  return (
    <section className="py-20">
      <div className="container-gofly">
        <Reveal>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={`${IMG}/home2/banner-img2.jpg`}
              alt="Adventure"
              className="h-[250px] w-full object-cover sm:h-[350px] lg:h-[400px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const faqs = [
    { q: "What Services Does Your Travel Agency Provide?", a: "We provide comprehensive travel services including flight bookings, hotel reservations, customized tour packages, visa assistance, travel insurance, and 24/7 customer support." },
    { q: "Do You Offer Customized Travel Packages?", a: "Yes, we specialize in creating personalized itineraries tailored to your preferences, budget, and travel dates." },
    { q: "Can I Book Flights, Hotels, and Tours Separately?", a: "Absolutely! You can book each service individually or combine them for a complete travel package." },
    { q: "Do You Provide Visa Assistance?", a: "Yes, we provide complete visa assistance including documentation, application, and follow-up for all major destinations." },
    { q: "What Payment Methods Do You Accept?", a: "We accept all major credit/debit cards, bank transfers, PayPal, and installment payment options." },
    { q: "What Travel Documents Are Required for International Travel?", a: "Requirements vary by destination but typically include a valid passport, visa, travel insurance, and vaccination certificates." },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20">
      <div className="container-gofly">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Questions & Answer</h2>
            <p className="mt-3 text-[15px] text-body">We are committed to offering more than just vacations—we provide exceptional experiences.</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  openIndex === i ? "border-brand shadow-sm" : "border-line"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className={`font-display text-sm font-semibold ${openIndex === i ? "text-brand" : "text-title"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`size-5 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-brand" : "text-body"
                  }`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4">
                    <p className="text-[15px] leading-relaxed text-body">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Counters ─── */
function AboutCounters() {
  const data = [
    { value: 2, suffix: "K+", label: "Tour Completed" },
    { value: 1, suffix: "+", label: "Travel Experience" },
    { value: 2, suffix: "+", label: "Happy Traveler" },
    { value: 10, suffix: "%", label: "Retention Rate" },
  ];

  return (
    <section className="border-y border-line py-14">
      <div className="container-gofly grid grid-cols-2 gap-8 lg:grid-cols-4">
        {data.map((c) => (
          <AboutCounter key={c.label} {...c} />
        ))}
      </div>
    </section>
  );
}

function AboutCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
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

/* ─── Main ─── */
export function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyBestAgency />
      <ServiceBanner />
      <BehindJourney />
      <WhyTravelWithUs />
      <ParaglidingSection />
      <FAQSection />
      <AboutCounters />
    </>
  );
}
