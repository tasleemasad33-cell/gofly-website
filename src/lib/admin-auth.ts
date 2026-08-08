import type { AdminCredentials } from "./admin-types";

const CREDS_KEY = "tn-admin-creds";

const DEFAULT_CREDS: AdminCredentials = {
  email: "admin@travelnest.com",
  password: "TravelNest@2026",
};

let loggedIn = false;

export function getCredentials(): AdminCredentials {
  try {
    const raw = localStorage.getItem(CREDS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.email && parsed.password) {
        return parsed;
      }
    }
  } catch {
    /* ignore */
  }
  localStorage.setItem(CREDS_KEY, JSON.stringify(DEFAULT_CREDS));
  return { ...DEFAULT_CREDS };
}

export function saveCredentials(creds: AdminCredentials): void {
  const toSave = {
    email: creds.email.trim(),
    password: creds.password,
  };
  localStorage.setItem(CREDS_KEY, JSON.stringify(toSave));
}

export function isAuthenticated(): boolean {
  return loggedIn;
}

export function login(email: string, password: string): boolean {
  const creds = getCredentials();
  if (email === creds.email && password === creds.password) {
    loggedIn = true;
    return true;
  }
  return false;
}

export function logout(): void {
  loggedIn = false;
}
