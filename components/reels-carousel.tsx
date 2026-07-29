export function ReelsCarousel() {
  const reels = [
    "/videos/reels/reel-01.mp4",
    "/videos/reels/reel-02.mp4",
    "/videos/reels/reel-03.mp4",
    "/videos/reels/reel-04.mp4",
  ];

  return (
    <section>
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-navy">
          Nosso dia a dia
        </h3>

        <p className="mt-2 text-slate-600">
          Acompanhe alguns momentos da rotina da AGUILERA.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {reels.map((video, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <video
              className="aspect-[9/16] w-full object-contain bg-black"
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