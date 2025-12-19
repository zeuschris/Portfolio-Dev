"use client"

import { Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Christopher Montes
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
            aria-label="Cambiar idioma"
          >
            <Languages className="w-5 h-5" />
            <span className="sr-only">{language === "es" ? "ES" : "EN"}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110"
            aria-label="Cambiar tema"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}
