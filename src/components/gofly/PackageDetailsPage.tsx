import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  Minus,
  Plus,
  Send,
  Share2,
  Star,
  StarHalf,
  Users,
  X,
} from "lucide-react";
import { IMG, allPackages, getPackageDetail, type Pkg } from "@/lib/gofly-data";
import { PackageCard } from "./PackageCard";
import { Carousel } from "./Carousel";
import { SectionTitle } from "./SectionTitle";
import { WhatsAppBookingForm } from "./WhatsAppBookingForm";

const TRIPADVISOR_IMG = `${IMG}/innerpages/icon/tripadvisor-rating.svg`;
const CARBON_IMG = `${IMG}/innerpages/icon/carbon-icon.svg`;

function nightsOf(pkg: Pkg) {
  const d = pkg.duration ?? "01 Day";
  if (d.toLowerCase().includes("night")) {
    const m = d.match(/(\d+)\s*[Nn]ight/);
    return m ? `${m[1]} Nights` : "Nights";
  }
  const m = d.match(/(\d+)/);
  const days = m ? Number(m[1]) : 1;
  return `${Math.max(1, days - 1)} Nights`;
}

function daysOf(pkg: Pkg) {
  return (pkg.duration ?? "01 Day").split("/")[0].trim();
}

/* ───────────── Hero ───────────── */

