"use client"

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react"
import { Cpu, Mic2, ExternalLink, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const ProjectTagIcon = ({
  name,
  icon,
}: {
  name: string
  icon: string | ComponentType<SVGProps<SVGSVGElement>>
}) => {
  const Icon = typeof icon === "string" ? null : icon

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary/10 transition-colors">
      {Icon ? <Icon className="w-4 h-4 text-current" /> : <i className={`${icon} text-base text-foreground dark:text-white`} title={name}></i>}
      {name}
    </span>
  )
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "W3 OverDrive",
      description: {
        es: "Plataforma competitiva de Warcraft III con ranking, partidas ranked, clan wars y mapas custom. Experiencia oscura y cinematográfica, enfocada en la comunidad y el matchmaking justo.",
        en: "Competitive Warcraft III platform with rankings, ranked matches, clan wars and custom maps. Dark cinematic experience focused on community play and fair matchmaking.",
      },
      image: "/images/projects/w3overdrive.webp",
      mediaGradient: "from-cyan-400/25 via-violet-500/20 to-fuchsia-500/15",
      mediaGlow:
        "bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.2),transparent_50%)]",
      imagePosition: "object-[72%_center]",
      tags: [
        { name: "Next Js", icon: "devicon-nextjs-plain" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      ],
      demo: "https://w3overdrive.com/",
    },
    {
      title: "ViralCh AI",
      description: {
        es: "Plataforma de marketing de video impulsada por IA para crear contenido social viral. Genera guiones, miniaturas y clips optimizados para redes con edición rápida, diseños personalizados y una experiencia responsive.",
        en: "AI-powered video marketing platform for creating viral social content. It generates scripts, thumbnails and optimized clips with fast editing, custom designs, and a responsive user experience.",
      },
      image: "/images/projects/viralch.webp",
      tags: [
        { name: "Next Js", icon: "devicon-nextjs-plain" },
        { name: "OpenAI", icon: Sparkles },
        { name: "Claude", icon: Cpu },
        { name: "Whisper", icon: Mic2 },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      ],
      demo: "https://viralch-ai.vercel.app/",
    },
    {
      title: "Aires Sublimación",
      description: {
        es: "Tienda online de productos personalizados con sublimación full color. Ofrece tazas, mousepads, remeras y sweaters con impresión de alta definición, colores vibrantes y materiales resistentes, más atención personalizada y entrega rápida en Argentina.",
        en: "Online store for custom sublimated products with full-color printing. It offers mugs, mousepads, t-shirts and sweaters with high-definition prints, vibrant colors and durable materials, plus personalized service and fast delivery in Argentina.",
      },
      image: "/images/projects/aires.webp",
      tags: [
        { name: "Next Js", icon: "devicon-nextjs-plain" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      ],
      demo: "https://www.airesublimacion.com/",
    },
    {
      title: "Weather Dashboard",
      description: {
        es: "Dashboard de clima moderno con React 19 y Tailwind CSS 4, integrado con la API de OpenWeatherMap. Incluye clima en tiempo real, búsqueda de ciudades, geolocalización opcional, pronóstico de 5 días, cambio de unidades y modo claro/oscuro con persistencia, todo en diseño responsive.",
        en: "Modern weather dashboard built with React 19 and Tailwind CSS 4, powered by the OpenWeatherMap API. It features real-time weather, city search, optional geolocation, a 5-day forecast, unit switching, and persistent light/dark mode, all in a responsive layout.",
      },
      image: "/images/projects/weather-dashboard.webp",
      tags: [
        { name: "React", icon: "devicon-react-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      ],
      demo: "https://weather-clima-dashboard.vercel.app/",
    },
    {
      title: "Giotecnika",
      description: {
        es: "E-commerce de papelería moderno y responsivo, desarrollado con React, Vite y Firebase/Firestore. Incluye catálogo con filtros, carrito persistente, modo oscuro/claro, búsqueda en tiempo real y checkout validado.",
        en: "Modern, responsive stationery e-commerce app built with React, Vite and Firebase/Firestore. Includes filtered product catalog, persistent cart, light/dark mode, real-time search and validated checkout.",
      },
      image: "/images/projects/giotecnika.webp",
      tags: [
        { name: "React", icon: "devicon-react-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "Sass", icon: "devicon-sass-plain colored" },
        { name: "Firebase", icon: "devicon-firebase-plain colored" },
      ],
      demo: "https://giotecnika.netlify.app/",
    },
    {
      title: "Flowers Store",
      description: {
        es: "Tienda online de flores desarrollada con Astro y Tailwind CSS, con un diseño moderno y natural enfocado en la experiencia de usuario. Interfaz limpia, rápida y totalmente responsive.",
        en: "Online flower shop built with Astro and Tailwind CSS, featuring a modern, nature-inspired design focused on user experience. Clean, fast, and fully responsive interface.",
      },
      image: "/images/projects/flowers.webp",
      tags: [
        { name: "Astro", icon: "devicon-astro-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      ],
      demo: "https://floral-sky.vercel.app/",
    },
  ]

  return (
    <section id="proyectos" ref={sectionRef} className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("projects.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{t("projects.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border/80 shadow-sm hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-500 flex flex-col h-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative p-3 pb-0">
                <div
                  className={`relative overflow-hidden aspect-video rounded-xl bg-gradient-to-br via-muted ring-1 ring-border/60 ${
                    "mediaGradient" in project && project.mediaGradient
                      ? project.mediaGradient
                      : "from-violet-500/15 to-fuchsia-500/10"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 ${
                      "mediaGlow" in project && project.mediaGlow
                        ? project.mediaGlow
                        : "bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.18),transparent_55%)]"
                    }`}
                    aria-hidden="true"
                  />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`relative z-[1] w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                      "imagePosition" in project && project.imagePosition
                        ? project.imagePosition
                        : "object-center"
                    }`}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-background/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40"
                    aria-hidden="true"
                  />

                  <div className="hidden md:flex absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${project.title}`}
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card flex flex-col flex-grow md:pb-6 pb-20">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm text-pretty leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      <ProjectTagIcon name={tag.name} icon={tag.icon} />
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:hidden absolute bottom-0 left-0 w-full border-t border-border bg-card/95 backdrop-blur-md z-10">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-primary active:bg-primary/10"
                >
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
