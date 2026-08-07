import { Check, Scale, ShieldCheck, RefreshCcw } from "lucide-react";
import { IMG } from "@/lib/gofly-data";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

/* ────────────── Shared layout ────────────── */

function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/15 font-display text-sm font-bold text-brand">
            {number}
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-xl font-semibold text-title sm:text-2xl">{title}</h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-body">{children}</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check className="mt-1 size-4 shrink-0 text-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ────────────── Terms & Conditions ────────────── */

export function TermsConditionsPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Terms & Conditions"
        crumb="Terms & Conditions"
        image={`${IMG}/home2/banner-img2.jpg`}
      />
      <section className="py-16 sm:py-20">
        <div className="container-gofly">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand/15 text-brand">
                  <Scale className="size-8" />
                </span>
                <h1 className="mt-5 font-display text-3xl font-bold text-title sm:text-4xl">
                  1. TERMS & CONDITIONS
                </h1>
                <p className="mt-2 font-display text-base font-medium text-body">
                  Travel Nest – Terms & Conditions
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-body">
                  Welcome to Travel Nest. By using our website or booking any travel service through
                  us, you agree to the following Terms & Conditions.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 space-y-6">
              <LegalSection number="01" title="Services">
                <p>
                  Travel Nest provides customised travel planning, holiday packages, hotel
                  reservations, airport transfers, sightseeing, visa assistance, travel insurance
                  facilitation, and related travel services through trusted domestic and
                  international partners.
                </p>
              </LegalSection>

              <LegalSection number="02" title="Booking & Payments">
                <BulletList
                  items={[
                    "All bookings are subject to availability and confirmation by the respective airline, hotel, DMC or service provider.",
                    "Prices are quoted based on the information available at the time of quotation and may change before booking confirmation.",
                    "A booking is considered confirmed only after receipt of the required payment and written confirmation from Travel Nest.",
                  ]}
                />
              </LegalSection>

              <LegalSection number="03" title="Travel Documents">
                <p>
                  Travellers are solely responsible for ensuring they possess valid passports,
                  visas, travel insurance (where applicable), vaccination certificates, and any
                  other documents required by the destination country.
                </p>
              </LegalSection>

              <LegalSection number="04" title="Changes & Cancellations">
                <p>
                  Changes requested after confirmation may incur additional charges imposed by
                  airlines, hotels or other suppliers. Cancellation charges shall be governed by the
                  respective supplier&apos;s policy.
                </p>
              </LegalSection>

              <LegalSection number="05" title="Limitation of Liability">
                <p>
                  Travel Nest acts as an intermediary between travellers and independent service
                  providers. While we carefully select our partners, we are not liable for delays,
                  cancellations, accidents, natural disasters, political events, airline operational
                  issues or circumstances beyond our reasonable control.
                </p>
              </LegalSection>

              <LegalSection number="06" title="Customer Responsibilities">
                <p>
                  Travellers are expected to comply with the laws, customs and immigration
                  requirements of each destination and to conduct themselves responsibly throughout
                  their journey.
                </p>
              </LegalSection>

              <LegalSection number="07" title="Governing Law">
                <p>
                  These Terms &amp; Conditions shall be governed by the applicable laws of the
                  Islamic Republic of Pakistan.
                </p>
              </LegalSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Privacy Policy & Refund Policy ────────────── */

