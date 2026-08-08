import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { TransportationPage } from "@/components/gofly/ServicesPages";

const title = "Transportation — Travel Nest";
const description =
  "Travel smoothly, arrive comfortably. Airport transfers, city tours and group transport services.";

export const Route = createFileRoute("/transportation")({
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
  component: Transportation,
});

function Transportation() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <TransportationPage />
      </main>
      <Footer />
    </div>
  );
}
