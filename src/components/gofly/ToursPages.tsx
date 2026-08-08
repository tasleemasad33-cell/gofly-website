import { useState, useMemo } from "react";
import {
  corporatePackages,
  customizedPackages,
  educationalPackages,
  groupTourPackages,
  honeymoonPackages,
  IMG,
  getAdminPackages,
} from "@/lib/gofly-data";
import { PageHero } from "./PageHero";
import { InquiryStrip, PackageListingSection } from "./TourListing";
import { PackageCard } from "./PackageCard";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const groupCategories = ["International", "Domestic", "Umrah"] as const;

const tabMap: Record<string, string> = {
  International: "international",
  Domestic: "domestic",
  Umrah: "umrah",
};

function TourPageShell({
  heroTitle,
  crumb,
  heroImage,
  listingTitle,
  subtitle,
  packages,
}: {
  heroTitle: string;
  crumb: string;
  heroImage?: string;
  listingTitle: string;
  subtitle: string;
  packages: import("@/lib/gofly-data").Pkg[];
}) {
  return (
    <div className="overflow-x-hidden">
      <PageHero title={heroTitle} crumb={crumb} image={heroImage} />
      <PackageListingSection title={listingTitle} subtitle={subtitle} packages={packages} />
      <InquiryStrip />
    </div>
  );
}

