import { useState } from "react";
import {
  Calendar,
  Check,
  ChevronDown,
  MessageCircle,
  Minus,
  Plus,
  Send,
  Users,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "923229606256";

type Props = {
  tourName?: string;
  onClose?: () => void;
};

export function WhatsAppBookingForm({ tourName = "", onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [message, setMessage] = useState("");
  const [tour, setTour] = useState(tourName);
  const [submitted, setSubmitted] = useState(false);

  const buildMessage = () => {
    const lines = [
      "Assalam o Alaikum! Travel Nest Booking Inquiry",
      "",
      `Tour Package: ${tour || "Not specified"}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Travel Date: ${travelDate || "Flexible"}`,
      `Travelers: ${adults} Adult${adults > 1 ? "s" : ""}${children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}`,
      message ? `Message: ${message}` : "",
      "",
      "Please share the details and pricing. Thank you!",
    ];
    return lines.filter(Boolean).join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="grid size-16 place-items-center rounded-full bg-[#25D366]/10">
          <Check className="size-8 text-[#25D366]" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-title">Opening WhatsApp...</h3>
        <p className="mt-2 text-sm text-body">
          Your booking inquiry is ready. Please send the message on WhatsApp to confirm.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="mt-6 rounded-full bg-title px-6 py-3 font-display text-sm font-medium text-white hover:bg-brand"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-full bg-[#25D366]/10">
          <MessageCircle className="size-7 text-[#25D366]" />
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-title">Book via WhatsApp</h3>
        <p className="mt-1 text-sm text-body">
          Fill the form and we'll send your inquiry directly on WhatsApp
        </p>
      </div>

      {/* Tour Name */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-body">Tour Package *</label>
        <input
          type="text"
          required
          value={tour}
          onChange={(e) => setTour(e.target.value)}
          placeholder="e.g. Maldives Beach Paradise"
          className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-[#25D366]"
        />
      </div>

      {/* Name & Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-body">Your Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-[#25D366]"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-body">Phone Number *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+92 3XX XXXXXXX"
            className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-[#25D366]"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-body">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-[#25D366]"
        />
      </div>

      {/* Travel Date */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-body">Preferred Travel Date</label>
        <div className="relative">
          <Calendar className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#25D366]" />
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full rounded-xl border border-line bg-background py-3 pl-11 pr-4 text-sm text-title outline-none transition-colors focus:border-[#25D366]"
          />
        </div>
      </div>

      {/* Travelers */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-body">Number of Travelers</label>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              label: "Adults",
              val: adults,
              set: setAdults,
              icon: <Users className="size-4 text-[#25D366]" />,
            },
            {
              label: "Children",
              val: children,
              set: setChildren,
              icon: <Users className="size-4 text-[#25D366]" />,
            },
          ].map((g) => (
            <div
              key={g.label}
              className="flex items-center justify-between rounded-xl border border-line px-4 py-3"
            >
              <div className="flex items-center gap-2">
                {g.icon}
                <span className="text-sm text-title">{g.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => g.set(Math.max(g.label === "Adults" ? 1 : 0, g.val - 1))}
                  className="grid size-7 place-items-center rounded-full border border-line text-body transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <Minus className="size-3" />
                </button>
                <span className="w-6 text-center font-display text-sm font-semibold text-title">
                  {g.val}
                </span>
                <button
                  type="button"
                  onClick={() => g.set(g.val + 1)}
                  className="grid size-7 place-items-center rounded-full border border-line text-body transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <Plus className="size-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-body">
          Special Requests / Message
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Any special requirements..."
          className="w-full resize-none rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-[#25D366]"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#20ba5a]"
      >
        <svg viewBox="0 0 24 24" className="size-5 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 1.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Send Booking Inquiry on WhatsApp
      </button>
    </form>
  );
}
