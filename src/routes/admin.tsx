import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { AuthProvider } from "@/contexts/AdminAuth";
import { AdminStateProvider } from "@/contexts/AdminState";
import { isAuthenticated } from "@/lib/admin-auth";

export const Route = createFileRoute("/admin")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/admin") {
      throw redirect({ to: "/admin/dashboard" });
    }
    if (!isAuthenticated() && location.pathname !== "/admin/login") {
      throw redirect({ to: "/admin/login" });
    }
  },
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <AuthProvider>
      <AdminStateProvider>
        <Outlet />
      </AdminStateProvider>
    </AuthProvider>
  );
}
