import { ReelsCarousel } from "./reels-carousel";
import { StockGallery } from "./stock-gallery";

export function CompanyShowcase() {
  return (
    <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] bg-white p-8 shadow-xl lg:p-14">

          {/* Cabeçalho */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
              Nossa Estrutura
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-navy lg:text-5xl">
              Conheça a Aguilera por dentro
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nossa estrutura foi planejada para garantir rapidez,
              organização e segurança em cada pedido.
              Conheça nosso estoque, logística e a dedicação da nossa equipe
              em entregar qualidade para todo o Brasil.
            </p>

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