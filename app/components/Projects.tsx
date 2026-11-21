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
  image?: string;
  badge?: string;
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
    title: "SmartCarbure",
    description: {
      en: "Master 1 MIAGE team project (5 developers, real client, Oct.–Dec. 2026): web app to find the cheapest and/or nearest fuel stations from official French open data, with geolocated, city and route search, Leaflet maps, city/department comparison and CSV export. My role: integration of the public fuel price API (paginated HTTP client, timeouts, JSON-to-domain mapping), station details (REST endpoint + React page with map) and fill-up savings calculation, centralized error handling (404, 503), front/back REST API contract and documentation, team coordination and pull request reviews. Backend test coverage: 89%.",
      fr: "Projet d'équipe de Master 1 MIAGE (5 développeurs, client réel, oct.–déc. 2026) : application web pour trouver les stations-service les moins chères et/ou les plus proches à partir des données ouvertes de l'État, avec recherche géolocalisée, par ville ou sur trajet, cartes Leaflet, comparaison entre zones et export CSV. Mon rôle : intégration de l'API publique des prix des carburants (client HTTP avec pagination, délais d'attente, conversion JSON en modèle métier), fiche station (endpoint REST + page React avec carte) et calcul d'économie sur un plein, gestion centralisée des erreurs (404, 503), contrat d'API REST front/back et documentation, coordination de l'équipe et revue des pull requests. Couverture de tests backend : 89 %.",
    },
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React",
      "Leaflet",
      "Docker",
      "JUnit 5",
      "Mockito",
      "Vitest",
      "GitHub Actions",
      "UML",
    ],
    image: "/projets/smartcarbure/resultats.jpg",
    badge: "M1 MIAGE",
    gallery: [
      {
        src: "/projets/smartcarbure/accueil.jpg",
        description: {
          en: "Home page: search by city, postcode or geolocation, with fuel type and radius.",
          fr: "Page d'accueil : recherche par ville, code postal ou géolocalisation, avec carburant et rayon.",
        },
      },
      {
        src: "/projets/smartcarbure/resultats.jpg",
        description: {
          en: "Results around the user's position: sorting by price or distance, CSV export, and Leaflet map.",
          fr: "Résultats autour de la position : tri par prix ou distance, export CSV et carte Leaflet.",
        },
      },
      {
        src: "/projets/smartcarbure/fiche-station.jpg",
        description: {
          en: "Station details: price per fuel with update time, and fill-up savings calculator.",
          fr: "Fiche station : prix par carburant avec date de mise à jour et calcul d'économie sur un plein.",
        },
      },
      {
        src: "/projets/smartcarbure/trajet.jpg",
        description: {
          en: "Route search: draggable markers, route drawn on the map, and cheapest stations along the way.",
          fr: "Recherche sur trajet : marqueurs déplaçables, itinéraire tracé et stations les moins chères sur la route.",
        },
      },
      {
        src: "/projets/smartcarbure/comparer.jpg",
        description: {
          en: "Comparing average prices between two departments.",
          fr: "Comparaison des prix moyens entre deux départements.",
        },
      },
      {
        src: "/projets/smartcarbure/architecture.png",
        description: { en: "Application architecture.", fr: "Architecture de l'application." },
      },
      {
        src: "/projets/smartcarbure/cas_utilisation.png",
        description: { en: "UML use case diagram.", fr: "Diagramme de cas d'utilisation UML." },
      },
      {
        src: "/projets/smartcarbure/classes.png",
        description: { en: "UML class diagram.", fr: "Diagramme de classes UML." },
      },
      {
        src: "/projets/smartcarbure/sequence_recherche.png",
        description: { en: "Sequence diagram: station search.", fr: "Diagramme de séquence : recherche de stations." },
      },
      {
        src: "/projets/smartcarbure/sequence_trajet.png",
        description: { en: "Sequence diagram: search along a route.", fr: "Diagramme de séquence : recherche sur un trajet." },
      },
      {
        src: "/projets/smartcarbure/deploiement.png",
        description: { en: "Docker deployment diagram.", fr: "Diagramme de déploiement Docker." },
      },
    ],
    githubUrl: "https://github.com/AdiyoFouad/SmartCarbure",
  },
  {
    title: "Tè Fa",
    description: {
      en: "Collaborative map of power outages in Conakry (\"Tè fa\" is what people say when power comes back). Residents report whether power is off or back in their neighborhood, and the map shows each of the 168 neighborhoods' status in real time (OpenStreetMap boundaries). Status computed from recent reports weighted by age and author reliability, links to EDG power lines to flag likely outages on the same line, neighborhood follow-up with push notifications, offline last-known state, and a demo mode that runs without a server. Supabase backend with RLS, Realtime, server-side rate limiting and pg_cron jobs.",
      fr: "Carte collaborative des coupures d'électricité à Conakry (« Tè fa », c'est ce qu'on dit quand le courant revient). Les habitants signalent si le courant est coupé ou revenu dans leur quartier, et la carte affiche l'état des 168 quartiers en temps réel (contours OpenStreetMap). État calculé à partir des signalements récents pondérés par leur âge et la fiabilité de leur auteur, rattachement aux lignes EDG pour signaler les coupures probables sur la même ligne, suivi de quartiers avec notifications push, dernier état connu hors connexion et mode démo sans serveur. Backend Supabase avec RLS, temps réel, limitation des signalements côté serveur et tâches pg_cron.",
    },
    tech: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "react-native-maps",
      "Supabase (PostgreSQL + RLS)",
      "Realtime",
      "pg_cron",
      "OpenStreetMap",
      "Jest",
    ],
    image: "/projets/tefa/carte.jpg",
    badge: "Mobile",
    gallery: [
      {
        src: "/projets/tefa/carte.jpg",
        description: {
          en: "Map of Conakry neighborhoods with the status legend (on, off, unstable, no info, likely on the same EDG line).",
          fr: "Carte des quartiers de Conakry avec la légende des états (présent, coupé, instable, pas d'info, probable sur la même ligne EDG).",
        },
      },
      {
        src: "/projets/tefa/fiche-quartier.jpg",
        description: {
          en: "Neighborhood details: current status, EDG lines feeding it, and neighborhoods on the same line.",
          fr: "Fiche d'un quartier : état actuel, lignes EDG qui l'alimentent et quartiers sur la même ligne.",
        },
      },
      {
        src: "/projets/tefa/signaler.jpg",
        description: {
          en: "Reporting screen: power off or power back.",
          fr: "Écran de signalement : courant coupé ou revenu.",
        },
      },
      {
        src: "/projets/tefa/courant-coupe.jpg",
        description: {
          en: "Confirmation after reporting an outage.",
          fr: "Confirmation après le signalement d'une coupure.",
        },
      },
      {
        src: "/projets/tefa/courant-revenu.jpg",
        description: {
          en: "Confirmation after reporting that power is back.",
          fr: "Confirmation après le signalement du retour du courant.",
        },
      },
    ],
    githubUrl: "https://github.com/Ibrahim41926/T--Fa",
  },
  {
    title: "GrudgeVault",
    description: {
      en: "Private, humor-tinged grudge journal: log grievances with evidence and scheduled reminders whose text is rewritten by AI (OpenAI) in a light, biting tone, with strict safety guardrails against threats or insults. Full-stack multi-platform product: Next.js web dashboard and Expo/React Native mobile app sharing a Supabase backend, plus a dedicated Fastify + Prisma API handling reminder cron jobs, GDPR-compliant account deletion, and JWT authentication with refresh-token session renewal (httpOnly cookie). Form validation with Zod.",
      fr: "Journal privé et humoristique de rancunes : consignez les torts avec preuves à l'appui et des rappels programmés dont le texte est reformulé par IA (OpenAI) sur un ton léger et piquant, avec des garde-fous stricts contre menaces et insultes. Produit full-stack multi-plateforme : dashboard web Next.js et application mobile Expo/React Native partageant un backend Supabase, complété par une API Fastify + Prisma dédiée qui gère les rappels programmés (cron), la suppression de compte conforme RGPD et l'authentification JWT avec renouvellement de session par refresh token (cookie httpOnly). Validation des formulaires avec Zod.",
    },
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Expo / React Native",
      "Node.js",
      "Fastify",
      "Prisma",
      "Zod",
      "Supabase (PostgreSQL + RLS)",
      "OpenAI API",
      "Resend",
    ],
    image: "/Screenshoot grudgevault/WhatsApp Image 2026-08-25 at 17.31.50.jpeg",
    gallery: [
      {
        src: "/Screenshoot grudgevault/WhatsApp Image 2026-08-25 at 17.31.50 (1).jpeg",
        description: {
          en: "Email verification screen after sign-up.",
          fr: "Écran de vérification d'email après inscription.",
        },
      },
      {
        src: "/Screenshoot grudgevault/WhatsApp Image 2026-08-25 at 17.31.50 (2).jpeg",
        description: {
          en: "Home dashboard: grudge count, emotional damage index, active reminders, and top offenders.",
          fr: "Tableau de bord principal : nombre de rancunes, indice de dégâts émotionnels, rappels actifs et top traîtres.",
        },
      },
      {
        src: "/Screenshoot grudgevault/WhatsApp Image 2026-08-25 at 17.31.50 (3).jpeg",
        description: {
          en: "Creating a scheduled reminder (frequency and start date) linked to a grudge.",
          fr: "Création d'un rappel programmé (fréquence et date de départ) lié à une rancune.",
        },
      },
      {
        src: "/Screenshoot grudgevault/WhatsApp Image 2026-08-25 at 17.31.51.jpeg",
        description: {
          en: "About page presenting the app and its creator.",
          fr: "Page À propos présentant l'application et son créateur.",
        },
      },
      {
        src: "/Screenshoot grudgevault/WhatsApp Image 2026-08-25 at 17.31.51 (1).jpeg",
        description: {
          en: "Settings page: profile, dark mode, and email reminder notifications.",
          fr: "Page Paramètres : profil, mode sombre et notifications de rappel par email.",
        },
      },
      {
        src: "/Screenshoot grudgevault/WhatsApp Image 2026-08-25 at 17.32.05.jpeg",
        description: {
          en: "Notification center with reminders rewritten by AI.",
          fr: "Centre de notifications avec rappels reformulés par IA.",
        },
      },
    ],
    demoUrl: "https://grudgevault.vercel.app",
    githubUrl: "https://github.com/Ibrahim41926/grudgevault",
  },
  {
    title: "InnovRental - Stage InnovQube",
    description: {
      en: "Internship at InnovQube (April–June 2026): feature development on InnovRental, a Laravel rental management platform, from user stories tracked in OpenProject. Designed the interfaces of the property override screen, and shipped work through GitLab merge requests with a multi-AI-assisted code review process.",
      fr: "Stage chez InnovQube (avril–juin 2026) : développement de fonctionnalités sur InnovRental, plateforme Laravel de gestion locative, à partir de user stories suivies dans OpenProject. Conception des interfaces de l'écran de surcharge (override) des propriétés, livrées par merge requests GitLab avec une revue de code assistée par plusieurs IA.",
    },
    tech: ["Laravel", "PHP", "GitLab", "OpenProject"],
    image: "/Screenshots InnovGuide/innovqube_logo.jpg",
    badge: "Stage",
  },
  {
    title: "Réservations Immobilières",
    description: {
      en: "Laravel 12 property booking application: client area (sign-up with email verification, property catalog, Livewire booking with overlap prevention, personal bookings, profile management) and a Filament v5 admin panel restricted to admins, with statistics dashboard and CRUD for properties, users/roles and bookings.",
      fr: "Application Laravel 12 de réservation immobilière : espace client (inscription avec vérification email, catalogue de propriétés, réservation Livewire avec prévention des chevauchements, suivi des réservations, gestion du profil) et panneau d'administration Filament v5 réservé aux admins, avec tableau de bord statistique et CRUD propriétés, utilisateurs/rôles et réservations.",
    },
    tech: ["Laravel", "PHP", "Livewire", "Filament", "Tailwind CSS", "MySQL"],
    image: "/projets/immobilier/admin-dashboard.jpg",
    gallery: [
      {
        src: "/projets/immobilier/client-dashboard.jpg",
        description: { en: "Client dashboard after login.", fr: "Tableau de bord côté client après connexion." },
      },
      {
        src: "/projets/immobilier/proprietes.jpg",
        description: { en: "Catalog of available properties.", fr: "Catalogue des propriétés disponibles." },
      },
      {
        src: "/projets/immobilier/mes-reservations.jpg",
        description: { en: "The user's bookings.", fr: "Réservations de l'utilisateur connecté." },
      },
      {
        src: "/projets/immobilier/admin-dashboard.jpg",
        description: { en: "Filament admin dashboard with statistics.", fr: "Tableau de bord admin Filament avec statistiques." },
      },
      {
        src: "/projets/immobilier/admin-proprietes.jpg",
        description: { en: "Property management (admin).", fr: "Gestion des propriétés côté admin." },
      },
      {
        src: "/projets/immobilier/admin-reservations.jpg",
        description: { en: "Booking management (admin).", fr: "Gestion des réservations côté admin." },
      },
      {
        src: "/projets/immobilier/admin-utilisateurs.jpg",
        description: { en: "User and role management.", fr: "Gestion des utilisateurs et des rôles." },
      },
    ],
    githubUrl: "https://github.com/Ibrahim41926/gestion-reservations-immobilieres",
  },
  {
    title: "Centre de Congrès",
    description: {
      en: "Academic pair project: management web app for a convention center (spaces, bookings, events, equipment, services, rental rules and constraints), built model-first from UML diagrams (use cases, classes, sequences, states) and generated with BESSER, then adapted. React + TypeScript frontend and FastAPI REST CRUD API.",
      fr: "Projet académique en binôme : application web de gestion d'un centre de congrès (espaces, réservations, événements, matériel, prestations, règles de location et contraintes), conçue à partir de diagrammes UML (cas d'utilisation, classes, séquences, états) et générée avec BESSER, puis adaptée. Frontend React + TypeScript et API REST CRUD FastAPI.",
    },
    tech: ["React", "TypeScript", "Vite", "Python", "FastAPI", "SQLAlchemy", "SQLite", "UML", "BESSER", "Docker"],
    image: "/projets/congres/centre.png",
    gallery: [
      {
        src: "/projets/congres/centre.png",
        description: { en: "Convention center management.", fr: "Gestion du centre de congrès." },
      },
      {
        src: "/projets/congres/evenements.png",
        description: { en: "Event management.", fr: "Gestion des événements." },
      },
      {
        src: "/projets/congres/reservations.png",
        description: { en: "Booking of center spaces.", fr: "Réservation des éléments du centre." },
      },
      {
        src: "/projets/congres/materiel.png",
        description: { en: "Equipment management.", fr: "Gestion du matériel." },
      },
      {
        src: "/projets/congres/diagramme-classe.png",
        description: { en: "UML class diagram.", fr: "Diagramme de classes UML." },
      },
      {
        src: "/projets/congres/cas-utilisation.png",
        description: { en: "UML use case diagram.", fr: "Diagramme de cas d'utilisation UML." },
      },
    ],
    githubUrl: "https://github.com/Ibrahim41926/gestion-centre-congres",
  },
  {
    title: "GAI Development",
    description: {
      en: "JavaFX desktop application for managing car imports from Canada to Guinea: vehicle CRUD, automatic cost, profit and margin calculations with CAD <-> GNF conversion, profit sharing between partners, dashboard, PDF report export and a Windows installer. Local SQLite persistence with MVC / DAO architecture.",
      fr: "Application desktop JavaFX de gestion d'importation de véhicules Canada -> Guinée : CRUD des véhicules, calcul automatique des coûts, bénéfices et marges avec conversion CAD <-> GNF, répartition des bénéfices entre associés, tableau de bord, export des rapports en PDF et installateur Windows. Persistance SQLite locale, architecture MVC / DAO.",
    },
    tech: ["Java 21", "JavaFX", "SQLite", "Maven", "PDFBox", "MVC", "DAO"],
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
    githubUrl: "https://github.com/Ibrahim41926/museus-stats",
  },
  {
    title: "NetworkBN",
    description: {
      en: "Master 1 pair project (Sept.–Nov. 2026): Android graphical editor for a home network in MVVM architecture. Custom View drawing on a floor plan, touch gestures (long press to add labeled devices, drag to connect or move), loop and duplicate prevention in the model, JSON save, PNG export, and FR/EN interface.",
      fr: "Projet de M1 en binôme (sept.–nov. 2026) : éditeur graphique de réseau domestique sur Android en architecture MVVM. Dessin dans une View personnalisée sur un plan, gestes tactiles (appui long pour ajouter un objet étiqueté, glissement pour connecter ou déplacer), refus des boucles et doublons dans le modèle, sauvegarde JSON, export PNG et interface FR/EN.",
    },
    tech: ["Kotlin", "Android", "MVVM", "LiveData", "JUnit"],
    image: "/projets/networkbn/plan.png",
    githubUrl: "https://github.com/Ibrahim41926/networkbn",
  },
  {
    title: "Mots Croisés JavaFX",
    description: {
      en: "Interactive crossword game in JavaFX (L3 ISTIC pair project): random grids loaded from a MySQL database, keyboard navigation, real-time validation, timer and statistics, plus a turn-based multiplayer mode with scores and live ranking. Custom CSS interface with animations.",
      fr: "Jeu de mots croisés interactif en JavaFX (projet en binôme, L3 ISTIC) : grilles aléatoires chargées depuis une base MySQL, navigation au clavier, validation en temps réel, chronomètre et statistiques, et mode multijoueur tour par tour avec scores et classement en direct. Interface CSS personnalisée avec animations.",
    },
    tech: ["Java", "JavaFX", "MySQL", "JDBC", "CSS"],
    image: "/projets/mots-croises/interface.jpg",
    githubUrl: "https://github.com/Ibrahim41926/TP_ISTIC_PRA",
  },
  {
    title: "Portfolio Miss Guinée France",
    description: {
      en: "Editorial single-page portfolio built for a Miss Guinée France 2027 candidate: black-and-white design, chapter-based photo galleries with a lightbox, and all content centralized in a data file so it can be updated without touching the HTML. No framework, deployed on Vercel.",
      fr: "Portfolio éditorial d'une page réalisé pour une candidate Miss Guinée France 2027 : design noir et blanc, galeries photo par chapitre avec visionneuse, et contenus centralisés dans un fichier de données pour être modifiés sans toucher au HTML. Sans framework, déployé sur Vercel.",
    },
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: "/projets/portfolio-ftab/og-image.png",
    badge: "Client",
    demoUrl: "https://portfolioftabint.vercel.app",
    githubUrl: "https://github.com/Ibrahim41926/Portfolioftabint",
  },
  {
    title: "ePortfolio Aissatou Yero Bah",
    description: {
      en: "Single-page ePortfolio built for a first-year AES student at Université Rennes 2: presentation, academic timeline from Guinea to Rennes, and a reflective grid on a field internship. Pure HTML/CSS, ready for GitHub Pages.",
      fr: "ePortfolio d'une page réalisé pour une étudiante en L1 AES à l'Université Rennes 2 : présentation, timeline du parcours de la Guinée à Rennes et grille de réflexivité sur un stage de terrain. HTML/CSS pur, prêt pour GitHub Pages.",
    },
    tech: ["HTML", "CSS", "GitHub Pages"],
    badge: "Client",
    githubUrl: "https://github.com/Ibrahim41926/potfolio_aissatou_yero_bah",
  },
];

