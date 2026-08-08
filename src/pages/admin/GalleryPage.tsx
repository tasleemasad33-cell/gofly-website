import { useState } from "react";
import { Camera, Plus, Trash2, Upload } from "lucide-react";
import { useAdminState } from "@/contexts/AdminState";

export function GalleryPage() {
  const { gallery, setGallery, loading } = useAdminState();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const newImg = {
          id: Date.now().toString() + Math.random().toString(36).slice(2, 6),
          src: reader.result as string,
          title: title || file.name.replace(/\.[^.]+$/, ""),
          location: location || "Unknown",
        };
        setGallery((prev: any) => [...prev, newImg]);
      };
      reader.readAsDataURL(file);
    });

    setTitle("");
    setLocation("");
    e.target.value = "";
  };

  const remove = (id: string) => {
    if (!confirm("Delete this image?")) return;
    setGallery(gallery.filter((img) => img.id !== id));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="size-8 animate-spin rounded-full border-4 border-brand border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-800">Gallery</h1>
        <p className="mt-1 text-sm text-slate-500">Manage gallery images across your site.</p>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-base font-semibold text-slate-700">Upload New Images</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Image title" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Location</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Paris, France" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
          </div>
        </div>
        <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90">
          <Upload className="size-4" /> Select Images
          <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
        </label>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((img) => (
          <div key={img.id} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src={img.src} alt={img.title} className="aspect-square w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <button
              onClick={() => remove(img.id)}
              className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-red-500 text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
            >
              <Trash2 className="size-4" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-sm font-medium text-white">{img.title}</p>
              <p className="text-xs text-white/70">{img.location}</p>
            </div>
          </div>
        ))}
      </div>

      {gallery.length === 0 && (
        <div className="mt-12 text-center text-slate-400">
          <Camera className="mx-auto size-12 text-slate-300" />
          <p className="mt-3">No images yet. Upload your first image above.</p>
        </div>
      )}
    </div>
  );
}