function DetailsHero({ pkg }: { pkg: Pkg }) {
  const [index, setIndex] = useState(0);
  const d = getPackageDetail(pkg.slug);
  const count = pkg.images.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="relative mt-[64px] h-[420px] overflow-hidden sm:mt-[80px] sm:h-[500px]">
      {pkg.images.map((img, i) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={img} alt={pkg.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}
      <div className="container-gofly relative z-10 flex h-full flex-col items-center justify-center text-center">
        <p className="font-display text-sm text-white/90 sm:text-base">
          Starting From <strong className="text-lg text-brand2">{pkg.price}</strong>/per person
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold text-white sm:text-5xl lg:text-[56px] lg:leading-[1.15]">
          {pkg.title}
        </h1>
        <span className="mt-5 rounded-full bg-white/15 px-5 py-2 font-display text-sm font-medium text-white backdrop-blur-sm">
          {daysOf(pkg)} | {nightsOf(pkg)} | {d?.destinations.length ?? 1} Destinations
        </span>
      </div>
      <button
        aria-label="Previous image"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-brand sm:left-8 sm:size-12"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Next image"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-brand sm:right-8 sm:size-12"
      >
        <ChevronRight className="size-5" />
      </button>
    </section>
  );
}

/* ───────────── Hero bottom bar ───────────── */

function DetailsBottomBar({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug);
  return (
    <div className="border-b border-line bg-card">
      <div className="container-gofly flex flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <li className="inline-flex items-center gap-1.5 text-sm text-body">
              <Check className="size-4 text-brand" /> No Booking Fee
            </li>
            <li className="inline-flex items-center gap-1.5 text-sm text-body">
              <Check className="size-4 text-brand" /> Best Price Ever
            </li>
          </ul>
          <a
            href="https://www.tripadvisor.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2"
          >
            <img src={TRIPADVISOR_IMG} alt="TripAdvisor" className="h-6" />
            <strong className="font-display text-sm text-title">({d?.rating ?? 4.5}/5)</strong>
            <span className="text-xs text-body">
              based on {d?.reviews ?? pkg.reviews ?? 40} reviews
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-sm text-body">
            <img src={CARBON_IMG} alt="" className="size-4" /> 100% Carbon Neutral
          </span>
          <button
            aria-label="Share"
            className="group relative grid size-10 place-items-center rounded-full border border-line text-title transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <Share2 className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ───────────── Section wrapper ───────────── */

function SectionHeading({ title }: { title: string }) {
  return <h4 className="font-display text-2xl font-semibold text-title">{title}</h4>;
}

/* ───────────── About ───────────── */

function AboutTour({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug)!;
  return (
    <section className="mb-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <SectionHeading title="About Tour Package" />
      <p className="mt-4 text-[15px] leading-relaxed text-body">{d.description}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {d.info.map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-soft text-brand">
              <Check className="size-4" />
            </span>
            <p className="text-sm text-body">
              <span className="mr-1 font-display font-medium text-title">{item.label}:</span>
              {item.value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ───────────── Explore Locations ───────────── */

function ExploreLocations({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug)!;
  const [selected, setSelected] = useState(d.locations[0]);

  return (
    <section className="mb-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <SectionHeading title="Explore Locations" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {d.locations.map((loc) => (
          <button
            key={loc.title}
            onClick={() => setSelected(loc)}
            className="group relative h-[160px] overflow-hidden rounded-2xl text-left"
          >
            <img
              src={loc.img}
              alt={loc.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <h6 className="font-display text-base font-semibold text-white">{loc.title}</h6>
              <span className="text-xs text-white/80">{loc.days}</span>
            </div>
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-body">
        Day-by-day details for <strong className="text-title">{selected.title}</strong> are covered
        in the tour itinerary below.
      </p>
    </section>
  );
}

/* ───────────── Highlights ───────────── */

function Highlights({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug)!;
  return (
    <section className="mb-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <SectionHeading title="Highlights of the Tour" />
      <ul className="mt-5 space-y-3">
        {d.highlights.map((h) => (
          <li key={h} className="flex items-start gap-3">
            <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
              <Check className="size-3" />
            </span>
            <span className="text-[15px] text-body">{h}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ───────────── Itinerary ───────────── */

function Itinerary({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug)!;
  const [open, setOpen] = useState(0);
  const [expandAll, setExpandAll] = useState(false);

  const visible = expandAll ? d.itinerary : d.itinerary.slice(0, 3);

  return (
    <section className="mb-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <SectionHeading title="Tour Itinerary" />
        <button
          onClick={() => setExpandAll((e) => !e)}
          className="shrink-0 text-sm font-semibold text-brand"
        >
          {expandAll ? "Collapse -" : "Expand All +"}
        </button>
      </div>
      <div className="mt-6 space-y-3">
        {visible.map((day, i) => {
          const idx = expandAll ? i : i;
          const isOpen = open === idx;
          return (
            <div
              key={day.day}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isOpen ? "border-brand" : "border-line"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-soft text-brand">
                    <Send className="size-4" />
                  </span>
                  <span>
                    <span
                      className={`block font-display text-sm font-semibold ${isOpen ? "text-brand" : "text-title"}`}
                    >
                      {day.day} – {day.title}
                    </span>
                  </span>
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-body transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-line px-5 py-4">
                  <p className="text-[15px] leading-relaxed text-body">{day.desc}</p>
                  <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <li>
                      <span className="font-display font-medium text-title">Transport:</span>{" "}
                      <span className="text-body">{day.transport}</span>
                    </li>
                    <li>
                      <span className="font-display font-medium text-title">Activities:</span>{" "}
                      <span className="text-body">{day.activities}</span>
                    </li>
                    <li>
                      <span className="font-display font-medium text-title">Meals:</span>{" "}
                      <span className="text-body">{day.meals}</span>
                    </li>
                    <li>
                      <span className="font-display font-medium text-title">Accommodation:</span>{" "}
                      <span className="text-body">{day.accommodation}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!expandAll && d.itinerary.length > 3 && (
        <button
          onClick={() => setExpandAll(true)}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
        >
          View Full Itinerary <ArrowRight className="size-4" />
        </button>
      )}
    </section>
  );
}

/* ───────────── Map ───────────── */

function DestinationMap({ pkg }: { pkg: Pkg }) {
  const q = encodeURIComponent(pkg.location.replace(/,.*$/, "").trim());
  return (
    <section className="mb-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <SectionHeading title="Package Destination Map" />
      <div className="mt-5 overflow-hidden rounded-2xl border border-line">
        <iframe
          title={`Map of ${pkg.location}`}
          src={`https://maps.google.com/maps?q=${q}&t=&z=7&ie=UTF8&iwloc=&output=embed`}
          className="h-[320px] w-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ───────────── Features include/exclude ───────────── */

function FeaturesList({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug)!;
  return (
    <section className="mb-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <SectionHeading title="Package Features List" />
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <h5 className="flex items-center gap-2 font-display text-base font-semibold text-title">
            <span className="grid size-7 place-items-center rounded-full bg-green-50 text-green-600">
              <Check className="size-4" />
            </span>
            Include Features
          </h5>
          <ul className="mt-4 space-y-2.5">
            {d.includes.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-body">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="flex items-center gap-2 font-display text-base font-semibold text-title">
            <span className="grid size-7 place-items-center rounded-full bg-red-50 text-red-500">
              <X className="size-4" />
            </span>
            Exclude Features
          </h5>
          <ul className="mt-4 space-y-2.5">
            {d.excludes.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-body">
                <X className="mt-0.5 size-4 shrink-0 text-red-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Additional info ───────────── */

function AdditionalInfo({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug)!;
  return (
    <section className="mb-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <SectionHeading title="Additional Info" />
      <ul className="mt-5 space-y-4">
        {d.additionalInfo.map((a) => (
          <li key={a} className="flex items-start gap-3">
            <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-brand text-white">
              <Check className="size-3" />
            </span>
            <p className="text-[15px] text-body">{a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ───────────── FAQ ───────────── */

function FAQ({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug)!;
  const [open, setOpen] = useState(0);
  return (
    <section className="mb-10 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <SectionHeading title="Frequently Asked & Question" />
      <div className="mt-5 space-y-3">
        {d.faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={`overflow-hidden rounded-xl border transition-colors ${
                isOpen ? "border-brand" : "border-line"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span
                  className={`font-display text-sm font-semibold ${isOpen ? "text-brand" : "text-title"}`}
                >
                  {f.q}
                </span>
                <ChevronDown
                  className={`size-4 shrink-0 text-body transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="border-t border-line px-5 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-body">{f.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────── Reviews ───────────── */

function Reviews({ pkg }: { pkg: Pkg }) {
  const d = getPackageDetail(pkg.slug)!;
  const rating = d.rating;
  const pct = (rating / 5) * 100;

  const starRow = (full: number, half: boolean) => (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) =>
        i < full ? (
          <Star key={i} className="size-4 fill-[#f7b500] text-[#f7b500]" />
        ) : half && i === full ? (
          <StarHalf key={i} className="size-4 fill-[#f7b500] text-[#f7b500]" />
        ) : (
          <Star key={i} className="size-4 text-line" />
        ),
      )}
    </div>
  );

  return (
    <section className="rounded-2xl border border-line bg-card p-6 sm:p-8">
      <SectionHeading title="Customer Review & Rating" />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg font-semibold text-title">
            {rating >= 4.5 ? "Excellent!" : "Great!"}
          </p>
          <div className="mt-1 flex items-center gap-2">
            {starRow(Math.floor(rating), rating % 1 !== 0)}
            <span className="text-sm text-body">
              {rating} based on {d.reviews} reviews
            </span>
          </div>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-display text-sm font-medium text-white transition-colors hover:bg-brand2"
        >
          Write a Review
        </a>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-semibold text-title">{rating}</span>
          {starRow(Math.floor(rating), rating % 1 !== 0)}
          <span className="text-xs text-body">Overall rating</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-[#f7b500]" style={{ width: `${pct}%` }} />
        </div>
        <ul className="mt-6 space-y-4">
          {[
            {
              name: "Aarav Sharma",
              title: "Absolutely Stunning!",
              text: `We booked "${pkg.title}" through Travel Nest and every detail was flawless — from transfers to the itinerary. Highly recommended!`,
            },
            {
              name: "Priya Nair",
              title: "Seamless Experience",
              text: "The team handled everything with care and the guides were fantastic. Will definitely book again.",
            },
          ].map((r) => (
            <li key={r.name} className="rounded-2xl bg-soft p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-brand font-display text-sm font-semibold text-white">
                    {r.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-title">{r.name}</p>
                    <p className="text-xs text-body">Travel Nest Traveler</p>
                  </div>
                </div>
                {starRow(5, false)}
              </div>
              <h6 className="mt-3 font-display text-sm font-semibold text-title">{r.title}</h6>
              <p className="mt-1 text-sm leading-relaxed text-body">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────── Booking modal (WhatsApp) ───────────── */

function BookingModal({ pkg, onClose }: { pkg: Pkg; onClose: () => void }) {
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
          <h3 className="font-display text-xl font-semibold text-title">Book {pkg.title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full border border-line text-body hover:bg-soft"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="mt-5">
          <WhatsAppBookingForm tourName={pkg.title} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

/* ───────────── Enquiry modal ───────────── */

function EnquiryModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-dark/60 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-background p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line pb-4">
          <h3 className="font-display text-xl font-semibold text-title">
            We'd Love to Hear From You!
          </h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full border border-line text-body hover:bg-soft"
          >
            <X className="size-4" />
          </button>
        </div>
        <form
          className="mt-5 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-line px-4 py-3 text-sm text-title outline-none focus:border-brand"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-line px-4 py-3 text-sm text-title outline-none focus:border-brand"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-xl border border-line px-4 py-3 text-sm text-title outline-none focus:border-brand"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full resize-none rounded-xl border border-line px-4 py-3 text-sm text-title outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-title px-6 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand"
          >
            <Send className="size-4" /> Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

/* ───────────── Sidebar ───────────── */

function BookingSidebar({ pkg }: { pkg: Pkg }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-2xl border border-line bg-card p-6">
        {pkg.badge && (
          <span className="inline-block rounded-full bg-brand px-3 py-1 font-display text-xs font-medium text-white">
            {pkg.badge}
          </span>
        )}
        <div className="mt-4 flex items-end gap-2">
          <h6 className="font-display text-sm font-medium text-body">Starting From</h6>
        </div>
        <p className="font-display text-4xl font-bold text-title">
          {pkg.oldPrice && (
            <span className="mr-2 text-xl font-normal text-body line-through">{pkg.oldPrice}</span>
          )}
          {pkg.price}
          <span className="text-sm font-normal text-body">/per person</span>
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-2 text-sm text-body">
            <Check className="size-4 text-brand" /> Money Back Guarantee.
          </li>
          <li className="flex items-center gap-2 text-sm text-body">
            <Check className="size-4 text-brand" /> Your Safety is Our Top Priority.
          </li>
        </ul>
        <button
          onClick={() => setBookingOpen(true)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand2"
        >
          Check Availability <ArrowRight className="size-4" />
        </button>
        <button
          onClick={() => setEnquiryOpen(true)}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-title px-6 py-3.5 font-display text-sm font-medium text-title transition-colors hover:bg-title hover:text-white"
        >
          Submit an Enquiry <ArrowRight className="size-4" />
        </button>
        <p className="mt-4 flex items-center gap-2 text-xs text-body">
          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-soft text-brand">
            <Info className="size-3" />
          </span>
          Bonus Activity Included – Limited Time!
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl bg-dark p-6 text-center sm:p-8">
        <h3 className="font-display text-2xl font-bold text-white">
          Customize <span className="text-brand2">Travel Package!</span>
        </h3>
        <ul className="mx-auto mt-4 max-w-xs space-y-2 text-left">
          <li className="flex items-center gap-2 text-sm text-white/85">
            <Check className="size-4 text-brand2" /> Make Your Favourite Package
          </li>
          <li className="flex items-center gap-2 text-sm text-white/85">
            <Check className="size-4 text-brand2" /> Enjoy Your Trip
          </li>
        </ul>
        <div className="mt-6">
          <p className="font-display text-lg text-white">
            <strong>
              60<span className="text-brand2">+</span>
            </strong>{" "}
            Guide Await to Help You
          </p>
          <a
            href="/customized-tours"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand2 px-7 py-3.5 font-display text-sm font-medium text-dark transition-colors hover:bg-brand hover:text-white"
          >
            Customize Package <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      {bookingOpen && <BookingModal pkg={pkg} onClose={() => setBookingOpen(false)} />}
      {enquiryOpen && <EnquiryModal onClose={() => setEnquiryOpen(false)} />}
    </div>
  );
}

/* ───────────── Relevant packages ───────────── */

function RelevantPackages({ current }: { current: Pkg }) {
  const related = allPackages.filter((p) => p.slug !== current.slug).slice(0, 6);
  return (
    <section className="bg-soft py-16 sm:py-20">
      <div className="container-gofly">
        <SectionTitle
          title="Relevant Package"
          subtitle="A curated list of the most popular travel packages based on different destinations."
        />
        <div className="mt-12">
          <Carousel
            arrows
            dots={false}
            plugins={[Autoplay({ delay: 3200, stopOnInteraction: false })]}
          >
            {related.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Main ───────────── */

export function PackageDetailsPage({ pkg }: { pkg: Pkg }) {
  return (
    <>
      <DetailsHero pkg={pkg} />
      <DetailsBottomBar pkg={pkg} />

      <section className="py-16 sm:py-20">
        <div className="container-gofly grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0">
            <AboutTour pkg={pkg} />
            <ExploreLocations pkg={pkg} />
            <Highlights pkg={pkg} />
            <Itinerary pkg={pkg} />
            <DestinationMap pkg={pkg} />
            <FeaturesList pkg={pkg} />
            <AdditionalInfo pkg={pkg} />
            <FAQ pkg={pkg} />
            <Reviews pkg={pkg} />
          </div>
          <div>
            <div className="lg:sticky lg:top-24">
              <BookingSidebar pkg={pkg} />
            </div>
          </div>
        </div>
      </section>

      <RelevantPackages current={pkg} />
    </>
  );
}
