"use client"

import Image from "next/image"

export function BrazilMap() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <Image
        src="/images/brasil-estados.svg"
        alt="Mapa do Brasil com divisão dos estados"
        width={450}
        height={450}
        priority
        className="mx-auto h-auto w-full object-contain"
      />
    </div>
  )
}