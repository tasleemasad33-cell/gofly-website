import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { TermsConditionsPage } from "@/components/gofly/LegalPages";

const title = "Terms & Conditions — Travel Nest";
const description =
  "Read Travel Nest's Terms & Conditions for bookings, payments, cancellations and more.";

export const Route = createFileRoute("/terms")({
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
  component: Terms,
});

function Terms() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <TermsConditionsPage />
      </main>
      <Footer />
    </div>
  );
}
