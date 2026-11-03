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
      "Desarrollo frontend moderno con Next.js e Inteligencia Artificial. Sitios ultrarrápidos, optimizados para dispositivos móviles y enfocados en convertir visitas en clientes.",
    "hero.cta": "Ver proyectos",

    // About
    "about.title": "Sobre mí",
    "about.description":
      "Soy desarrollador freelance: trabajo contigo de cerca para pasar de una idea a un sitio web publicado. Uso Inteligencia Artificial de forma avanzada en mi proceso para reducir tiempos, cuidar cada detalle y entregarte un resultado listo para atraer clientes.",
    "about.skill1.title": "Desarrollo",
    "about.skill1.description": "Código limpio con Next.js y automatización con IA para construir, ajustar y publicar tu sitio sin demoras innecesarias.",
    "about.skill2.title": "Diseño",
    "about.skill2.description": "Jerarquía visual clara, tipografía cuidada y llamados a la acción visibles para que tu marca se vea profesional y fácil de entender.",
    "about.skill3.title": "Performance",
    "about.skill3.description": "Carga rápida, SEO técnico y buena puntuación en Web Vitals para que tu sitio funcione bien desde el primer día.",

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
    "whatsapp.hover": "¡Escríbeme!",
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
    "about.description":
      "I'm a freelance developer: I work side by side with you to go from an idea to a live website. I use advanced Artificial Intelligence in my process to shorten timelines, polish the details, and deliver a result ready to attract clients.",
    "about.skill1.title": "Development",
    "about.skill1.description": "Clean Next.js code and AI-assisted workflows to build, refine, and publish your site without unnecessary delays.",
    "about.skill2.title": "Design",
    "about.skill2.description": "Clear visual hierarchy, careful typography, and visible CTAs so your brand looks professional and easy to understand.",
    "about.skill3.title": "Performance",
    "about.skill3.description": "Fast load, technical SEO, and strong Web Vitals so your site performs well from day one.",

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
    "whatsapp.hover": "¡Escríbeme!",
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