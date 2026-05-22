"use client"

import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PrivateRepoPage() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen bg-background px-4 py-20 flex items-center justify-center">
      <div className="w-full max-w-3xl rounded-3xl border border-border bg-card p-10 shadow-2xl text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
          <Lock className="h-10 w-10" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {language === "es" ? "Repositorio privado" : "Private repository"}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
          {language === "es"
            ? "El código fuente de ViralCh AI no está disponible públicamente. Si deseas más información o acceso, contáctame para solicitarlo."
            : "The ViralCh AI repository is not publicly available. If you need more information or access, reach out to request it."}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === "es" ? "Volver al portfolio" : "Back to portfolio"}
        </Link>
      </div>
    </main>
  )
}
