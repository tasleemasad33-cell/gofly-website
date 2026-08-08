import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Lock, Mail, Plane, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/contexts/AdminAuth";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const ok = await login(email, password);
    if (ok) {
      navigate({ to: "/admin/dashboard" });
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-brand/15">
            <Plane className="size-8 text-brand" />
          </div>
          <h1 className="font-display text-2xl font-bold text-white">Travel Nest Admin</h1>
          <p className="mt-2 text-sm text-slate-400">Sign in to manage your dashboard</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-700/50 bg-slate-800/80 p-8 shadow-2xl backdrop-blur"
        >
          {error && (
            <div className="mb-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@travelnest.com"
                  className="w-full rounded-xl border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                <input
                  type={showPw ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-10 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-brand py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-brand/90"
          >
            Sign In
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Default: admin@travelnest.com / TravelNest@2026
          </p>
        </form>
      </div>
    </div>
  );
}
