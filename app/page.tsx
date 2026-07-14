import { BreadcrumbBar } from "@/components/breadcrumb-bar"
import { ProductsGrid } from "@/components/products-grid"
import { HeroSection } from "../components/hero-section"

export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* <BreadcrumbBar current="PRODUTOS" /> */}

      <main className="flex-1 pt-12 sm:pt-15 lg:pt-7">
        <HeroSection />

        <ProductsGrid />
      </main>
    </div>
  )
} 
