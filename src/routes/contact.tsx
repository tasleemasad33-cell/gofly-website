import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Footer } from "@/components/gofly/Footer";
import { ContactPage } from "@/components/gofly/ContactPage";

const title = "Contact Us — Travel Nest";
const description =
  "Get in touch with Travel Nest — office at Gulberg Greens, Islamabad. Call 92 322 9606256 or email Info@travelnest.com for tours, hotels, visas and more.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

function Contact() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
