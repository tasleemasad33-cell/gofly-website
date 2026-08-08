import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/admin/DashboardLayout";
import { SettingsPage } from "@/pages/admin/SettingsPage";

export const Route = createFileRoute("/admin/settings")({
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <DashboardLayout>
      <SettingsPage />
    </DashboardLayout>
  );
}
