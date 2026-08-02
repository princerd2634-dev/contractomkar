import {
  Fence,
  CircleDot,
  Milestone,
  SunMedium,
  Signpost,
  PaintRoller,
  ToyBrick,
  Trees,
} from "lucide-react";
import barrier from "@/assets/svc-crash-barrier.jpg";
import rpm from "@/assets/svc-rpm.jpg";
import median from "@/assets/svc-median.jpg";
import solar from "@/assets/svc-solar.jpg";
import delineator from "@/assets/svc-delineator.jpg";
import thermo from "@/assets/svc-thermoplast.jpg";
import playground from "@/assets/svc-playground.jpg";
import landscaping from "@/assets/svc-landscaping.jpg";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

// Swap the `img` values below with real product photographs when available.
const ITEMS = [
  { n: 1, icon: Fence, img: barrier },
  { n: 2, icon: CircleDot, img: rpm },
  { n: 3, icon: Milestone, img: median },
  { n: 4, icon: SunMedium, img: solar },
  { n: 5, icon: Signpost, img: delineator },
  { n: 6, icon: PaintRoller, img: thermo },
  { n: 7, icon: ToyBrick, img: playground },
  { n: 8, icon: Trees, img: landscaping },
] as const;

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker={t("services.kicker")}
          title={t("services.title")}
          subtitle={t("services.sub")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ n, icon: Icon, img }) => (
            <article key={n} className="card-elevated group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt={t(`svc.${n}t` as "svc.1t")}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-safety text-safety-foreground shadow-[var(--shadow-card)]">
                  <Icon size={20} />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-brand-dark">
                  {t(`svc.${n}t` as "svc.1t")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`svc.${n}d` as "svc.1d")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
