import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Plane,
  Search,
  Sparkles,
  StampIcon,
  Users,
  type LucideIcon,
} from "lucide-react";
import { getAllPackages, tourCategories } from "@/lib/gofly-data";

const tabs = [
  { id: "tours", label: "Tours", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Building2 },
  { id: "visa", label: "Visa", icon: StampIcon },
  { id: "experience", label: "Experience", icon: MapPin },
] as const;

type TabId = (typeof tabs)[number]["id"];

type DestOption = { value: string; sub: string };

function buildTourDestOptions(): DestOption[] {
  const seen = new Set<string>();
  const out: DestOption[] = [];
  getAllPackages().forEach((p) => {
    if (!p.location || seen.has(p.location)) return;
    seen.add(p.location);
    out.push({ value: p.location, sub: "Tours Available" });
  });
  return out;
}

const tourDestOptions: DestOption[] = buildTourDestOptions();

const visaCountries = [
  "Azerbaijan",
  "Bahrain",
  "China",
  "Canada",
  "Cambodia",
  "Egypt",
  "Europe",
  "Indonesia",
  "Japan",
  "Malaysia",
  "Maldives",
  "Philippines",
  "Schengen",
  "Singapore",
  "Sri Lanka",
  "Thailand",
  "Turkey",
  "Tajikistan",
  "Umrah",
  "Uzbekistan",
  "United Kingdom",
  "United States",
];

const destOptions: Record<TabId, DestOption[]> = {
  tours: tourDestOptions,
  hotels: tourDestOptions,
  visa: visaCountries.map((c) => ({ value: c, sub: "Visa Country" })),
  experience: [
    { value: "Nepal", sub: "Adventures" },
    { value: "Patagonia", sub: "Adventures" },
    { value: "Hawaii, USA", sub: "Adventures" },
    { value: "Swiss Alps", sub: "Adventures" },
    { value: "Rome", sub: "Adventures" },
    { value: "Maldives", sub: "Adventures" },
    { value: "Indonesia", sub: "Adventures" },
  ],
};

const categoryOptions: Record<TabId, string[]> = {
  tours: [...tourCategories],
  hotels: ["1 Adult", "2 Adults", "2 Adults, 1 Child", "3 Adults", "Family (4+)"],
  visa: ["Tourist Visa", "Business Visa", "Student Visa", "Family Visa", "Umrah Visa"],
  experience: ["Adventure Sports", "Water Sports", "Mountain", "Cultural", "Luxury"],
};

