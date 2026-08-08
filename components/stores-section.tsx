"use client"

import { StoresMap } from "./stores-map"
import { StoresList } from "./stores-list"

export function StoresSection() {
  return (
    <section
      id="lojas"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold tracking-wide text-brand-red">
            NOSSAS LOJAS
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-navy">
            Estamos presentes nas principais regiões do Brasil.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Uma rede de distribuição preparada para entregar autopeças com rapidez, eficiência e confiança.
          </p>
        </div>

        {/* Mapa + Lista */}
        <div className="grid items-start gap-16 lg:grid-cols-[520px_1fr]">

          {/* MAPA */}
          <StoresMap />

          {/* TODAS AS LOJAS */}
          <StoresList />

        </div>

      </div>
    </section>
  )
}