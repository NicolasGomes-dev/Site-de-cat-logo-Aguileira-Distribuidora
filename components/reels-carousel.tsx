"use client";

export function ReelsCarousel() {
  const reels = [
    "/videos/reels/reel-01.mp4",
    "/videos/reels/reel-02.mp4",
    "/videos/reels/reel-03.mp4",
    "/videos/reels/reel-04.mp4",
  ];

  return (
    <section>
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold text-navy">
          Nosso dia a dia
        </h3>

        <p className="mt-2 text-slate-600">
          Acompanhe alguns momentos da rotina da AGUILERA.
        </p>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div
          className="
            flex
            gap-5
            overflow-x-auto
            snap-x
            snap-mandatory
            scrollbar-hide
            pb-2
          "
        >
          {reels.map((video, index) => (
            <div
              key={index}
              className="
                min-w-[250px]
                snap-center
                overflow-hidden
                rounded-3xl
                shadow-xl
              "
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

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {reels.map((video, index) => (
          <div
            key={index}
            className="
              overflow-hidden
              rounded-3xl
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
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
    </section>
  );
}