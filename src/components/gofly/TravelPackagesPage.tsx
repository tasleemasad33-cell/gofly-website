import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { allPackages, getPackageDetail, IMG, type Pkg } from "@/lib/gofly-data";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import {
  FilterCheckbox,
  FilterGroup,
  InquiryStrip,
  PackageRowCard,
  parsePrice,
} from "./TourListing";

/* ─── Hero ─── */
function PackagesHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <img
        src={`${IMG}/home2/banner-img2.jpg`}
        alt="Travel Package"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1
          className="font-display text-5xl font-bold text-white sm:text-6xl"
          style={{ color: "#fff" }}
        >
          Travel Package
        </h1>
        <p
          className="mt-4 flex items-center gap-2 text-sm font-medium text-white"
          style={{ color: "#fff" }}
        >
          <a href="/" className="hover:underline" style={{ color: "#fff" }}>
            Home
          </a>
          <span style={{ color: "#fff" }}>•</span>
          <span style={{ color: "#fff" }}>Travel Package</span>
        </p>
      </div>
    </section>
  );
}

/* ─── Featured package banner ─── */
function FeaturedPackage() {
  const featured = allPackages[0];
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  if (!featured) return null;

  return (
    <section className="relative overflow-hidden bg-dark py-16">
      <div className="container-gofly">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl bg-white lg:grid-cols-2">
            {/* Slider */}
            <div className="relative overflow-hidden">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {featured.images.map((img, i) => (
                    <div key={i} className="min-w-0 flex-[0_0_100%]">
                      <div className="relative h-[280px] overflow-hidden sm:h-[340px] lg:h-full lg:min-h-[380px]">
                        <img src={img} alt={featured.title} className="size-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {featured.images.length > 1 && (
                <>
                  <button
                    aria-label="Previous image"
                    onClick={() => embla?.scrollPrev()}
                    className="absolute left-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-title shadow transition-colors hover:bg-brand hover:text-white"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={() => embla?.scrollNext()}
                    className="absolute right-4 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-title shadow transition-colors hover:bg-brand hover:text-white"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {featured.images.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to image ${i + 1}`}
                        onClick={() => embla?.scrollTo(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          selected === i ? "w-6 bg-brand" : "w-2 bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-2">
                {featured.badge && (
                  <span className="rounded-full bg-brand2 px-3 py-1 font-display text-xs font-medium text-white">
                    {featured.badge}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 rounded-full bg-soft px-3 py-1 text-xs font-medium text-title">
                  <Star className="size-3.5 fill-brand2 text-brand2" />
                  {featured.rating ?? 4.5} ({featured.reviews ?? 134} reviews)
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold text-title sm:text-3xl lg:text-[34px]">
                {featured.title}
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-body">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-brand" /> {featured.location}
                </span>
                {featured.duration && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-4 text-brand" /> {featured.duration}
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-body">
                <span className="rounded-full border border-line px-3 py-1">No Booking Fee</span>
                <span className="rounded-full border border-line px-3 py-1">Best Price Ever</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-body">
                {getPackageDetail(featured.slug)?.description ??
                  "A curated travel package designed for an unforgettable experience."}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-display text-[10px] font-medium uppercase tracking-widest text-body">
                    Per Person
                  </p>
                  <p className="font-display text-3xl font-semibold text-title">
                    {featured.oldPrice && (
                      <span className="mr-1 text-base font-normal text-body line-through">
                        {featured.oldPrice}
                      </span>
                    )}
                    {featured.price}
                  </p>
                </div>
                <a href={`/packages/${featured.slug}`} className="btn-primary">
                  Book Now <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Main listing ─── */
export function TravelPackagesPage() {
  const [sort, setSort] = useState<"default" | "price-low" | "price-high">("default");
  const [page, setPage] = useState(1);
  const [openGroup, setOpenGroup] = useState("Tour Type");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDests, setSelectedDests] = useState<string[]>([]);
  const [mobileFilters, setMobileFilters] = useState(false);

  const perPage = 6;

  const tourTypes = useMemo(() => {
    const set = new Set<string>();
    allPackages.forEach((p) => {
      const d = getPackageDetail(p.slug);
      if (d) set.add(d.tourType);
    });
    return Array.from(set);
  }, []);

  const destGroups: Record<string, { name: string; count: number }[]> = useMemo(() => {
    const map: Record<string, { name: string; count: number }> = {};
    allPackages.forEach((p) => {
      if (!map[p.location]) map[p.location] = { name: p.location, count: 0 };
      map[p.location].count += 1;
    });
    return { All: Object.values(map).sort((a, b) => b.count - a.count) };
  }, []);

  const activities = [
    { name: "Hiking & Trekking", count: 4 },
    { name: "Rock Climbing", count: 6 },
    { name: "Zip-lining", count: 2 },
    { name: "Bungee Jumping", count: 7 },
    { name: "Paragliding", count: 12 },
    { name: "Surfing", count: 8 },
  ];

  const filtered = useMemo(() => {
    let list = allPackages.filter((p) => {
      if (selectedTypes.length && getPackageDetail(p.slug)) {
        const d = getPackageDetail(p.slug)!;
        if (!selectedTypes.includes(d.tourType)) return false;
      }
      if (selectedDests.length && !selectedDests.includes(p.location)) return false;
      return true;
    });
    if (sort === "price-low") {
      list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }
    if (sort === "price-high") {
      list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    return list;
  }, [selectedTypes, selectedDests, sort]);

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
        {destGroups.All.map((d) => (
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
          <span>$0</span>
          <span>$999</span>
        </div>
      </FilterGroup>

      <FilterGroup
        title="Activities"
        open={openGroup === "Activities"}
        onToggle={() => setOpenGroup(openGroup === "Activities" ? "" : "Activities")}
      >
        {activities.map((a) => (
          <FilterCheckbox
            key={a.name}
            label={a.name}
            count={a.count}
            checked={false}
            onChange={() => {}}
          />
        ))}
      </FilterGroup>

      <FilterGroup
        title="Discount & Offer"
        open={openGroup === "Discount & Offer"}
        onToggle={() => setOpenGroup(openGroup === "Discount & Offer" ? "" : "Discount & Offer")}
      >
        {[
          { name: "Special Offer", count: 4 },
          { name: "Last Minutes Deal", count: 6 },
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
    <>
      <PackagesHero />
      <FeaturedPackage />

      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Explore Our Tour Packages"
            subtitle="A curated list of the most popular travel packages based on different destinations."
          />

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

              <div className="mt-6 space-y-5">
                {pageItems.map((pkg, i) => (
                  <PackageRowCard key={pkg.slug} pkg={pkg} index={i} />
                ))}
              </div>

              {/* Pagination */}
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
            </div>
          </div>
        </div>
      </section>

      <InquiryStrip />
    </>
  );
}
