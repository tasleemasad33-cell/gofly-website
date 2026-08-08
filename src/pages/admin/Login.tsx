import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Lock, Mail, Plane, Eye, EyeOff, ArrowLeft, Check, KeyRound } from "lucide-react";
import { useAuth } from "@/contexts/AdminAuth";
import { resetPassword } from "@/lib/server-fns";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  // Forgot password states
  const [view, setView] = useState<"login" | "forgot" | "reset">("login");
  const [resetEmail, setResetEmail] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showNewPw, setShowNewPw] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

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

  const handleForgotPassword = async (e: FormEvent) => {
    e.preventDefault();
    setResetError("");
    try {
      const res = await resetPassword({
        data: { action: "verify-email", email: resetEmail },
      });
      if (res.success) {
        setView("reset");
      } else {
        setResetError("Email not found in our system.");
      }
    } catch {
      setResetError("Something went wrong. Try again.");
    }
  };

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    setResetError("");
    if (newPw.length < 6) {
      setResetError("Password must be at least 6 characters.");
      return;
    }
    if (newPw !== confirmPw) {
      setResetError("Passwords do not match.");
      return;
    }
    try {
      const res = await resetPassword({
        data: { action: "update-password", email: resetEmail, newPassword: newPw },
      });
      if (res.success) {
        setResetSuccess(true);
        setTimeout(() => {
          setView("login");
          setEmail(resetEmail);
          setPassword("");
          setResetSuccess(false);
          setResetEmail("");
          setNewPw("");
          setConfirmPw("");
        }, 2500);
      } else {
        setResetError(res.error || "Failed to reset password.");
      }
    } catch {
      setResetError("Something went wrong. Try again.");
    }
  };

  // ===== FORGOT PASSWORD VIEW =====
  if (view === "forgot") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-brand/15">
              <KeyRound className="size-8 text-brand" />
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Forgot Password</h1>
            <p className="mt-2 text-sm text-slate-400">Enter your email to reset your password</p>
          </div>

          <form
            onSubmit={handleForgotPassword}
            className="rounded-2xl border border-slate-700/50 bg-slate-800/80 p-8 shadow-2xl backdrop-blur"
          >
            {resetError && (
              <div className="mb-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {resetError}
              </div>
            )}

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-brand py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Verify Email
            </button>

            <button
              type="button"
              onClick={() => { setView("login"); setResetError(""); }}
              className="mt-4 flex w-full items-center justify-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" /> Back to Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ===== RESET PASSWORD VIEW =====
  if (view === "reset") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-brand/15">
              <Lock className="size-8 text-brand" />
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Reset Password</h1>
            <p className="mt-2 text-sm text-slate-400">Set a new password for your account</p>
          </div>

          <form
            onSubmit={handleResetPassword}
            className="rounded-2xl border border-slate-700/50 bg-slate-800/80 p-8 shadow-2xl backdrop-blur"
          >
            {resetError && (
              <div className="mb-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {resetError}
              </div>
            )}

            {resetSuccess ? (
              <div className="flex flex-col items-center py-6">
                <div className="mb-4 grid size-16 place-items-center rounded-full bg-emerald-500/15">
                  <Check className="size-8 text-emerald-400" />
                </div>
                <p className="text-lg font-semibold text-white">Password Reset Successfully!</p>
                <p className="mt-2 text-sm text-slate-400">Redirecting to login...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type={showNewPw ? "text" : "password"}
                      required
                      value={newPw}
                      onChange={(e) => setNewPw(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full rounded-xl border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-10 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPw(!showNewPw)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                    >
                      {showNewPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type={showNewPw ? "text" : "password"}
                      required
                      value={confirmPw}
                      onChange={(e) => setConfirmPw(e.target.value)}
                      placeholder="Confirm new password"
                      className="w-full rounded-xl border border-slate-600 bg-slate-700/50 py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-brand"
                    />
                  </div>
                </div>
              </div>
            )}

            {!resetSuccess && (
              <>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-brand py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  Reset Password
                </button>

                <button
                  type="button"
                  onClick={() => { setView("forgot"); setResetError(""); }}
                  className="mt-4 flex w-full items-center justify-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    );
  }

  // ===== LOGIN VIEW =====
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
                  placeholder="Enter your email"
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

          <div className="mt-3 text-right">
            <button
              type="button"
              onClick={() => { setView("forgot"); setResetError(""); setResetEmail(""); }}
              className="text-xs text-brand hover:text-brand/80 transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-brand py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-brand/90"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
