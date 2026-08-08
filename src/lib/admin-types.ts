export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  price: string;
  location: string;
  category: string;
  subcategory?: string;
  duration?: string;
  groupSize?: string;
  image: string;
  description?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  location: string;
}

export interface VisaCountry {
  country: string;
  requirements: string[];
}

export interface BannerContent {
  subtitle: string;
  title: string;
  description: string;
}

export interface AdminBanners {
  airTickets: BannerContent;
  home: string[];
}

export interface AdminCredentials {
  email: string;
  password: string;
}

export type AdminTab =
  | "dashboard"
  | "tours"
  | "gallery"
  | "visa"
  | "banners"
  | "content"
  | "settings";

export interface ExperienceDestination {
  id: string;
  title: string;
  activityCount: number;
  image: string;
}

export interface PopularActivity {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
}

export interface PageStat {
  id: string;
  value: string;
  label: string;
}

export interface SiteContent {
  destinations: ExperienceDestination[];
  activities: PopularActivity[];
  weddingStats: PageStat[];
  homeStats: PageStat[];
}
