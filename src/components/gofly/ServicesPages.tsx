import {
  ArrowRight,
  Building2,
  Car,
  Check,
  Compass,
  Heart,
  Hotel,
  MapPin,
  Ship,
  Sparkles,
  Users,
} from "lucide-react";
import { IMG } from "@/lib/gofly-data";
import { PageHero } from "./PageHero";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

/* ────────────── Visa Facilitation ────────────── */

const visaCountries = [
  "Azerbaijan",
  "Bahrain",
  "China",
  "Canada",
  "Cambodia",
  "Egypt",
  "Europe",
  "Indonesia",
  "Japan",
  "Malaysia",
  "Maldives",
  "Philippines",
  "Schengen",
  "Singapore",
  "Sri Lanka",
  "Thailand",
  "Turkey",
  "Tajikistan",
  "Umrah",
  "Uzbekistan",
  "United Kingdom",
  "United States",
];

const visaSteps = [
  {
    title: "Personalized Consultation",
    desc: "We understand your travel purpose and guide you through the right visa route.",
  },
  {
    title: "Document Preparation",
    desc: "Our team reviews and prepares every required document with care.",
  },
  {
    title: "Application Submission",
    desc: "We submit your application and book appointments on your behalf.",
  },
  {
    title: "Status Updates",
    desc: "We keep you informed at every step, so you always know where your application stands.",
  },
];

