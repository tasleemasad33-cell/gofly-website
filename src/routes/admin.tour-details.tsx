import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/admin/DashboardLayout";
import PackageDetailEditorPage from "@/pages/admin/PackageDetailEditorPage";

export const Route = createFileRoute("/admin/tour-details")({
  component: AdminTourDetails,
});

function AdminTourDetails() {
  return (
    <DashboardLayout>
      <PackageDetailEditorPage />
    </DashboardLayout>
  );
}
