import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/admin/DashboardLayout";
import { BannersPage } from "@/pages/admin/BannersPage";

export const Route = createFileRoute("/admin/banners")({
  component: AdminBanners,
});

function AdminBanners() {
  return (
    <DashboardLayout>
      <BannersPage />
    </DashboardLayout>
  );
}
