import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { galleryItems, getAdminGallery } from "@/lib/gofly-data";
import { Reveal } from "@/components/gofly/Reveal";

const title = "Gallery — Travel Nest";
const description =
  "Browse our travel gallery — stunning destinations captured from around the world.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

const PER_PAGE = 12;

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [page, setPage] = useState(1);

  const allGalleryItems = useMemo(() => {
    const adminItems = getAdminGallery().map((item) => ({
      img: item.src,
      title: item.title,
      location: item.location,
      desc: "A stunning destination curated by Travel Nest for unforgettable journeys.",
    }));
    return [...adminItems, ...galleryItems];
  }, []);

  const totalPages = Math.ceil(allGalleryItems.length / PER_PAGE);
  const pageItems = allGalleryItems.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[280px] w-full overflow-hidden sm:h-[400px]">
          <img
            src={allGalleryItems[0]?.img || "/images/client/umrah/1.png"}
            alt="Gallery"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <h1
              className="font-display text-5xl font-bold text-white sm:text-6xl"
              style={{ color: "#fff" }}
            >
              Gallery
            </h1>
            <p
              className="mt-4 flex items-center gap-2 text-sm font-medium text-white"
              style={{ color: "#fff" }}
            >
              <a href="/" className="hover:underline" style={{ color: "#fff" }}>
                Home
              </a>
              <span style={{ color: "#fff" }}>•</span>
              <span style={{ color: "#fff" }}>Gallery</span>
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 sm:py-20">
          <div className="container-gofly">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-title sm:text-[40px]">
                Travel Nest Gallery
              </h2>
              <p className="mt-3 text-[15px] text-body">
                We go beyond just booking trips — we create unforgettable travel experiences that
                match your dreams!
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((item, i) => {
                const globalIdx = (page - 1) * PER_PAGE + i;
                return (
                  <Reveal key={item.title} delay={i * 60}>
                    <button
                      type="button"
                      onClick={() => setSelected(globalIdx)}
                      className="group block w-full overflow-hidden rounded-2xl border border-line bg-card text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <p className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                          <MapPin className="size-4" /> {item.location}
                        </p>
                        <h3 className="mt-1.5 font-display text-lg font-semibold text-title transition-colors group-hover:text-brand">
                          {item.title}
                        </h3>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
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
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-dark/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-y-auto rounded-2xl bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-background px-5 py-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-title">
                  {allGalleryItems[selected].title}
                </h3>
                <p className="inline-flex items-center gap-1 text-xs text-body">
                  <MapPin className="size-3.5 text-brand" /> {allGalleryItems[selected].location}
                </p>
              </div>
              <button
                aria-label="Close"
                onClick={() => setSelected(null)}
                className="grid size-9 place-items-center rounded-full border border-line text-title transition-colors hover:bg-soft"
              >
                <X className="size-4" />
              </button>
            </div>
            <img
              src={allGalleryItems[selected].img}
              alt={allGalleryItems[selected].title}
              className="w-full object-cover"
            />
            <p className="px-5 py-4 text-sm leading-relaxed text-body">
              {allGalleryItems[selected].desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
