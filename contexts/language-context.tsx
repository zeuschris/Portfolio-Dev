"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Hero
    "hero.title1": "Desarrollador Web de IA",
    "hero.title2": "Creador de Micro-SaaS",
    "hero.description":
      "Desarrollador Full Stack especializado en la creación de aplicaciones impulsadas por Inteligencia Artificial y plataformas Micro-SaaS escalables. Utilizando Next.js, React y TypeScript. Al integrar flujos de trabajo avanzados con agentes de IA, optimizo los ciclos de desarrollo y entrego software listo para producción enfocado en resolver necesidades reales.",
    "hero.cta": "Ver proyectos",

    // About
    "about.title": "Sobre mí",
    "about.description": "Con más de 5 años creando plataformas Micro-SaaS e iniciativas de IA. Optimizo ciclos de entrega con agentes y herramientas de desarrollo asistido, entregando productos escalables, eficientes y listos para el mercado.",
    "about.skill1.title": "Desarrollo",
    "about.skill1.description": "Full-Stack con Next.js, React y TypeScript para soluciones de IA escalables.",
    "about.skill2.title": "Diseño",
    "about.skill2.description": "Interfaces accesibles y modernas para UX de herramientas IA, con sistemas de componentes modulares y Dark Mode.",
    "about.skill3.title": "Performance",
    "about.skill3.description": "SSR e ISR en Next.js para cargas rápidas, optimizando Web Vitals, SEO y retención.",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.description": "Una selección de mis trabajos más recientes y proyectos personales",

    // Contact
    "contact.title": "¿Trabajamos juntos?",
    "contact.description":
      "Estoy disponible para proyectos freelance y oportunidades de colaboración. ¡Hablemos sobre tu próxima idea!",
    "contact.cta": "Enviar mensaje",
    "contact.footer": "Todos los derechos reservados.",
  },
  en: {
    // Hero
    "hero.title1": "AI Web Developer",
    "hero.title2": "Micro-SaaS Creator",
    "hero.description":
      "Full Stack developer specialized in building AI-powered applications and scalable Micro-SaaS platforms. Using Next.js, React, and TypeScript. By integrating advanced AI agent workflows, I optimize development cycles and deliver production-ready software focused on solving real needs.",
    "hero.cta": "View projects",

        // About
    "about.title": "About Me",
    "about.description": "Over 5 years building Micro-SaaS and AI-driven products. I streamline delivery cycles with assisted development tools, providing scalable, efficient solutions designed for market impact.",
    "about.skill1.title": "Development",
    "about.skill1.description": "Specialized in React and WordPress.",
    "about.skill2.title": "Design",
    "about.skill2.description": "Creating intuitive and accessible interfaces with a focus on exceptional user experience, using modern design principles and scalable component systems.",
    "about.skill3.title": "Performance",
    "about.skill3.description": "Building fast web applications using advanced techniques: code splitting, lazy loading, render optimization, and Web Vitals best practices for smooth experiences.",

    // Projects
    "projects.title": "Featured Projects",
    "projects.description": "A selection of my most recent work and personal projects",

    // Contact
    "contact.title": "Let's work together?",
    "contact.description":
      "I'm available for freelance projects and collaboration opportunities. Let's talk about your next idea!",
    "contact.cta": "Send message",
    "contact.footer": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}