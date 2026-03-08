"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export type Lang = "en" | "fr";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  const heroContent = {
    en: {
      title: "Full Stack Developer",
      subtitle: "Java, React, Python, APIs",
    },
    fr: {
      title: "Developpeur Full Stack",
      subtitle: "Java, React, Python, APIs",
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar lang={lang} onChangeLanguage={setLang} />
      <main>
        <Hero
          lang={lang}
          name="Ibrahim Balde"
          title={heroContent[lang].title}
          subtitle={heroContent[lang].subtitle}
        />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
