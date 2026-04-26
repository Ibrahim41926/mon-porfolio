"use client";

import { useForm, ValidationError } from "@formspree/react";
import type { Lang } from "../page";

type ContactProps = {
  lang: Lang;
};

const content = {
  en: {
    title: "Contact",
    subtitle: "Open to internships, apprenticeships, and collaboration on software projects.",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone",
    email: "Email",
    purpose: "Purpose",
    purposePlaceholder: "Tell me about your project, internship offer, collaboration...",
    send: "Send",
    sending: "Sending...",
    success: "Message sent! I will get back to you as soon as possible.",
    required: "This field is required.",
  },
  fr: {
    title: "Contact",
    subtitle: "Ouvert aux stages, à l'alternance et aux collaborations sur des projets logiciels.",
    firstName: "Prénom",
    lastName: "Nom",
    phone: "Téléphone",
    email: "Email",
    purpose: "Objet",
    purposePlaceholder: "Parlez-moi de votre projet, offre de stage, collaboration...",
    send: "Envoyer",
    sending: "Envoi en cours...",
    success: "Message envoyé ! Je vous répondrai dès que possible.",
    required: "Ce champ est requis.",
  },
};

const contacts = [
  { label: "Email", href: "mailto:ibrahbalde41926@gmail.com", value: "ibrahbalde41926@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-balde-304258383", value: "www.linkedin.com/in/ibrahim-balde-304258383" },
  { label: "GitHub", href: "https://github.com/ibrahim41926", value: "github.com/ibrahim41926" },
];

export default function Contact({ lang }: ContactProps) {
  const [state, handleSubmit] = useForm("mjgjzayn");
  const t = content[lang];

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.title}</h2>
        <p className="mt-4 text-zinc-300">{t.subtitle}</p>

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

        <div className="mt-10 border-t border-zinc-800 pt-10">
          {state.succeeded ? (
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-5 text-cyan-300">
              {t.success}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-zinc-400">{t.firstName}</label>
                <input
                  type="text"
                  name="prénom"
                  required
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
                <ValidationError field="prénom" errors={state.errors} className="text-xs text-red-400" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-zinc-400">{t.lastName}</label>
                <input
                  type="text"
                  name="nom"
                  required
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
                <ValidationError field="nom" errors={state.errors} className="text-xs text-red-400" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-zinc-400">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
                <ValidationError field="email" errors={state.errors} className="text-xs text-red-400" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-zinc-400">{t.phone}</label>
                <input
                  type="tel"
                  name="téléphone"
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-sm text-zinc-400">{t.purpose}</label>
                <textarea
                  name="objet"
                  required
                  rows={5}
                  placeholder={t.purposePlaceholder}
                  className="resize-none rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
                <ValidationError field="objet" errors={state.errors} className="text-xs text-red-400" />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300 disabled:opacity-50"
                >
                  {state.submitting ? t.sending : t.send}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
