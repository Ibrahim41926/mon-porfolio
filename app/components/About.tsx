import type { Lang } from "../page";

type AboutProps = {
  lang: Lang;
};

export default function About({ lang }: AboutProps) {
  const content = {
    en: {
      title: "About",
      text: "I am a MIAGE student at the University of Rennes, passionate about software development and computer engineering. I enjoy building digital products across different domains, including web applications and software systems. I am particularly interested in artificial intelligence and data, and I like exploring how technology can be used to design efficient, reliable, and user-focused solutions.",
    },
    fr: {
      title: "A propos",
      text: "Je suis etudiant en MIAGE à l'Université de Rennes, passionné par le developpement logiciel et l'ingenierie informatique. J'aime concevoir des produits numeriques dans differents domaines, notamment les applications web et les systemes logiciels. Je m'interesse particulierement à l'intelligence artificielle et à la data, et j'explore comment la technologie peut permettre de concevoir des solutions efficaces, fiables et centrees utilisateur.",
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
