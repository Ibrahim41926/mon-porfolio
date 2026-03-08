import type { Lang } from "../page";

type SkillCategory = {
  category: string;
  items: string[];
};

type SkillsProps = {
  lang: Lang;
};

const skillGroupsByLang: Record<Lang, SkillCategory[]> = {
  en: [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "Python", "C","Scala",],
    },
    {
      category: "Web",
      items: ["React", "Node.js", "Spring Boot", "Flask", "HTML", "CSS", "Tailwind CSS","PHP", "Symfony","Angular"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "SQLite"],
    },
     {
      category: "Others",
      items: ["Git", "Docker", "Linux", "Agile Methodologies","MCV"],
    },
  ],
  fr: [
    {
      category: "Langages",
      items: ["Java", "JavaScript", "Python", "C","Scala",],
    },
    {
      category: "Web",
      items: ["React", "Node.js", "Spring Boot", "Flask", "HTML", "CSS", "Tailwind CSS","PHP", "Symfony","Angular"],
    },
    {
      category: "Base de données",
      items: ["PostgreSQL", "MySQL", "SQLite"],
    
    },

    {
      category: "Autres",
      items: ["Git", "Docker", "Linux", "Agile Methodologies","MCV"],
    }
  ],
};

const sectionTitle = {
  en: "Skills",
  fr: "Competences",
};

export default function Skills({ lang }: SkillsProps) {
  const skillGroups = skillGroupsByLang[lang];

  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{sectionTitle[lang]}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <h3 className="text-lg font-semibold text-cyan-300">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm text-zinc-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
