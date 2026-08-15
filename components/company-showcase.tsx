import { ReelsCarousel } from "./reels-carousel"
import { StockGallery } from "./stock-gallery"
import { TeamSection } from "./team-section"

export function CompanyShowcase() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Reels */}
        <ReelsCarousel />

        {/* Estoque */}
        <div className="mt-16">
          <StockGallery />
        </div>

        {/* Equipe */}
        <div className="mt-16">
          <TeamSection />
        </div>

      </div>
    </section>
  )
}