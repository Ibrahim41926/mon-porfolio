"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Lang } from "../page";
import { withBasePath } from "../lib/basePath";

type LocalizedText = {
  en: string;
  fr: string;
};

type GalleryItem = {
  src: string;
  description: LocalizedText;
};

type Project = {
  title: string;
  description: LocalizedText;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  gallery?: GalleryItem[];
  exportPdf?: string;
};

type ProjectsProps = {
  lang: Lang;
};

const projects: Project[] = [
  {
    title: "GAI Development",
    description: {
      en: "JavaFX desktop application for managing car imports from Canada to Guinea: vehicle CRUD, automatic cost/profit calculations (CAD <-> GNF), partner tracking with benefit sharing, dashboard, and local SQLite persistence.",
      fr: "Application desktop JavaFX de gestion d'importation de voitures Canada -> Guinee : CRUD des vehicules, calcul automatique des couts/marges (CAD <-> GNF), suivi des associes avec repartition des benefices, tableau de bord et persistance SQLite locale.",
    },
    tech: ["Java 21", "JavaFX", "SQLite", "MVC", "DAO"],
    image: "/Import_export.png",
    githubUrl: "https://github.com/Ibrahim41926/import-voitures-guinee-desktop.git",
    gallery: [
      {
        src: "/Screenshoots GAI/Tableau de Bord GAI.jpg",
        description: {
          en: "Main dashboard of the GAI application.",
          fr: "Tableau de bord principal de l'application GAI.",
        },
      },
      {
        src: "/Screenshoots GAI/Ajouter une voiture.jpg",
        description: {
          en: "Vehicle creation screen.",
          fr: "Ecran d'ajout d'une voiture.",
        },
      },
      {
        src: "/Screenshoots GAI/Ajout d'un Associé.jpg",
        description: {
          en: "Partner creation form.",
          fr: "Formulaire d'ajout d'un associe exportateur.",
        },
      },
      {
        src: "/Screenshoots GAI/Gestion Taux d'echange.jpg",
        description: {
          en: "Exchange rate management used for calculations.",
          fr: "Gestion des taux d'echange utilises pour les calculs.",
        },
      },
      {
        src: "/Screenshoots GAI/Gestion base de données.jpg",
        description: {
          en: "Database management view.",
          fr: "Vue de gestion de la base de données.",
        },
      },
    ],
    exportPdf: "/Screenshoots GAI/voitures-2026-02-18 (5) (1).pdf",
  },
  {
    title: "Showroom 3D",
    description: {
      en: "Node.js + Express web app for AI showroom visuals (OpenAI gpt-4o-mini prompt reformulation + Stability SD3 image generation/editing), with user accounts, prompt/image history, Stripe subscriptions, and email delivery (SendGrid with SMTP/Nodemailer fallback).",
      fr: "Application web Node.js + Express pour generer des visuels showroom avec IA (reformulation OpenAI gpt-4o-mini + generation/modification d'images Stability SD3), avec comptes utilisateurs, historique des prompts/images, abonnements Stripe et envoi d'e-mails (SendGrid avec fallback SMTP/Nodemailer).",
    },
    tech: ["Node.js", "Express", "SQLite", "HTML/CSS/JS", "OpenAI", "Stability AI SD3", "Stripe", "SendGrid", "Nodemailer"],
    image: "/ShowroomAi.png",
    gallery: [
      {
        src: "/ScreenshhotsShowroomAi/Creation de Compte.jpg",
        description: { en: "Account creation page.", fr: "Creation de compte utilisateur." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Page de connexion.jpg",
        description: { en: "Login page.", fr: "Page de connexion de la plateforme." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Dashbord.jpg",
        description: { en: "Main dashboard.", fr: "Dashboard principal." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Page mon profil.jpg",
        description: { en: "User profile page.", fr: "Page de profil utilisateur." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Page Abonnement.jpg",
        description: { en: "Subscription management.", fr: "Gestion des abonnements." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Onglet Historique de site.jpg",
        description: { en: "Prompt and generation history.", fr: "Historique des actions et generations." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Reformulation Prompt fait par OpenAI.jpg",
        description: { en: "Prompt reformulation with OpenAI.", fr: "Reformulation intelligente des prompts." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Resultat de prompt.jpg",
        description: { en: "Generated result from a prompt.", fr: "Resultat genere a partir d'un prompt." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Exemple de resultat.jpg",
        description: { en: "Generated result example 1.", fr: "Exemple de resultat 1." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Exemple de resultat 2.jpg",
        description: { en: "Generated result example 2.", fr: "Exemple de resultat 2." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Exemple de  resultat .jpg",
        description: { en: "Another generated result example.", fr: "Autre exemple de resultat." },
      },
      {
        src: "/ScreenshhotsShowroomAi/Autres exeples de resultat.jpg",
        description: { en: "Additional generated results.", fr: "Collection d'autres resultats generes." },
      },
    ],
    githubUrl: "https://github.com/ouryba-49/GenAi.git",
  },
  {
    title: "MuseumStats",
    description: {
      en: "Java application for visualizing museums in France (Ministry of Culture dataset): filtering by region/theme/accessibility, visual analytics, and HTML/PDF reporting, with JUnit backend tests and a dedicated VisuStat engine.",
      fr: "Application Java de visualisation des musées de France (données Ministere de la Culture) : exploration par filtres (région, thématique, accessibilité), analyses visuelles et génération de rapports HTML/PDF, avec tests backend JUnit et moteur VisuStat.",
    },
    tech: ["Java", "Swing", "VisuStat", "JUnit 4", "Apache Batik", "JSON/CSV", "Reporting HTML/PDF"],
    image: "/LogoMuseumstats.jpg",
    gallery: [
      {
        src: "/Sreenshoots MuseumStats/tableau Principale.jpg",
        description: {
          en: "Main dashboard of MuseumStats.",
          fr: "Tableau de bord principal de MuseumStats.",
        },
      },
      {
        src: "/Sreenshoots MuseumStats/Application de filtre.jpg",
        description: {
          en: "Filtering museums by multiple criteria.",
          fr: "Filtrage des musées selon plusieurs critères.",
        },
      },
      {
        src: "/Sreenshoots MuseumStats/Apercu du Diagramme.jpg",
        description: {
          en: "Chart preview for analytics.",
          fr: "Apercu des diagrammes pour l'analyse.",
        },
      },
      {
        src: "/Sreenshoots MuseumStats/Choix des elements à appliquer dans le rapport.jpg",
        description: {
          en: "Selecting sections to include in the report.",
          fr: "Sélection des éléments à inclure dans le rapport.",
        },
      },
    ],
    exportPdf: "/Sreenshoots MuseumStats/rapport.html.pdf",
    githubUrl: "#",
  },
];

const ui = {
  en: {
    sectionTitle: "Projects",
    liveDemo: "Live Demo",
    github: "GitHub",
    close: "Close",
    clickToZoom: "Click a screenshot to open it in full size.",
    generatedPdf: "Generated PDF document",
    previous: "Previous",
    next: "Next",
  },
  fr: {
    sectionTitle: "Projets",
    liveDemo: "Demo",
    github: "GitHub",
    close: "Fermer",
    clickToZoom: "Cliquez sur une capture pour l'afficher en grand.",
    generatedPdf: "Document PDF généré",
    previous: "Precedent",
    next: "Suivant",
  },
};

export default function Projects({ lang }: ProjectsProps) {
  const [activeGalleryProjectTitle, setActiveGalleryProjectTitle] = useState<string | null>(null);
  const [activeGalleryImageIndex, setActiveGalleryImageIndex] = useState<number | null>(null);

  const activeGalleryProject = useMemo(
    () => projects.find((project) => project.title === activeGalleryProjectTitle),
    [activeGalleryProjectTitle]
  );
  const activeGalleryItems = activeGalleryProject?.gallery ?? [];

  const encodeAssetPath = (path: string) =>
    path
      .split("/")
      .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
      .join("/");

  const toPublicAssetPath = (path: string) => withBasePath(encodeAssetPath(path));

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{ui[lang].sectionTitle}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
          >
            <div className="relative h-44 w-full border-b border-zinc-800">
              <Image
                src={toPublicAssetPath(project.image)}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-zinc-300 leading-7">{project.description[lang]}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((stack) => (
                  <li
                    key={stack}
                    className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200"
                  >
                    {stack}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                {project.gallery ? (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveGalleryProjectTitle(project.title);
                      setActiveGalleryImageIndex(null);
                    }}
                    className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
                  >
                    {ui[lang].liveDemo}
                  </button>
                ) : (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
                  >
                    {ui[lang].liveDemo}
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
                >
                  {ui[lang].github}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeGalleryProject?.gallery ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => {
            setActiveGalleryProjectTitle(null);
            setActiveGalleryImageIndex(null);
          }}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-950 p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {activeGalleryProject.title} - {ui[lang].liveDemo}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setActiveGalleryProjectTitle(null);
                  setActiveGalleryImageIndex(null);
                }}
                className="rounded-lg border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white"
              >
                {ui[lang].close}
              </button>
            </div>

            <p className="mb-4 text-sm text-zinc-400">{ui[lang].clickToZoom}</p>

            <div className="grid gap-5 md:grid-cols-2">
              {activeGalleryProject.gallery.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveGalleryImageIndex(index)}
                  className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 text-left transition hover:border-cyan-500/70"
                >
                  <div className="relative h-56 w-full bg-zinc-950">
                    <Image
                      src={toPublicAssetPath(item.src)}
                      alt={item.description[lang]}
                      fill
                      className="object-contain p-2 transition duration-200 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="p-4 text-sm leading-6 text-zinc-200">{item.description[lang]}</p>
                </button>
              ))}
            </div>

            {activeGalleryProject.exportPdf ? (
              <div className="mt-6">
                <h4 className="mb-3 text-base font-semibold text-white">{ui[lang].generatedPdf}</h4>
                <div className="h-[65vh] overflow-hidden rounded-xl border border-zinc-800 bg-white">
                  <iframe
                    src={toPublicAssetPath(activeGalleryProject.exportPdf)}
                    title={`${activeGalleryProject.title} export PDF`}
                    className="h-full w-full"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {activeGalleryProject?.gallery && activeGalleryImageIndex !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveGalleryImageIndex(null)}
        >
          <div
            className="w-full max-w-6xl rounded-2xl border border-zinc-700 bg-zinc-950 p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm text-zinc-300">
                {activeGalleryImageIndex + 1}/{activeGalleryItems.length}
              </p>
              <button
                type="button"
                onClick={() => setActiveGalleryImageIndex(null)}
                className="rounded-lg border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white"
              >
                {ui[lang].close}
              </button>
            </div>

            <div className="relative h-[70vh] w-full rounded-xl bg-zinc-900">
              <Image
                src={toPublicAssetPath(activeGalleryItems[activeGalleryImageIndex].src)}
                alt={activeGalleryItems[activeGalleryImageIndex].description[lang]}
                fill
                className="object-contain p-3"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveGalleryImageIndex((prev) =>
                    prev === null
                      ? 0
                      : (prev - 1 + activeGalleryItems.length) % activeGalleryItems.length
                  )
                }
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
              >
                {ui[lang].previous}
              </button>
              <p className="text-center text-sm text-zinc-200">
                {activeGalleryItems[activeGalleryImageIndex].description[lang]}
              </p>
              <button
                type="button"
                onClick={() =>
                  setActiveGalleryImageIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % activeGalleryItems.length
                  )
                }
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
              >
                {ui[lang].next}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
