import { ReelsCarousel } from "./reels-carousel";
import { StockGallery } from "./stock-gallery";

export function CompanyShowcase() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] bg-white p-8 shadow-xl lg:p-14">

          {/* Cabeçalho */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

          </div>

          {/* Reels */}
          <ReelsCarousel />

          {/* Galeria */}
          <div className="mt-20">
            <StockGallery />
          </div>

        </div>

      </div>
    </section>
  );
}