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
    <section className="mx-auto max-w-7xl px-4 py-4">
      <h1 className="sr-only">Produtos Castrillon Autopeças</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ title, href, Icon }) => (
          <article
            key={title}
            className="flex flex-col items-center rounded-md border border-gray-200 bg-white p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
