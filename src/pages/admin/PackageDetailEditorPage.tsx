import { useState, useEffect } from "react";
import { ArrowLeft, Plus, Trash2, Save } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { getAllPackages, getAdminPackageDetails } from "@/lib/gofly-data";
import type { PackageDetailAdmin } from "@/lib/admin-types";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function emptyDetail(slug: string): PackageDetailAdmin {
  return {
    slug,
    rating: 4.5,
    reviews: 40,
    description: "",
    tourType: "Group Tour",
    groupSize: "02-15",
    info: [
      { label: "Accommodation", value: "" },
      { label: "Meals", value: "" },
      { label: "Transportation", value: "" },
      { label: "Group Size", value: "" },
      { label: "Language", value: "" },
      { label: "Age Range", value: "" },
      { label: "Season", value: "" },
      { label: "Category", value: "" },
    ],
    locations: [],
    highlights: [""],
    itinerary: [
      {
        day: "Day-01",
        title: "",
        desc: "",
        transport: "",
        activities: "",
        meals: "",
        accommodation: "",
      },
    ],
    includes: [""],
    excludes: [""],
    additionalInfo: [""],
    faqs: [{ q: "", a: "" }],
  };
}

export default function PackageDetailEditorPage() {
  const navigate = useNavigate();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [detail, setDetail] = useState<PackageDetailAdmin | null>(null);
  const [saved, setSaved] = useState(false);
  const packages = getAllPackages();

  useEffect(() => {
    if (selectedSlug) {
      const existing = getAdminPackageDetails()[selectedSlug];
      setDetail(existing || emptyDetail(selectedSlug));
    }
  }, [selectedSlug]);

  const save = () => {
    if (!detail) return;
    const all = getAdminPackageDetails();
    all[detail.slug] = detail;
    localStorage.setItem("tn-admin-package-details", JSON.stringify(all));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const update = (field: keyof PackageDetailAdmin, value: any) => {
    setDetail((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const updateInfo = (idx: number, field: "label" | "value", val: string) => {
    setDetail((prev) => {
      if (!prev) return prev;
      const info = [...prev.info];
      info[idx] = { ...info[idx], [field]: val };
      return { ...prev, info };
    });
  };

  const addInfo = () => {
    setDetail((prev) => prev ? { ...prev, info: [...prev.info, { label: "", value: "" }] } : prev);
  };

  const removeInfo = (idx: number) => {
    setDetail((prev) => prev ? { ...prev, info: prev.info.filter((_, i) => i !== idx) } : prev);
  };

  const updateLocation = (idx: number, field: string, val: string) => {
    setDetail((prev) => {
      if (!prev) return prev;
      const locations = [...prev.locations];
      locations[idx] = { ...locations[idx], [field]: val };
      return { ...prev, locations };
    });
  };

  const addLocation = () => {
    setDetail((prev) => prev ? {
      ...prev,
      locations: [...prev.locations, { img: "", title: "", days: "01 Days" }],
    } : prev);
  };

  const removeLocation = (idx: number) => {
    setDetail((prev) => prev ? { ...prev, locations: prev.locations.filter((_, i) => i !== idx) } : prev);
  };

  const updateHighlight = (idx: number, val: string) => {
    setDetail((prev) => {
      if (!prev) return prev;
      const highlights = [...prev.highlights];
      highlights[idx] = val;
      return { ...prev, highlights };
    });
  };

  const addHighlight = () => {
    setDetail((prev) => prev ? { ...prev, highlights: [...prev.highlights, ""] } : prev);
  };

  const removeHighlight = (idx: number) => {
    setDetail((prev) => prev ? { ...prev, highlights: prev.highlights.filter((_, i) => i !== idx) } : prev);
  };

  const updateItinerary = (idx: number, field: string, val: string) => {
    setDetail((prev) => {
      if (!prev) return prev;
      const itinerary = [...prev.itinerary];
      itinerary[idx] = { ...itinerary[idx], [field]: val };
      return { ...prev, itinerary };
    });
  };

  const addItinerary = () => {
    setDetail((prev) => {
      if (!prev) return prev;
      const n = prev.itinerary.length + 1;
      return {
        ...prev,
        itinerary: [...prev.itinerary, {
          day: `Day-${String(n).padStart(2, "0")}`,
          title: "",
          desc: "",
          transport: "",
          activities: "",
          meals: "",
          accommodation: "",
        }],
      };
    });
  };

  const removeItinerary = (idx: number) => {
    setDetail((prev) => prev ? { ...prev, itinerary: prev.itinerary.filter((_, i) => i !== idx) } : prev);
  };

  const updateList = (field: "includes" | "excludes" | "additionalInfo", idx: number, val: string) => {
    setDetail((prev) => {
      if (!prev) return prev;
      const list = [...prev[field]];
      list[idx] = val;
      return { ...prev, [field]: list };
    });
  };

  const addListItem = (field: "includes" | "excludes" | "additionalInfo") => {
    setDetail((prev) => prev ? { ...prev, [field]: [...prev[field], ""] } : prev);
  };

  const removeListItem = (field: "includes" | "excludes" | "additionalInfo", idx: number) => {
    setDetail((prev) => prev ? { ...prev, [field]: prev[field].filter((_, i) => i !== idx) } : prev);
  };

  const updateFaq = (idx: number, field: "q" | "a", val: string) => {
    setDetail((prev) => {
      if (!prev) return prev;
      const faqs = [...prev.faqs];
      faqs[idx] = { ...faqs[idx], [field]: val };
      return { ...prev, faqs };
    });
  };

  const addFaq = () => {
    setDetail((prev) => prev ? { ...prev, faqs: [...prev.faqs, { q: "", a: "" }] } : prev);
  };

  const removeFaq = (idx: number) => {
    setDetail((prev) => prev ? { ...prev, faqs: prev.faqs.filter((_, i) => i !== idx) } : prev);
  };

  if (!selectedSlug) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Package Details Editor</h1>
        <p className="mt-1 text-sm text-slate-500">Select a package to edit its detailed page content.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <button
              key={p.slug}
              onClick={() => setSelectedSlug(p.slug)}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-brand hover:bg-brand/5"
            >
              <img src={p.images[0]} alt="" className="size-12 shrink-0 rounded-lg object-cover" />
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-semibold text-slate-900">{p.title}</p>
                <p className="text-xs text-slate-500">{p.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!detail) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => setSelectedSlug(null)} className="text-slate-400 hover:text-slate-600">
            <ArrowLeft className="size-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{detail.slug}</h1>
            <p className="text-sm text-slate-500">Edit all content for this package detail page.</p>
          </div>
        </div>
        <button onClick={save} className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand/90">
          <Save className="size-4" /> {saved ? "Saved!" : "Save"}
        </button>
      </div>

      {/* Basic Info */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Basic Info</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">Rating</label>
            <input type="number" step="0.1" min="0" max="5" value={detail.rating} onChange={(e) => update("rating", Number(e.target.value))} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">Reviews Count</label>
            <input type="number" value={detail.reviews} onChange={(e) => update("reviews", Number(e.target.value))} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">Tour Type</label>
            <input value={detail.tourType} onChange={(e) => update("tourType", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">Group Size</label>
            <input value={detail.groupSize} onChange={(e) => update("groupSize", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-xs font-medium text-slate-500">Description</label>
          <textarea rows={4} value={detail.description} onChange={(e) => update("description", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
        </div>
      </section>

      {/* Info Items */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Info Items</h2>
          <button onClick={addInfo} className="inline-flex items-center gap-1 text-sm font-medium text-brand"><Plus className="size-4" /> Add</button>
        </div>
        <div className="space-y-2">
          {detail.info.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <input value={item.label} onChange={(e) => updateInfo(i, "label", e.target.value)} className="w-40 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Label" />
              <input value={item.value} onChange={(e) => updateInfo(i, "value", e.target.value)} className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Value" />
              <button onClick={() => removeInfo(i)} className="text-red-400 hover:text-red-600"><Trash2 className="size-4" /></button>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Explore Locations</h2>
          <button onClick={addLocation} className="inline-flex items-center gap-1 text-sm font-medium text-brand"><Plus className="size-4" /> Add</button>
        </div>
        <div className="space-y-3">
          {detail.locations.map((loc, i) => (
            <div key={i} className="flex items-center gap-2">
              <input value={loc.title} onChange={(e) => updateLocation(i, "title", e.target.value)} className="w-40 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Title" />
              <input value={loc.days} onChange={(e) => updateLocation(i, "days", e.target.value)} className="w-28 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Days" />
              <input value={loc.img} onChange={(e) => updateLocation(i, "img", e.target.value)} className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Image URL" />
              <button onClick={() => removeLocation(i)} className="text-red-400 hover:text-red-600"><Trash2 className="size-4" /></button>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
          <button onClick={addHighlight} className="inline-flex items-center gap-1 text-sm font-medium text-brand"><Plus className="size-4" /> Add</button>
        </div>
        <div className="space-y-2">
          {detail.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2">
              <input value={h} onChange={(e) => updateHighlight(i, e.target.value)} className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Highlight" />
              <button onClick={() => removeHighlight(i)} className="text-red-400 hover:text-red-600"><Trash2 className="size-4" /></button>
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Itinerary</h2>
          <button onClick={addItinerary} className="inline-flex items-center gap-1 text-sm font-medium text-brand"><Plus className="size-4" /> Add Day</button>
        </div>
        <div className="space-y-4">
          {detail.itinerary.map((day, i) => (
            <div key={i} className="rounded-lg border border-slate-100 bg-slate-50 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <input value={day.day} onChange={(e) => updateItinerary(i, "day", e.target.value)} className="w-28 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold" />
                <button onClick={() => removeItinerary(i)} className="text-red-400 hover:text-red-600"><Trash2 className="size-4" /></button>
              </div>
              <input value={day.title} onChange={(e) => updateItinerary(i, "title", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Day Title" />
              <textarea value={day.desc} onChange={(e) => updateItinerary(i, "desc", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" rows={2} placeholder="Description" />
              <div className="grid gap-2 sm:grid-cols-2">
                <input value={day.transport} onChange={(e) => updateItinerary(i, "transport", e.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Transport" />
                <input value={day.activities} onChange={(e) => updateItinerary(i, "activities", e.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Activities" />
                <input value={day.meals} onChange={(e) => updateItinerary(i, "meals", e.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Meals" />
                <input value={day.accommodation} onChange={(e) => updateItinerary(i, "accommodation", e.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Accommodation" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Includes / Excludes */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-900">Includes & Excludes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {(["includes", "excludes"] as const).map((field) => (
            <div key={field}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-700 capitalize">{field}</h3>
                <button onClick={() => addListItem(field)} className="text-xs font-medium text-brand"><Plus className="inline size-3" /> Add</button>
              </div>
              <div className="space-y-2">
                {detail[field].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input value={item} onChange={(e) => updateList(field, i, e.target.value)} className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" />
                    <button onClick={() => removeListItem(field, i)} className="text-red-400 hover:text-red-600"><Trash2 className="size-3" /></button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Additional Info</h2>
          <button onClick={() => addListItem("additionalInfo")} className="inline-flex items-center gap-1 text-sm font-medium text-brand"><Plus className="size-4" /> Add</button>
        </div>
        <div className="space-y-2">
          {detail.additionalInfo.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <input value={item} onChange={(e) => updateList("additionalInfo", i, e.target.value)} className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" />
              <button onClick={() => removeListItem("additionalInfo", i)} className="text-red-400 hover:text-red-600"><Trash2 className="size-4" /></button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">FAQs</h2>
          <button onClick={addFaq} className="inline-flex items-center gap-1 text-sm font-medium text-brand"><Plus className="size-4" /> Add</button>
        </div>
        <div className="space-y-3">
          {detail.faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-slate-100 bg-slate-50 p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">FAQ #{i + 1}</span>
                <button onClick={() => removeFaq(i)} className="text-red-400 hover:text-red-600"><Trash2 className="size-3" /></button>
              </div>
              <input value={faq.q} onChange={(e) => updateFaq(i, "q", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Question" />
              <textarea value={faq.a} onChange={(e) => updateFaq(i, "a", e.target.value)} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" rows={2} placeholder="Answer" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
