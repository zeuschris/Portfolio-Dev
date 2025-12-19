"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTypingEffect } from "@/hooks/use-typing-effect"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const description = t("hero.description")
  const { displayedText, isComplete } = useTypingEffect(description, 30)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 md:pt-32 lg:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl bg-card">
              <Image
                src="/images/chris-image-sin-fondo.webp"
                alt="Christopher Montes"
                width={192}
                height={192}
                priority
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              {t("hero.title1")}
              <span className="block mt-2 bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty min-h-[4rem]">
              {displayedText}
              {!isComplete && <span className="inline-block w-0.5 h-5 ml-1 bg-primary animate-pulse" />}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              {t("hero.cta")}
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
