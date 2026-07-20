"use client"

import Image from "next/image"

const brands = [
  "/brands/bosch.webp",
  "/brands/cofap.png",
  "/brands/dayco.png",
  "/brands/ina.png",
  "/brands/mahle.jpg",
  "/brands/nakata.jpg",
  "/brands/trw.png",
]
export function ManufacturersMarquee() {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex w-max animate-marquee gap-16">
        {[...brands, ...brands].map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt="Fabricante"
            width={140}
            height={60}
            className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </div>
  )
}