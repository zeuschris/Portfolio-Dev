"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
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

  const emailAddress = "zeuschris123@gmail.com"
  const emailSubject = "Contacto desde Portfolio"

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/zeuschris/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/christophermontes158/" },
    { icon: Mail, label: "Email", href: `mailto:${emailAddress}` },
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto text-pretty">
            {t("contact.description")}
          </p>

          {/* Botón principal actualizado a etiqueta <a> */}
          <a
            href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 mb-12"
          >
            <Mail className="w-5 h-5" />
            {t("contact.cta")}
          </a>

          <div className="flex justify-center gap-4 mt-8">
            {socials.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-card border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-border">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Christopher Montes. {t("contact.footer")}
        </p>
      </div>
    </section>
  )
}