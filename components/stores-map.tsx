"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { useState } from "react"
import { stores } from "@/lib/stores"

export function StoresMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null)

  return (
    <div
      className="
        relative
        z-0
        mx-auto
        w-full
        max-w-[620px]
        px-4
        pointer-events-auto
      "
    >
      {/* MAPA */}
      <div
        className="
          relative
          z-0
          w-full
          pointer-events-auto
        "
      >
        <Image
          src="/images/brasil.svg"
          alt="Mapa do Brasil"
          width={700}
          height={700}
          priority
          draggable={false}
          className="
            relative
            z-0
            block
            h-auto
            w-full
            select-none
            pointer-events-none
          "
        />

        {/* PINOS */}
        {stores.map((state) => {
          const isOpen = selectedState === state.uf

          return (
            <div
              key={state.id}
              className="
                absolute
                z-10
                pointer-events-auto
              "
              style={{
                left: state.x,
                top: state.y,
                transform: "translate(-50%, -100%)",
              }}
            >
              {/* PINO */}
              <a
                href={`#${state.uf}`}
                aria-label={`Ver ${state.name}`}
                onClick={(event) => {
                  event.preventDefault()

                  setSelectedState(
                    isOpen ? null : state.uf
                  )
                }}
                className="
                  relative
                  z-20
                  flex
                  h-12
                  w-12
                  cursor-pointer
                  touch-manipulation
                  items-center
                  justify-center
                  rounded-full
                  border-0
                  bg-transparent
                  p-0
                  no-underline
                  pointer-events-auto
                "
              >
                <MapPin
                  className="
                    relative
                    z-20
                    h-8
                    w-8
                    fill-brand-red
                    text-brand-red
                    drop-shadow-lg
                  "
                />
              </a>

              {/* POPUP */}
              {isOpen && (
                <div
                  className="
                    absolute
                    bottom-full
                    left-1/2
                    z-30
                    mb-4
                    w-[190px]
                    -translate-x-1/2
                    rounded-2xl
                    bg-navy
                    px-4
                    py-4
                    text-center
                    shadow-2xl
                  "
                >
                  {/* NOME */}
                  <p className="text-base font-bold text-white">
                    {state.name}
                  </p>

                  {/* DESCRIÇÃO */}
                  <p className="mt-1 text-xs text-slate-300">
                    Centro de Distribuição
                  </p>

                  {/* VER DETALHES */}
                  <a
                    href={`#${state.uf}`}
                    onClick={() => {
                      setSelectedState(null)
                    }}
                    className="
                      mt-4
                      flex
                      w-full
                      cursor-pointer
                      touch-manipulation
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-red
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-white
                      no-underline
                      pointer-events-auto
                      transition-all
                      duration-200
                      hover:bg-red-700
                      active:scale-95
                    "
                  >
                    Ver detalhes
                  </a>

                  {/* SETA */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      -bottom-2
                      left-1/2
                      h-4
                      w-4
                      -translate-x-1/2
                      rotate-45
                      bg-navy
                    "
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* LEGENDA */}
      <div
        className="
          relative
          z-0
          mt-4
          flex
          items-center
          justify-center
          gap-2
          text-sm
          text-slate-500
        "
      >
        <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />

        <span>
          Centros de Distribuição Aguilera
        </span>
      </div>
    </div>
  )
}