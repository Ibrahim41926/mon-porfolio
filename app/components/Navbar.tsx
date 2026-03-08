"use client";

import type { Lang } from "../page";

type NavbarProps = {
  lang: Lang;
  onChangeLanguage: (lang: Lang) => void;
};

const navItems = {
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  fr: [
    { label: "A propos", href: "#about" },
    { label: "Competences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Navbar({ lang, onChangeLanguage }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="text-sm font-semibold tracking-widest text-zinc-100 uppercase"
        >
          Ibrahim Balde
        </a>

        <div className="flex items-center gap-6">
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
        </div>
      </nav>
    </header>
  );
}
