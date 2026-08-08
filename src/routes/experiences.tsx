import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { ExperiencesPage } from "@/components/gofly/ExperiencesPage";

const title = "Travel Experiences — Travel Nest";
const description =
  "Explore thrilling adventures and experiences — scuba diving, paragliding, rafting, bungee jumping and more with Travel Nest.";

export const Route = createFileRoute("/experiences")({
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
  component: Experiences,
});

function Experiences() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <ExperiencesPage />
      </main>
      <Footer />
    </div>
  );
}
