import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { HoneymoonPage } from "@/components/gofly/ToursPages";

const title = "Honeymoon Trips — Travel Nest";
const description =
  "Begin your forever with a journey to remember. Romantic honeymoon packages across the world's most loved destinations.";

export const Route = createFileRoute("/honeymoon-trips")({
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
  component: Honeymoon,
});

function Honeymoon() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HoneymoonPage />
      </main>
      <Footer />
    </div>
  );
}
