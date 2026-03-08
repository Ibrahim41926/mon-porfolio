import type { Lang } from "../page";
import { withBasePath } from "../lib/basePath";

type HeroProps = {
  lang: Lang;
  name: string;
  title: string;
  subtitle: string;
};

export default function Hero({ lang, name, title, subtitle }: HeroProps) {
  const cta = {
    en: { portfolio: "Portfolio", projects: "View Projects", contact: "Contact", cv: "Download CV" },
    fr: { portfolio: "Portfolio", projects: "Voir les projets", contact: "Contact", cv: "Telecharger CV" },
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-[0.2em] text-cyan-300 uppercase">
            {cta[lang].portfolio}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{name}</h1>
          <p className="mt-5 text-xl text-zinc-200 sm:text-2xl">{title}</p>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">{subtitle}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              {cta[lang].projects}
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              {cta[lang].contact}
            </a>
            <a
              href={withBasePath("/CV_2026-02-23_BALDE_IBRAHIM%20(1).pdf")}
              download
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              {cta[lang].cv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
