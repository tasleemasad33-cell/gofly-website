import { useState } from "react";
import { Pencil, Plus, Trash2, X } from "lucide-react";
import { useAdminState } from "@/contexts/AdminState";
import type { TourPackage } from "@/lib/admin-types";

const categories = [
  "Popular Packages",
  "One Day Trip",
  "Last Minute Deal",
  "Group Tour",
  "Honeymoon",
  "Corporate",
  "Customized",
  "Educational",
  "Destination",
];

const subcategories = ["International", "Domestic", "Umrah"];

const emptyPackage: Omit<TourPackage, "id"> = {
  title: "",
  slug: "",
  price: "",
  location: "",
  category: "Popular Packages",
  subcategory: "",
  duration: "",
  groupSize: "",
  image: "",
  description: "",
};

export function ToursPage() {
  const { packages, setPackages } = useAdminState();
  const [editing, setEditing] = useState<TourPackage | null>(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState<Omit<TourPackage, "id">>(emptyPackage);
  const [search, setSearch] = useState("");

  const filtered = packages.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()),
  );

  const openAdd = () => {
    setForm(emptyPackage);
    setEditing(null);
    setAdding(true);
  };

  const openEdit = (pkg: TourPackage) => {
    setForm({ ...pkg });
    setEditing(pkg);
    setAdding(true);
  };

  const close = () => {
    setAdding(false);
    setEditing(null);
    setForm(emptyPackage);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, image: reader.result as string });
    reader.readAsDataURL(file);
  };

  const save = () => {
    if (!form.title || !form.price) return;
    const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (editing) {
      setPackages(packages.map((p) => (p.id === editing.id ? { ...form, id: editing.id, slug } : p)));
    } else {
      setPackages([...packages, { ...form, id: Date.now().toString(), slug }]);
    }
    close();
  };

  const remove = (id: string) => {
    if (!confirm("Delete this package?")) return;
    setPackages(packages.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-800">Tour Packages</h1>
          <p className="mt-1 text-sm text-slate-500">Manage all tour packages across your site.</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90">
          <Plus className="size-4" /> Add Package
        </button>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search packages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-600">Package</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Location</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Category</th>
                {packages.some((p) => p.subcategory) && <th className="px-4 py-3 font-semibold text-slate-600">Group Type</th>}
                <th className="px-4 py-3 font-semibold text-slate-600">Price</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((pkg) => (
                <tr key={pkg.id} className="transition-colors hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={pkg.image} alt="" className="size-10 rounded-lg object-cover" />
                      <span className="font-medium text-slate-700">{pkg.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-500">{pkg.location}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">{pkg.category}</span>
                  </td>
                  {packages.some((p) => p.subcategory) && (
                    <td className="px-4 py-3">
                      {pkg.subcategory ? (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 capitalize">{pkg.subcategory}</span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                  )}
                  <td className="px-4 py-3 font-medium text-slate-700">{pkg.price}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(pkg)} className="grid size-8 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-500">
                        <Pencil className="size-4" />
                      </button>
                      <button onClick={() => remove(pkg.id)} className="grid size-8 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={packages.some((p) => p.subcategory) ? 6 : 5} className="px-4 py-12 text-center text-slate-400">
                    No packages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {adding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={close}>
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-slate-800">
                {editing ? "Edit Package" : "Add New Package"}
              </h2>
              <button onClick={close} className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100">
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Title *</label>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Price *</label>
                <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="PKR 199,000" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Location</label>
                <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value, subcategory: e.target.value === "Group Tour" ? form.subcategory : "" })} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand">
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              {form.category === "Group Tour" && (
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Group Type</label>
                  <select value={form.subcategory || ""} onChange={(e) => setForm({ ...form, subcategory: e.target.value })} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand">
                    <option value="">Select type...</option>
                    {subcategories.map((s) => <option key={s} value={s.toLowerCase()}>{s}</option>)}
                  </select>
                </div>
              )}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Duration</label>
                <input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="5 Days / 4 Nights" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Group Size</label>
                <input value={form.groupSize} onChange={(e) => setForm({ ...form, groupSize: e.target.value })} placeholder="02-08" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Slug</label>
                <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="auto-generated" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Description</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Image</label>
                <input type="file" accept="image/*" onChange={handleImage} className="w-full text-sm text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-brand file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-white" />
                {form.image && <img src={form.image} alt="Preview" className="mt-3 h-24 rounded-lg object-cover" />}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={close} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50">Cancel</button>
              <button onClick={save} className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90">
                {editing ? "Save Changes" : "Add Package"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
