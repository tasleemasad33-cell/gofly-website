import { createContext, useContext, useState, type ReactNode } from "react";
import * as auth from "@/lib/admin-auth";

interface AuthCtx {
  loggedIn: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const Ctx = createContext<AuthCtx>({
  loggedIn: false,
  login: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (email: string, password: string) => {
    const ok = auth.login(email, password);
    if (ok) setLoggedIn(true);
    return ok;
  };

  const logout = () => {
    auth.logout();
    setLoggedIn(false);
  };

  return (
    <Ctx.Provider value={{ loggedIn, login, logout }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAuth() {
  return useContext(Ctx);
}
