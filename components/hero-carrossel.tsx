"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const banners = [
  "/hero-home.png",
  "/hero-home2.png",
  "/hero-home3.png",
]

export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  )

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden rounded-3xl shadow-xl"
    >
      <div className="flex">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="min-w-full"
          >
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              width={1842}
              height={854}
              priority={index === 0}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}