export function GroupToursPage() {
  const [activeTab, setActiveTab] = useState<string>("International");

  const tabMap: Record<string, string> = {
    International: "international",
    Domestic: "domestic",
    Umrah: "umrah",
  };

  const allGroupPackages = useMemo(() => {
    const adminPkgs = getAdminPackages().filter((p) => p.category === "group");
    return [...groupTourPackages, ...adminPkgs];
  }, []);

  const filtered = allGroupPackages.filter((p) => p.subcategory === tabMap[activeTab]);

  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Group Tours"
        crumb="Tours / Group Tours"
        heroImage={`${IMG}/home2/banner-img1.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Find Your Perfect Group Tour"
            subtitle="Travel the world with expertly planned group tours designed for comfort, safety and unforgettable memories. Voyage with like-minded explorers while our team manages your flights, hotels, visas and guided experiences from start to finish."
          />

          {/* Category tabs */}
          <div className="mt-10 flex justify-center gap-3">
            {groupCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-full px-6 py-2.5 font-display text-sm font-medium transition-all ${
                  activeTab === cat
                    ? "bg-brand text-white shadow-md"
                    : "bg-soft text-title hover:bg-brand/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Packages grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={(i % 3) * 80}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-body">
              No packages available in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>
      <InquiryStrip />
    </div>
  );
}

export function HoneymoonPage() {
  const allHoneymoonPackages = useMemo(() => {
    const adminPkgs = getAdminPackages().filter((p) => p.category === "honeymoon");
    return [...honeymoonPackages, ...adminPkgs];
  }, []);

  return (
    <TourPageShell
      heroTitle="Honeymoon Trips"
      crumb="Tours / Honeymoon Trips"
      heroImage={`${IMG}/home2/destination-img6.jpg`}
      listingTitle="Most Loved Honeymoon Destinations"
      subtitle="Choose the perfect backdrop for your love story — from tropical islands to romantic city escapes, every honeymoon is planned with special touches for you both."
      packages={allHoneymoonPackages}
    />
  );
}

export function CorporatePage() {
  const features = [
    {
      title: "End-to-End Corporate Planning",
      desc: "From flights and hotels to conference venues and transportation — everything managed professionally under one roof.",
    },
    {
      title: "Tailor-Made Experiences",
      desc: "Every company has different goals. We design customized corporate experiences based on your team, objectives & budget.",
    },
    {
      title: "Dedicated Corporate Support",
      desc: "A dedicated coordinator remains available throughout the journey for smooth communication and on-ground assistance.",
    },
    {
      title: "Global Destinations",
      desc: "From Dubai and Baku to Bali, Malaysia, Thailand, Turkey, and Europe — we create experiences worldwide.",
    },
    {
      title: "Budget-Friendly Luxury",
      desc: "Professional execution with premium experiences while staying within your company's allocated budget.",
    },
    {
      title: "Seamless Visa Assistance",
      desc: "Fast and reliable visa facilitation for corporate groups and international business travel.",
    },
  ];

  const destinations = [
    {
      name: "Dubai",
      img: "/images/client/tours/Dubai.png",
      desc: "Luxury stays, business hubs, desert experiences, and premium networking opportunities.",
    },
    {
      name: "Bali",
      img: "/images/client/tours/Bali--Indoneshia.png",
      desc: "Perfect for executive retreats, wellness experiences, and team rejuvenation.",
    },
    {
      name: "Baku",
      img: "/images/client/tours/Baku--Azerbaijan.png",
      desc: "Affordable luxury with modern infrastructure and unique cultural experiences.",
    },
    {
      name: "Malaysia",
      img: "/images/client/tours/Malaysia--Kuala-Lumpur-.png",
      desc: "Ideal for conferences, corporate networking, and multicultural experiences.",
    },
    {
      name: "Thailand",
      img: "/images/client/tours/Thailand.png",
      desc: "Balance business and leisure with exciting team activities and premium hospitality.",
    },
    {
      name: "Turkey",
      img: "/images/client/tours/Turkey.png",
      desc: "A blend of business, history, luxury, and unforgettable team experiences.",
    },
    {
      name: "China",
      img: "/images/client/tours/China-Customized-Tour.png",
      desc: "A fusion of innovation, culture, luxury, and unforgettable group experiences.",
    },
    {
      name: "Japan",
      img: "/images/client/tours/Japan-Customized-Tour.png",
      desc: "A blend of tradition, technology, elegance, and unforgettable team experiences.",
    },
  ];

  const services = [
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

  const process = [
    {
      step: "1",
      title: "Consultation",
      desc: "Share your requirements, goals, and preferred destination.",
    },
    {
      step: "2",
      title: "Proposal & Budgeting",
      desc: "Our team prepares a customized proposal with complete costing.",
    },
    {
      step: "3",
      title: "Planning & Coordination",
      desc: "Flights, hotels, activities, visas, and logistics are finalized.",
    },
    {
      step: "4",
      title: "Execution",
      desc: "Our dedicated team ensures smooth operations throughout the journey.",
    },
    {
      step: "5",
      title: "Post-Tour Support",
      desc: "Feedback collection and future collaboration planning.",
    },
  ];

  const perfectFor = [
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

  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Corporate Tours & Retreats"
        crumb="Tours / Corporate Tours"
        heroImage={`${IMG}/home2/banner-img1.jpg`}
      />

      {/* Tagline */}
      <section className="py-16">
        <div className="container-gofly text-center">
          <h2 className="font-display text-2xl font-bold text-title sm:text-3xl">
            Connecting Teams Beyond Borders
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] text-body">
            Plan impactful corporate journeys, executive retreats, conferences, and team experiences
            with Travel Nest. From planning to execution, we handle every detail while your team
            focuses on growth, collaboration, and meaningful experiences.
          </p>
          <a
            href="https://wa.me/923229606256?text=Hi%20Travel%20Nest%2C%20I%27m%20interested%20in%20a%20corporate%20tour%20proposal."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Request a Proposal
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-soft py-16">
        <div className="container-gofly">
          <h2 className="text-center font-display text-2xl font-bold text-title sm:text-3xl">
            Why Companies Choose Travel Nest?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl bg-background p-6 shadow-sm">
                <h4 className="font-display text-lg font-semibold text-title">{f.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container-gofly">
          <h2 className="text-center font-display text-2xl font-bold text-title sm:text-3xl">
            Featured Corporate Destinations
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-line bg-card">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg font-semibold text-title">{d.name}</h4>
                  <p className="mt-1 text-sm text-body">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Arrange */}
      <section className="bg-soft py-16">
        <div className="container-gofly">
          <h2 className="text-center font-display text-2xl font-bold text-title sm:text-3xl">
            What We Can Arrange?
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-background p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  ✓
                </span>
                <span className="font-display text-sm font-medium text-title">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container-gofly">
          <h2 className="text-center font-display text-2xl font-bold text-title sm:text-3xl">
            Our Process
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-brand text-lg font-bold text-white">
                  {p.step}
                </div>
                <h4 className="mt-3 font-display text-sm font-semibold text-title">{p.title}</h4>
                <p className="mt-1 text-xs text-body">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-soft py-16">
        <div className="container-gofly text-center">
          <h2 className="font-display text-2xl font-bold text-title sm:text-3xl">Perfect For</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {perfectFor.map((p) => (
              <span
                key={p}
                className="rounded-full bg-background px-5 py-2 font-display text-sm font-medium text-title shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-gofly text-center">
          <h2 className="font-display text-2xl font-bold text-title sm:text-3xl">
            Let's Create Meaningful Corporate Experiences
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] text-body">
            Whether you're planning a small executive getaway or a large-scale corporate retreat,
            Travel Nest helps your company travel smarter, smoother, and better.
          </p>
          <a
            href="https://wa.me/923229606256?text=Hi%20Travel%20Nest%2C%20I%27m%20interested%20in%20a%20customized%20corporate%20proposal."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Request a Customized Corporate Proposal
          </a>
        </div>
      </section>

      <InquiryStrip />
    </div>
  );
}

export function CustomizedPage() {
  const allCustomizedPackages = useMemo(() => {
    const adminPkgs = getAdminPackages().filter((p) => p.category === "customized");
    return [...customizedPackages, ...adminPkgs];
  }, []);

  return (
    <TourPageShell
      heroTitle="Customized Tours"
      crumb="Tours / Customized Tours"
      heroImage={`${IMG}/home2/destination-img2.jpg`}
      listingTitle="Explore The World Your Way"
      subtitle="At Travel Nest, we create personalized travel experiences designed around your budget, interests, and travel style. Our team handles everything from flights and visas to hotels, transportation, and complete itinerary planning."
      packages={allCustomizedPackages}
    />
  );
}

export function EducationalPage() {
  const allEducationalPackages = useMemo(() => {
    const adminPkgs = getAdminPackages().filter((p) => p.category === "educational");
    return [...educationalPackages, ...adminPkgs];
  }, []);

  return (
    <TourPageShell
      heroTitle="Educational Tours"
      crumb="Tours / Educational Tours"
      heroImage={`${IMG}/home2/banner-img1.jpg`}
      listingTitle="Learning Beyond the Classroom"
      subtitle="Inspiring educational journeys that combine culture, history and discovery — perfect for schools, colleges and study groups. Every destination is planned with safety, learning outcomes and comfort in mind."
      packages={allEducationalPackages}
    />
  );
}
