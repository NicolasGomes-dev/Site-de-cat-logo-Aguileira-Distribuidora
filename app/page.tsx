import { BreadcrumbBar } from "@/components/breadcrumb-bar"
import { ProductsGrid } from "@/components/products-grid"

export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* <BreadcrumbBar current="PRODUTOS" /> */}

      <main className="flex-1 pt-32 sm:pt-28 lg:pt-36">
        <ProductsGrid />
      </main>
    </div>
  )
} 