import { useEffect, useState } from "react";
import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

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
  { label: "Services", href: "/experiences" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Travel Inspiration", href: "/experiences" },
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
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href={
                  i === 0
                    ? "https://www.facebook.com/"
                    : i === 1
                      ? "https://www.twitter.com/"
                      : "https://www.instagram.com/"
                }
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-gofly flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Travel Nest. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="/contact" className="transition-colors hover:text-brand2">
              Terms & Conditions
            </a>
            <a href="/contact" className="transition-colors hover:text-brand2">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full bg-brand text-primary-foreground shadow-[var(--shadow-float)] transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="size-5" />
      </button>
    </footer>
  );
}
