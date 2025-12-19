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
      title: "Chris Designs",
      description: {
        es: "Sitio web de mis diseños creados en Canva.",
        en: "Website showcasing my designs created in Canva.",
      },
      image: "/images/projects/chris-designs.webp",
      tags: [
        { name: "WordPress", icon: "devicon-wordpress-plain colored" },
        { name: "Elementor", icon: "devicon-wordpress-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
      ],
      github: null,
      demo: "https://dev-chris-designs.pantheonsite.io/",
    },
    {
      title: "Flowers Store",
      description: {
        es: "Tienda de flores creada con un diseño natural y moderno con Astro.",
        en: "Flower store created with a natural and modern design using Astro.",
      },
      image: "/images/projects/flowers.webp",
      tags: [
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Astro", icon: "devicon-astro-plain colored" },
      ],
      github: "https://github.com/zeuschris",
      demo: "https://floral-sky.vercel.app/",
    },
    {
      title: "Art Store",
      description: {
        es: "E-commerce moderno de productos personalizados (gorras, tazas, remeras, sweaters) con carrito de compras y gestión de órdenes.",
        en: "Modern e-commerce for personalized products (caps, mugs, t-shirts, sweaters) with shopping cart and order management.",
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
        es: "E-commerce de papelería premium con React y Firebase.",
        en: "Premium stationery e-commerce with React and Firebase.",
      },
      image: "/images/projects/giotecnika.webp",
      tags: [
        { name: "React", icon: "devicon-react-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "Sass", icon: "devicon-sass-plain colored" },
        { name: "Firebase", icon: "devicon-firebase-plain colored" },
      ],
      github: "https://github.com/zeuschris",
      demo: "https://giotecnika.netlify.app/",
    },
    {
      title: "Naturaleza Viva",
      description: {
        es: "Sitio web desarrollado con WordPress y Elementor para un vivero ecológico.",
        en: "Website developed with WordPress and Elementor for an ecological nursery.",
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
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-500 ${
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

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Ver demo en vivo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm text-pretty leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                    >
                      <i className={`${tag.icon} text-base`} title={tag.name}></i>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
