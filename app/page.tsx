import { BreadcrumbBar } from "@/components/breadcrumb-bar"
import { ProductsGrid } from "@/components/products-grid"

export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* <BreadcrumbBar current="PRODUTOS" /> */}

      <main className="flex-1 pt-0">
        <ProductsGrid />
      </main>
    </div>
  )
} 