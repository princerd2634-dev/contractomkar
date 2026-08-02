import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/svc-landscaping.jpg";
import g6 from "@/assets/svc-thermoplast.jpg";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

// Replace these six images with the client's real project photographs.
const PHOTOS = [
  { n: 1, src: g1, span: "lg:col-span-2 lg:row-span-2" },
  { n: 2, src: g2, span: "" },
  { n: 3, src: g3, span: "" },
  { n: 4, src: g4, span: "" },
  { n: 5, src: g5, span: "" },
  { n: 6, src: g6, span: "lg:col-span-2" },
] as const;

export function Gallery() {
  const { t } = useI18n();

  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker={t("gallery.kicker")}
          title={t("gallery.title")}
          subtitle={t("gallery.sub")}
        />

        <div className="mt-14 grid auto-rows-[190px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PHOTOS.map(({ n, src, span }) => (
            <figure
              key={n}
              className={`group relative overflow-hidden rounded-xl shadow-[var(--shadow-card)] ${span}`}
            >
              <img
                src={src}
                alt={t(`gal.${n}` as "gal.1")}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/90 to-transparent p-4 text-sm font-semibold text-primary-foreground">
                {t(`gal.${n}` as "gal.1")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
