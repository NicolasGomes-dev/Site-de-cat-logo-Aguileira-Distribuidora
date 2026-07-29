import { ReelsCarousel } from "./reels-carousel";
import { StockGallery } from "./stock-gallery";

export function CompanyShowcase() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-brand-red uppercase tracking-widest font-semibold">
            Nossa Estrutura
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-navy">
            Conheça a AGUILERA por dentro
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Nossa estrutura foi planejada para garantir rapidez,
            organização e segurança em cada pedido.
            Veja um pouco do nosso dia a dia.
          </p>
        </div>

        {/* Reels */}
        <ReelsCarousel />

        {/* Galeria */}
        <div className="mt-20">
          <StockGallery />
        </div>

      </div>
    </section>
  );
}