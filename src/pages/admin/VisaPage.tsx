import { useState } from "react";
import { Pencil, Plus, Trash2, X, Check } from "lucide-react";
import { useAdminState } from "@/contexts/AdminState";

export function VisaPage() {
  const { visa, setVisa, loading } = useAdminState();
  const [selected, setSelected] = useState(0);
  const [newReq, setNewReq] = useState("");
  const [editingCountry, setEditingCountry] = useState<string | null>(null);
  const [countryName, setCountryName] = useState("");
  const [search, setSearch] = useState("");

  const filtered = visa.filter((v) =>
    v.country.toLowerCase().includes(search.toLowerCase()),
  );

  const current = visa[selected];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="size-8 animate-spin rounded-full border-4 border-brand border-t-transparent" />
      </div>
    );
  }

  const addRequirement = () => {
    if (!newReq.trim() || !current) return;
    const updated = [...visa];
    updated[selected] = { ...current, requirements: [...current.requirements, newReq.trim()] };
    setVisa(updated);
    setNewReq("");
  };

  const removeRequirement = (idx: number) => {
    const updated = [...visa];
    updated[selected] = {
      ...current,
      requirements: current.requirements.filter((_, i) => i !== idx),
    };
    setVisa(updated);
  };

  const updateRequirement = (idx: number, value: string) => {
    const updated = [...visa];
    const reqs = [...current.requirements];
    reqs[idx] = value;
    updated[selected] = { ...current, requirements: reqs };
    setVisa(updated);
  };

  const addCountry = () => {
    if (!countryName.trim()) return;
    setVisa([...visa, { country: countryName.trim(), requirements: [] }]);
    setCountryName("");
    setSelected(visa.length);
  };

  const removeCountry = (idx: number) => {
    if (!confirm(`Delete ${visa[idx].country}?`)) return;
    setVisa(visa.filter((_, i) => i !== idx));
    setSelected(0);
  };

  return (
    <div>
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-800">Visa Requirements</h1>
        <p className="mt-1 text-sm text-slate-500">Manage visa requirements for each country.</p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Country list */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <input
            type="text"
            placeholder="Search countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-3 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand"
          />
          <div className="max-h-[500px] space-y-1 overflow-y-auto">
            {filtered.map((v, i) => {
              const realIdx = visa.indexOf(v);
              return (
                <div
                  key={v.country}
                  onClick={() => setSelected(realIdx)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    selected === realIdx ? "bg-brand text-white" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="font-medium">{v.country}</span>
                  <span className={`text-xs ${selected === realIdx ? "text-white/70" : "text-slate-400"}`}>
                    {v.requirements.length} reqs
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              placeholder="New country"
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand"
              onKeyDown={(e) => e.key === "Enter" && addCountry()}
            />
            <button onClick={addCountry} className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-white">
              <Plus className="size-4" />
            </button>
          </div>
        </div>

        {/* Requirements editor */}
        {current && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-slate-800">
                Requirements for {current.country}
              </h2>
              <button
                onClick={() => removeCountry(selected)}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
              >
                Delete Country
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {current.requirements.map((req, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-2.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                    <Check className="size-3" />
                  </span>
                  <input
                    value={req}
                    onChange={(e) => updateRequirement(idx, e.target.value)}
                    className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand"
                  />
                  <button
                    onClick={() => removeRequirement(idx)}
                    className="mt-1 grid size-7 shrink-0 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={newReq}
                onChange={(e) => setNewReq(e.target.value)}
                placeholder="Add new requirement..."
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand"
                onKeyDown={(e) => e.key === "Enter" && addRequirement()}
              />
              <button onClick={addRequirement} className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90">
                <Plus className="size-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
