"use client"

import Image from "next/image"

export function HeroCarousel() {
  return (
    <div className="w-full rounded-3xl overflow-hidden">
      <Image
        src="/hero-home.png"
        alt="Banner Principal"
        width={1842}
        height={854}
        priority
        className="w-full h-auto"
      />
    </div>
  )
}