import { useEffect, useState } from "react";
import { Menu, X, Phone, Globe, Check } from "lucide-react";
import logo from "@/assets/logo-omkar.png";
import { COMPANY, NAV } from "@/lib/company";
import { LANGS, useI18n } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/95 shadow-[var(--shadow-card)] backdrop-blur"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="accent-bar h-1 w-full" />
      <div className="section-shell flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Omkar Enterprise logo" width={48} height={48} className="h-10 w-10 md:h-12 md:w-12" />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-brand-dark md:text-lg">
              {COMPANY.name}
            </span>
            <span className="hidden text-[11px] font-medium tracking-wide text-muted-foreground sm:block">
              {t("hero.tagline")}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-surface hover:text-brand"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:border-brand hover:text-brand"
              aria-label="Change language"
            >
              <Globe size={16} />
              {current.short}
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <ul className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-[var(--shadow-lift)]">
                  {LANGS.map((l) => (
                    <li key={l.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-surface"
                      >
                        <span>
                          {l.short} · {l.label}
                        </span>
                        {l.code === lang && <Check size={14} className="text-brand" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-safety px-4 py-2.5 text-sm font-bold text-safety-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone size={15} />
            {t("nav.quote")}
          </a>

          <button
            type="button"
            className="rounded-md border border-border p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="section-shell flex flex-col py-2">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-semibold text-foreground/80 last:border-0"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
