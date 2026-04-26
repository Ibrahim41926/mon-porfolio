import type { Lang } from "../page";

type EducationItem = {
  degree: { en: string; fr: string };
  school: string;
  location: string;
  period: { en: string; fr: string };
};

const education: EducationItem[] = [
  {
    degree: { en: "MIAGE Bachelor's", fr: "Licence MIAGE" },
    school: "Université Rennes 1",
    location: "Rennes, France",
    period: { en: "Since September 2025", fr: "Depuis septembre 2025" },
  },
  {
    degree: { en: "Computer Science & Electronics (L2)", fr: "Licence Informatique & Électronique (L2)" },
    school: "Université Rennes 1",
    location: "Rennes, France",
    period: { en: "September 2024 – June 2025", fr: "Septembre 2024 – Juin 2025" },
  },
  {
    degree: { en: "Computer Science (L1)", fr: "Génie Informatique (L1)" },
    school: "Université Nongo Conakry",
    location: "Conakry, Guinée",
    period: { en: "October 2023 – July 2024", fr: "Octobre 2023 – Juillet 2024" },
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
