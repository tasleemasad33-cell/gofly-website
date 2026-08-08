import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { AirTicketsPage } from "@/components/gofly/ServicesPages";

const title = "Air Ticket Booking — Travel Nest";
const description =
  "Book flights with ease across trusted international and domestic airlines, with 24/7 support.";

export const Route = createFileRoute("/air-tickets")({
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
  component: AirTickets,
});

function AirTickets() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <AirTicketsPage />
      </main>
      <Footer />
    </div>
  );
}
