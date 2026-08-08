import { useState } from "react";
import { Check, Edit, Plus, Save, Trash2 } from "lucide-react";
import { useAdminState } from "@/contexts/AdminState";

export function BannersPage() {
  const { banners, setBanners } = useAdminState();
  const [activeTab, setActiveTab] = useState<"airtickets" | "home">("airtickets");

  return (
    <div>
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-800">Banner Management</h1>
        <p className="mt-1 text-sm text-slate-500">Edit banner text displayed on your site.</p>
      </div>

      <div className="mt-6 flex gap-2">
        {(["airtickets", "home"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab ? "bg-brand text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab === "airtickets" ? "Air Tickets Banner" : "Home Banner (3 Rotating Texts)"}
          </button>
        ))}
      </div>

      {activeTab === "airtickets" && <AirTicketsEditor banners={banners} setBanners={setBanners} />}
      {activeTab === "home" && <HomeEditor banners={banners} setBanners={setBanners} />}
    </div>
  );
}

function AirTicketsEditor({
  banners,
  setBanners,
}: {
  banners: any;
  setBanners: (b: any) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({ ...banners.airTickets });

  const handleSave = () => {
    setBanners({ ...banners, airTickets: draft });
    setEditing(false);
  };

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-slate-800">Air Tickets Page Banner</h2>
        {editing ? (
          <div className="flex gap-2">
            <button onClick={() => setEditing(false)} className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100">
              Cancel
            </button>
            <button onClick={handleSave} className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand/90">
              <Save className="size-3" /> Save
            </button>
          </div>
        ) : (
          <button onClick={() => setEditing(true)} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200">
            <Edit className="size-3" /> Edit
          </button>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Banner Text</label>
          {editing ? (
            <textarea
              defaultValue={draft.title}
              onBlur={(e) => setDraft({ ...draft, title: e.target.value })}
              rows={3}
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand"
            />
          ) : (
            <p className="rounded-xl bg-slate-50 px-4 py-2.5 text-sm text-slate-700">{banners.airTickets.title}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function HomeEditor({
  banners,
  setBanners,
}: {
  banners: any;
  setBanners: (b: any) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<string[]>([...banners.home]);

  const updateText = (index: number, value: string) => {
    const updated = [...draft];
    updated[index] = value;
    setDraft(updated);
  };

  const addText = () => {
    if (draft.length < 5) setDraft([...draft, ""]);
  };

  const removeText = (index: number) => {
    if (draft.length > 1) setDraft(draft.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    setBanners({ ...banners, home: draft.filter((t) => t.trim()) });
    setEditing(false);
  };

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-lg font-semibold text-slate-800">Homepage Banner Texts</h2>
          <p className="mt-1 text-xs text-slate-500">These texts rotate on the homepage hero banner. Edit any text you want.</p>
        </div>
        {editing ? (
          <div className="flex gap-2">
            <button onClick={() => { setDraft([...banners.home]); setEditing(false); }} className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100">
              Cancel
            </button>
            <button onClick={handleSave} className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand/90">
              <Save className="size-3" /> Save
            </button>
          </div>
        ) : (
          <button onClick={() => setEditing(true)} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200">
            <Edit className="size-3" /> Edit
          </button>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {editing ? (
          draft.map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-2.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand/15 font-display text-xs font-bold text-brand">
                {i + 1}
              </span>
              <input
                value={text}
                onChange={(e) => updateText(i, e.target.value)}
                placeholder={`Banner text ${i + 1}`}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand"
              />
              {draft.length > 1 && (
                <button onClick={() => removeText(i)} className="mt-1.5 grid size-7 shrink-0 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500">
                  <Trash2 className="size-3.5" />
                </button>
              )}
            </div>
          ))
        ) : (
          banners.home.map((text: string, i: number) => (
            <div key={i} className="flex items-center gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand/15 font-display text-xs font-bold text-brand">
                {i + 1}
              </span>
              <p className="rounded-xl bg-slate-50 px-4 py-2.5 text-sm text-slate-700">{text}</p>
            </div>
          ))
        )}
      </div>

      {editing && draft.length < 5 && (
        <button onClick={addText} className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-500 hover:border-brand hover:text-brand">
          <Plus className="size-3" /> Add More Text
        </button>
      )}
    </div>
  );
}
