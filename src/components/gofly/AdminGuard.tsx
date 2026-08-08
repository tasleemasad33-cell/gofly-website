import { useEffect } from "react";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { isAuthenticated } from "@/lib/admin-auth";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const router = useRouter();

  const isLoginPage = router.state.location.pathname === "/admin/login";

  useEffect(() => {
    if (!isLoginPage && !isAuthenticated()) {
      navigate({ to: "/admin/login" });
    }
  }, [navigate, isLoginPage]);

  if (!isLoginPage && !isAuthenticated()) return null;

  return <>{children}</>;
}
