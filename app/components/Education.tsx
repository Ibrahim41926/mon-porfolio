import type { Lang } from "../page";

type EducationItem = {
  degree: { en: string; fr: string };
  school: string;
  location: string;
  period: { en: string; fr: string };
};

const education: EducationItem[] = [
  {
    degree: { en: "Master 1 MIAGE", fr: "Master 1 MIAGE" },
    school: "ISTIC – Université de Rennes",
    location: "Rennes, France",
    period: { en: "Since September 2026", fr: "Depuis septembre 2026" },
  },
  {
    degree: { en: "MIAGE Bachelor's (L3)", fr: "Licence 3 MIAGE" },
    school: "ISTIC – Université de Rennes",
    location: "Rennes, France",
    period: { en: "2025 – 2026", fr: "2025 – 2026" },
  },
  {
    degree: { en: "Computer Science & Electronics (L2)", fr: "Licence Informatique & Électronique (L2)" },
    school: "Université de Rennes",
    location: "Rennes, France",
    period: { en: "2024 – 2025", fr: "2024 – 2025" },
  },
  {
    degree: { en: "Computer Engineering (L1)", fr: "L1 Génie informatique" },
    school: "Université Nongo Conakry",
    location: "Conakry, Guinée",
    period: { en: "2023 – 2024", fr: "2023 – 2024" },
  },
];

const sectionTitle = { en: "Education", fr: "Formation" };

export default function Education({ lang }: { lang: Lang }) {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{sectionTitle[lang]}</h2>
      <div className="relative mt-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 sm:left-6" />
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.degree.en} className="relative pl-12 sm:pl-16">
              <div className="absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-blue-400 bg-zinc-950 sm:left-4" />
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree[lang]}</h3>
                    <p className="mt-0.5 text-sm text-blue-300">
                      {edu.school} — {edu.location}
                    </p>
                  </div>
                  <span className="rounded-lg border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-400">
                    {edu.period[lang]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