const fieldLabels: Record<TabId, { dest: string; date: string; cat: string }> = {
  tours: { dest: "Destination", date: "Select Date", cat: "Category" },
  hotels: { dest: "City / Destination", date: "Check-In", cat: "Guest & Room" },
  visa: { dest: "Visa Country", date: "Select Date", cat: "Visa Type" },
  experience: { dest: "Destination", date: "Select Date", cat: "Activity" },
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(d: Date) {
  const day = d.getDate();
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  const dayName = DAYS[d.getDay()];
  return { short: `${day} ${month.slice(0, 3)}`, full: `${dayName} ${day} ${month} ${year}` };
}

function Field({
  icon: Icon,
  label,
  value,
  onClick,
  active,
}: {
  icon: LucideIcon;
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
        <span className="block truncate font-display text-[15px] font-medium leading-tight text-title">
          {value}
        </span>
        <span className="block text-xs leading-tight text-body">{label}</span>
      </span>
    </button>
  );
}

export function SearchWidget() {
  const navigate = useNavigate();
  const widgetRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<TabId>("tours");
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [destination, setDestination] = useState(destOptions.tours[0].value);
  const [category, setCategory] = useState(categoryOptions.tours[0]);

  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchTab = (id: TabId) => {
    setTab(id);
    setDropdown(null);
    setDestination(destOptions[id][0].value);
    setCategory(categoryOptions[id][0]);
    setSelectedDate(null);
  };

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);

  const prevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear((y) => y - 1);
    } else setCalMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear((y) => y + 1);
    } else setCalMonth((m) => m + 1);
  };

  const selectDate = (day: number) => {
    const d = new Date(calYear, calMonth, day);
    setSelectedDate(d);
    setDropdown(null);
  };

  const dateDisplay = selectedDate ? formatDate(selectedDate) : null;
  const labels = fieldLabels[tab];

  return (
    <div ref={widgetRef} className="relative z-20 mx-auto max-w-[1120px]">
      {/* tabs */}
      <div className="flex flex-wrap gap-2 rounded-t-2xl bg-background/95 p-3 backdrop-blur sm:gap-3">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => switchTab(id)}
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
              label={labels.dest}
              value={destination}
              active={dropdown === "dest"}
              onClick={() => setDropdown(dropdown === "dest" ? null : "dest")}
            />
            {dropdown === "dest" && (
              <div className="absolute left-0 top-full z-30 mt-2 max-h-72 w-full min-w-[200px] sm:min-w-[300px] overflow-y-auto rounded-xl border border-line bg-background p-2 shadow-[var(--shadow-float)]">
                {destOptions[tab].map((d) => (
                  <button
                    key={d.value}
                    onClick={() => {
                      setDestination(d.value);
                      setDropdown(null);
                    }}
                    className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-soft ${
                      destination === d.value ? "bg-soft" : ""
                    }`}
                  >
                    <span className="font-display text-sm font-medium text-title">{d.value}</span>
                    <span className="shrink-0 text-xs text-brand">{d.sub}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative border-line lg:border-l">
            <Field
              icon={CalendarDays}
              label={labels.date}
              value={dateDisplay ? dateDisplay.short : "Pick a Date"}
              active={dropdown === "date"}
              onClick={() => setDropdown(dropdown === "date" ? null : "date")}
            />
            {dropdown === "date" && (
              <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-[200px] sm:min-w-[280px] rounded-xl border border-line bg-background p-4 shadow-[var(--shadow-float)]">
                {/* Month nav */}
                <div className="mb-3 flex items-center justify-between">
                  <button
                    onClick={prevMonth}
                    className="grid size-7 place-items-center rounded-lg hover:bg-soft"
                  >
                    <ChevronLeft className="size-4 text-title" />
                  </button>
                  <p className="font-display text-sm font-medium text-title">
                    {MONTHS[calMonth]} {calYear}
                  </p>
                  <button
                    onClick={nextMonth}
                    className="grid size-7 place-items-center rounded-lg hover:bg-soft"
                  >
                    <ChevronRight className="size-4 text-title" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {DAYS.map((d, i) => (
                    <span key={i} className="py-1 font-medium text-body">
                      {d}
                    </span>
                  ))}

                  {/* Empty cells before first day */}
                  {Array.from({ length: firstDay }, (_, i) => (
                    <span key={`empty-${i}`} />
                  ))}

                  {/* Day numbers */}
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                    const isSelected =
                      selectedDate &&
                      selectedDate.getDate() === day &&
                      selectedDate.getMonth() === calMonth &&
                      selectedDate.getFullYear() === calYear;
                    const isToday =
                      today.getDate() === day &&
                      today.getMonth() === calMonth &&
                      today.getFullYear() === calYear;

                    return (
                      <button
                        key={day}
                        onClick={() => selectDate(day)}
                        className={`rounded-md py-1.5 text-sm transition-colors hover:bg-brand hover:text-primary-foreground ${
                          isSelected
                            ? "bg-brand text-primary-foreground font-medium"
                            : isToday
                              ? "bg-brand/10 text-brand font-medium"
                              : "text-title"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* Quick select */}
                <div className="mt-3 flex gap-2 border-t border-line pt-3">
                  <button
                    onClick={() => {
                      const d = new Date();
                      selectDate(d.getDate());
                      setCalMonth(d.getMonth());
                      setCalYear(d.getFullYear());
                    }}
                    className="flex-1 rounded-lg bg-soft px-2 py-1.5 text-xs font-medium text-title hover:bg-brand/10"
                  >
                    Today
                  </button>
                  <button
                    onClick={() => {
                      const d = new Date();
                      d.setDate(d.getDate() + 7);
                      setCalMonth(d.getMonth());
                      setCalYear(d.getFullYear());
                      setTimeout(() => selectDate(d.getDate()), 0);
                    }}
                    className="flex-1 rounded-lg bg-soft px-2 py-1.5 text-xs font-medium text-title hover:bg-brand/10"
                  >
                    Next Week
                  </button>
                  <button
                    onClick={() => {
                      const d = new Date();
                      d.setMonth(d.getMonth() + 1);
                      setCalMonth(d.getMonth());
                      setCalYear(d.getFullYear());
                      setTimeout(() => selectDate(d.getDate()), 0);
                    }}
                    className="flex-1 rounded-lg bg-soft px-2 py-1.5 text-xs font-medium text-title hover:bg-brand/10"
                  >
                    Next Month
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative border-line lg:border-l">
            <Field
              icon={
                tab === "hotels"
                  ? Users
                  : tab === "visa"
                    ? StampIcon
                    : tab === "experience"
                      ? Sparkles
                      : Plane
              }
              label={labels.cat}
              value={category}
              active={dropdown === "cat"}
              onClick={() => setDropdown(dropdown === "cat" ? null : "cat")}
            />
            {dropdown === "cat" && (
              <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-[180px] sm:min-w-[240px] rounded-xl border border-line bg-background p-2 shadow-[var(--shadow-float)]">
                {categoryOptions[tab].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCategory(c);
                      setDropdown(null);
                    }}
                    className={`block w-full rounded-lg px-3 py-2 text-left font-display text-sm transition-colors hover:bg-soft hover:text-brand ${
                      category === c ? "text-brand" : "text-title"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="btn-primary w-full justify-center px-8 py-4 lg:w-auto"
            onClick={() =>
              navigate({
                to:
                  tab === "hotels"
                    ? "/hotel-bookings"
                    : tab === "visa"
                      ? "/visa-facilitation"
                      : tab === "experience"
                        ? "/experiences"
                        : "/packages",
              })
            }
          >
            <Search className="size-4" />
            SEARCH
          </button>
        </div>

        <p className="mt-3 border-t border-line pt-3 text-center text-sm text-body">
          Can't find what you're looking for? create your{" "}
          <a href="/contact" className="font-medium text-brand underline underline-offset-4">
            Custom Itinerary
          </a>
        </p>
      </div>
    </div>
  );
}
