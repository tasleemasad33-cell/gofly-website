import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { CruisesPage } from "@/components/gofly/ServicesPages";

const title = "Cruises — Travel Nest";
const description =
  "Set sail on a journey of luxury & adventure. All-inclusive cruise packages with visas, flights and premium experiences.";

export const Route = createFileRoute("/cruises")({
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
  component: Cruises,
});

function Cruises() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <CruisesPage />
      </main>
      <Footer />
    </div>
  );
}
