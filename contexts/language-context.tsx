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
    "hero.title1": "Desarrollador",
    "hero.title2": "Frontend Creativo",
    "hero.description":
      "Desarrollador Full Stack con pasión por crear experiencias web interactivas y visualmente atractivas. Especializado en tecnologías como HTML, CSS, JavaScript, WordPress y React.",
    "hero.cta": "Ver proyectos",

    // About
    "about.title": "Sobre mí",
    "about.description": "Apasionado por crear soluciones digitales innovadoras y funcionales",
    "about.skill1.title": "Desarrollo",
    "about.skill1.description": "Especializado en React y WordPress.",
    "about.skill2.title": "Diseño",
    "about.skill2.description": "Creación de interfaces intuitivas y experiencias de usuario memorables.",
    "about.skill3.title": "Performance",
    "about.skill3.description": "Optimización y mejores prácticas para aplicaciones rápidas y escalables.",

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
    "hero.title1": "Creative",
    "hero.title2": "Frontend Developer",
    "hero.description":
      "Full Stack Developer with a passion for creating interactive and visually appealing web experiences. Specialized in technologies like HTML, CSS, JavaScript, WordPress and React.",
    "hero.cta": "View projects",

    // About
    "about.title": "About me",
    "about.description": "Passionate about creating innovative and functional digital solutions",
    "about.skill1.title": "Development",
    "about.skill1.description": "Specialized in React and WordPress.",
    "about.skill2.title": "Design",
    "about.skill2.description": "Creating intuitive interfaces and memorable user experiences.",
    "about.skill3.title": "Performance",
    "about.skill3.description": "Optimization and best practices for fast and scalable applications.",

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