export function VisaFacilitationPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Visa Facilitation"
        crumb="Services / Visa Facilitation"
        image={`${IMG}/home2/banner-img2.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Your Journey, Our Paperwork"
            subtitle="We make international travel simple by offering professional visa facilitation services tailored to your needs. Whether you're planning a holiday, business trip, group tour, study abroad journey, or Umrah, our experienced team ensures your application is handled accurately and efficiently."
          />

          <h2 className="mt-14 text-center font-display text-2xl font-semibold text-title sm:text-3xl">
            Countries We Offer
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {visaCountries.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-background px-5 py-2 font-display text-sm font-medium text-title transition-colors hover:border-brand hover:text-brand"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visaSteps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="grid size-12 place-items-center rounded-full bg-brand/15 font-display text-lg font-bold text-brand">
                    {i + 1}
                  </span>
                  <h4 className="mt-4 font-display text-base font-semibold text-title">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-soft p-8 sm:p-12">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div>
                <h2 className="font-display text-2xl font-semibold text-title">
                  Submit Your Query, We'll Do the Rest
                </h2>
                <p className="mt-2 max-w-xl text-sm text-body">
                  With expertise in tourist, business, student, and religious visas, our goal is to
                  provide a smooth, reliable, and stress-free experience.
                </p>
              </div>
              <div className="grid w-full max-w-md gap-4 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-xl border border-line bg-background px-4 py-3">
                  <span className="text-sm text-body">Departure City</span>
                  <span className="font-display text-sm font-medium text-title">Islamabad</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-line bg-background px-4 py-3">
                  <span className="text-sm text-body">Visa Country</span>
                  <span className="font-display text-sm font-medium text-title">Schengen</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Send Message <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Air Tickets ────────────── */

const airlines = [
  "PIA",
  "Emirates",
  "Qatar Airways",
  "Turkish Airlines",
  "Etihad",
  "Saudia",
  "Air Arabia",
  "Fly Dubai",
  "Kuwait Airways",
  "Gulf Air",
];

export function AirTicketsPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Air Ticket Booking"
        crumb="Services / Air Tickets"
        image={`${IMG}/home1/banner-img2.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Book Your Flight with Ease"
            subtitle="We go beyond just booking your flight — we become your travel partner. With 24/7 support, timely reminders, and assistance in case of missed flights, changes, or refunds, we ensure you're never alone during your journey."
          />

          <div className="mt-10 overflow-hidden rounded-2xl bg-brand px-6 py-4 text-center text-sm font-medium text-primary-foreground sm:text-base">
            🕋 November Umrah Special! Fly with Kuwait Airways | ✈️ 15 Days Umrah Airfare Package
            starting from <strong>PKR 120,000</strong> | 🎉 Limited seats available
          </div>

          <h2 className="mt-14 text-center font-display text-2xl font-semibold text-title sm:text-3xl">
            Fly with the World's Leading Airlines
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {airlines.map((a) => (
              <span
                key={a}
                className="rounded-full border border-line bg-background px-5 py-2 font-display text-sm font-medium text-title transition-colors hover:border-brand hover:text-brand"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-card p-8 sm:p-12">
            <h2 className="text-center font-display text-2xl font-semibold text-title">
              Let Our Team Find the Best Options
            </h2>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Trip Type</span>
                <span className="font-display text-sm font-medium text-title">Round Trip</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Cabin Class</span>
                <span className="font-display text-sm font-medium text-title">Economy</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Departure</span>
                <span className="font-display text-sm font-medium text-title">Lahore (LHE)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Destination</span>
                <span className="font-display text-sm font-medium text-title">Dubai (DXB)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Flexible Dates</span>
                <span className="font-display text-sm font-medium text-title">Yes</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Preferred Contact</span>
                <span className="font-display text-sm font-medium text-title">WhatsApp</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Send Message <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Hotel Bookings ────────────── */

const hotelFeatures = [
  {
    icon: Hotel,
    title: "Global Stays",
    desc: "From budget stays to luxury resorts, anywhere in the world.",
  },
  {
    icon: Building2,
    title: "Best Rates",
    desc: "Exclusive negotiated rates across top hotel chains.",
  },
  {
    icon: Check,
    title: "Instant Confirmation",
    desc: "Fast confirmations so you can plan with confidence.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    desc: "Special requests, room preferences and celebrations handled.",
  },
];

export function HotelBookingsPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Find Your Perfect Stay Anywhere in the World"
        crumb="Services / Hotel Bookings"
        image={`${IMG}/home1/banner-img1.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="From Budget Stays to Luxury Resorts"
            subtitle="We secure the perfect accommodation for every journey — beachfront villas, city hotels, desert resorts and family suites — all matched to your style and budget."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hotelFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
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
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {["4 Star", "5 Star", "Luxury Villa"].map((t) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-2xl border border-line bg-soft px-6 py-5"
              >
                <span className="font-display text-base font-medium text-title">Hotel Type</span>
                <span className="font-display text-sm font-semibold text-brand">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Transportation ────────────── */

const transportFeatures = [
  {
    icon: Car,
    title: "Airport Transfers",
    desc: "Reliable pick-up and drop-off, on time, every time.",
  },
  {
    icon: MapPin,
    title: "City Tours",
    desc: "Comfortable transport for exploring cities at your own pace.",
  },
  { icon: Users, title: "Group Transport", desc: "Coaches and vans for group travel and tours." },
  {
    icon: Compass,
    title: "Intercity Travel",
    desc: "Seamless connections between cities and attractions.",
  },
];

export function TransportationPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Transportation"
        crumb="Services / Transportation"
        image={`${IMG}/home2/banner-img2.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Travel Smoothly, Arrive Comfortably"
            subtitle="From airport pick-ups to intercity journeys, we arrange safe, comfortable and dependable transportation so you can focus on enjoying the journey."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {transportFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
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
          <div className="mt-14 rounded-2xl bg-soft p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-title">
              Need Transport for Your Trip?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-body">
              Share your route and dates, and we'll arrange the right vehicle for your group.
            </p>
            <a href="#" className="btn-primary mt-8">
              Request Transport <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Cruises ────────────── */

const cruisePackages = [
  {
    icon: Ship,
    title: "Short Cruises",
    days: "3–5 Days",
    desc: "Budget friendly escapes to coastal gems.",
  },
  {
    icon: Sparkles,
    title: "Luxury Cruises",
    days: "5–10 Days",
    desc: "Premium experience with world-class amenities.",
  },
  {
    icon: Heart,
    title: "Honeymoon Cruises",
    days: "Custom",
    desc: "A journey of love across the open sea.",
  },
  {
    icon: Users,
    title: "Group / Corporate Cruises",
    days: "Custom",
    desc: "Executive cruise experiences for teams.",
  },
];

const cruiseHighlights = [
  "Premium International Cruise Lines",
  "All-Inclusive Packages (Flights + Visa + Stay)",
  "Halal Food Options Available",
  "Ideal for Families, Couples & Groups",
];

export function CruisesPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Set Sail on a Journey of Luxury & Adventure"
        crumb="Services / Cruises"
        image={`${IMG}/home1/tour-package-img6.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="All-Inclusive Cruise Packages"
            subtitle="Experience world-class cruises with unforgettable voyages, comfort and exciting destinations. Visa, flights and premium stays — all handled by Travel Nest."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cruiseHighlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-line bg-background px-5 py-2 font-display text-sm font-medium text-title"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cruisePackages.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand/15 text-brand">
                    <p.icon className="size-5" />
                  </span>
                  <p className="mt-4 font-display text-xs font-semibold text-brand">{p.days}</p>
                  <h4 className="mt-1 font-display text-lg font-semibold text-title">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-background p-8 sm:p-12">
            <h2 className="text-center font-display text-2xl font-semibold text-title">
              Tell Us Where the Ocean Should Take You
            </h2>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Preferred Destination</span>
                <span className="font-display text-sm font-medium text-title">Mediterranean</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Cruise Duration</span>
                <span className="font-display text-sm font-medium text-title">6–9 Days</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Cabin Type</span>
                <span className="font-display text-sm font-medium text-title">Balcony</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Budget (Per Person)</span>
                <span className="font-display text-sm font-medium text-title">400k – 700k PKR</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Send Enquiry <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Destination Wedding ────────────── */

const weddingServices = [
  {
    icon: Heart,
    title: "Destination Wedding Planning",
    desc: "Elegant wedding arrangements with complete travel, venue, and guest management services.",
  },
  {
    icon: Sparkles,
    title: "Luxury Honeymoon Experiences",
    desc: "Romantic customized honeymoon packages with luxury stays and unforgettable experiences.",
  },
  {
    icon: Users,
    title: "Group Travel & Guest Management",
    desc: "Smooth travel coordination, hotel bookings, airport transfers, and visa assistance for wedding guests.",
  },
];

export function DestinationWeddingPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Destination Weddings, Designed Beyond Borders"
        crumb="Services / Destination Wedding"
        image={`${IMG}/home2/tour-package-img1.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Your Dream Celebration, Anywhere in the World"
            subtitle="From beachfront vows in Bali to royal celebrations in Turkey, we create unforgettable destination weddings with luxury travel, seamless planning, and personalized experiences for couples and families worldwide."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {weddingServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="grid size-12 place-items-center rounded-full bg-brand/15 text-brand">
                    <s.icon className="size-5" />
                  </span>
                  <h4 className="mt-4 font-display text-lg font-semibold text-title">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { label: "3+ Years", sub: "Of Experience" },
              { label: "500+", sub: "Happy Guests" },
              { label: "20+", sub: "Wedding Destinations" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-soft px-6 py-8 text-center">
                <p className="font-display text-4xl font-bold text-brand">{s.label}</p>
                <p className="mt-2 font-display text-sm font-medium text-title">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="btn-primary">
              Plan Your Wedding <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="btn-primary bg-transparent border border-brand text-brand hover:bg-brand hover:text-primary-foreground"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
