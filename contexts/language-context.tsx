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
    "hero.title1": "Landing Pages de Alto Impacto",
    "hero.title2": "para Negocios y Marcas",
    "hero.description":
      "Desarrollo frontend moderno con Next.js e Inteligencia Artificial. Sitios ultrarrápidos, optimizados para celulares y enfocados en convertir visitas en clientes.",
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

    // WhatsApp
    "whatsapp.hover": "¡Escribenos!",
    "whatsapp.aria": "Escribir por WhatsApp",
  },
  en: {
    // Hero
    "hero.title1": "High-Impact Landing Pages",
    "hero.title2": "for Businesses and Brands",
    "hero.description":
      "Modern frontend development with Next.js and Artificial Intelligence. Ultra-fast sites, mobile-optimized and focused on turning visitors into customers.",
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

    // WhatsApp
    "whatsapp.hover": "¡Escribenos!",
    "whatsapp.aria": "Chat on WhatsApp",
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