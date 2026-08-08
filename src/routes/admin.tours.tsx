import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/admin/DashboardLayout";
import { ToursPage } from "@/pages/admin/ToursPage";

export const Route = createFileRoute("/admin/tours")({
  component: AdminTours,
});

function AdminTours() {
  return (
    <DashboardLayout>
      <ToursPage />
    </DashboardLayout>
  );
}
