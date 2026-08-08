import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Tours",
    href: "/packages",
    children: [
      { label: "Group Tours", href: "/group-tours" },
      { label: "Honeymoon Trips", href: "/honeymoon-trips" },
      { label: "Corporate Tours", href: "/corporate-tours" },
      { label: "Customized Tours", href: "/customized-tours" },
      { label: "Educational Tours", href: "/educational-tours" },
    ],
  },
  {
    label: "Services",
    href: "/experiences",
    noNavigate: true,
    children: [
      { label: "Visa Facilitation", href: "/visa-facilitation" },
      { label: "Air Tickets", href: "/air-tickets" },
      { label: "Hotel Bookings", href: "/hotel-bookings" },
      { label: "Transportation", href: "/transportation" },
      { label: "Cruises", href: "/cruises" },
      { label: "Destination Wedding", href: "/destination-wedding" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* main nav */}
      <div
        className={
          sticky
            ? "fixed inset-x-0 top-0 z-50 animate-[gofly-rise_0.4s_ease] bg-white py-1.5 shadow-[var(--shadow-float)]"
            : "bg-white/95 backdrop-blur py-1.5"
        }
      >
        <div className="container-gofly flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo */}
          <a
            href="/"
            aria-label="Travel Nest home"
            className="flex h-[52px] w-[160px] shrink-0 items-center sm:h-[68px] sm:w-[210px]"
          >
            <img
              src="/logo.png"
              alt="Travel Nest"
              className="h-full w-full object-contain object-left"
            />
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-5 xl:flex">
            {navItems.map((item, i) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  {item.noNavigate ? (
                    <span className="inline-flex cursor-default items-center gap-1 font-display text-[14px] font-medium text-title">
                      {item.label}
                      <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1 font-display text-[14px] font-medium text-title hover:text-brand"
                    >
                      {item.label}
                      <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </a>
                  )}
                  {/* Transparent bridge so hover persists when moving mouse to dropdown */}
                  <div className="absolute left-0 top-full h-3 w-full" />
                  {/* Dropdown with scaleY reveal from top */}
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                    <div
                      className="min-w-[210px] rounded-xl border border-line bg-background p-2 shadow-[var(--shadow-float)] opacity-0 scale-y-0 origin-top transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-y-100"
                    >
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className="block rounded-lg px-3 py-2 font-display text-sm text-title transition-colors hover:bg-soft hover:text-brand"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-display text-[14px] font-medium transition-colors ${
                    i === 0 ? "text-brand" : "text-title hover:text-brand"
                  }`}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Phone */}
            <div className="hidden items-center gap-3 xl:flex">
              <span className="grid size-10 place-items-center rounded-full border border-line">
                <Phone className="size-5 text-title" />
              </span>
              <div className="leading-tight">
                <span className="text-xs text-body">Need Help?</span>
                <p className="font-display text-sm font-bold text-title">92 322 9606256</p>
              </div>
            </div>

            {/* Mobile menu */}
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className="grid size-9 place-items-center rounded-full border border-line text-title lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-dark/60 transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <aside
          className={`absolute right-0 top-0 h-full w-[300px] max-w-[85vw] overflow-y-auto bg-background p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <img src="/logo.png" alt="Travel Nest" className="h-12 w-auto" />
            <button aria-label="Close" onClick={() => setOpen(false)}>
              <X className="size-5 text-title" />
            </button>
          </div>
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-line py-3">
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between font-display text-[15px] font-medium text-title"
                  >
                    {item.label}
                    <ChevronDown className={`size-4 text-body transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === item.label && (
                    <div className="mt-2 space-y-1">
                      {item.children.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          className="block rounded-lg px-3 py-2 text-sm text-body transition-colors hover:bg-soft hover:text-brand"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="block font-display text-[15px] font-medium text-title"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </aside>
      </div>
    </header>
  );
}
