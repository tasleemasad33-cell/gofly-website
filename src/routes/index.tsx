import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/gofly/Header";
import { Hero } from "@/components/gofly/Hero";
import { Features, PopularPackages, TopDestinations } from "@/components/gofly/Packages";
import { About } from "@/components/gofly/About";
import { AwardBanner, Partners } from "@/components/gofly/Banners";
import { Blog, Counters, Gallery } from "@/components/gofly/Sections";
import { Footer } from "@/components/gofly/Footer";

const title = "Travel Nest — Journeys Crafted. Memories Nested.";
const description =
  "Book curated tour packages, hotels, visas and more with Travel Nest. Holidays, Honeymoons, Family Tours, Corporate Travel and Visa Assistance worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://demo.egenslab.com/html/gofly/preview/assets/img/home2/banner-img1.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://demo.egenslab.com/html/gofly/preview/assets/img/home2/banner-img1.jpg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PopularPackages />
        <Features />
        <TopDestinations />
        <About />
        <AwardBanner />
        <Partners />
        <Blog />
        <Counters />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
