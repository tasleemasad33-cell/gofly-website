import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PackageDetailsPage } from "@/components/gofly/PackageDetailsPage";
import { getPackageBySlug, type Pkg } from "@/lib/gofly-data";

const title = "Package Details — Travel Nest";
const description =
  "Discover detailed itineraries, inclusions and pricing for your favourite Travel Nest tour package.";

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
  component: PackageDetails,
});

function PackageDetails() {
  const { slug } = Route.useParams();
  const [pkg, setPkg] = useState<Pkg | undefined>(() => {
    try {
      return getPackageBySlug(slug);
    } catch {
      return undefined;
    }
  });
  const [loading, setLoading] = useState(!pkg);

  useEffect(() => {
    if (!pkg) {
      const found = getPackageBySlug(slug);
      if (found) setPkg(found);
      setLoading(false);
    }
  }, [slug, pkg]);

  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div className="animate-pulse text-body">Loading package...</div>
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

  return <PackageDetailsPage pkg={pkg} />;
}
