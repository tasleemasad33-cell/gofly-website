import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { VisaFacilitationPage } from "@/components/gofly/ServicesPages";

const title = "Visa Facilitation — Travel Nest";
const description =
  "Professional visa facilitation services tailored to your needs — tourist, business, student and religious visas.";

export const Route = createFileRoute("/visa-facilitation")({
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
  component: VisaFacilitation,
});

function VisaFacilitation() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <VisaFacilitationPage />
      </main>
      <Footer />
    </div>
  );
}
