import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const supportChannels = [
  { icon: Phone, label: "Phone", value: "+92 322 9606256" },
  { icon: Mail, label: "Email", value: "Info@travelnest.com" },
  { icon: MapPin, label: "Location", value: "Gulberg Greens, Islamabad" },
];

const helpLinks = [
  "Frequently Asked Questions",
  "Terms & Conditions",
  "Privacy Policy",
  "Refund Policy",
  "Travel Guide",
];

const moreLinks = ["About Us", "Contact Us"];

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Studio / Office card */}
      <section className="py-16 sm:py-20">
        <div className="container-gofly">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-title sm:text-[40px]">
              Contact Us
            </h2>
            <p className="mt-3 text-[15px] text-body">
              Visit our office or reach out to our team — we're here to help.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-3xl border border-line bg-card shadow-[var(--shadow-card)]">
            <div className="bg-brand px-6 py-5">
              <p className="font-display text-lg font-semibold text-white">
                Travel Nest — Islamabad
              </p>
              <p className="mt-0.5 text-sm text-white/80">Office Timing: Mon – Sat, 9am – 6pm</p>
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-soft text-brand">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-medium text-title">Office Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    Office no 311, 3rd floor, Gulberg Empire Building, Executive Block, Civic
                    Centre, Gulberg Greens, Islamabad
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-soft text-brand">
                  <Phone className="size-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-medium text-title">Phone</p>
                  <a
                    href="tel:+923229606256"
                    className="mt-1 block text-sm text-body hover:text-brand"
                  >
                    +92 322 9606256
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-soft text-brand">
                  <Mail className="size-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-medium text-title">Email</p>
                  <a
                    href="mailto:Info@travelnest.com"
                    className="mt-1 block text-sm text-body hover:text-brand"
                  >
                    Info@travelnest.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-soft text-brand">
                  <Clock className="size-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-medium text-title">Appointment</p>
                  <p className="mt-1 text-sm text-body">
                    Visits are by appointment — call or email us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Write To Us */}
      <section className="bg-soft py-16 sm:py-20">
        <div className="container-gofly grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-title sm:text-[36px]">
              Write To Us
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-body">
              Have questions about tours, bookings, visas or our packages? Send us a message and our
              team will get back to you as soon as possible.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {supportChannels.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-line bg-background p-5 transition-shadow duration-500 hover:shadow-[var(--shadow-float)]"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-3 font-display text-sm font-medium text-title">{label}</p>
                  <p className="mt-1 text-sm text-body">{value}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/923229606256?text=Hi!%20I'm%20interested%20in%20Travel%20Nest%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full bg-[oklch(0.55_0.17_150)] px-7 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-dark"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-line bg-background p-6 sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="grid size-16 place-items-center rounded-full bg-brand/10 text-brand">
                  <Send className="size-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-title">
                  Message Sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-body">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
                <button type="button" onClick={() => setSent(false)} className="btn-outline mt-6">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block font-display text-sm font-medium text-title">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm text-title outline-none transition-colors focus:border-brand"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-display text-sm font-medium text-title">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm text-title outline-none transition-colors focus:border-brand"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-display text-sm font-medium text-title">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm text-title outline-none transition-colors focus:border-brand"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-display text-sm font-medium text-title">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Message"
                    required
                    className="w-full resize-none rounded-xl border border-line px-4 py-3 text-sm text-title outline-none transition-colors focus:border-brand"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-dark"
                >
                  <Send className="size-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Help links */}
      <section className="py-16">
        <div className="container-gofly grid gap-10 sm:grid-cols-3">
          <div>
            <h5 className="font-display text-base font-semibold uppercase tracking-wider text-title">
              Help
            </h5>
            <ul className="mt-4 space-y-2 text-sm">
              {helpLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-body transition-colors hover:text-brand">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display text-base font-semibold uppercase tracking-wider text-title">
              More From Travel Nest
            </h5>
            <ul className="mt-4 space-y-2 text-sm">
              {moreLinks.map((l) => (
                <li key={l}>
                  <a
                    href={l === "About Us" ? "/about" : "/contact"}
                    className="text-body transition-colors hover:text-brand"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display text-base font-semibold uppercase tracking-wider text-title">
              Get The Latest News
            </h5>
            <p className="mt-4 text-sm text-body">
              Subscribe to receive the latest tour packages and travel offers.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-full border border-line px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand px-5 py-2.5 font-display text-sm font-medium text-white transition-colors hover:bg-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
