"use client";

import { useState } from "react";
import type { Lang, Theme } from "../page";

type NavbarProps = {
  lang: Lang;
  theme: Theme;
  onChangeLanguage: (lang: Lang) => void;
  onToggleTheme: () => void;
};

const navItems = {
  en: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  fr: [
    { label: "À propos", href: "#about" },
    { label: "Expérience", href: "#experience" },
    { label: "Formation", href: "#education" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navbar({ lang, theme, onChangeLanguage, onToggleTheme }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const themeLabel = {
    en: { light: "Light", dark: "Dark" },
    fr: { light: "Clair", dark: "Sombre" },
  };
  const mobileUi = {
    en: { menu: "Menu", close: "Close" },
    fr: { menu: "Menu", close: "Fermer" },
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="text-sm font-semibold tracking-widest text-zinc-100 uppercase"
        >
          Ibrahim BALDE
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {navItems[lang].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-zinc-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center rounded-lg border border-zinc-700 p-1">
            <button
              type="button"
              onClick={() => onChangeLanguage("en")}
              className={`rounded px-2 py-1 text-xs font-semibold transition ${
                lang === "en" ? "bg-cyan-400 text-zinc-950" : "text-zinc-300 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onChangeLanguage("fr")}
              className={`rounded px-2 py-1 text-xs font-semibold transition ${
                lang === "fr" ? "bg-cyan-400 text-zinc-950" : "text-zinc-300 hover:text-white"
              }`}
            >
              FR
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-lg border border-zinc-700 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
          >
            {themeLabel[lang][theme]}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-zinc-700 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? mobileUi[lang].close : mobileUi[lang].menu}
          </button>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div
          id="mobile-nav-menu"
          className="border-t border-zinc-800 bg-zinc-950/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navItems[lang].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-600 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center rounded-lg border border-zinc-700 p-1">
              <button
                type="button"
                onClick={() => onChangeLanguage("en")}
                className={`rounded px-2 py-1 text-xs font-semibold transition ${
                  lang === "en" ? "bg-cyan-400 text-zinc-950" : "text-zinc-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onChangeLanguage("fr")}
                className={`rounded px-2 py-1 text-xs font-semibold transition ${
                  lang === "fr" ? "bg-cyan-400 text-zinc-950" : "text-zinc-300 hover:text-white"
                }`}
              >
                FR
              </button>
            </div>

            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-lg border border-zinc-700 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              {themeLabel[lang][theme]}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
