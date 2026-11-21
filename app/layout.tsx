import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibrahim Balde | Full Stack Developer",
  description: "Développeur full-stack Java · Spring Boot · React. Étudiant en Master 1 MIAGE à l'ISTIC (Université de Rennes), à la recherche d'un stage de 5 mois à partir d'avril 2027.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Ibrahim Balde | Full Stack Developer",
    description: "Développeur full-stack Java · Spring Boot · React. Étudiant en Master 1 MIAGE à l'ISTIC (Université de Rennes), à la recherche d'un stage de 5 mois à partir d'avril 2027.",
    type: "website",
    url: "https://ibrahim41926.github.io/mon-porfolio",
    images: [{ url: "https://ibrahim41926.github.io/mon-porfolio/ShowroomAi.png", width: 1200, height: 630, alt: "Ibrahim Balde Portfolio" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 antialiased`}>
        {children}
      </body>
    </html>
  );
}
