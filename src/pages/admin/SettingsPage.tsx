import { useState, useEffect } from "react";
import { Check, Eye, EyeOff, Save, AlertCircle } from "lucide-react";
import { getCredsEmail, updateCreds } from "@/lib/server-fns";

export function SettingsPage() {
  const [email, setEmail] = useState("");
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCredsEmail()
      .then((res) => setEmail(res.email))
      .catch(() => setEmail("admin@travelnest.com"))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setError("");
    const result = await updateCreds({
      data: { email, password: newPw || currentPw, currentPassword: currentPw },
    });
    if (result.success) {
      setCurrentPw("");
      setNewPw("");
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } else {
      setError(result.error || "Failed to update credentials.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-800">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your admin login credentials.</p>
      </div>

      <div className="mt-8 max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-slate-800">Admin Credentials</h2>

        {error && (
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            <AlertCircle className="size-4 shrink-0" />
            {error}
          </div>
        )}

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">Current Password</label>
            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                value={currentPw}
                onChange={(e) => setCurrentPw(e.target.value)}
                placeholder="Enter current password to change"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-10 text-sm outline-none focus:border-brand"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showCurrent ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">New Password</label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                placeholder="Leave blank to keep current"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-10 text-sm outline-none focus:border-brand"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showNew ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/90 disabled:opacity-50"
        >
          {saved ? <><Check className="size-4" /> Saved!</> : <><Save className="size-4" /> Save Changes</>}
        </button>
      </div>
    </div>
  );
}
