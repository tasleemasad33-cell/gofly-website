import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/admin/DashboardLayout";
import SiteContentPage from "@/pages/admin/SiteContentPage";

export const Route = createFileRoute("/admin/content")({
  component: AdminContent,
});

function AdminContent() {
  return (
    <DashboardLayout>
      <SiteContentPage />
    </DashboardLayout>
  );
}
