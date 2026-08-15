import { HeroSection } from "@/components/hero-section"
import { ProductsGrid } from "@/components/products-grid"
import { StoresSection } from "@/components/stores-section"

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ProductsGrid />

      <StoresSection />
    </main>
  )
}