import { BadgeCheck, FileCheck2, Truck, Award, ReceiptText, Workflow } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

export function WhyUs() {
  const { t } = useI18n();

  const items = [
    { icon: BadgeCheck, n: 1 },
    { icon: FileCheck2, n: 2 },
    { icon: Truck, n: 3 },
    { icon: Award, n: 4 },
    { icon: ReceiptText, n: 5 },
    { icon: Workflow, n: 6 },
  ] as const;

  return (
    <section id="why" className="relative overflow-hidden bg-brand-dark py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading kicker={t("why.kicker")} title={t("why.title")} invert />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, n }) => (
            <div
              key={n}
              className="rounded-xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-safety/60 hover:bg-white/10"
            >
              <Icon size={24} className="text-safety" />
              <h3 className="mt-4 font-display text-base font-bold text-primary-foreground">
                {t(`why.${n}t` as "why.1t")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                {t(`why.${n}d` as "why.1d")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/15 bg-white/5 p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-safety">
            {t("why.clients")}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
            {t("why.clientList")}
          </p>
        </div>
      </div>
    </section>
  );
}
