import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_SITE_URL || "https://tu-dominio.com"
      : "http://localhost:3000"
  ),
  title: "Chris Portfolio - Desarrollador Frontend",
  description:
    "Portfolio profesional de Christopher Montes - Desarrollo web moderno con React, WordPress y tecnologías modernas",
  generator: "v0.app",
  icons: {
    icon: "/images/chris-profile-favicon.png",
    apple: "/images/chris-profile-favicon.png",
  },
  openGraph: {
    title: "Chris Portfolio - Desarrollador Frontend",
    description:
      "Portfolio profesional de Christopher Montes - Desarrollo web moderno con React, WordPress y tecnologías modernas",
    images: [
      {
        url: "/images/chris-image-sin-fondo.png",
        width: 800,
        height: 800,
        alt: "Christopher Montes - Desarrollador Frontend",
      },
    ],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Portfolio - Desarrollador Frontend",
    description:
      "Portfolio profesional de Christopher Montes - Desarrollo web moderno con React, WordPress y tecnologías modernas",
    images: ["/images/chris-image-sin-fondo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}