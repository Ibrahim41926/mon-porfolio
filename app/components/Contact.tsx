import type { Lang } from "../page";

type ContactProps = {
  lang: Lang;
};

const contacts = [
  { label: "Email", href: "mailto:ibrahbalde41926@gmail.com", value: "ibrahbalde41926@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-balde-304258383", value: "www.linkedin.com/in/ibrahim-balde-304258383" },
  { label: "GitHub", href: "https://github.com/ibrahim41926", value: "github.com/ibrahim41926" },
];

const content = {
  en: {
    title: "Contact",
    subtitle: "Open to internships, apprenticeships, and collaboration on software projects.",
  },
  fr: {
    title: "Contact",
    subtitle: "Ouvert aux stages, à l'alternance et aux collaborations sur des projets logiciels.",
  },
};

export default function Contact({ lang }: ContactProps) {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{content[lang].title}</h2>
        <p className="mt-4 text-zinc-300">{content[lang].subtitle}</p>
        <ul className="mt-6 space-y-3">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-3 text-zinc-200 transition hover:text-cyan-300"
              >
                <span className="w-20 text-sm text-zinc-400">{contact.label}</span>
                <span className="text-sm sm:text-base">{contact.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
