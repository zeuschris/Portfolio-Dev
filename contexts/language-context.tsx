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
      "Desarrollador Frontend React apasionado por crear experiencias web innovadoras que fusionan diseño moderno con inteligencia artificial. Especializado en React, WordPress y la integración de APIs de IA (OpenAI, Anthropic, Vercel AI SDK) para construir interfaces inteligentes, chatbots conversacionales y aplicaciones web con capacidades de ML.",
    "hero.cta": "Ver proyectos",

    // About
    "about.title": "Sobre mí",
    "about.description": "Con más de 3 años de experiencia en desarrollo web, me especializo en transformar ideas en productos digitales que combinan diseño atractivo con código limpio y eficiente. Mi enfoque está en crear soluciones que no solo funcionen bien, sino que también brinden experiencias memorables a los usuarios.",
    "about.skill1.title": "Desarrollo",
    "about.skill1.description": "Especializado en React y WordPress.",
    "about.skill2.title": "Diseño",
    "about.skill2.description": "Creación de interfaces intuitivas y accesibles con enfoque en experiencia de usuario excepcional, utilizando principios de diseño moderno y sistemas de componentes escalables.",
    "about.skill3.title": "Performance",
    "about.skill3.description": "Desarrollo de aplicaciones web rápidas mediante técnicas avanzadas: code splitting, lazy loading, optimización de renders, y mejores prácticas de Web Vitals para experiencias fluidas.",

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
      "Passionate React Frontend Developer creating innovative web experiences that blend modern design with artificial intelligence. Specialized in React, WordPress, and integrating AI APIs (OpenAI, Anthropic, Vercel AI SDK) to build intelligent interfaces, conversational chatbots, and ML-powered web applications.",
    "hero.cta": "View projects",

        // About
    "about.title": "About Me",
    "about.description": "With over 3+ years of experience in web development, I specialize in transforming ideas into digital products that combine attractive design with clean and efficient code. My focus is on creating solutions that not only work well, but also deliver memorable experiences to users.",
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