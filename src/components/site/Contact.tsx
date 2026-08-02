import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, ReceiptText, Send } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "./SectionHeading";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

export function Contact() {
  const { t } = useI18n();
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    const name = get("name");
    const phone = get("phone");
    const message = get("message");

    if (!name || !phone || !message) {
      setError(t("form.required"));
      return;
    }
    setError("");

    const subject = `Enquiry: ${get("type")} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${get("email")}`,
      `Company/Organization: ${get("company")}`,
      `Project Type: ${get("type")}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const details = [
    { icon: MapPin, label: t("contact.address"), value: COMPANY.address, href: COMPANY.mapLink },
    { icon: Phone, label: t("contact.phone"), value: COMPANY.phone, href: `tel:${COMPANY.phoneRaw}` },
    { icon: Mail, label: t("contact.email"), value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: ReceiptText, label: t("contact.gst"), value: COMPANY.gst },
    { icon: Clock, label: "Timings", value: t("contact.hours") },
  ];

  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker={t("contact.kicker")}
          title={t("contact.title")}
          subtitle={t("contact.sub")}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="card-elevated space-y-4 p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-brand-dark">
                  {t("form.name")} *
                </span>
                <input name="name" maxLength={100} className={inputClass} required />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-brand-dark">
                  {t("form.phone")} *
                </span>
                <input name="phone" type="tel" maxLength={20} className={inputClass} required />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-brand-dark">
                  {t("form.email")}
                </span>
                <input name="email" type="email" maxLength={255} className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-brand-dark">
                  {t("form.company")}
                </span>
                <input name="company" maxLength={120} className={inputClass} />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs font-bold text-brand-dark">
                {t("form.type")}
              </span>
              <select name="type" className={inputClass} defaultValue={t("form.type1")}>
                <option>{t("form.type1")}</option>
                <option>{t("form.type2")}</option>
                <option>{t("form.type3")}</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-bold text-brand-dark">
                {t("form.message")} *
              </span>
              <textarea
                name="message"
                rows={5}
                maxLength={1500}
                placeholder={t("form.messagePh")}
                className={`${inputClass} resize-y`}
                required
              />
            </label>

            {error && <p className="text-sm font-semibold text-destructive">{error}</p>}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Send size={16} />
              {t("form.submit")}
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">{t("form.note")}</p>
          </form>

          <div className="space-y-6">
            <ul className="card-elevated divide-y divide-border p-2">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-3 p-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-brand">
                    <Icon size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-brand-dark underline-offset-2 hover:text-brand hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-brand-dark">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title={t("contact.map")}
                src={COMPANY.mapEmbed}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
