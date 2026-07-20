import Link from "next/link"
import { ManufacturersMarquee } from "./manufacturers-marquee"
import { HeroCarousel } from "./hero-carrossel"

export function HeroSection() {
  return (
    <section className="bg-slate-100">

      {/* Conteúdo Principal */}
      <div className="mx-auto flex max-w-screen-2xl flex-col-reverse items-center gap-10 px-6 py-12 lg:flex-row lg:items-start lg:gap-16 lg:py-20">
        {/* Texto */}
        <div className="w-full lg:w-[40%]">
          <span className="rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red">
            Há mais de 30 anos no mercado
          </span>

          <h1 className="mt-6 text-6xl font-bold leading-tight text-navy">
            Distribuindo qualidade para quem move o Brasil.
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            A Aguilera Distribuidora oferece peças para Linha Agrícola,
            Linha Leve e Linha Pesada, trabalhando com as melhores marcas
            do mercado e atendimento especializado.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="#fabricantes"
              className="rounded-md bg-brand-red px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Conheça nossos produtos
            </Link>

            <Link
              href="https://wa.me/556295128248"
              target="_blank"
              className="rounded-md border-2 border-navy px-8 py-4 font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Fale conosco
            </Link>

          </div>

        </div>

        {/* Banner */}
        <div className="w-full lg:w-[60%]">
          <HeroCarousel />
        </div>

      </div>

      {/* Carrossel dos fabricantes */}
      <div className="w-full bg-white py-8">
        <div className="mx-auto max-w-screen-2xl px-6">
          <ManufacturersMarquee />
        </div>
      </div>

    </section>
  )
}