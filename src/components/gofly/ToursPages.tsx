import {
  corporatePackages,
  customizedPackages,
  educationalPackages,
  groupTourPackages,
  honeymoonPackages,
  IMG,
} from "@/lib/gofly-data";
import { PageHero } from "./PageHero";
import { InquiryStrip, PackageListingSection } from "./TourListing";

function TourPageShell({
  heroTitle,
  crumb,
  heroImage,
  listingTitle,
  subtitle,
  packages,
}: {
  heroTitle: string;
  crumb: string;
  heroImage?: string;
  listingTitle: string;
  subtitle: string;
  packages: import("@/lib/gofly-data").Pkg[];
}) {
  return (
    <div className="overflow-x-hidden">
      <PageHero title={heroTitle} crumb={crumb} image={heroImage} />
      <PackageListingSection title={listingTitle} subtitle={subtitle} packages={packages} />
      <InquiryStrip />
    </div>
  );
}

export function GroupToursPage() {
  return (
    <TourPageShell
      heroTitle="Group Tours"
      crumb="Tours / Group Tours"
      heroImage={`${IMG}/home2/banner-img1.jpg`}
      listingTitle="Travel the World Together"
      subtitle="Travel the world with expertly planned group tours designed for comfort, safety and unforgettable memories. Voyage with like-minded explorers while our team manages your flights, hotels, visas and guided experiences from start to finish."
      packages={groupTourPackages}
    />
  );
}

export function HoneymoonPage() {
  return (
    <TourPageShell
      heroTitle="Honeymoon Trips"
      crumb="Tours / Honeymoon Trips"
      heroImage={`${IMG}/home2/destination-img6.jpg`}
      listingTitle="Most Loved Honeymoon Destinations"
      subtitle="Choose the perfect backdrop for your love story — from tropical islands to romantic city escapes, every honeymoon is planned with special touches for you both."
      packages={honeymoonPackages}
    />
  );
}

export function CorporatePage() {
  return (
    <TourPageShell
      heroTitle="Corporate Tours & Retreats"
      crumb="Tours / Corporate Tours"
      heroImage={`${IMG}/home2/banner-img1.jpg`}
      listingTitle="Connecting Teams Beyond Borders"
      subtitle="Plan impactful corporate journeys, executive retreats, conferences, and team experiences. From planning to execution, we handle every detail while your team focuses on growth, collaboration, and meaningful experiences."
      packages={corporatePackages}
    />
  );
}

export function CustomizedPage() {
  return (
    <TourPageShell
      heroTitle="Customized Tours"
      crumb="Tours / Customized Tours"
      heroImage={`${IMG}/home2/destination-img2.jpg`}
      listingTitle="Explore The World Your Way"
      subtitle="At Travel Nest, we create personalized travel experiences designed around your budget, interests, and travel style. Our team handles everything from flights and visas to hotels, transportation, and complete itinerary planning."
      packages={customizedPackages}
    />
  );
}

export function EducationalPage() {
  return (
    <TourPageShell
      heroTitle="Educational Tours"
      crumb="Tours / Educational Tours"
      heroImage={`${IMG}/home2/banner-img1.jpg`}
      listingTitle="Learning Beyond the Classroom"
      subtitle="Inspiring educational journeys that combine culture, history and discovery — perfect for schools, colleges and study groups. Every destination is planned with safety, learning outcomes and comfort in mind."
      packages={educationalPackages}
    />
  );
}
