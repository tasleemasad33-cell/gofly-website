import { useState, type FormEvent } from "react";
import { CircleHelp, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const supportChannels = [
  { icon: Phone, label: "Phone", value: "92 322 9606256" },
  { icon: Mail, label: "Email", value: "Info@travelnest.com" },
  { icon: MapPin, label: "Location", value: "Gulberg Greens, Islamabad" },
];

const helpLinks = [
  { label: "Frequently Asked Questions", href: "/contact" },
  { label: "Terms & Conditions", href: "/contact" },
  { label: "Privacy Policy", href: "/contact" },
  { label: "Refund Policy", href: "/contact" },
  { label: "Travel Guide", href: "/experiences" },
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
      {/* Header */}
      <section className="pt-16 sm:pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold tracking-wide text-title sm:text-4xl">
            Contact Us
          </h1>
          <div className="mx-auto mt-3 h-0.5 w-14 bg-brand2" />
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-body">
            Visit our studio or reach out to our team — we're here to help.
          </p>
        </div>
      </section>

      {/* Studio card */}
      <section className="pb-12 pt-10">
        <div className="mx-auto max-w-lg">
          <div className="space-y-4 border border-line bg-soft2 p-6 sm:p-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand2">
              Travel Studio
            </span>
            <h3 className="font-display text-base font-semibold text-title">
              Travel Nest — Islamabad
            </h3>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand2">
              Appointment Only
            </p>
            <div className="space-y-3 text-sm text-body">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-title" />
                <span>
                  Office no 311, 3rd floor, Gulberg Empire Building, Executive Block, Civic Centre,
                  Gulberg Greens, Islamabad
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-title" />
                <a href="tel:+923229606256" className="hover:text-brand2">
                  92 322 9606256
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-title" />
                <a href="mailto:Info@travelnest.com" className="hover:text-brand2">
                  Info@travelnest.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Write To Us + Support Channels */}
      <section className="border-t border-line pb-16 pt-12">
        <div className="container-gofly grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: Write To Us */}
          <div className="space-y-6 lg:col-span-7">
            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-title">
                <Mail className="size-5 text-brand2" /> Write To Us
              </h2>
              <p className="mt-1 text-sm text-body">
                Have questions about tours, bookings, visas or our packages? Send us a message and
                our team will get back to you as soon as possible.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
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
                <form onSubmit={onSubmit} className="space-y-4 text-sm text-body">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-title">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full border border-line bg-background px-3 py-2.5 outline-none transition-colors focus:border-title"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-title">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full border border-line bg-background px-3 py-2.5 outline-none transition-colors focus:border-title"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-title">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      className="w-full border border-line bg-background px-3 py-2.5 outline-none transition-colors focus:border-title"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-title">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Message"
                      required
                      className="w-full resize-none border border-line bg-background px-3 py-2.5 outline-none transition-colors focus:border-title"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-title px-8 py-3 font-display text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand cursor-pointer"
                  >
                    <Send className="size-3.5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Support Channels */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-title">
                <CircleHelp className="size-5 text-brand2" /> Support Channels
              </h2>
              <p className="mt-1 text-sm text-body">
                Reach out directly — we're available to help.
              </p>
            </div>

            <div className="space-y-4 text-sm text-body">
              {supportChannels.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="size-4 shrink-0 text-title" />
                  <span>
                    <strong className="font-semibold text-title">{label}:</strong>{" "}
                    {label === "Phone" ? (
                      <a href="tel:+923229606256" className="hover:text-brand2">
                        {value}
                      </a>
                    ) : label === "Email" ? (
                      <a href="mailto:Info@travelnest.com" className="hover:text-brand2">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/923229606256?text=Hi!%20I'm%20interested%20in%20Travel%20Nest%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg className="size-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>

            <div className="h-64 w-full overflow-hidden border border-line">
              <iframe
                title="Travel Nest - Islamabad"
                src="https://maps.google.com/maps?q=Gulberg%20Greens%2C%20Islamabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help links */}
      <section className="border-t border-line py-16">
        <div className="container-gofly grid gap-10 sm:grid-cols-3">
          <div>
            <h5 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-title">
              Help
            </h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-body transition-colors hover:text-brand2">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-title">
              More From Travel Nest
            </h5>
            <ul className="mt-4 space-y-2.5 text-sm">
              {moreLinks.map((l) => (
                <li key={l}>
                  <a
                    href={l === "About Us" ? "/about" : "/contact"}
                    className="text-body transition-colors hover:text-brand2"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-title">
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
              className="mt-4 flex items-center gap-2"
            >
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full flex-1 rounded-full border border-line bg-background px-4 py-2.5 text-sm outline-none transition-all placeholder:text-body/70 focus:border-title"
              />
              <button
                type="submit"
                className="shrink-0 cursor-pointer rounded-full bg-title px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
