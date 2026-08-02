import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { useI18n } from "@/lib/i18n";

export function FloatingActions() {
  const { t } = useI18n();

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href={`https://wa.me/${COMPANY.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("float.whatsapp")}
        className="flex h-13 items-center gap-2 rounded-full bg-[oklch(0.68_0.17_150)] px-4 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">{t("float.whatsapp")}</span>
      </a>
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        aria-label={t("float.call")}
        className="flex items-center gap-2 rounded-full bg-safety px-4 py-3 text-sm font-bold text-safety-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
      >
        <Phone size={20} />
        <span className="hidden sm:inline">{t("float.call")}</span>
      </a>
    </div>
  );
}
