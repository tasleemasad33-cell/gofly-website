import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { EducationalPage } from "@/components/gofly/ToursPages";

const title = "Educational Tours — Travel Nest";
const description =
  "Learning beyond the classroom. Inspiring educational journeys combining culture, history and discovery.";

export const Route = createFileRoute("/educational-tours")({
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
  component: Educational,
});

function Educational() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <EducationalPage />
      </main>
      <Footer />
    </div>
  );
}
