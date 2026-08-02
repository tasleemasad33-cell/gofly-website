import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Car,
  Check,
  Compass,
  Heart,
  Hotel,
  MapPin,
  Ship,
  Sparkles,
  Users,
} from "lucide-react";
import { IMG } from "@/lib/gofly-data";
import { PageHero } from "./PageHero";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

/* ────────────── Visa Facilitation ────────────── */

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

const visaRequirements: Record<string, string[]> = {
  Azerbaijan: ["Scanned copy of passport bio page."],
  Bahrain: [
    "Scanned copy of CNIC (Front & Back)",
    "Scanned copy of Passport Bio Page",
    "Passport size white background picture",
    "Family Registration Certificate (FRC)",
    "3-6 Months Bank Statement (Minimum Balance)",
  ],
  China: [
    "Passport copy of 1st & 2nd page (Must be valid for 6 months)",
    "Copy of CNIC (Front & Back)",
    "Return/Onward ticket reservation",
    "Reference letter from your employer/office addressed to Consular/Visa Officer mentioning your job, duration of service and detail of visit purpose. In case of businessmen, please attach your business documents.",
    "3 recent passport size photographs with white background",
    "Personal/Company bank statement of the last 6 months with bank letter",
    "Invitation letter from China",
    "Hotel reservation",
    "Sponsor Letter",
    "Chamber of commerce certificate copy",
    "Copy of NTN & Chamber membership certificate (if any)",
    "Police Character Certificate (Must be attested from Foreign Affairs)",
  ],
  Canada: [
    "Passport (All Used Pages)",
    "Family Registration Certificate (FRC)",
    "Marriage Registration Certificate (MRC) (if applicable)",
    "Business Registration Certificate (for business owners)",
    "Business Letterhead (for business owners)",
    "National Tax Number (NTN) Certificate",
    "Tax Returns (Last 2 Years)",
    "Bank Statement (Last 6 Months) & Account Maintenance Certificate",
    "Property Documents (English translated, if available)",
    "Recent Passport-Size Photograph",
    "No Objection Certificate (NOC) from Employer",
    "Employment Letter",
    "Last 3 Months' Salary Slip",
  ],
  Cambodia: [
    "Visa application form & travel itinerary",
    "Passport valid for at least 6 months",
    "Recent passport-size photographs with white background",
  ],
  Egypt: [
    "Passport valid until at least 8 months+ with photocopies of current and previous passports",
    "3 photographs in white background 2×2 size",
    "Travel Itinerary (if any)",
    "Last 6 months Personal Bank statement along with account maintenance certificate (must be attested from the relevant bank)",
    "Invitation Letter from Egypt (if any)",
    "Confirmed Hotel Reservation and Travel Plan Fax Intimation to the Embassy (if any)",
    "Request letter on company letterhead / if Employee then provide job reference letter from employer + 3 months salary slips",
    "If Own a Business then Provide Supporting Documents if any (NTN Certificate + 2 years Income Returns if any)",
    "Polio Vaccination card",
    "Dengue Test Report",
    "A Copy of Original ID Card and FRC (Family Registration Certificate)",
  ],
  Europe: [
    "Passport (All Used Pages)",
    "Family Registration Certificate (FRC)",
    "Marriage Registration Certificate (MRC) (if applicable)",
    "Business Registration Certificate (for business owners)",
    "Business Letterhead (for business owners)",
    "National Tax Number (NTN) Certificate",
    "Tax Returns (Last 2 Years)",
    "Bank Statement (Last 6 Months) & Account Maintenance Certificate",
    "Property Documents (English translated, if available)",
    "Recent Passport-Size Photograph",
    "No Objection Certificate (NOC) from Employer",
    "Employment Letter",
    "Last 3 Months' Salary Slip",
  ],
  Indonesia: [
    "Scanned copy of Passport 1st & 2nd page (Must be valid for 6 months)",
    "Scanned copy of CNIC (Front & back)",
    "Last 6 months bank statement (Minimum balance 5 Lac)",
    "Bank maintenance letter",
  ],
  Japan: [
    "Visa Application Form – fully completed, accurate, and clearly filled",
    "Passport valid for at least 8 months + photocopies of current and previous passports (if any)",
    "3 passport-size photographs with white background",
    "Travel Itinerary and Flight Booking / Air Ticket (travel itinerary will be provided by Travel Nest)",
    "Last 6 months Parents'/Sponsor's Bank Statement along with Account Maintenance Certificate (must be attested by the relevant bank)",
    "Invitation Letter from Japan (if any)",
    "Confirmed Hotel Reservation for the entire stay + Travel Plan / Fax or Email Intimation to the Embassy (if required)",
    "Employment Proof of Parents – Request/Reference Letter on Company Letterhead + Last 6 Months Salary Slips (if employed)",
    "If Parent/Sponsor Owns a Business, provide supporting business documents",
    "NTN Certificate + Last 2 Years Income Tax Returns (for business owners)",
    "Copy of Original CNIC / Passport",
    "Family Registration Certificate (FRC), if applicable",
    "Any additional documents requested by the Embassy of Japan during visa processing",
  ],
  Malaysia: [
    "Scanned copy of CNIC",
    "Scanned copy of passport 1st & 2nd page",
    "Passport size white background picture (Without glasses & white shirt)",
  ],
  Maldives: [
    "Confirmed return/onward flight ticket",
    "Pre-paid hotel reservation",
    "Sufficient funds (Cash or card, approx. 50$ to 100$ per day)",
    "Yellow Fever Vaccination Certificate (if coming from a risk area)",
  ],
  Philippines: [
    "06 months valid passport + previous passports (if any)",
    "04 white background passport size photos",
    "Colorful copy of ID Card/CNIC",
    "06 months bank statement with Bank maintenance letter (Attested from Foreign Office)",
    "Police character certificate (Attested from Foreign Office)",
    "NTN Number",
    "Must have closing balance of 400,000 in account",
  ],
  Schengen: [
    "Valid Passport issued within last 10 years (valid at least 3 months after return date, having 2 minimum blank pages)",
    "Completed Schengen visa application form",
    "Copy of CNIC/ID Card",
    "Family Registration Certificate (FRC)",
    "Cover Letter",
    "Recent passport size photographs",
    "Flight reservation/itinerary",
    "Hotel booking or invitation letter from host",
    "Detailed travel plan/itinerary",
    "Last 6 months bank statement",
    "Salary slips / Business Proof",
    "NTN/Tax returns (Recommended)",
    "Sponsorship letter (If applicable)",
    "Travel Insurance (Minimum coverage: €30,000) (Mandatory)",
    "Job letter/Leave letter (For employees)",
    "Company documents (For business owners)",
    "Student letter (For students)",
  ],
  Singapore: [
    "Scanned copy of CNIC",
    "Scanned Copy of Passport 1st & 2nd Page",
    "Passport size white background picture (Without glasses & white shirt)",
    "Family Registration Certificate (FRC)",
  ],
  "Sri Lanka": [
    "Scanned copy of CNIC",
    "Scanned copy of 1st & 2nd page of passport",
    "Passport size white background picture (Without glasses & white shirt)",
  ],
  Thailand: [
    "Old & current passports",
    "2 Copies of CNIC",
    "6 Months bank statement",
    "2 Passport size pictures with white background",
    "Bank account maintenance letter",
    "Proof of business or job",
    "Salary slip of three months (In case of job)",
    "NTN (Optional)",
  ],
  Turkey: [
    "Original Passport with 6 month validity, along with all previous passports",
    "02 white background pictures (5cm x 5cm)",
    "Scanned copy of CNIC (Front & back)",
    "Last 06 Months Bank Statement along with account maintenance letter sign & stamp from bank",
    "Last 03 months salary slips (If employed)",
    "Job letter from company (If employed)",
    "NTN number, tax returns & company registration (If self employed)",
    "Valid polio vaccination certificate",
    "Family Registration Certificate (FRC) or Marriage Registration Certificate (MRC) (If all family travels)",
    "Bona fide & leave letter from school, college or University (If student individual travel)",
    "Company Letter Head for VISA request",
  ],
  Tajikistan: [
    "Original passport with at least 6 months validity from the date of entry",
    "Scanned copy of the passport's bio-data page",
    "Recent passport-size photograph (digital, white background)",
    "Completed online visa application",
    "Confirmed or tentative flight itinerary",
    "Hotel booking or an invitation letter from your host in Tajikistan",
    "Proof of sufficient financial means (bank statement, if requested)",
    "Valid email address to receive the eVisa",
    "Payment of the visa fee online",
  ],
  Umrah: [
    "Scanned copy of passport bio page",
    "Scanned copy of CNIC/ID Card (Front & back)",
    "Picture with white background",
    "Polio vaccination certificate",
    "Confirmed Return Air Tickets",
    "Airport Transfer Booking Confirmation",
  ],
  Uzbekistan: [
    "Original passport",
    "Picture with white background",
    "ID Card/CNIC",
    "Visit card & letter head",
    "Bank statement (Minimum closing balance 4 Lac–5 Lac)",
    "Confirm hotel booking",
  ],
  "United Kingdom": [
    "Passport (All Used Pages)",
    "Family Registration Certificate (FRC)",
    "Marriage Registration Certificate (MRC) (if applicable)",
    "Business Registration Certificate (for business owners)",
    "Business Letterhead (for business owners)",
    "National Tax Number (NTN) Certificate",
    "Tax Returns (Last 2 Years)",
    "Bank Statement (Last 6 Months) & Account Maintenance Certificate",
    "Property Documents (English translated, if available)",
    "Recent Passport-Size Photograph",
    "No Objection Certificate (NOC) from Employer",
    "Employment Letter",
    "Last 3 Months' Salary Slip",
  ],
  "United States": [
    "Passport & CNIC",
    "2 Passport Size Pictures",
    "Permanent Home Address",
    "Email Address",
    "Contact Numbers (02)",
    "Social Media Profile Links",
    "Father's Date of Birth",
    "Mother's Date of Birth",
    "Spouse's (Wife/Husband) Date of Birth",
    "Spouse's Place of Birth",
    "Business Name, Address & Contact Number",
    "Business Start Date",
    "Monthly Income & Nature of Business",
    "Highest Qualification / Last Degree",
    "Education Start & End Date",
    "Have you ever applied for immigration before? (Yes/No)",
    "Have you ever been refused a visa or immigration application? (Yes/No)",
    "List of Countries Previously Visited",
    "Languages Known (Including Native Language)",
  ],
};

