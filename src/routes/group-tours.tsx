import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { GroupToursPage } from "@/components/gofly/ToursPages";

const title = "Group Tours — Travel Nest";
const description =
  "Travel the world with expertly planned group tours designed for comfort, safety and unforgettable memories.";

export const Route = createFileRoute("/group-tours")({
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
  component: GroupTours,
});

function GroupTours() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <GroupToursPage />
      </main>
      <Footer />
    </div>
  );
}
