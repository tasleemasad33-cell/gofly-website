import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { HotelBookingsPage } from "@/components/gofly/ServicesPages";

const title = "Hotel Bookings — Travel Nest";
const description =
  "Find your perfect stay anywhere in the world — from budget stays to luxury resorts.";

export const Route = createFileRoute("/hotel-bookings")({
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
  component: HotelBookings,
});

function HotelBookings() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HotelBookingsPage />
      </main>
      <Footer />
    </div>
  );
}
