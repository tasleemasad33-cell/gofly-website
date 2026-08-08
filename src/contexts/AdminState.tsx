import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { TourPackage, GalleryImage, VisaCountry, AdminBanners } from "@/lib/admin-types";
import {
  getAllData,
  savePackages,
  addPackage,
  updateSinglePackage,
  removePackage,
  saveGallery,
  addGalleryImage,
  removeGalleryImage,
  saveVisa,
  saveBanners,
} from "@/lib/server-fns";

interface AdminState {
  packages: TourPackage[];
  gallery: GalleryImage[];
  visa: VisaCountry[];
  banners: AdminBanners;
  loading: boolean;
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
  loading: true,
  setPackages: () => {},
  setGallery: () => {},
  setVisa: () => {},
  setBanners: () => {},
});

export function AdminStateProvider({ children }: { children: ReactNode }) {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [visa, setVisa] = useState<VisaCountry[]>([]);
  const [banners, setBanners] = useState<AdminBanners>({
    airTickets: { subtitle: "", title: "", description: "" },
    home: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllData();
        setPackages(data.packages || []);
        setGallery(data.gallery || []);
        setVisa(data.visa || []);
        setBanners(
          data.banners || {
            airTickets: { subtitle: "", title: "", description: "" },
            home: [],
          }
        );
      } catch (err) {
        console.error("Failed to load data from MongoDB:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleSetPackages: typeof setPackages = (action) => {
    setPackages((prev) => {
      const next = typeof action === "function" ? action(prev) : action;
      const added = next.filter((p) => !prev.find((x) => x.id === p.id));
      const updated = next.filter((p) => prev.find((x) => x.id === p.id));
      const removed = prev.filter((p) => !next.find((x) => x.id === p.id));

      added.forEach((pkg) => addPackage({ data: pkg }).catch(console.error));
      updated.forEach((pkg) =>
        updateSinglePackage({ data: { id: pkg.id, pkg } }).catch(console.error)
      );
      removed.forEach((pkg) => removePackage({ data: { id: pkg.id } }).catch(console.error));

      return next;
    });
  };

  const handleSetGallery: typeof setGallery = (action) => {
    setGallery((prev) => {
      const next = typeof action === "function" ? action(prev) : action;
      const added = next.filter((img) => !prev.find((x) => x.id === img.id));
      const removed = prev.filter((img) => !next.find((x) => x.id === img.id));

      added.forEach((img) => addGalleryImage({ data: img }).catch(console.error));
      removed.forEach((img) =>
        removeGalleryImage({ data: { id: img.id } }).catch(console.error)
      );

      return next;
    });
  };

  const handleSetVisa: typeof setVisa = (action) => {
    setVisa((prev) => {
      const next = typeof action === "function" ? action(prev) : action;
      saveVisa({ data: next }).catch(console.error);
      return next;
    });
  };

  const handleSetBanners: typeof setBanners = (action) => {
    setBanners((prev) => {
      const next = typeof action === "function" ? action(prev) : action;
      saveBanners({ data: next }).catch(console.error);
      return next;
    });
  };

  return (
    <Ctx.Provider
      value={{
        packages,
        gallery,
        visa,
        banners,
        loading,
        setPackages: handleSetPackages,
        setGallery: handleSetGallery,
        setVisa: handleSetVisa,
        setBanners: handleSetBanners,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useAdminState() {
  return useContext(Ctx);
}
