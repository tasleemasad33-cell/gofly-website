import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/pages/admin/DashboardLayout";
import { GalleryPage } from "@/pages/admin/GalleryPage";

export const Route = createFileRoute("/admin/gallery")({
  component: AdminGallery,
});

function AdminGallery() {
  return (
    <DashboardLayout>
      <GalleryPage />
    </DashboardLayout>
  );
}
