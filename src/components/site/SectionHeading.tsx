export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  invert = false,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-safety">
        <span className="h-px w-6 bg-safety" />
        {kicker}
      </span>
      <h2
        className={`mt-3 font-display text-3xl font-extrabold sm:text-4xl ${
          invert ? "text-primary-foreground" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            invert ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
