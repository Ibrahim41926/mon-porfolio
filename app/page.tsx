"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import AnimatedSection from "./components/AnimatedSection";

export type Lang = "en" | "fr";
export type Theme = "dark" | "light";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.classList.toggle("theme-light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

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
      <ScrollProgress />
      <Navbar
        lang={lang}
        onChangeLanguage={setLang}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      />
      <main>
        <AnimatedSection>
          <Hero
            lang={lang}
            name="Ibrahim Balde"
            title={heroContent[lang].title}
            subtitle={heroContent[lang].subtitle}
          />
        </AnimatedSection>
        <AnimatedSection>
          <About lang={lang} />
        </AnimatedSection>
        <AnimatedSection>
          <Experience lang={lang} />
        </AnimatedSection>
        <AnimatedSection>
          <Education lang={lang} />
        </AnimatedSection>
        <AnimatedSection>
          <Languages lang={lang} />
        </AnimatedSection>
        <AnimatedSection>
          <Skills lang={lang} />
        </AnimatedSection>
        <AnimatedSection>
          <Projects lang={lang} />
        </AnimatedSection>
        <AnimatedSection>
          <Contact lang={lang} />
        </AnimatedSection>
      </main>
      <Footer lang={lang} />
      <BackToTop />
    </div>
  );
}
