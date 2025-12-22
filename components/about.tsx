"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Rocket } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTypingEffect } from "@/hooks/use-typing-effect"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t, language } = useLanguage()

  const biographyTexts = {
    es: "Desarrollador Frontend con pasión por crear experiencias web interactivas y visualmente atractivas. Especializado en tecnologías como HTML, CSS, JavaScript, WordPress y React.",
    en: "Frontend Developer with a passion for creating interactive and visually appealing web experiences. Specialized in technologies such as HTML, CSS, JavaScript, WordPress and React."
  }

  const description = biographyTexts[language as keyof typeof biographyTexts] || biographyTexts.es
  const { displayedText, isComplete } = useTypingEffect(description, 30)

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

  const skills = [
    {
      icon: Code2,
      title: t("about.skill1.title"),
      description: t("about.skill1.description"),
    },
    {
      icon: Palette,
      title: t("about.skill2.title"),
      description: t("about.skill2.description"),
    },
    {
      icon: Rocket,
      title: t("about.skill3.title"),
      description: t("about.skill3.description"),
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h2>
          
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed min-h-[4rem]">
              {displayedText}
              {!isComplete && (
                <span className="inline-block w-0.5 h-5 ml-1 bg-primary animate-pulse" />
              )}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className={`p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-pretty">{skill.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}