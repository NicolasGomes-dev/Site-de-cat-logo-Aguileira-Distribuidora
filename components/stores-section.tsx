"use client"

import { useState } from "react"

import { stores } from "@/lib/stores"

import { StoresMap } from "./stores-map"
import { StoresList } from "./stores-list"
import { SelectedStoreCard } from "./selected-store-card"

export function StoresSection() {
  const [selectedStore, setSelectedStore] = useState(stores[0])

  return (
    <section
      id="lojas"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold tracking-wide text-brand-red">
            NOSSAS LOJAS
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-navy">
            Estamos presentes nas principais regiões do Brasil.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Uma rede de distribuição preparada para entregar autopeças com rapidez, eficiência e confiança.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* MAPA */}
          <StoresMap
            selectedStore={selectedStore}
            onSelectStore={setSelectedStore}
          />

          {/* LOJA SELECIONADA */}
          <SelectedStoreCard
            store={selectedStore}
          />

        </div>

        {/* TODAS AS LOJAS */}
        <div className="mt-16">
          <StoresList />
        </div>

      </div>
    </section>
  )
}