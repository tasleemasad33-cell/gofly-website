const SESSION_KEY = "tn-admin-session";

export function isAuthenticated(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export async function login(email: string, password: string): Promise<boolean> {
  try {
    const { authLogin } = await import("@/lib/server-fns");
    const res = await authLogin({ data: { email, password } });
    if (res.success) {
      sessionStorage.setItem(SESSION_KEY, "1");
    }
    return res.success;
  } catch {
    return false;
  }
}

export function logout(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}
