import { CalendarDays, Factory, Tag, BadgeCheck, Target } from "lucide-react";
import img from "@/assets/gallery-1.jpg";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useI18n();

  const facts = [
    { icon: CalendarDays, title: t("about.f1t"), desc: t("about.f1d") },
    { icon: Factory, title: t("about.f2t"), desc: t("about.f2d") },
    { icon: Tag, title: t("about.f3t"), desc: t("about.f3d") },
    { icon: BadgeCheck, title: t("about.f4t"), desc: t("about.f4d") },
  ];

  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="section-shell">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading kicker={t("about.kicker")} title={t("about.title")} align="left" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("about.p1")}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("about.p2")}</p>

            <div className="mt-8 rounded-xl border-l-4 border-safety bg-surface p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-brand-dark">
                <Target size={18} className="text-safety" />
                {t("about.missionTitle")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("about.mission")}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={img}
              alt="Crash barrier installation work on an Indian highway"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {facts.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card-elevated p-5">
                  <Icon size={22} className="text-brand" />
                  <h4 className="mt-3 font-display text-sm font-bold text-brand-dark">{title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
