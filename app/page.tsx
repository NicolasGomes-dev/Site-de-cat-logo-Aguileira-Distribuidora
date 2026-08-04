import { HeroSection } from "@/components/hero-section"
import { ProductsGrid } from "@/components/products-grid"

export default function Home() {
  return (
    <main className="pt-40">
      <HeroSection />
      <ProductsGrid />
    </main>
  )
}