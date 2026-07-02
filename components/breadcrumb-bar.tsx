import Link from "next/link"
import { Home } from "lucide-react"

export function BreadcrumbBar({ current }: { current: string }) {
  return (
    <div className="bg-brand-red text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <nav aria-label="Caminho" className="flex items-center gap-3">
          <span className="font-heading text-lg font-bold">/</span>
          <span className="font-heading text-lg font-semibold tracking-wide">
            {current}
          </span>
          <span aria-hidden className="ml-2 hidden h-[2px] w-24 bg-white/60 sm:block" />
        </nav>
        <Link
          href="#"
          className="flex items-center gap-2 rounded-md bg-navy px-4 py-2 font-heading text-sm font-semibold tracking-wide text-white transition-colors hover:bg-navy-light"
        >
          <Home className="h-4 w-4" />
          HOME
        </Link>
      </div>
    </div>
  )
}
