import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { DestinationsPage } from "@/components/gofly/DestinationsPage";

const title = "Destinations — Travel Nest";
const description = "Explore our curated list of the most popular travel destinations around the world.";

export const Route = createFileRoute("/destinations")({
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
  component: Destinations,
});

function Destinations() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <DestinationsPage />
      </main>
      <Footer />
    </div>
  );
}
