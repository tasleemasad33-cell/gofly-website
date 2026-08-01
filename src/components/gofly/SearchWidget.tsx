import { useState } from "react";
import { Building2, CalendarDays, MapPin, Plane, Search, StampIcon, Users } from "lucide-react";
import { searchDestinations, tourCategories } from "@/lib/gofly-data";

const tabs = [
  { id: "tours", label: "Tours", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Building2 },
  { id: "visa", label: "Visa", icon: StampIcon },
  { id: "experience", label: "Experience", icon: MapPin },
] as const;

type TabId = (typeof tabs)[number]["id"];

function Field({
  icon: Icon,
  label,
  value,
  onClick,
  active,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors ${
        active ? "bg-soft" : "hover:bg-soft"
      }`}
    >
      <Icon className="size-5 shrink-0 text-brand" />
      <span className="min-w-0">
        <span className="block font-display text-[15px] font-medium leading-tight text-title">
          {value}
        </span>
        <span className="block text-xs leading-tight text-body">{label}</span>
      </span>
    </button>
  );
}

export function SearchWidget() {
  const [tab, setTab] = useState<TabId>("tours");
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [destination, setDestination] = useState(searchDestinations[0]);
  const [category, setCategory] = useState(tourCategories[0]);

  return (
    <div className="relative z-20 mx-auto max-w-[1120px]">
      {/* tabs */}
      <div className="flex flex-wrap gap-2 rounded-t-2xl bg-background/95 p-3 backdrop-blur sm:gap-3">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-display text-sm font-medium transition-all ${
              tab === id
                ? "bg-brand text-primary-foreground shadow-[var(--shadow-card)]"
                : "bg-soft text-title hover:bg-brand/10"
            }`}
          >
            <Icon className="size-4" />
            {label}
          </button>
        ))}
      </div>

      {/* panel */}
      <div className="rounded-b-2xl bg-background p-3 shadow-[var(--shadow-float)] sm:p-4">
        <div className="grid gap-2 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-center">
          <div className="relative">
            <Field
              icon={MapPin}
              label="Destination"
              value={`${destination.name}, ${destination.country}`}
              active={dropdown === "dest"}
              onClick={() => setDropdown(dropdown === "dest" ? null : "dest")}
            />
            {dropdown === "dest" && (
              <div className="absolute left-0 top-full z-30 mt-2 max-h-72 w-full min-w-[300px] overflow-y-auto rounded-xl border border-line bg-background p-2 shadow-[var(--shadow-float)]">
                {searchDestinations.map((d) => (
                  <button
                    key={d.name}
                    onClick={() => {
                      setDestination(d);
                      setDropdown(null);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-soft"
                  >
                    <img src={d.flag} alt="" className="size-6 rounded-full object-cover" />
                    <span className="flex-1">
                      <span className="block font-display text-sm font-medium text-title">
                        {d.name}
                      </span>
                      <span className="block text-xs text-body">{d.country}</span>
                    </span>
                    <span className="text-xs text-brand">{d.tours} Tour</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative border-line lg:border-l">
            <Field
              icon={CalendarDays}
              label={tab === "hotels" ? "Check-In" : "Thursday 2026"}
              value="30 July"
              active={dropdown === "date"}
              onClick={() => setDropdown(dropdown === "date" ? null : "date")}
            />
            {dropdown === "date" && (
              <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-[260px] rounded-xl border border-line bg-background p-4 shadow-[var(--shadow-float)]">
                <p className="mb-3 font-display text-sm font-medium text-title">July 2026</p>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <span key={i} className="py-1 text-body">
                      {d}
                    </span>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDropdown(null)}
                      className={`rounded-md py-1 transition-colors hover:bg-brand hover:text-primary-foreground ${
                        d === 30 ? "bg-brand text-primary-foreground" : "text-title"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative border-line lg:border-l">
            <Field
              icon={tab === "hotels" ? Users : Plane}
              label={tab === "hotels" ? "Guest & Room" : "Category"}
              value={tab === "hotels" ? "1 Adults, 0 Child" : category}
              active={dropdown === "cat"}
              onClick={() => setDropdown(dropdown === "cat" ? null : "cat")}
            />
            {dropdown === "cat" && (
              <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-[240px] rounded-xl border border-line bg-background p-2 shadow-[var(--shadow-float)]">
                {tourCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCategory(c);
                      setDropdown(null);
                    }}
                    className="block w-full rounded-lg px-3 py-2 text-left font-display text-sm text-title transition-colors hover:bg-soft hover:text-brand"
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="btn-primary w-full justify-center px-8 py-4 lg:w-auto">
            <Search className="size-4" />
            SEARCH
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-white">
        Can't find what you're looking for? create your{" "}
        <a href="#" className="font-medium text-brand2 underline underline-offset-4">
          Custom Itinerary
        </a>
      </p>
    </div>
  );
}
