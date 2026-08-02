import { IMG } from "@/lib/gofly-data";

export function PageHero({
  title,
  crumb,
  image = `${IMG}/home2/banner-img2.jpg`,
}: {
  title: string;
  crumb: string;
  image?: string;
}) {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-display text-5xl font-bold sm:text-6xl" style={{ color: "#fff" }}>
          {title}
        </h1>
        <p className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: "#fff" }}>
          <a href="/" className="hover:underline" style={{ color: "#fff" }}>
            Home
          </a>
          <span style={{ color: "#fff" }}>•</span>
          <span style={{ color: "#fff" }}>{crumb}</span>
        </p>
      </div>
    </section>
  );
}