const visaDepartureCities = [
  "Islamabad – Islamabad International Airport (ISB)",
  "Karachi – Jinnah International Airport (KHI)",
  "Lahore – Allama Iqbal International Airport (LHE)",
  "Peshawar – Bacha Khan International Airport (PEW)",
  "Quetta – Quetta International Airport (UET)",
  "Faisalabad – Faisalabad International Airport (LYP)",
  "Multan – Multan International Airport (MUX)",
  "Sialkot – Sialkot International Airport (SKT)",
  "Rahim Yar Khan – Sheikh Zayed International Airport (RYK)",
  "Turbat – Turbat International Airport (TUK)",
  "Sukkur – Sukkur Airport (SKZ)",
  "Chitral – Chitral Airport (CJL)",
  "Gilgit – Gilgit Airport (GIL)",
  "Skardu – Skardu Airport (KDU)",
  "Gwadar – Gwadar International Airport (GWD)",
  "Zhob – Zhob Airport (PZH)",
  "Moenjodaro – Moenjodaro Airport (MJD)",
  "Nawabshah – Nawabshah Airport (WNS)",
  "Bahawalpur – Bahawalpur Airport (BHV)",
  "Dir – Dir Airport (DIR)",
];

const visaSteps = [
  {
    title: "Personalized Consultation",
    desc: "We understand your travel purpose and guide you through the right visa route.",
  },
  {
    title: "Document Preparation",
    desc: "Our team reviews and prepares every required document with care.",
  },
  {
    title: "Application Submission",
    desc: "We submit your application and book appointments on your behalf.",
  },
  {
    title: "Status Updates",
    desc: "We keep you informed at every step, so you always know where your application stands.",
  },
];

