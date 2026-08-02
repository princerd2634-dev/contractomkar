import { MapPin, Phone, Mail, Factory } from "lucide-react";
import logo from "@/assets/logo-omkar.png";
import { COMPANY, NAV } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Omkar Enterprise logo" width={44} height={44} loading="lazy" className="h-11 w-11" />
            <div>
              <p className="font-display text-lg font-bold">{COMPANY.name}</p>
              <p className="text-xs font-semibold text-safety">{t("hero.tagline")}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            {t("footer.about")}
          </p>
          <p className="mt-4 inline-flex items-start gap-2 rounded-lg border border-white/15 bg-white/5 p-3 text-xs text-primary-foreground/80">
            <Factory size={15} className="mt-0.5 shrink-0 text-safety" />
            {t("footer.unit")}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-safety">
            {t("footer.quick")}
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-safety"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-safety">
            {t("nav.contact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-safety" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-safety" />
              <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-safety">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-safety" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-safety">
                {COMPANY.email}
              </a>
            </li>
            <li className="pt-1 text-xs font-semibold">
              {t("contact.gst")} {COMPANY.gst}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="section-shell text-center text-xs text-primary-foreground/65">
          © {new Date().getFullYear()} {COMPANY.name}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
