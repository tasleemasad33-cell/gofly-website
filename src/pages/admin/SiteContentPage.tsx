import { useState, useEffect, useRef } from "react";
import { Plus, Trash2, Save, Upload } from "lucide-react";
import { getAdminSiteContent } from "@/lib/gofly-data";
import type { ExperienceDestination, PopularActivity, PageStat, SiteContent } from "@/lib/admin-types";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function ImageField({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (val: string) => void;
  label: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2MB");
      return;
    }
    const dataURL = await fileToDataURL(file);
    onChange(dataURL);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        value={value.startsWith("data:") ? "" : value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
        placeholder={`${label} URL or upload below`}
      />
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
        title="Upload from device"
      >
        <Upload className="size-4" />
      </button>
      {value && (
        <img
          src={value}
          alt="Preview"
          className="size-10 shrink-0 rounded-lg object-cover"
        />
      )}
    </div>
  );
}

export default function SiteContentPage() {
  const [content, setContent] = useState<SiteContent>({
    destinations: [],
    activities: [],
    weddingStats: [],
    homeStats: [],
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setContent(getAdminSiteContent());
  }, []);

  const save = () => {
    localStorage.setItem("tn-admin-site-content", JSON.stringify(content));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateDest = (id: string, field: keyof ExperienceDestination, value: string | number) => {
    setContent((prev) => ({
      ...prev,
      destinations: prev.destinations.map((d) => (d.id === id ? { ...d, [field]: value } : d)),
    }));
  };

  const addDest = () => {
    setContent((prev) => ({
      ...prev,
      destinations: [
        ...prev.destinations,
        { id: uid(), title: "New Destination", activityCount: 0, image: "" },
      ],
    }));
  };

  const removeDest = (id: string) => {
    setContent((prev) => ({
      ...prev,
      destinations: prev.destinations.filter((d) => d.id !== id),
    }));
  };

  const updateActivity = (id: string, field: keyof PopularActivity, value: string) => {
    setContent((prev) => ({
      ...prev,
      activities: prev.activities.map((a) => (a.id === id ? { ...a, [field]: value } : a)),
    }));
  };

  const addActivity = () => {
    setContent((prev) => ({
      ...prev,
      activities: [
        ...prev.activities,
        { id: uid(), title: "New Activity", location: "", duration: "", price: "PKR 0", image: "" },
      ],
    }));
  };

  const removeActivity = (id: string) => {
    setContent((prev) => ({
      ...prev,
      activities: prev.activities.filter((a) => a.id !== id),
    }));
  };

  const updateStat = (section: "weddingStats" | "homeStats", id: string, field: keyof PageStat, value: string) => {
    setContent((prev) => ({
      ...prev,
      [section]: prev[section].map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    }));
  };

  const addStat = (section: "weddingStats" | "homeStats") => {
    setContent((prev) => ({
      ...prev,
      [section]: [...prev[section], { id: uid(), value: "0", label: "New Stat" }],
    }));
  };

  const removeStat = (section: "weddingStats" | "homeStats", id: string) => {
    setContent((prev) => ({
      ...prev,
      [section]: prev[section].filter((s) => s.id !== id),
    }));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Site Content</h1>
          <p className="text-sm text-slate-500">Manage destinations, activities, and stats shown on the website.</p>
        </div>
        <button
          onClick={save}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand/90"
        >
          <Save className="size-4" />
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* Featured Destinations */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Featured Destinations (Experiences Page)</h2>
          <button onClick={addDest} className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand/80">
            <Plus className="size-4" /> Add
          </button>
        </div>
        <div className="space-y-3">
          {content.destinations.map((d) => (
            <div key={d.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3 space-y-2">
              <div className="flex items-center gap-3">
                <input
                  value={d.title}
                  onChange={(e) => updateDest(d.id, "title", e.target.value)}
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder="Destination"
                />
                <input
                  type="number"
                  value={d.activityCount}
                  onChange={(e) => updateDest(d.id, "activityCount", Number(e.target.value))}
                  className="w-24 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder="Count"
                />
                <button onClick={() => removeDest(d.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 className="size-4" />
                </button>
              </div>
              <ImageField
                value={d.image}
                onChange={(val) => updateDest(d.id, "image", val)}
                label="Image"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Popular Activities */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Popular Activities (Experiences Page)</h2>
          <button onClick={addActivity} className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand/80">
            <Plus className="size-4" /> Add
          </button>
        </div>
        <div className="space-y-3">
          {content.activities.map((a) => (
            <div key={a.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3 space-y-2">
              <div className="flex items-center gap-3">
                <input
                  value={a.title}
                  onChange={(e) => updateActivity(a.id, "title", e.target.value)}
                  className="w-48 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder="Title"
                />
                <input
                  value={a.location}
                  onChange={(e) => updateActivity(a.id, "location", e.target.value)}
                  className="w-40 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder="Location"
                />
                <input
                  value={a.duration}
                  onChange={(e) => updateActivity(a.id, "duration", e.target.value)}
                  className="w-28 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder="Duration"
                />
                <input
                  value={a.price}
                  onChange={(e) => updateActivity(a.id, "price", e.target.value)}
                  className="w-36 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder="PKR 0"
                />
                <button onClick={() => removeActivity(a.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 className="size-4" />
                </button>
              </div>
              <ImageField
                value={a.image}
                onChange={(val) => updateActivity(a.id, "image", val)}
                label="Image"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Wedding Stats */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Destination Wedding Stats</h2>
          <button onClick={() => addStat("weddingStats")} className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand/80">
            <Plus className="size-4" /> Add
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.weddingStats.map((s) => (
            <div key={s.id} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
              <input
                value={s.value}
                onChange={(e) => updateStat("weddingStats", s.id, "value", e.target.value)}
                className="w-24 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                placeholder="Value"
              />
              <input
                value={s.label}
                onChange={(e) => updateStat("weddingStats", s.id, "label", e.target.value)}
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                placeholder="Label"
              />
              <button onClick={() => removeStat("weddingStats", s.id)} className="text-red-400 hover:text-red-600">
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Home / About Stats */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Homepage / About Stats</h2>
          <button onClick={() => addStat("homeStats")} className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand/80">
            <Plus className="size-4" /> Add
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.homeStats.map((s) => (
            <div key={s.id} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
              <input
                value={s.value}
                onChange={(e) => updateStat("homeStats", s.id, "value", e.target.value)}
                className="w-24 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                placeholder="Value"
              />
              <input
                value={s.label}
                onChange={(e) => updateStat("homeStats", s.id, "label", e.target.value)}
                className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm"
                placeholder="Label"
              />
              <button onClick={() => removeStat("homeStats", s.id)} className="text-red-400 hover:text-red-600">
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
