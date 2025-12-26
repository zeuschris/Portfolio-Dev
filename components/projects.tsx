"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const TechIcon = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary/10 transition-colors">
      <i className={`${icon} text-base`} title={name}></i>
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
      title: "Art Store",
      description: {
        es: "Aplicación e-commerce moderno de productos personalizados (gorras, tazas, remeras, sweaters) con catálogo dinámico, carrito completo, validación de formularios, generación de órdenes y diseño responsive.",
        en: "Modern personalized products e-commerce app with dynamic catalog, full shopping cart, form validation, order generation and responsive design.",
      },
      image: "/images/projects/art-store.webp",
      tags: [
        { name: "React", icon: "devicon-react-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "Firebase", icon: "devicon-firebase-plain colored" },
        { name: "Gemini AI", icon: "devicon-google-plain colored" },
      ],
      github: "https://github.com/zeuschris/Art-Store",
      demo: "https://art-store-pink.vercel.app/",
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
      github: "https://github.com/zeuschris/giotecnika",
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
      github: "https://github.com/zeuschris/Flower-Store",
      demo: "https://floral-sky.vercel.app/",
    },
    {
      title: "Naturaleza Viva",
      description: {
        es: "Sitio web desarrollado con WordPress y Elementor para un vivero ecológico, con catálogo de plantas, tienda online, secciones de blog y cuidados de plantas, y diseño atractivo y responsive.",
        en: "WordPress site built with Elementor for an ecological plant nursery, featuring a plant catalog, online shop, blog and plant care guides, with a clean, engaging and responsive design.",
      },
      image: "/images/projects/nature.webp",
      tags: [
        { name: "WordPress", icon: "devicon-wordpress-plain colored" },
        { name: "WooCommerce", icon: "devicon-woocommerce-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
      ],
      github: null,
      demo: "https://dev-naturalezaviva.pantheonsite.io/",
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
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-500 flex flex-col h-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                <div className="hidden md:flex absolute top-4 right-4 gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
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
                      <i className={`${tag.icon} text-base`} title={tag.name}></i>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:hidden absolute bottom-0 left-0 w-full border-t border-border bg-card/95 backdrop-blur-md z-10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-muted-foreground border-r border-border active:bg-primary/10"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                )}
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