"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import type { Lang } from "../page";

type ContactProps = {
  lang: Lang;
};

const content: Record<Lang, { title: string; subtitle: string; firstName: string; lastName: string; phone: string; email: string; purpose: string; purposePlaceholder: string; send: string; sending: string; success: string; required: string }> = {
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

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-zinc-400">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-[#0A66C2]">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-zinc-200">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-[#25D366]">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const contacts = [
  { label: "Email", href: "mailto:ibrahbalde41926@gmail.com", value: "ibrahbalde41926@gmail.com", Icon: IconEmail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-balde-304258383", value: "www.linkedin.com/in/ibrahim-balde-304258383", Icon: IconLinkedIn },
  { label: "GitHub", href: "https://github.com/ibrahim41926", value: "github.com/ibrahim41926", Icon: IconGitHub },
  { label: "WhatsApp", href: "https://wa.me/33669650414", value: "Envoyer un message", Icon: IconWhatsApp },
];

export default function Contact({ lang }: ContactProps) {
  const [state, handleSubmit] = useForm("mjgjzayn");
  const [toastVisible, setToastVisible] = useState(false);
  const t = content[lang];

  useEffect(() => {
    if (!state.succeeded) return;
    const show = setTimeout(() => setToastVisible(true), 0);
    const hide = setTimeout(() => setToastVisible(false), 5000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, [state.succeeded]);

  return (
    <>
      {toastVisible ? (
        <div className="fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 rounded-xl border border-cyan-400/30 bg-zinc-900 px-6 py-3 text-sm font-medium text-cyan-300 shadow-lg">
          ✓ {t.success}
        </div>
      ) : null}
      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t.title}</h2>
          <p className="mt-4 text-zinc-300">{t.subtitle}</p>

          <ul className="mt-6 space-y-3">
            {contacts.map(({ label, href, value, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 text-zinc-200 transition hover:text-cyan-300"
                >
                  <Icon />
                  <span className="text-sm sm:text-base">{value}</span>
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
    </>
  );
}