export function VisaFacilitationPage() {
  const [activeCountry, setActiveCountry] = useState("Azerbaijan");

  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Visa Facilitation"
        crumb="Services / Visa Facilitation"
        image={`${IMG}/home2/banner-img2.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Your Journey, Our Paperwork"
            subtitle="At Travel Nest, we make international travel simple by offering professional visa facilitation services tailored to your needs. Whether you're planning a holiday, business trip, group tour, study abroad journey, or Umrah, our experienced team ensures your application is handled accurately and efficiently. Visa processes can be complex, with strict requirements and documentation, but we guide you at every step to avoid delays or rejections. From personalized consultation and document preparation to application submission and appointment scheduling, we manage everything with care."
          />

          <h2 className="mt-14 text-center font-display text-2xl font-semibold text-title sm:text-3xl">
            Countries We Offer
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {visaCountries.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-background px-5 py-2 font-display text-sm font-medium text-title transition-colors hover:border-brand hover:text-brand"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Visa Requirements */}
          <h2 className="mt-16 text-center font-display text-2xl font-semibold text-title sm:text-3xl">
            Visa Requirements
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-body">
            Select a country to view the documents required for your visa application.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {visaCountries.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCountry(c)}
                className={`rounded-full border px-5 py-2 font-display text-sm font-medium transition-colors ${
                  activeCountry === c
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-background text-title hover:border-brand hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-line bg-card p-8">
            <h3 className="font-display text-lg font-bold text-title">
              Requirements for {activeCountry}
            </h3>
            <ul className="mt-5 space-y-3">
              {(visaRequirements[activeCountry] ?? []).map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-body">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visaSteps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="grid size-12 place-items-center rounded-full bg-brand/15 font-display text-lg font-bold text-brand">
                    {i + 1}
                  </span>
                  <h4 className="mt-4 font-display text-base font-semibold text-title">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-soft p-8 sm:p-12">
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <div>
                <h2 className="font-display text-2xl font-semibold text-title">
                  Submit Your Query, We'll Do the Rest
                </h2>
                <p className="mt-2 max-w-xl text-sm text-body">
                  With expertise in tourist, business, student, and religious visas, our goal is to
                  provide a smooth, reliable, and stress-free experience.
                </p>
              </div>
              <div className="grid w-full max-w-md gap-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
                    Departure City
                  </span>
                  <select className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-brand">
                    <option value="">--- Select Departure City ---</option>
                    {visaDepartureCities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-body">
                    Visa Country
                  </span>
                  <select className="w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-title outline-none transition-colors focus:border-brand">
                    <option value="">--- Select Country ---</option>
                    {visaCountries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Send Message <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Air Tickets ────────────── */

const airlines = [
  "PIA",
  "Emirates",
  "Qatar Airways",
  "Turkish Airlines",
  "Etihad",
  "Saudia",
  "Air Arabia",
  "Fly Dubai",
  "Kuwait Airways",
  "Gulf Air",
];

export function AirTicketsPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Air Ticket Booking"
        crumb="Services / Air Tickets"
        image={`${IMG}/home1/banner-img2.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Book Your Flight with Ease"
            subtitle="At Travel Nest, we go beyond just booking your flight—we become your travel partner. With 24/7 support, timely reminders, and assistance in case of missed flights, changes, or refunds, we ensure you're never alone during your journey. We offer tickets across a wide range of trusted international and domestic airlines, giving you flexible options that suit your schedule and budget. From booking to boarding, our team is always there to make your travel smooth, reliable, and stress-free."
          />

          <div className="mt-10 overflow-hidden rounded-2xl bg-brand px-6 py-4 text-center text-sm font-medium text-primary-foreground sm:text-base">
            🕋 November Umrah Special! Fly with Kuwait Airways | ✈️ 15 Days Umrah Airfare Package
            starting from <strong>PKR 120,000</strong> | 🎉 Limited promotional seats available –
            Book in advance for exclusive discounts! | 📞 Contact Travel Nest today to reserve your
            seat before fares increase.
          </div>

          <h2 className="mt-14 text-center font-display text-2xl font-semibold text-title sm:text-3xl">
            Fly with the World's Leading Airlines
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {airlines.map((a) => (
              <span
                key={a}
                className="rounded-full border border-line bg-background px-5 py-2 font-display text-sm font-medium text-title transition-colors hover:border-brand hover:text-brand"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-card p-8 sm:p-12">
            <h2 className="text-center font-display text-2xl font-semibold text-title">
              Let Our Team Find the Best Options
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-body">
              Fill out the form below and let our team find the best options for you.
            </p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Trip Type</span>
                <span className="font-display text-sm font-medium text-title">Round Trip</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Flexible Dates?</span>
                <span className="font-display text-sm font-medium text-title">No</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Departure City</span>
                <span className="font-display text-sm font-medium text-title">Islamabad (ISB)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Destination City</span>
                <span className="font-display text-sm font-medium text-title">Dubai (DXB)</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Cabin Class</span>
                <span className="font-display text-sm font-medium text-title">Economy</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Direct Flight Preferred?</span>
                <span className="font-display text-sm font-medium text-title">Yes</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Preferred Contact</span>
                <span className="font-display text-sm font-medium text-title">WhatsApp</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Best Time to Contact</span>
                <span className="font-display text-sm font-medium text-title">
                  Evening (4pm – 8pm)
                </span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Send Message <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Hotel Bookings ────────────── */

const hotelFeatures = [
  {
    icon: Hotel,
    title: "Global Stays",
    desc: "From budget stays to luxury resorts, anywhere in the world.",
  },
  {
    icon: Building2,
    title: "Best Rates",
    desc: "Exclusive negotiated rates across top hotel chains.",
  },
  {
    icon: Check,
    title: "Instant Confirmation",
    desc: "Fast confirmations so you can plan with confidence.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    desc: "Special requests, room preferences and celebrations handled.",
  },
];

export function HotelBookingsPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Find Your Perfect Stay Anywhere in the World"
        crumb="Services / Hotel Bookings"
        image={`${IMG}/home1/banner-img1.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="From Budget Stays to Luxury Resorts"
            subtitle="We secure the perfect accommodation for every journey — beachfront villas, city hotels, desert resorts and family suites — all matched to your style and budget."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hotelFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand/15 text-brand">
                    <f.icon className="size-5" />
                  </span>
                  <h4 className="mt-4 font-display text-base font-semibold text-title">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {["4 Star", "5 Star", "Luxury Villa"].map((t) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-2xl border border-line bg-soft px-6 py-5"
              >
                <span className="font-display text-base font-medium text-title">Hotel Type</span>
                <span className="font-display text-sm font-semibold text-brand">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Transportation ────────────── */

const transportFeatures = [
  {
    icon: Car,
    title: "Airport Transfers",
    desc: "Reliable pick-up and drop-off, on time, every time.",
  },
  {
    icon: MapPin,
    title: "City Tours",
    desc: "Comfortable transport for exploring cities at your own pace.",
  },
  { icon: Users, title: "Group Transport", desc: "Coaches and vans for group travel and tours." },
  {
    icon: Compass,
    title: "Intercity Travel",
    desc: "Seamless connections between cities and attractions.",
  },
];

export function TransportationPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Transportation"
        crumb="Services / Transportation"
        image={`${IMG}/home2/banner-img2.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Travel Smoothly, Arrive Comfortably"
            subtitle="From airport pick-ups to intercity journeys, we arrange safe, comfortable and dependable transportation so you can focus on enjoying the journey."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {transportFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand/15 text-brand">
                    <f.icon className="size-5" />
                  </span>
                  <h4 className="mt-4 font-display text-base font-semibold text-title">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 rounded-2xl bg-soft p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-semibold text-title">
              Need Transport for Your Trip?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-body">
              Share your route and dates, and we'll arrange the right vehicle for your group.
            </p>
            <a href="#" className="btn-primary mt-8">
              Request Transport <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Cruises ────────────── */

const cruisePackages = [
  {
    icon: Ship,
    title: "Short Cruises",
    days: "3–5 Days",
    desc: "Budget friendly escapes to coastal gems.",
  },
  {
    icon: Sparkles,
    title: "Luxury Cruises",
    days: "5–10 Days",
    desc: "Premium experience with world-class amenities.",
  },
  {
    icon: Heart,
    title: "Honeymoon Cruises",
    days: "Custom",
    desc: "A journey of love across the open sea.",
  },
  {
    icon: Users,
    title: "Group / Corporate Cruises",
    days: "Custom",
    desc: "Executive cruise experiences for teams.",
  },
];

const cruiseHighlights = [
  "Premium International Cruise Lines",
  "All-Inclusive Packages (Flights + Visa + Stay)",
  "Halal Food Options Available",
  "Ideal for Families, Couples & Groups",
];

export function CruisesPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Set Sail on a Journey of Luxury & Adventure"
        crumb="Services / Cruises"
        image={`${IMG}/home1/tour-package-img6.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="All-Inclusive Cruise Packages"
            subtitle="Experience world-class cruises with Travel Nest — unforgettable voyages, comfort and exciting destinations await. All-inclusive cruise packages with visas, flights and premium experiences — handled by Travel Nest."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cruiseHighlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-line bg-background px-5 py-2 font-display text-sm font-medium text-title"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cruisePackages.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand/15 text-brand">
                    <p.icon className="size-5" />
                  </span>
                  <p className="mt-4 font-display text-xs font-semibold text-brand">{p.days}</p>
                  <h4 className="mt-1 font-display text-lg font-semibold text-title">{p.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-line bg-background p-8 sm:p-12">
            <h2 className="text-center font-display text-2xl font-semibold text-title">
              Let's Set Sail on Your Dream Cruise
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-body">
              Tell us where the ocean should take you and our team will craft the perfect voyage.
            </p>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Preferred Destination</span>
                <span className="font-display text-sm font-medium text-title">Mediterranean</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Cruise Duration</span>
                <span className="font-display text-sm font-medium text-title">6–9 Days</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Cabin Type</span>
                <span className="font-display text-sm font-medium text-title">Balcony</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Dining Preference</span>
                <span className="font-display text-sm font-medium text-title">Standard Dining</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Special Occasion?</span>
                <span className="font-display text-sm font-medium text-title">None</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Need Flights?</span>
                <span className="font-display text-sm font-medium text-title">Yes</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Need Visa Assistance?</span>
                <span className="font-display text-sm font-medium text-title">Yes</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
                <span className="text-sm text-body">Budget (Per Person)</span>
                <span className="font-display text-sm font-medium text-title">400k – 700k PKR</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="btn-primary">
                Send Enquiry <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Destination Wedding ────────────── */

const weddingServices = [
  {
    icon: Heart,
    title: "Destination Wedding Planning",
    desc: "Elegant wedding arrangements with complete travel, venue, and guest management services.",
  },
  {
    icon: Sparkles,
    title: "Luxury Honeymoon Experiences",
    desc: "Romantic customized honeymoon packages with luxury stays and unforgettable experiences.",
  },
  {
    icon: Users,
    title: "Group Travel & Guest Management",
    desc: "Smooth travel coordination, hotel bookings, airport transfers, and visa assistance for wedding guests.",
  },
];

export function DestinationWeddingPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Destination Weddings, Designed Beyond Borders"
        crumb="Services / Destination Wedding"
        image={`${IMG}/home2/tour-package-img1.jpg`}
      />
      <section className="py-20">
        <div className="container-gofly">
          <SectionTitle
            title="Your Dream Celebration, Anywhere in the World"
            subtitle="From beachfront vows in Bali to royal celebrations in Turkey, Travel Nest creates unforgettable destination weddings with luxury travel, seamless planning, and personalized experiences for couples and families worldwide. At Travel Nest, we create unforgettable destination wedding experiences designed around your vision. From romantic beach ceremonies and luxury resort stays to guest travel management, decor coordination, transportation, visas, and honeymoon planning — we ensure every moment of your celebration is seamless, elegant, and stress-free for you and your loved ones."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { label: "500+", sub: "Happy Guests" },
              { label: "100+", sub: "Wedding Events" },
              { label: "20+", sub: "Destinations" },
              { label: "98%", sub: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.sub} className="rounded-2xl bg-soft px-6 py-8 text-center">
                <p className="font-display text-4xl font-bold text-brand">{s.label}</p>
                <p className="mt-2 font-display text-sm font-medium text-title">{s.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-semibold text-title sm:text-3xl">
                  Make Your Dream Celebration Memorable
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-body">
                  We create beautiful wedding experiences together. From intimate ceremonies to
                  grand destination weddings, Travel Nest helps couples plan unforgettable
                  celebrations across the world. We manage travel, venues, guest arrangements, décor
                  coordination, luxury stays, and personalized experiences so you can enjoy every
                  moment stress-free.
                </p>
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-line bg-card p-5">
                  <p className="font-display text-4xl font-bold text-brand">3+</p>
                  <div>
                    <p className="font-display font-semibold text-title">Years Of Experience</p>
                    <p className="text-sm text-body">
                      Creating memorable travel experiences & celebrations worldwide.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a href="#" className="btn-primary">
                    Plan Your Wedding <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="#"
                    className="btn-primary bg-transparent border border-brand text-brand hover:bg-brand hover:text-primary-foreground"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  `${IMG}/home2/tour-package-img2.jpg`,
                  `${IMG}/home2/destination-img1.jpg`,
                  `${IMG}/home2/destination-img2.jpg`,
                  `${IMG}/home2/destination-img3.jpg`,
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="Wedding experience"
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
                    loading="lazy"
                  />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {weddingServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)]">
                  <span className="grid size-12 place-items-center rounded-full bg-brand/15 text-brand">
                    <s.icon className="size-5" />
                  </span>
                  <h4 className="mt-4 font-display text-lg font-semibold text-title">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="btn-primary">
              Book Consultation <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
