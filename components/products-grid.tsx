import Link from "next/link"
import { Tractor, Car, Truck, type LucideIcon } from "lucide-react"

type Category = {
  title: string
  href: string
  Icon: LucideIcon
}

const categories = [
  {
    title: "LINHA AGRÍCOLA",
    href: "/linha-agricola",
    Icon: Tractor,
  },
  {
    title: "LINHA LEVE E UTILITÁRIOS",
    href: "/linha-leve",
    Icon: Car,
  },
  {
    title: "LINHA PESADA E EXTRA PESADA",
    href: "/linha-pesada",
    Icon: Truck,
  },
]

export function ProductsGrid() {
  return (
    <section className="mx-auto w-full max-w-screen-2xl px-4 py-6 lg:px-8">
      <h1 className="sr-only">Produtos Aguilera Autopeças</h1>

      <div className="mb-14 text-center">
        <span className="rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red">
          Nossas Linhas
        </span>

        <h2 className="mt-5 text-4xl font-bold text-navy lg:text-5xl">
          Conheça nossos principais fabricantes
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Trabalhamos com peças para Linha Agrícola, Linha Leve e Utilitários,
          Linha Pesada e Extra Pesada, oferecendo produtos das melhores marcas
          do mercado.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map(({ title, href, Icon }) => (
          <article

            key={title}
            className="mx-auto flex h-full w-full max-w-[380px] flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Link
              href={href}
              className="group flex aspect-square w-full items-center justify-center rounded-md bg-navy"
              aria-label={title}
            >
              <Icon
                className="h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 text-white transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.25}
              />
            </Link>

            <h3 className="mt-5 font-heading text-base sm:text-lg font-semibold tracking-wide text-navy">
              <Link href={href} className="transition-colors hover:text-brand-red">
                {title}
              </Link>
            </h3>

            <Link
              href={href}
              className="mt-5 w-full rounded-md bg-brand-red px-6 py-3 font-heading text-sm font-semibold tracking-wide text-white transition-colors hover:bg-navy"
            >
              Saiba mais
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
