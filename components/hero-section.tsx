import Link from "next/link"
import { HeroCarousel } from "./hero-carrossel"

export function HeroSection() {
  return (
    <>

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:px-8 lg:py-24">

          {/* Texto */}
          <div className="flex-1">
            <span className="rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red">
              Há mais de 30 anos no mercado
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-navy lg:text-6xl">
              Distribuindo qualidade para quem move o Brasil.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              A Aguilera Distribuidora oferece peças para Linha Agrícola,
              Linha Leve e Linha Pesada, trabalhando com as melhores marcas
              do mercado e atendimento especializado.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#produtos"
                className="rounded-md bg-brand-red px-8 py-4 text-center font-semibold text-white transition hover:bg-red-700"
              >
                Conheça nossos produtos
              </Link>

              <Link
                href="https://wa.me/556295128248?text=Olá!%20Vim%20pela%20página%20da%20Aguilera%20Distribuidora%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border-2 border-navy px-8 py-4 text-center font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Fale conosco
              </Link>
            </div>
          </div>

          {/* Carrossel */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[700px]">
              <HeroCarousel />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}