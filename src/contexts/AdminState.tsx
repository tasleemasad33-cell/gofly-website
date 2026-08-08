import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { TourPackage, GalleryImage, VisaCountry, AdminBanners } from "@/lib/admin-types";
import { initialPackages, initialGallery, initialVisa } from "@/lib/admin-data";

interface AdminState {
  packages: TourPackage[];
  gallery: GalleryImage[];
  visa: VisaCountry[];
  banners: AdminBanners;
  setPackages: React.Dispatch<React.SetStateAction<TourPackage[]>>;
  setGallery: React.Dispatch<React.SetStateAction<GalleryImage[]>>;
  setVisa: React.Dispatch<React.SetStateAction<VisaCountry[]>>;
  setBanners: React.Dispatch<React.SetStateAction<AdminBanners>>;
}

const Ctx = createContext<AdminState>({
  packages: [],
  gallery: [],
  visa: [],
  banners: { airTickets: { subtitle: "", title: "", description: "" }, home: ["", "", ""] },
  setPackages: () => {},
  setGallery: () => {},
  setVisa: () => {},
  setBanners: () => {},
});

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function migrateBanners(raw: any): AdminBanners {
  const defaults: AdminBanners = {
    airTickets: {
      subtitle: "",
      title: "🕋 November Umrah Special! Fly with Kuwait Airways | ✈️ 15 Days Umrah Airfare Package starting from PKR 120,000 | 🎉 Limited promotional seats available – Book in advance for exclusive discounts! | 📞 Contact Travel Nest today to reserve your seat before fares increase.",
      description: "",
    },
    home: [
      "Enjoy Family Holiday Packages",
      "Book Your Dream Vacation at Unbeatable Prices Today",
      "Explore 500+ Destinations with Expert Guided Tours",
    ],
  };
  if (!raw || typeof raw !== "object") return defaults;
  const air = raw.airTickets ?? defaults.airTickets;
  let home: string[];
  if (Array.isArray(raw.home)) {
    home = raw.home.length > 0 ? raw.home : defaults.home;
  } else if (raw.home && typeof raw.home === "object" && raw.home.title) {
    home = [raw.home.title];
  } else {
    home = defaults.home;
  }
  return {
    airTickets: { subtitle: air.subtitle || "", title: air.title || defaults.airTickets.title, description: air.description || "" },
    home,
  };
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

export function AdminStateProvider({ children }: { children: ReactNode }) {
  const [packages, setPackages] = useState<TourPackage[]>(() =>
    load("tn-admin-packages", initialPackages),
  );
  const [gallery, setGallery] = useState<GalleryImage[]>(() =>
    load("tn-admin-gallery", initialGallery),
  );
  const [visa, setVisa] = useState<VisaCountry[]>(() =>
    load("tn-admin-visa", initialVisa),
  );
  const [banners, setBanners] = useState<AdminBanners>(() =>
    migrateBanners(load("tn-admin-banners", null)),
  );

  useEffect(() => save("tn-admin-packages", packages), [packages]);
  useEffect(() => save("tn-admin-gallery", gallery), [gallery]);
  useEffect(() => save("tn-admin-visa", visa), [visa]);
  useEffect(() => save("tn-admin-banners", banners), [banners]);

  return (
    <Ctx.Provider
      value={{ packages, gallery, visa, banners, setPackages, setGallery, setVisa, setBanners }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useAdminState() {
  return useContext(Ctx);
}
