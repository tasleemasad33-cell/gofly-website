import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { DestinationWeddingPage } from "@/components/gofly/ServicesPages";

const title = "Destination Wedding — Travel Nest";
const description =
  "Destination weddings, designed beyond borders. Luxury travel, seamless planning and personalized celebrations worldwide.";

export const Route = createFileRoute("/destination-wedding")({
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
  component: DestinationWedding,
});

function DestinationWedding() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <DestinationWeddingPage />
      </main>
      <Footer />
    </div>
  );
}
