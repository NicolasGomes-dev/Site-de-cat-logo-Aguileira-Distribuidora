import Link from "next/link";
import { ManufacturersMarquee } from "./manufacturers-marquee";
import { HeroCarousel } from "./hero-carrossel";

export function HeroSection() {
  return (
    <section className="bg-slate-100">
      {/* Conteúdo Principal */}
      <div className="mx-auto flex max-w-screen-2xl flex-col-reverse items-center gap-16 px-6 py-8 lg:flex-row lg:gap-20 lg:py-10">

        {/* Texto */}
        <div className="w-full lg:w-[48%]">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand-red">
            PEÇAS • AGRÍCOLA • LEVE • PESADA
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

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#fabricantes"
              className="rounded-md bg-brand-red px-8 py-4 text-center font-semibold text-white transition hover:bg-red-700"
            >
              Conheça nossos produtos
            </Link>

            <Link
              href="https://wa.me/556295128248"
              target="_blank"
              className="rounded-md border-2 border-navy px-8 py-4 text-center font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Fale conosco
            </Link>
          </div>
        </div>

        {/* Banner */}
        <div className="w-full lg:w-[52%]">
          <HeroCarousel />
        </div>

      </div>

      {/* Fabricantes */}
      <div className="w-full bg-white py-8">
        <div className="mx-auto max-w-screen-2xl px-6">
          <ManufacturersMarquee />
        </div>
      </div>
    </section>
  );
}