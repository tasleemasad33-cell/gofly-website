import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { AboutPage } from "@/components/gofly/AboutPage";

const title = "About Us — Travel Nest";
const description = "Learn more about Travel Nest — your trusted travel agency for curated tours, visas, and unforgettable experiences.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

function About() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