const ui = {
  en: {
    sectionTitle: "Projects",
    liveDemo: "Live Demo",
    screenshots: "Screenshots",
    github: "GitHub",
    close: "Close",
    clickToZoom: "Click a screenshot to open it in full size.",
    generatedPdf: "Generated PDF document",
    previous: "Previous",
    next: "Next",
  },
  fr: {
    sectionTitle: "Projets",
    liveDemo: "Démo en ligne",
    screenshots: "Captures",
    github: "GitHub",
    close: "Fermer",
    clickToZoom: "Cliquez sur une capture pour l'afficher en grand.",
    generatedPdf: "Document PDF généré",
    previous: "Precedent",
    next: "Suivant",
  },
};

export default function Projects({ lang }: ProjectsProps) {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [activeGalleryProjectTitle, setActiveGalleryProjectTitle] = useState<string | null>(null);
  const [activeGalleryImageIndex, setActiveGalleryImageIndex] = useState<number | null>(null);

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filteredProjects = useMemo(
    () => (selectedTech ? projects.filter((p) => p.tech.includes(selectedTech)) : projects),
    [selectedTech]
  );

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

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedTech(null)}
          className={`rounded-lg border px-3 py-1 text-xs font-semibold transition ${
            selectedTech === null
              ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
              : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
          }`}
        >
          {lang === "en" ? "All" : "Tous"}
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => setSelectedTech(tech)}
            className={`rounded-lg border px-3 py-1 text-xs font-semibold transition ${
              selectedTech === tech
                ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60"
          >
            <div className="relative h-44 w-full border-b border-zinc-800">
              {project.image ? (
                <Image
                  src={toPublicAssetPath(project.image)}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-zinc-900">
                  <span className="text-4xl font-bold tracking-widest text-cyan-400/40">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
              {project.badge ? (
                <span className="absolute top-3 right-3 rounded-full bg-cyan-400 px-2.5 py-0.5 text-xs font-semibold text-zinc-950">
                  {project.badge}
                </span>
              ) : null}
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

              <div className="mt-6 flex flex-wrap gap-3">
                {project.gallery ? (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveGalleryProjectTitle(project.title);
                      setActiveGalleryImageIndex(null);
                    }}
                    className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
                  >
                    {ui[lang].screenshots}
                  </button>
                ) : null}

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      project.gallery
                        ? "rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                        : "rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
                    }
                  >
                    {ui[lang].liveDemo}
                  </a>
                ) : null}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
                  >
                    {ui[lang].github}
                  </a>
                ) : null}
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
                {activeGalleryProject.title} - {ui[lang].screenshots}
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
