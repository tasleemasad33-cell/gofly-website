import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/admin/DashboardLayout";
import { VisaPage } from "@/pages/admin/VisaPage";

export const Route = createFileRoute("/admin/visa")({
  component: AdminVisa,
});

function AdminVisa() {
  return (
    <DashboardLayout>
      <VisaPage />
    </DashboardLayout>
  );
}
