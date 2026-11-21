import type { Lang } from "../page";

type AboutProps = {
  lang: Lang;
};

export default function About({ lang }: AboutProps) {
  const content = {
    en: {
      title: "About",
      text: "I am a Master 1 MIAGE student at ISTIC (University of Rennes) and I am looking for a 5-month full-stack Java development internship starting in April 2027. I build complete applications, from REST APIs in Java / Spring Boot to React interfaces, with tests, continuous integration and documentation. I also work on web and mobile (Next.js, React Native, Android/Kotlin) and use AI-assisted development and code review in my workflow.",
    },
    fr: {
      title: "À propos",
      text: "Étudiant en Master 1 MIAGE à l'ISTIC (Université de Rennes), je recherche un stage de développement full-stack Java de 5 mois à partir d'avril 2027. Je conçois des applications complètes, de l'API REST en Java / Spring Boot jusqu'à l'interface React, avec tests, intégration continue et documentation. Je travaille aussi sur le web et le mobile (Next.js, React Native, Android/Kotlin) et j'intègre le développement et la revue de code assistés par IA dans ma façon de travailler.",
    },
  };

  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{content[lang].title}</h2>
        <p className="mt-5 max-w-3xl text-zinc-300 leading-8">{content[lang].text}</p>
      </div>
    </section>
  );
}
