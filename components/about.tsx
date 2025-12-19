"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Rocket } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{t("about.description")}</p>
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
