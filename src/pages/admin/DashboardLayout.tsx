import { type ReactNode, useState } from "react";
import { useNavigate, useMatchRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Camera,
  FileText,
  Image,
  LayoutDashboard,
  LogOut,
  Plane,
  Settings,
  Shield,
} from "lucide-react";
import { useAuth } from "@/contexts/AdminAuth";

const nav = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { id: "tours", label: "Tour Packages", icon: Plane, path: "/admin/tours" },
  { id: "gallery", label: "Gallery", icon: Camera, path: "/admin/gallery" },
  { id: "visa", label: "Visa Requirements", icon: FileText, path: "/admin/visa" },
  { id: "banners", label: "Banners", icon: Image, path: "/admin/banners" },
  { id: "settings", label: "Settings", icon: Settings, path: "/admin/settings" },
];

export function DashboardLayout({ children }: { children: ReactNode }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const matchRoute = useMatchRoute();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate({ to: "/admin" });
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 transition-all duration-300 ${
          collapsed ? "w-[70px]" : "w-[250px]"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-white/10 px-4">
          <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand">
            <Shield className="size-5 text-white" />
          </div>
          {!collapsed && (
            <span className="font-display text-sm font-bold text-white">Admin Panel</span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {nav.map(({ id, label, icon: Icon, path }) => {
            const active = matchRoute({ to: path, fuzzy: id === "dashboard" });
            return (
              <button
                key={id}
                onClick={() => navigate({ to: path })}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all ${
                  active
                    ? "bg-brand text-white shadow-md"
                    : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="size-5 shrink-0" />
                {!collapsed && <span>{label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-white/10 px-3 py-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="size-5 shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className={`flex-1 transition-all duration-300 ${collapsed ? "ml-[70px]" : "ml-[250px]"}`}>
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
          >
            <BarChart3 className="size-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="grid size-8 place-items-center rounded-full bg-brand/15 text-brand">
              <Shield className="size-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">Admin</span>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
