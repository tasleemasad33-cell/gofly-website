import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IMG, destinationCards, destinationPackages, destinationPageHero } from "@/lib/gofly-data";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";
import { PackageCard } from "./PackageCard";

function DestinationHero() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <img
        src={destinationPageHero}
        alt="Destinations"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1
          className="font-display text-5xl font-bold text-white sm:text-6xl"
          style={{ color: "#fff" }}
        >
          Destinations
        </h1>
        <p
          className="mt-4 flex items-center gap-2 text-sm font-medium text-white"
          style={{ color: "#fff" }}
        >
          <a href="/" className="hover:underline" style={{ color: "#fff" }}>
            Home
          </a>
          <span style={{ color: "#fff" }}>•</span>
          <span style={{ color: "#fff" }}>Destinations</span>
        </p>
      </div>
    </section>
  );
}

function DestinationCard({
  img,
  title,
  tours,
  index,
}: {
  img: string;
  title: string;
  tours: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 100}>
      <a
        href="#"
        className="group relative block h-[200px] overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:h-[260px]"
      >
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 p-4 sm:p-5">
          <p className="text-xs font-medium text-white/80 sm:text-sm">{tours}</p>
          <h3 className="mt-1 font-display text-lg font-bold text-white sm:text-xl">{title}</h3>
        </div>
      </a>
    </Reveal>
  );
}

function TravelPackageSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 }, [
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true, playOnInit: true }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="-ml-6 flex">
        {destinationPackages.map((pkg) => (
          <div
            key={pkg.title}
            className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
          >
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DestinationsPage() {
  return (
    <>
      <DestinationHero />

      {/* Destination Grid 3x2 */}
      <section className="py-20">
        <div className="container-gofly">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinationCards.map((dest, i) => (
              <DestinationCard key={dest.title} {...dest} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Package */}
      <section className="pb-20">
        <div className="container-gofly">
          <SectionTitle
            title="Travel Package"
            subtitle="A curated list of the most popular travel packages based on different destinations."
          />
          <div className="mt-12">
            <TravelPackageSlider />
          </div>
        </div>
      </section>
    </>
  );
}
