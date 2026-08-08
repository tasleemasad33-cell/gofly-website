import { createServerFn } from "@tanstack/react-start";
import { connectToDB } from "./mongodb";
import {
  TourPackageModel,
  GalleryImageModel,
  VisaCountryModel,
  AdminBannersModel,
  AdminCredentialsModel,
} from "./models";
import { initialPackages, initialGallery, initialVisa } from "./admin-data";

async function ensureDB() {
  await connectToDB();
}

// ========== SEED ==========
export const seedDB = createServerFn({ method: "POST" }).handler(async () => {
  await ensureDB();
  const packageCount = await TourPackageModel.countDocuments();
  if (packageCount === 0) {
    await TourPackageModel.insertMany(
      initialPackages.map((p) => ({
        ...p,
        subcategory: p.subcategory || "",
        duration: p.duration || "",
        groupSize: p.groupSize || "",
        description: p.description || "",
      }))
    );
  }
  const galleryCount = await GalleryImageModel.countDocuments();
  if (galleryCount === 0) {
    await GalleryImageModel.insertMany(initialGallery);
  }
  const visaCount = await VisaCountryModel.countDocuments();
  if (visaCount === 0) {
    await VisaCountryModel.insertMany(initialVisa);
  }
  const bannerCount = await AdminBannersModel.countDocuments();
  if (bannerCount === 0) {
    await AdminBannersModel.create({
      airTickets: {
        subtitle: "",
        title:
          "🕋 November Umrah Special! Fly with Kuwait Airways | ✈️ 15 Days Umrah Airfare Package starting from PKR 120,000 | 🎉 Limited promotional seats available – Book in advance for exclusive discounts! | 📞 Contact Travel Nest today to reserve your seat before fares increase.",
        description: "",
      },
      home: [
        "Enjoy Family Holiday Packages",
        "Book Your Dream Vacation at Unbeatable Prices Today",
        "Explore 500+ Destinations with Expert Guided Tours",
      ],
    });
  }
  const credsCount = await AdminCredentialsModel.countDocuments();
  if (credsCount === 0) {
    await AdminCredentialsModel.create({
      email: "admin@travelnest.com",
      password: "TravelNest@2026",
    });
  }
  return { success: true };
});

// ========== ALL DATA ==========
export const getAllData = createServerFn({ method: "GET" }).handler(async () => {
  await ensureDB();
  await seedDB();
  const [packages, gallery, visa, banners] = await Promise.all([
    TourPackageModel.find({}).lean(),
    GalleryImageModel.find({}).lean(),
    VisaCountryModel.find({}).lean(),
    AdminBannersModel.findOne({}).lean(),
  ]);
  return {
    packages: packages.map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      price: p.price,
      location: p.location,
      category: p.category,
      subcategory: p.subcategory || "",
      duration: p.duration || "",
      groupSize: p.groupSize || "",
      image: p.image,
      description: p.description || "",
    })),
    gallery: gallery.map((g) => ({
      id: g.id,
      src: g.src,
      title: g.title,
      location: g.location,
    })),
    visa: visa.map((v) => ({
      country: v.country,
      requirements: v.requirements,
    })),
    banners: banners
      ? {
          airTickets: banners.airTickets,
          home: banners.home,
        }
      : {
          airTickets: { subtitle: "", title: "", description: "" },
          home: [],
        },
  };
});

// ========== PACKAGES ==========
export const savePackages = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    await TourPackageModel.deleteMany({});
    if (Array.isArray(data) && data.length > 0) {
      await TourPackageModel.insertMany(
        data.map((p: any) => ({
          ...p,
          subcategory: p.subcategory || "",
          duration: p.duration || "",
          groupSize: p.groupSize || "",
          description: p.description || "",
        }))
      );
    }
    return { success: true };
  });

export const addPackage = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    const doc = await TourPackageModel.create({
      ...data,
      subcategory: data.subcategory || "",
      duration: data.duration || "",
      groupSize: data.groupSize || "",
      description: data.description || "",
    });
    return { id: doc.id };
  });

export const updateSinglePackage = createServerFn({ method: "POST" })
  .validator((data: { id: string; pkg: any }) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    await TourPackageModel.findOneAndUpdate({ id: data.id }, { $set: data.pkg });
    return { success: true };
  });

export const removePackage = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    await TourPackageModel.deleteOne({ id: data.id });
    return { success: true };
  });

// ========== GALLERY ==========
export const saveGallery = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    await GalleryImageModel.deleteMany({});
    if (Array.isArray(data) && data.length > 0) {
      await GalleryImageModel.insertMany(data);
    }
    return { success: true };
  });

export const addGalleryImage = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    const doc = await GalleryImageModel.create(data);
    return { id: doc.id };
  });

export const removeGalleryImage = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    await GalleryImageModel.deleteOne({ id: data.id });
    return { success: true };
  });

// ========== VISA ==========
export const saveVisa = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    await VisaCountryModel.deleteMany({});
    if (Array.isArray(data) && data.length > 0) {
      await VisaCountryModel.insertMany(data);
    }
    return { success: true };
  });

// ========== BANNERS ==========
export const saveBanners = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    await AdminBannersModel.findOneAndUpdate({}, { $set: data }, { upsert: true });
    return { success: true };
  });

// ========== AUTH ==========
export const authLogin = createServerFn({ method: "POST" })
  .validator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    let creds = await AdminCredentialsModel.findOne({}).lean();
    if (!creds) {
      await seedDB();
      creds = await AdminCredentialsModel.findOne({}).lean();
    }
    if (data.email === creds.email && data.password === creds.password) {
      return { success: true };
    }
    return { success: false };
  });

export const getCredsEmail = createServerFn({ method: "GET" }).handler(async () => {
  await ensureDB();
  let creds = await AdminCredentialsModel.findOne({}).lean();
  if (!creds) {
    await seedDB();
    creds = await AdminCredentialsModel.findOne({}).lean();
  }
  return { email: creds.email };
});

export const updateCreds = createServerFn({ method: "POST" })
  .validator((data: { email: string; password: string; currentPassword: string }) => data)
  .handler(async ({ data }) => {
    await ensureDB();
    const creds = await AdminCredentialsModel.findOne({}).lean();
    if (data.currentPassword && data.currentPassword !== creds.password) {
      return { success: false, error: "Current password is incorrect" };
    }
    await AdminCredentialsModel.findOneAndUpdate(
      {},
      { $set: { email: data.email || creds.email, password: data.password || creds.password } },
      { upsert: true }
    );
    return { success: true };
  });
