import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Oswald, Barlow } from "next/font/google"

import "./globals.css"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title:
    "Aguilera Distribuidora de Peças – mais de 1 milhão de peças em estoque",

  description:
    "Linha Agrícola, Leve e Utilitários, Pesada e Extra Pesada. Mais de 1 milhão de peças em estoque.",

  generator: "v0.app",

  icons: {
    icon: "/icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",

  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${barlow.variable}`}
    >
      <body className="font-sans antialiased">

        {/* HEADER */}
        <SiteHeader />

        {/* CONTEÚDO */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <SiteFooter />

        {/* ANALYTICS */}
        {process.env.NODE_ENV === "production" && <Analytics />}

      </body>
    </html>
  )
}