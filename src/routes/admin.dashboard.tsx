import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/admin/DashboardLayout";
import { DashboardPage } from "@/pages/admin/DashboardPage";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
}
