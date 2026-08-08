import mongoose, { Schema, Document } from "mongoose";

export interface ITourPackage extends Document {
  id: string;
  title: string;
  slug: string;
  price: string;
  location: string;
  category: string;
  subcategory: string;
  duration: string;
  groupSize: string;
  image: string;
  description: string;
}

export interface IGalleryImage extends Document {
  id: string;
  src: string;
  title: string;
  location: string;
}

export interface IVisaCountry extends Document {
  country: string;
  requirements: string[];
}

export interface IBannerContent {
  subtitle: string;
  title: string;
  description: string;
}

export interface IAdminBanners extends Document {
  airTickets: IBannerContent;
  home: string[];
}

export interface IAdminCredentials extends Document {
  email: string;
  password: string;
}

const TourPackageSchema = new Schema<ITourPackage>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, default: "" },
  category: { type: String, default: "Popular Packages" },
  subcategory: { type: String, default: "" },
  duration: { type: String, default: "" },
  groupSize: { type: String, default: "" },
  image: { type: String, default: "" },
  description: { type: String, default: "" },
});

const GalleryImageSchema = new Schema<IGalleryImage>({
  id: { type: String, required: true, unique: true },
  src: { type: String, required: true },
  title: { type: String, default: "" },
  location: { type: String, default: "" },
});

const VisaCountrySchema = new Schema<IVisaCountry>({
  country: { type: String, required: true, unique: true },
  requirements: { type: [String], default: [] },
});

const AdminBannersSchema = new Schema<IAdminBanners>({
  airTickets: {
    subtitle: { type: String, default: "" },
    title: {
      type: String,
      default:
        "🕋 November Umrah Special! Fly with Kuwait Airways | ✈️ 15 Days Umrah Airfare Package starting from PKR 120,000 | 🎉 Limited promotional seats available – Book in advance for exclusive discounts! | 📞 Contact Travel Nest today to reserve your seat before fares increase.",
    },
    description: { type: String, default: "" },
  },
  home: {
    type: [String],
    default: [
      "Enjoy Family Holiday Packages",
      "Book Your Dream Vacation at Unbeatable Prices Today",
      "Explore 500+ Destinations with Expert Guided Tours",
    ],
  },
});

const AdminCredentialsSchema = new Schema<IAdminCredentials>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const TourPackageModel =
  mongoose.models.TourPackage || mongoose.model<ITourPackage>("TourPackage", TourPackageSchema);

export const GalleryImageModel =
  mongoose.models.GalleryImage || mongoose.model<IGalleryImage>("GalleryImage", GalleryImageSchema);

export const VisaCountryModel =
  mongoose.models.VisaCountry || mongoose.model<IVisaCountry>("VisaCountry", VisaCountrySchema);

export const AdminBannersModel =
  mongoose.models.AdminBanners || mongoose.model<IAdminBanners>("AdminBanners", AdminBannersSchema);

export const AdminCredentialsModel =
  mongoose.models.AdminCredentials ||
  mongoose.model<IAdminCredentials>("AdminCredentials", AdminCredentialsSchema);
