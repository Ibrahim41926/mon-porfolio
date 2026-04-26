import type { Lang } from "../page";

type FooterProps = {
  lang: Lang;
};

const socials = [
  { label: "GitHub", href: "https://github.com/ibrahim41926" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-balde-304258383" },
];

const rightsText = {
  en: "All rights reserved.",
  fr: "Tous droits reservés.",
};

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-400 sm:flex-row lg:px-8">
        <p>
          {new Date().getFullYear()} Ibrahim Balde. {rightsText[lang]}
        </p>
        <ul className="flex items-center gap-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-300"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