export function PrivacyPolicyPage() {
  return (
    <div className="overflow-x-hidden">
      <PageHero
        title="Privacy Policy & Refund Policy"
        crumb="Privacy & Refund Policy"
        image={`${IMG}/home2/banner-img1.jpg`}
      />
      <section className="py-16 sm:py-20">
        <div className="container-gofly">
          <div className="mx-auto max-w-3xl">
            {/* Privacy Policy */}
            <Reveal>
              <div className="text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand/15 text-brand">
                  <ShieldCheck className="size-8" />
                </span>
                <h1 className="mt-5 font-display text-3xl font-bold text-title sm:text-4xl">
                  2. PRIVACY POLICY
                </h1>
                <p className="mt-2 font-display text-base font-medium text-body">
                  Travel Nest – Privacy Policy
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-body">
                  At Travel Nest, protecting your personal information is one of our highest
                  priorities.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 space-y-6">
              <LegalSection number="01" title="Information We Collect">
                <BulletList
                  items={[
                    "Name",
                    "Contact details",
                    "Passport information (where required)",
                    "Travel preferences",
                    "Emergency contact details",
                    "Payment-related information required to process bookings",
                  ]}
                />
              </LegalSection>

              <LegalSection number="02" title="How We Use Your Information">
                <p>Your information is used solely to:</p>
                <BulletList
                  items={[
                    "Process bookings",
                    "Arrange travel services",
                    "Communicate travel updates",
                    "Provide customer support",
                    "Improve our services",
                  ]}
                />
              </LegalSection>

              <LegalSection number="03" title="Information Sharing">
                <p>
                  We only share information with trusted travel partners when necessary to complete
                  your booking, including airlines, hotels, destination management companies (DMCs),
                  visa processing partners and insurance providers.
                </p>
                <p>
                  We do not sell, rent or trade your personal information to third parties for
                  marketing purposes.
                </p>
              </LegalSection>

              <LegalSection number="04" title="Data Security">
                <p>
                  We take reasonable administrative and technical measures to protect your personal
                  information against unauthorized access, misuse or disclosure.
                </p>
              </LegalSection>

              <LegalSection number="05" title="Cookies">
                <p>
                  Our website may use cookies to improve functionality and enhance user experience.
                </p>
              </LegalSection>

              <LegalSection number="06" title="Your Rights">
                <p>
                  You may request access to, correction of, or deletion of your personal information
                  by contacting us, subject to applicable legal and operational requirements.
                </p>
              </LegalSection>
            </div>

            {/* Refund Policy */}
            <div className="mt-20">
              <Reveal>
                <div className="text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand/15 text-brand">
                    <RefreshCcw className="size-8" />
                  </span>
                  <h1 className="mt-5 font-display text-3xl font-bold text-title sm:text-4xl">
                    3. REFUND POLICY
                  </h1>
                  <p className="mt-2 font-display text-base font-medium text-body">
                    Travel Nest – Refund Policy
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-body">
                    Travel Nest aims to provide transparent and fair refund practices.
                  </p>
                </div>
              </Reveal>

              <div className="mt-10 space-y-6">
                <LegalSection number="01" title="Booking Deposits">
                  <p>
                    Booking deposits are generally non-refundable once payments have been made to
                    airlines, hotels, DMCs or other suppliers unless otherwise stated in writing.
                  </p>
                </LegalSection>

                <LegalSection number="02" title="Cancellations by Customer">
                  <p>Refunds, if applicable, will be processed after deducting:</p>
                  <BulletList
                    items={[
                      "Airline cancellation charges",
                      "Hotel cancellation charges",
                      "Supplier penalties",
                      "Visa processing fees (if already incurred)",
                      "Banking or payment gateway charges",
                      "Any non-recoverable administrative expenses",
                    ]}
                  />
                </LegalSection>

                <LegalSection number="03" title="Non-Refundable Services">
                  <p>The following are normally non-refundable once processed:</p>
                  <BulletList
                    items={[
                      "Visa fees",
                      "Travel insurance premiums",
                      "Airline tickets issued under non-refundable fare rules",
                      "Promotional or special offer packages",
                      "Services already utilized",
                    ]}
                  />
                </LegalSection>

                <LegalSection number="04" title="Supplier Cancellations">
                  <p>
                    If a supplier cancels a booked service, Travel Nest will make every reasonable
                    effort to obtain the maximum refund or offer suitable alternatives, subject to
                    the supplier&apos;s own terms and conditions.
                  </p>
                </LegalSection>

                <LegalSection number="05" title="Refund Processing">
                  <p>
                    Approved refunds are generally processed within 14–30 business days, depending
                    on the payment method and the policies of the respective supplier or financial
                    institution.
                  </p>
                </LegalSection>

                <LegalSection number="06" title="Force Majeure">
                  <p>
                    Refunds for cancellations arising from natural disasters, pandemics, war, civil
                    unrest, government restrictions or other events beyond our control shall be
                    subject to the policies of the respective service providers.
                  </p>
                </LegalSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
