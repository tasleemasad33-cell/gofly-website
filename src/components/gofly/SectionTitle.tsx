import { Reveal } from "./Reveal";

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <h2
        className={`font-display text-3xl font-semibold sm:text-[40px] ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-[15px] ${align === "center" ? "mx-auto max-w-2xl" : ""} ${
            light ? "text-white/80" : "text-body"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
