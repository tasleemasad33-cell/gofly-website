import { Camera, FileText, Image, Plane, TrendingUp, Users } from "lucide-react";
import { useAdminState } from "@/contexts/AdminState";

export function DashboardPage() {
  const { packages, gallery, visa, loading } = useAdminState();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="size-8 animate-spin rounded-full border-4 border-brand border-t-transparent" />
      </div>
    );
  }

  const stats = [
    { label: "Tour Packages", value: packages.length, icon: Plane, color: "bg-blue-500/15 text-blue-500" },
    { label: "Gallery Images", value: gallery.length, icon: Camera, color: "bg-emerald-500/15 text-emerald-500" },
    { label: "Visa Countries", value: visa.length, icon: FileText, color: "bg-purple-500/15 text-purple-500" },
    { label: "Total Banners", value: 2, icon: Image, color: "bg-amber-500/15 text-amber-500" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-slate-800">Dashboard Overview</h1>
      <p className="mt-1 text-sm text-slate-500">Welcome back! Here's what's happening with your site.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{label}</p>
                <p className="mt-2 font-display text-3xl font-bold text-slate-800">{value}</p>
              </div>
              <div className={`grid size-12 place-items-center rounded-xl ${color}`}>
                <Icon className="size-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-slate-800">Quick Actions</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Add Tour Package", path: "/admin/tours", icon: Plane },
            { label: "Upload Gallery Image", path: "/admin/gallery", icon: Camera },
            { label: "Edit Visa Requirements", path: "/admin/visa", icon: FileText },
            { label: "Manage Banners", path: "/admin/banners", icon: Image },
          ].map(({ label, path, icon: Icon }) => (
            <a
              key={label}
              href={path}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-left transition-all hover:border-brand hover:bg-brand/5 hover:shadow-sm"
            >
              <Icon className="size-5 text-brand" />
              <span className="text-sm font-medium text-slate-700">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
