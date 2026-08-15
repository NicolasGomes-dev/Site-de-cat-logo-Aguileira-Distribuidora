"use client"

export function ReelsCarousel() {
  const reels = [
    "/videos/reels/reel-01.mp4",
    "/videos/reels/reel-02.mp4",
    "/videos/reels/reel-03.mp4",
    "/videos/reels/reel-04.mp4",
  ]

  return (
    <section className="relative z-0 py-4">
      <div className="mx-auto max-w-7xl px-6">

        {/* Cabeçalho */}
        <div className="mb-4 text-center">

          <span className="inline-block rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-brand-red">
            🎥 Bastidores da Aguilera
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl lg:text-5xl">
            Veja a Aguilera em ação
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            Conheça nossa equipe, nossa estrutura e o dia a dia da Aguilera
            Distribuidora.
          </p>

        </div>

        {/* Vídeos Mobile */}
        <div className="lg:hidden">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">

            {reels.map((video, index) => (
              <div
                key={index}
                className="min-w-[250px] snap-center overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <video
                  className="aspect-[9/16] w-full bg-black object-contain"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  controlsList="nodownload noplaybackrate"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}

          </div>
        </div>

        {/* Vídeos Desktop */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-4">

          {reels.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <video
                className="aspect-[9/16] w-full bg-black object-contain"
                controls
                muted
                playsInline
                preload="metadata"
                controlsList="nodownload noplaybackrate"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <a
            href="/aguilera"
            className="inline-flex items-center rounded-xl bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-navy"
          >
            Conheça nossa estrutura →
          </a>

        </div>

      </div>
    </section>
  )
}