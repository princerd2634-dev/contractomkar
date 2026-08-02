import { ArrowRight, ShieldCheck, Factory, BadgeCheck } from "lucide-react";
import hero from "@/assets/hero-highway.jpg";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  const stats = [
    { icon: ShieldCheck, label: t("hero.stat1") },
    { icon: Factory, label: t("hero.stat2") },
    { icon: BadgeCheck, label: t("hero.stat3") },
  ];

  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden pt-24">
      <img
        src={hero}
        alt="Indian national highway with steel crash barriers at sunset"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />

      <div className="section-shell flex min-h-[calc(92vh-6rem)] flex-col justify-center py-16">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground backdrop-blur">
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-4 font-display text-xl font-semibold text-safety sm:text-2xl">
            {t("hero.tagline")}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {t("hero.sub")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-safety px-6 py-3.5 text-sm font-bold text-safety-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
            >
              {t("hero.cta1")} <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-primary-foreground backdrop-blur transition-colors hover:bg-white/20"
            >
              {t("hero.cta2")}
            </a>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-primary-foreground backdrop-blur"
              >
                <Icon size={18} className="shrink-0 text-safety" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
