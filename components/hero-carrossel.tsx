"use client"

import { useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"

const images = [
  "/hero-home.png",
  "/hero-home2.png",
  "/hero-home3.png",
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  useEffect(() => {
    if (!emblaApi) return

    console.log("Embla iniciado!")

    const interval = setInterval(() => {
      console.log("Próximo slide")
      emblaApi.scrollNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full"
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}