"use client"

import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/logo"

const locations = [
  {
    name: "Araguaína - TO",
    address:
      "Rua 1, nº 1333, Quadra 5, Lote 3, Loteamento Nova Araguaína, CEP 77815-170",
  },
  {
    name: "Cuiabá - MT",
    address:
      "Avenida Ayrton Senna da Silva, 733, Galpão 01 (Fundos), bairro Pascoal Ramos, CEP 78098-000",
  },
  {
    name: "Goiânia - GO",
    address:
      "Avenida Perimetral Norte, 2859 - Fazenda Caveiras, CEP 74.445-360",
  },
  {
    name: "Teresina - PI",
    address:
      "Avenida Miguel Rosa, nº 7015, bairro Redenção, CEP 64017-770",
  },
]

const phones = [
  {
    name: "Belém",
    phone: "(91) 8250-1220",
    whatsapp: "559182501220",
  },
  {
    name: "Tocantins",
    phone: "(63) 9229-7936",
    whatsapp: "556392297936",
  },
  {
    name: "Cuiabá",
    phone: "(65) 9698-4127",
    whatsapp: "556596984127",
  },
  {
    name: "Teresina",
    phone: "(86) 9486-8872",
    whatsapp: "558694868872",
  },
  {
    name: "Goiânia",
    phone: "(62) 9512-8248",
    whatsapp: "556295128248",
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">

      {/* ==============================
          CONTEÚDO PRINCIPAL
      ============================== */}

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr_0.9fr]">

          {/* ==============================
              EMPRESA
          ============================== */}

          <div>

            <div className="mb-6">
              <Link href="/" aria-label="Aguilera Distribuidora">
                <Logo />
              </Link>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-300">
              A Aguilera Distribuidora oferece soluções em autopeças para
              Linha Agrícola, Linha Leve e Linha Pesada, com atendimento
              especializado e distribuição em diferentes regiões do Brasil.
            </p>

          </div>

          {/* ==============================
              NOSSAS UNIDADES
          ============================== */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Nossas unidades
            </h3>

            <div className="space-y-6">

              {locations.map((location) => (
                <div
                  key={location.name}
                  className="flex gap-3"
                >

                  <MapPin
                    className="
                      mt-1
                      h-5
                      w-5
                      shrink-0
                      text-brand-red
                    "
                  />

                  <div>

                    <h4 className="font-semibold text-white">
                      {location.name}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {location.address}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* ==============================
              TELEFONES
          ============================== */}

          <div>

            <h3 className="mb-6 text-lg font-bold">
              Telefones
            </h3>

            <div className="space-y-4">

              {phones.map((item) => (
                <a
                  key={item.name}
                  href={`https://wa.me/${item.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-slate-300
                    transition-colors
                    hover:text-white
                  "
                >

                  <Phone
                    className="
                      h-5
                      w-5
                      shrink-0
                      text-brand-red
                    "
                  />

                  <span>
                    <strong className="font-semibold text-white">
                      {item.name}
                    </strong>

                    <br />

                    {item.phone}
                  </span>

                </a>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ==============================
          LINHA INFERIOR
      ============================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Aguilera Distribuidora de Peças.
            Todos os direitos reservados.
          </p>

          <p className="text-xs text-slate-500">
            Qualidade, confiança e distribuição.
          </p>

        </div>

      </div>

    </footer>
  )
}