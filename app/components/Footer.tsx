import Image from "next/image";
import type { Lang } from "../page";

type FooterProps = {
  lang: Lang;
};

const socials = [
  { label: "GitHub", href: "https://github.com/ibrahim41926", logo: "/github-logo.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-balde-304258383", logo: "/linkedin-logo.avif" },
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
                className="opacity-70 transition hover:opacity-100"
                aria-label={social.label}
              >
                <Image src={social.logo} alt={social.label} width={22} height={22} className="h-5 w-5 object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
