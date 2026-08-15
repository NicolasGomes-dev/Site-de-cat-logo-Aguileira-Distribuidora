"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const images = [
  {
    src: "/images/gallery/estoque-01.jpeg",
    alt: "Estoque da Aguilera Distribuidora",
  },
  {
    src: "/images/gallery/estoque-02.jpeg",
    alt: "Estoque de peças da Aguilera Distribuidora",
  },
  {
    src: "/images/gallery/estoque-03.jpeg",
    alt: "Centro de distribuição da Aguilera",
  },
]

export function StockCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
      
      {/* Carrossel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="relative min-w-0 flex-[0_0_100%]"
            >
              <div className="relative h-[420px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seta esquerda */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Imagem anterior"
        className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-all hover:scale-105 hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Seta direita */}
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Próxima imagem"
        className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition-all hover:scale-105 hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir para imagem ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              selectedIndex === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}