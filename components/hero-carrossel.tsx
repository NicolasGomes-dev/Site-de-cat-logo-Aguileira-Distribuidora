"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const banners = [
  "/hero-home.png",
  "/hero-home3.png",
];

export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden rounded-[28px] shadow-2xl"
    >
      <div className="flex">
        {banners.map((banner, index) => (
          <div key={index} className="relative min-w-full aspect-[1842/854]">
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}