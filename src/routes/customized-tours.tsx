import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { CustomizedPage } from "@/components/gofly/ToursPages";

const title = "Customized Tours — Travel Nest";
const description =
  "Explore the world your way. Personalized travel experiences designed around your budget, interests, and travel style.";

export const Route = createFileRoute("/customized-tours")({
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
  component: Customized,
});

function Customized() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <CustomizedPage />
      </main>
      <Footer />
    </div>
  );
}
