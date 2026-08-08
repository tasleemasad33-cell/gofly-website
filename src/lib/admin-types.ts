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
  | "settings";
