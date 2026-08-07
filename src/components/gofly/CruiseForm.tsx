import { useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP = "923229606256";

const inputClass =
  "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-brand";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
        {label}
      </span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function CruiseForm() {
  const [preferredDestination, setPreferredDestination] = useState("Mediterranean");
  const [cruiseDuration, setCruiseDuration] = useState("6–9 Days");
  const [travelDates, setTravelDates] = useState("");
  const [cabinType, setCabinType] = useState("Balcony");
  const [diningPreference, setDiningPreference] = useState("Standard Dining");
  const [specialOccasion, setSpecialOccasion] = useState("None");
  const [activitiesInterest, setActivitiesInterest] = useState("Relaxation");
  const [needFlights, setNeedFlights] = useState("Yes");
  const [needVisa, setNeedVisa] = useState("Yes");
  const [hotelStay, setHotelStay] = useState("No");
  const [transfers, setTransfers] = useState("No");
  const [budgetRange, setBudgetRange] = useState("PKR 400,000 – 700,000");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [bestTime, setBestTime] = useState("Evening (4 PM – 8 PM)");
  const [specialRequests, setSpecialRequests] = useState("");

  const message = [
    "Hi Travel Nest, I'd like to book a cruise.",
    "",
    `Preferred Destination: ${preferredDestination}`,
    `Cruise Duration: ${cruiseDuration}`,
    `Preferred Travel Dates / Month: ${travelDates || "Not specified"}`,
    `Cabin Type: ${cabinType}`,
    `Dining Preference: ${diningPreference}`,
    `Special Occasion: ${specialOccasion}`,
    `Activities Interest: ${activitiesInterest}`,
    `Need Flights: ${needFlights}`,
    `Need Visa Assistance: ${needVisa}`,
    `Pre/Post Hotel Stay Required: ${hotelStay}`,
    `Transfers Required: ${transfers}`,
    `Budget Range (per person): ${budgetRange}`,
    `Preferred Contact Method: ${contactMethod}`,
    `Best Time to Contact: ${bestTime}`,
    `Special Requests / Notes: ${specialRequests || "None"}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <div className="mt-14 rounded-2xl border border-line bg-background p-8 sm:p-12">
      <p className="text-center font-display text-sm font-semibold uppercase tracking-wider text-brand">
        Let's Set Sail on Your Dream Cruise
      </p>
      <h2 className="mt-2 text-center font-display text-2xl font-semibold text-title">
        Tell Us Where the Ocean Should Take You
      </h2>

      <div className="mx-auto mt-8 grid max-w-4xl gap-x-4 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <h3 className="font-display text-base font-semibold text-title">Cruise Preferences</h3>
        </div>
        <Field label="Preferred Destination">
          <Select
            value={preferredDestination}
            onChange={setPreferredDestination}
            options={["Mediterranean", "Asia", "Middle East", "Europe", "Caribbean", "Americas", "Other"]}
          />
        </Field>
        <Field label="Cruise Duration">
          <Select
            value={cruiseDuration}
            onChange={setCruiseDuration}
            options={["3–5 Days", "6–9 Days", "10+ Days"]}
          />
        </Field>
        <Field label="Preferred Travel Dates / Month">
          <input
            type="text"
            value={travelDates}
            onChange={(e) => setTravelDates(e.target.value)}
            placeholder="e.g. December 2026"
            className={inputClass}
          />
        </Field>

        <div className="sm:col-span-2">
          <h3 className="font-display text-base font-semibold text-title">Cabin Preferences</h3>
        </div>
        <Field label="Cabin Type">
          <Select
            value={cabinType}
            onChange={setCabinType}
            options={["Interior", "Ocean View", "Balcony", "Suite"]}
          />
        </Field>
        <Field label="Dining Preference">
          <Select
            value={diningPreference}
            onChange={setDiningPreference}
            options={["Standard Dining", "Premium Dining"]}
          />
        </Field>

        <Field label="Special Occasion?">
          <Select
            value={specialOccasion}
            onChange={setSpecialOccasion}
            options={["None", "Honeymoon", "Anniversary", "Birthday", "Other"]}
          />
        </Field>
        <Field label="Activities Interest">
          <Select
            value={activitiesInterest}
            onChange={setActivitiesInterest}
            options={["Relaxation", "Adventure", "Family", "Luxury"]}
          />
        </Field>
        <Field label="Need Flights?">
          <Select value={needFlights} onChange={setNeedFlights} options={["Yes", "No"]} />
        </Field>
        <Field label="Need Visa Assistance?">
          <Select value={needVisa} onChange={setNeedVisa} options={["Yes", "No"]} />
        </Field>
        <Field label="Pre/Post Hotel Stay Required?">
          <Select value={hotelStay} onChange={setHotelStay} options={["Yes", "No"]} />
        </Field>
        <Field label="Transfers Required?">
          <Select value={transfers} onChange={setTransfers} options={["Yes", "No"]} />
        </Field>

        <div className="sm:col-span-2">
          <h3 className="font-display text-base font-semibold text-title">
            Additional Information
          </h3>
        </div>
        <Field label="Budget Range (per person)">
          <Select
            value={budgetRange}
            onChange={setBudgetRange}
            options={[
              "Below PKR 200,000",
              "PKR 200,000 – 400,000",
              "PKR 400,000 – 700,000",
              "PKR 700,000 – 1,000,000",
              "Above PKR 1,000,000",
            ]}
          />
        </Field>
        <Field label="Preferred Contact Method">
          <Select
            value={contactMethod}
            onChange={setContactMethod}
            options={["Call", "WhatsApp", "Email"]}
          />
        </Field>
        <Field label="Best Time to Contact">
          <Select
            value={bestTime}
            onChange={setBestTime}
            options={["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 8 PM)"]}
          />
        </Field>
        <Field label="Special Requests / Notes">
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            rows={3}
            placeholder="Anything else we should know?"
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      <div className="mt-8 text-center">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Send Message <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
