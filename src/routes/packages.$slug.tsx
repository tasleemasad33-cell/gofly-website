import { useState, useEffect, Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { getPackageBySlug, type Pkg } from "@/lib/gofly-data";

const title = "Package Details — Travel Nest";
const description =
  "Discover detailed itineraries, inclusions and pricing for your favourite Travel Nest tour package.";

const LazyPackageDetailsPage = lazy(() =>
  import("@/components/gofly/PackageDetailsPage").then((m) => ({
    default: m.PackageDetailsPage,
  }))
);

export const Route = createFileRoute("/packages/$slug")({
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
  component: PackageDetailsRoute,
});

function PackageDetailsRoute() {
  const { slug } = Route.useParams();
  const [pkg, setPkg] = useState<Pkg | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const found = getPackageBySlug(slug);
      setPkg(found);
    } catch {
      setPkg(undefined);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="size-8 animate-spin rounded-full border-4 border-brand border-t-transparent" />
          <p className="text-body">Loading package...</p>
        </div>
      </section>
    );
  }

  if (!pkg) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div>
          <h1 className="font-display text-4xl font-bold text-title">Package Not Found</h1>
          <p className="mt-3 text-body">The travel package you are looking for does not exist.</p>
          <a href="/packages" className="btn-primary mt-6 inline-flex">
            Back to Packages
          </a>
        </div>
      </section>
    );
  }

  return (
    <Suspense
      fallback={
        <section className="flex min-h-[60vh] items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="size-8 animate-spin rounded-full border-4 border-brand border-t-transparent" />
            <p className="text-body">Loading package details...</p>
          </div>
        </section>
      }
    >
      <LazyPackageDetailsPage pkg={pkg} />
    </Suspense>
  );
}
