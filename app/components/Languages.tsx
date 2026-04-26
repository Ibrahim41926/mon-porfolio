import type { Lang } from "../page";

type LanguageItem = {
  name: string;
  level: { en: string; fr: string };
  dots: number;
};

const languages: LanguageItem[] = [
  { name: "Peul", level: { en: "Native", fr: "Langue maternelle" }, dots: 5 },
  { name: "Français", level: { en: "Native / Advanced", fr: "Natif / Avancé" }, dots: 5 },
  { name: "Anglais", level: { en: "B1 – Intermediate", fr: "B1 – Intermédiaire" }, dots: 3 },
];

const sectionTitle = { en: "Languages", fr: "Langues" };

export default function Languages({ lang }: { lang: Lang }) {
  return (
    <section id="languages" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{sectionTitle[lang]}</h2>
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {languages.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3 text-center">
              <p className="text-lg font-semibold text-white">{item.name}</p>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-2.5 w-2.5 rounded-full ${i < item.dots ? "bg-cyan-400" : "bg-zinc-700"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-zinc-400">{item.level[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
