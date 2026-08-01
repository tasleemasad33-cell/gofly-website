import { Building2, Compass, MapPin, Mountain, Settings2, StampIcon } from "lucide-react";
import { IMG } from "@/lib/gofly-data";
import { Reveal } from "./Reveal";
import { useCountUp } from "./useCountUp";

const services = [
  { label: "Hotel Booking", icon: Building2 },
  { label: "Top Destinations", icon: MapPin },
  { label: "Visa Processing", icon: StampIcon },
  { label: "Tour Experineces", icon: Compass },
  { label: "Customize Package", icon: Settings2 },
  { label: "Adventure Travel", icon: Mountain },
];

export function About() {
  const { ref, value } = useCountUp(12);

  return (
    <section className="bg-soft3 py-20">
      <div className="container-gofly grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold sm:text-[40px]">
            Your Trustpoint, Travel Nest Best for Travel Agency.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            At Travel Nest, we are passionate about creating exceptional travel experiences. Whether
            you're looking for a relaxing beach vacation, an adventurous trek, a luxurious getaway,
            or a cultural expedition.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="grid size-24 place-items-center rounded-full border-2 border-dashed border-brand/40">
              <div className="text-center">
                <span ref={ref} className="font-display text-3xl font-semibold text-title">
                  {value}
                </span>
                <span className="font-display text-xl font-semibold text-brand">+</span>
              </div>
            </div>
            <div>
              <p className="font-display font-semibold text-title">Years</p>
              <p className="text-sm text-body">of Experience</p>
            </div>
          </div>

          <div className="mt-10">
            <h6 className="font-display text-base font-semibold text-title">
              We Provide to Smart Services
            </h6>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {services.map(({ label, icon: Icon }, i) => (
                <Reveal key={label} delay={i * 80}>
                  <a
                    href="#"
                    className="flex h-full items-center gap-2 rounded-xl bg-background px-3 py-3 text-sm font-medium text-title transition-all hover:-translate-y-1 hover:text-brand card-shadow"
                  >
                    <Icon className="size-4 shrink-0 text-brand" />
                    {label}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <img
              src={`${IMG}/home2/about-img1.jpg`}
              alt="Travel experience"
              loading="lazy"
              className="ml-auto h-[400px] w-[85%] rounded-[200px_200px_24px_24px] object-cover"
            />
            <img
              src={`${IMG}/home2/about-img2.jpg`}
              alt="Travel experience"
              loading="lazy"
              className="floaty absolute -left-2 bottom-6 h-[220px] w-[45%] rounded-[24px_120px_24px_120px] border-8 border-background object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
