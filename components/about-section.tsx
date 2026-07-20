import Link from "next/link"

export function AboutSection() {
  return (
    <section
      id="aguilera"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-screen-xl px-6 text-center">

        <span className="rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red">
          Quem Somos
        </span>

        <h2 className="mt-6 text-5xl font-bold text-navy">
          Conheça a Aguilera Distribuidora
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Há mais de 30 anos oferecendo qualidade, confiança e um dos maiores
          estoques de autopeças do Brasil. Trabalhamos com as principais marcas
          do mercado para atender as linhas Agrícola, Leve, Pesada e Extra Pesada.
        </p>

        <div className="mt-12">
          <Link
            href="/aguilera"
            className="rounded-lg bg-brand-red px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
          >
            Conheça a Aguilera
          </Link>
        </div>

      </div>
    </section>
  )
}