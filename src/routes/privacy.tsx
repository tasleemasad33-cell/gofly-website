import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { PrivacyPolicyPage } from "@/components/gofly/LegalPages";

const title = "Privacy Policy & Refund Policy — Travel Nest";
const description =
  "Read Travel Nest's Privacy Policy & Refund Policy to understand how we protect your data and handle refunds.";

export const Route = createFileRoute("/privacy")({
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
  component: Privacy,
});

function Privacy() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <PrivacyPolicyPage />
      </main>
      <Footer />
    </div>
  );
}
