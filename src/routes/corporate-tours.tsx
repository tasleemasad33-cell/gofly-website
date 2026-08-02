import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { CorporatePage } from "@/components/gofly/ToursPages";

const title = "Corporate Tours & Retreats — Travel Nest";
const description =
  "Plan impactful corporate journeys, executive retreats, conferences, and team experiences with Travel Nest.";

export const Route = createFileRoute("/corporate-tours")({
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
  component: Corporate,
});

function Corporate() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <CorporatePage />
      </main>
      <Footer />
    </div>
  );
}
