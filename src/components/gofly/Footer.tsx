import { useEffect, useState } from "react";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Location Nearby",
    value:
      "Office no 311, 3rd floor, Gulberg Empire Building, Executive Block, Civic Centre, Gulberg Greens, Islamabad",
  },
  { icon: Phone, label: "Phone", value: "92 322 9606256" },
  { icon: Mail, label: "Mail Us", value: "Info@travelnest.com" },
];

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/packages" },
  { label: "Travel Inspirations", href: "/experiences" },
  { label: "FAQ", href: "/about#faq" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-dark text-[oklch(0.72_0_0)]">
      <div className="container-gofly grid gap-12 py-16 lg:grid-cols-3">
        {/* Contact */}
        <div>
          <h5 className="font-display text-base font-semibold uppercase tracking-wider text-white">
            Contact
          </h5>
          <div className="mt-6 space-y-6">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/15 text-brand2">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-medium text-white">{label}</p>
                  <p className="mt-1 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div className="justify-self-center lg:justify-self-start">
          <h5 className="font-display text-base font-semibold uppercase tracking-wider text-white">
            Pages
          </h5>
          <ul className="mt-6 space-y-2.5 text-sm">
            {pageLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-brand2">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div>
          <div className="inline-flex rounded-xl bg-white p-3">
            <img src="/logo.png" alt="Travel Nest" className="h-14 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Travel Nest is a full service travel agency creating exceptional journeys — flights,
            stays, visas and curated tours around the world.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-[#1877F2]">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-[#1DA1F2]">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" className="size-4">
                <defs>
                  <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#feda75" />
                    <stop offset="25%" stopColor="#fa7e1e" />
                    <stop offset="50%" stopColor="#d62976" />
                    <stop offset="75%" stopColor="#962fbf" />
                    <stop offset="100%" stopColor="#4f5bd5" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#ig-gradient)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-gofly flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Travel Nest. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="/terms" className="transition-colors hover:text-brand2">
              Terms & Conditions
            </a>
            <a href="/privacy" className="transition-colors hover:text-brand2">
              Privacy Policy & Refund Policy
            </a>
            <a href="/admin" className="text-xs text-white/30 transition-colors hover:text-white/60">
              Admin
            </a>
          </div>
        </div>
      </div>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 z-50 grid size-11 place-items-center rounded-full bg-brand text-primary-foreground shadow-[var(--shadow-float)] transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>
    </footer>
  );
}
