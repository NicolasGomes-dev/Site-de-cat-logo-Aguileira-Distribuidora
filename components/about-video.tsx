export function AboutVideo() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-brand-red font-semibold uppercase tracking-widest">
            Estrutura
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy">
            Conheça nossa empresa
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-8">
            Assista ao nosso vídeo institucional e conheça nossa estrutura,
            logística e o compromisso da Aguilera Distribuidora com seus
            clientes.
          </p>
        </div>

        {/* Vídeo */}
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <video
            className="w-full aspect-video object-cover"
            poster="/aguilera-capa.jpg"
            controls
            preload="metadata"
          >
            <source
              src="/video-aguilera.mp4"
              type="video/mp4"
            />
            Seu navegador não suporta vídeos.
          </video>
        </div>

      </div>
    </section>
  );
}