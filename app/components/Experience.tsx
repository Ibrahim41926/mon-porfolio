import type { Lang } from "../page";

type ExperienceItem = {
  title: { en: string; fr: string };
  company: string;
  location: string;
  period: { en: string; fr: string };
  description: { en: string; fr: string };
  badge?: string;
};

const experiences: ExperienceItem[] = [
  {
    title: { en: "Intern – Laravel Developer", fr: "Stagiaire – Développeur Laravel" },
    company: "InnovQube",
    location: "Rennes, France",
    period: { en: "2025 – Present", fr: "2025 – Présent" },
    description: {
      en: "Contribution to InnovGuide, a SaaS vacation rental management platform made of 4 interconnected Laravel applications. VM deployment on Ubuntu, Nginx configuration, Filament components integration and localization files migration.",
      fr: "Contribution au développement d'InnovGuide, une plateforme SaaS de gestion de locations de vacances composée de 4 applications Laravel interconnectées. Déploiement sur VM Ubuntu, configuration Nginx, intégration de composants Filament et migration des fichiers de localisation.",
    },
    badge: "Stage",
  },
  {
    title: { en: "Intern", fr: "Stagiaire" },
    company: "Orange Guinée",
    location: "Conakry, Guinée",
    period: { en: "May 2022 – September 2022", fr: "Mai 2022 – Septembre 2022" },
    description: {
      en: "Participation in updating a payment system.",
      fr: "Participation à la mise à jour d'un système de paiement.",
    },
    badge: "Stage",
  },
];

const sectionTitle = { en: "Experience", fr: "Expérience" };

export default function Experience({ lang }: { lang: Lang }) {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{sectionTitle[lang]}</h2>
      <div className="relative mt-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 sm:left-6" />
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period.en}`} className="relative pl-12 sm:pl-16">
              <div className="absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-cyan-400 bg-zinc-950 sm:left-4" />
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.title[lang]}</h3>
                    <p className="mt-0.5 text-sm text-cyan-300">
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {exp.badge ? (
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-300">
                        {exp.badge}
                      </span>
                    ) : null}
                    <span className="rounded-lg border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-400">
                      {exp.period[lang]}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{exp.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
