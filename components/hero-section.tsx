"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { ManufacturersMarquee } from "./manufacturers-marquee"
import { HeroCarousel } from "./hero-carrossel"
import { WhatsAppSelector } from "./whatsapp-selector"

const whatsappCompanies = [
  {
    name: "Pará",
    description: "91 8250-1220",
    phone: "559182501220",
  },
  {
    name: "Araguaína",
    description: "63 9229-7936",
    phone: "556392297936",
  },
  {
    name: "Cuiabá",
    description: "65 9698-4127",
    phone: "556596984127",
  },
  {
    name: "Teresina",
    description: "86 9486-8872",
    phone: "558694868872",
  },
  {
    name: "Goiânia",
    description: "62 9512-8248",
    phone: "556295128248",
  },
]

export function HeroSection() {
  const [whatsappOpen, setWhatsappOpen] = useState(false)

  return (
    <section className="bg-white">

      {/* ==============================
          CONTEÚDO PRINCIPAL
      ============================== */}

      <div
        className="
          mx-auto
          flex
          max-w-screen-2xl
          flex-col-reverse
          items-center
          gap-16
          px-6
          py-8
          lg:flex-row
          lg:gap-20
          lg:py-10
        "
      >

        {/* ==============================
            TEXTO
        ============================== */}

        <div className="w-full lg:w-[48%]">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand-red">
            LEVE • PESADO • UTILITÁRIO • AGRICOLA
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-navy lg:text-6xl">
            Distribuindo
            <br />
            qualidade para
            <br />
            quem move o Brasil.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 lg:text-xl">
            A Aguilera Distribuidora oferece peças para Linha Agrícola,
            Linha Leve e Linha Pesada, trabalhando com as melhores marcas
            do mercado e atendimento especializado.
          </p>

          {/* ==============================
              BOTÕES
          ============================== */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            {/* CONHEÇA A AGUILERA */}

            <a
              href="/aguilera#conheca-aguilera"
              className="
                inline-flex
                cursor-pointer
                items-center
                justify-center
                rounded-md
                bg-brand-red
                px-8
                py-4
                text-center
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-red-700
                active:scale-95
              "
            >
              Conheça a Aguilera
            </a>

            {/* FALE CONOSCO */}

            <button
              type="button"
              aria-label="Abrir opções de WhatsApp"
              onClick={() => setWhatsappOpen(true)}
              className="
                inline-flex
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-md
                border-2
                border-navy
                bg-white
                px-8
                py-4
                text-center
                font-semibold
                text-navy
                transition-all
                duration-300
                hover:bg-navy
                hover:text-white
                active:scale-95
              "
            >
              <MessageCircle className="h-5 w-5" />

              <span>Fale conosco</span>
            </button>

          </div>

        </div>

        {/* ==============================
            BANNER
        ============================== */}

        <div className="w-full lg:w-[52%]">
          <HeroCarousel />
        </div>

      </div>

      {/* ==============================
          FABRICANTES
      ============================== */}

      <div className="w-full bg-white py-8">
        <div className="mx-auto max-w-screen-2xl px-6">
          <ManufacturersMarquee />
        </div>
      </div>

      {/* ==============================
          SELETOR DE WHATSAPP
      ============================== */}

      <WhatsAppSelector
        open={whatsappOpen}
        onClose={() => setWhatsappOpen(false)}
        companies={whatsappCompanies}
      />

    </section>
  )
}