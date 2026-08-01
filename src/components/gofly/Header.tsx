import { useEffect, useState } from "react";
import { Menu, Phone, Search, User, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Travel Package", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "#" },
  { label: "Visa", href: "#" },
  { label: "Contact Us", href: "#" },
];

export function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

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
            className="flex h-[52px] w-[140px] shrink-0 items-center overflow-hidden sm:h-[68px] sm:w-[195px]"
          >
            <img
              src="/header-logo.png"
              alt="Travel Nest"
              className="h-full w-full object-cover object-center"
            />
          </a>

          {/* Nav */}
          <nav className="hidden items-center gap-5 xl:flex">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-display text-[14px] font-medium transition-colors ${
                  i === 0 ? "text-brand" : "text-title hover:text-brand"
                }`}
              >
                {item.label}
              </a>
            ))}
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
                <p className="font-display text-sm font-bold text-title">+91 345 533 865</p>
              </div>
            </div>

            {/* Search */}
            <button
              aria-label="Search"
              className="grid size-10 place-items-center rounded-full border border-line text-title transition-colors hover:bg-soft"
            >
              <Search className="size-5" />
            </button>

            {/* Login */}
            <a
              href="#"
              className="hidden items-center gap-2 rounded-full bg-title px-4 py-2 font-display text-sm font-medium text-white transition-colors hover:bg-brand sm:inline-flex"
            >
              <User className="size-4" />
              Login
            </a>

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
            <img src="/header-logo.png" alt="Travel Nest" className="h-12 w-auto" />
            <button aria-label="Close" onClick={() => setOpen(false)}>
              <X className="size-5 text-title" />
            </button>
          </div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block border-b border-line py-3 font-display text-[15px] font-medium text-title"
            >
              {item.label}
            </a>
          ))}
          <a href="#" className="btn-primary mt-6 w-full justify-center">
            Login
          </a>
        </aside>
      </div>
    </header>
  );
}
