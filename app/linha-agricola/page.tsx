import { agriculturalProducts } from "@/lib/agricola-products"
import { CategoryCard } from "@/components/category-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"


export default function LinhaAgricolaPage() {
  return (
    <main className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 rounded-lg bg-[#C20E1A] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#A80C18] hover:shadow-lg"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Link>
      <h1 className="text-5xl font-bold text-[#303271] mb-10">
        Linha Agrícola
      </h1>

      <div className="w-full">
        {agriculturalProducts.map((product) => (
          <CategoryCard
            key={product.title}
            manufacturersTitle={product.title}
            description={product.description}
            manufacturers={product.manufacturers}
          />
        ))}
      </div>
    </main>
  )
}