import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { getPackageDetail, type Pkg } from "@/lib/gofly-data";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { PackageCard } from "./PackageCard";

/* ─── Sidebar filter group (accordion) ─── */
export function FilterGroup({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-card">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-display text-base font-semibold text-title">{title}</span>
        <ChevronDown
          className={`size-4 text-body transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}

export function FilterCheckbox({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count?: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between py-1.5 text-sm text-body">
      <span className="flex items-center gap-2.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="size-4 accent-[oklch(0.27_0.05_260)]"
        />
        {label}
      </span>
      {count !== undefined && (
        <span className="rounded-full bg-soft px-2 py-0.5 text-xs font-medium text-title">
          {count}
        </span>
      )}
    </label>
  );
}

export function parsePrice(price: string): number {
  return parseInt(price.replace(/[^0-9]/g, ""), 10) || 0;
}

/* ─── Listing body (sidebar + grid + pagination) ─── */
export function PackageListingSection({
  packages,
  title,
  subtitle,
  perPage = 6,
}: {
  packages: Pkg[];
  title: string;
  subtitle: string;
  perPage?: number;
}) {
  const [sort, setSort] = useState<"default" | "price-low" | "price-high">("default");
  const [page, setPage] = useState(1);
  const [openGroup, setOpenGroup] = useState("Tour Type");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDests, setSelectedDests] = useState<string[]>([]);
  const [mobileFilters, setMobileFilters] = useState(false);

  const tourTypes = useMemo(() => {
    const set = new Set<string>();
    packages.forEach((p) => {
      const d = getPackageDetail(p.slug);
      if (d) set.add(d.tourType);
    });
    return Array.from(set);
  }, [packages]);

  const destGroups = useMemo(() => {
    const map: Record<string, number> = {};
    packages.forEach((p) => {
      map[p.location] = (map[p.location] ?? 0) + 1;
    });
    return Object.entries(map)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [packages]);

  const filtered = useMemo(() => {
    let list = packages.filter((p) => {
      if (selectedTypes.length) {
        const d = getPackageDetail(p.slug);
        if (!d || !selectedTypes.includes(d.tourType)) return false;
      }
      if (selectedDests.length && !selectedDests.includes(p.location)) return false;
      return true;
    });
    if (sort === "price-low")
      list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === "price-high")
      list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return list;
  }, [packages, selectedTypes, selectedDests, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  const clearAll = () => {
    setSelectedTypes([]);
    setSelectedDests([]);
    setSort("default");
  };

  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const sidebar = (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-2xl bg-brand p-5">
        <span className="font-display text-base font-semibold text-white">Filter</span>
        <button
          onClick={clearAll}
          className="text-xs font-medium text-white/80 underline hover:text-white"
        >
          Clear All
        </button>
      </div>

      <FilterGroup
        title="Destinations"
        open={openGroup === "Destinations"}
        onToggle={() => setOpenGroup(openGroup === "Destinations" ? "" : "Destinations")}
      >
        {destGroups.map((d) => (
          <FilterCheckbox
            key={d.name}
            label={d.name}
            count={d.count}
            checked={selectedDests.includes(d.name)}
            onChange={() => setSelectedDests(toggle(selectedDests, d.name))}
          />
        ))}
      </FilterGroup>

      <FilterGroup
        title="Tour Type"
        open={openGroup === "Tour Type"}
        onToggle={() => setOpenGroup(openGroup === "Tour Type" ? "" : "Tour Type")}
      >
        {tourTypes.map((t) => (
          <FilterCheckbox
            key={t}
            label={t}
            checked={selectedTypes.includes(t)}
            onChange={() => setSelectedTypes(toggle(selectedTypes, t))}
          />
        ))}
      </FilterGroup>

      <FilterGroup
        title="Pricing"
        open={openGroup === "Pricing"}
        onToggle={() => setOpenGroup(openGroup === "Pricing" ? "" : "Pricing")}
      >
        <div className="mt-4 h-1.5 rounded-full bg-soft">
          <div className="h-full w-1/2 rounded-full bg-brand" />
        </div>
        <div className="mt-3 flex items-center justify-between text-sm text-body">
          <span>PKR 100K</span>
          <span>PKR 800K</span>
        </div>
      </FilterGroup>

      <FilterGroup
        title="Rating"
        open={openGroup === "Rating"}
        onToggle={() => setOpenGroup(openGroup === "Rating" ? "" : "Rating")}
      >
        {[
          { name: "4.5 & above", count: 10 },
          { name: "4.0 & above", count: 6 },
        ].map((d) => (
          <FilterCheckbox
            key={d.name}
            label={d.name}
            count={d.count}
            checked={false}
            onChange={() => {}}
          />
        ))}
      </FilterGroup>
    </div>
  );

  return (
    <section className="py-20">
      <div className="container-gofly">
        <SectionTitle title={title} subtitle={subtitle} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">{sidebar}</aside>

          {/* Mobile filter trigger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileFilters(true)}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-display text-sm font-medium text-title"
            >
              <SlidersHorizontal className="size-4" /> Filters
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFilters && (
            <div
              className="fixed inset-0 z-[70] bg-dark/60 lg:hidden"
              onClick={() => setMobileFilters(false)}
            >
              <div
                className="absolute right-0 top-0 h-full w-[320px] max-w-[85vw] overflow-y-auto bg-background p-5"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-title">Filters</h3>
                  <button aria-label="Close filters" onClick={() => setMobileFilters(false)}>
                    <X className="size-5 text-title" />
                  </button>
                </div>
                {sidebar}
              </div>
            </div>
          )}

          {/* Results */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-display text-sm font-medium text-title">
                <span className="font-bold text-brand">{filtered.length}</span> Unforgettable
                Journeys Await!
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-body">Sort By:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as typeof sort)}
                  className="rounded-full border border-line bg-card px-4 py-2 font-display text-sm font-medium text-title outline-none"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price Low</option>
                  <option value="price-high">Price High</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {pageItems.map((pkg, i) => (
                <Reveal key={pkg.slug} delay={(i % 2) * 80}>
                  <PackageCard pkg={pkg} />
                </Reveal>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="grid size-10 place-items-center rounded-full border border-line font-display text-sm text-title transition-colors hover:bg-brand hover:text-white disabled:opacity-40"
                >
                  <ChevronLeft className="size-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`size-10 rounded-full font-display text-sm font-medium transition-colors ${
                      page === n
                        ? "bg-brand text-white"
                        : "border border-line text-title hover:bg-soft"
                    }`}
                  >
                    {String(n).padStart(2, "0")}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="grid size-10 place-items-center rounded-full border border-line font-display text-sm text-title transition-colors hover:bg-brand hover:text-white disabled:opacity-40"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Inquiry strip ─── */
export function InquiryStrip() {
  return (
    <section className="bg-soft py-16">
      <div className="container-gofly">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-title sm:text-3xl">
              To More Inquiry
            </h2>
            <p className="mt-2 text-sm text-body">Don&apos;t hesitate to call Travel Nest.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { icon: "💬", label: "WhatsApp", value: "92 322 9606256" },
                { icon: "✉️", label: "Mail Us", value: "info@travelnest.com" },
                { icon: "📞", label: "Call Us", value: "92 322 9606256" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-line bg-card p-6 text-center"
                >
                  <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand/10 text-xl">
                    {c.icon}
                  </span>
                  <h5 className="mt-3 font-display text-sm font-semibold text-title">{c.label}</h5>
                  <p className="mt-1 text-sm font-medium text-brand">{c.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Reusable row card (shared with TravelPackagesPage) ─── */
export function PackageRowCard({ pkg, index }: { pkg: Pkg; index: number }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <Reveal delay={index * 80}>
      <article className="group overflow-hidden rounded-2xl border border-line bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
        <div className="grid md:grid-cols-[220px_1fr]">
          <a
            href={`/packages/${pkg.slug}`}
            className="relative block h-[200px] overflow-hidden md:h-full"
          >
            <img
              src={pkg.images[0]}
              alt={pkg.title}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {pkg.badge && (
              <span className="absolute left-3 top-3 z-10 rounded-full bg-brand2 px-3 py-1 font-display text-[11px] font-medium text-white">
                {pkg.badge}
              </span>
            )}
          </a>

          <div className="flex flex-col p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-body">
                <Star className="size-3.5 fill-brand2 text-brand2" />
                {pkg.rating ?? 4.5} ({pkg.reviews ?? 0} reviews)
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-body">
                <MapPin className="size-3.5 text-brand" /> {pkg.location}
              </span>
              {pkg.duration && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-body">
                  <Clock className="size-3.5 text-brand" /> {pkg.duration}
                </span>
              )}
            </div>

            <h3 className="mt-2 font-display text-lg font-semibold text-title transition-colors hover:text-brand sm:text-xl">
              <a href={`/packages/${pkg.slug}`}>{pkg.title}</a>
            </h3>

            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-body">
              {getPackageDetail(pkg.slug)?.description ??
                "A curated travel package designed for an unforgettable experience."}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {["No Booking Fee", "Best Price Ever"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-medium text-body"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
              <a
                href={`/packages/${pkg.slug}`}
                className="btn-primary px-5 py-2.5 text-xs sm:text-sm"
              >
                Book Now
              </a>
              <div className="text-right">
                <p className="font-display text-[10px] font-medium text-body sm:text-xs">
                  Per Person
                </p>
                <p className="font-display text-lg font-semibold text-title sm:text-xl">
                  {pkg.oldPrice && (
                    <span className="mr-1 text-xs font-normal text-body line-through sm:text-sm">
                      {pkg.oldPrice}
                    </span>
                  )}
                  {pkg.price}
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4 border-t border-line pt-3">
              <button
                onClick={() => setOpen(open === "Experience" ? null : "Experience")}
                className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-title transition-colors hover:text-brand sm:text-sm"
              >
                <span className="grid size-5 place-items-center rounded-full border border-line text-[10px] text-brand">
                  i
                </span>
                Experience
              </button>
              <button
                onClick={() => setOpen(open === "Inclusion" ? null : "Inclusion")}
                className="inline-flex items-center gap-1.5 font-display text-xs font-medium text-title transition-colors hover:text-brand sm:text-sm"
              >
                <span className="grid size-5 place-items-center rounded-full border border-line text-[10px] text-brand">
                  i
                </span>
                Inclusion
              </button>
              {open && (
                <span className="hidden text-xs text-body sm:inline">
                  {open === "Experience"
                    ? "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing with this premium package."
                    : "This package covers Accommodation, Daily Meals, Entry Fees & Local Transfers to ensure a worry-free trip."}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
