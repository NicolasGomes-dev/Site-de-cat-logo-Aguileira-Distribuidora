"use client";

import Image from "next/image";

export function StockCarousel() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-3xl shadow-2xl">
      <Image
        src="/images/gallery/estoque-01.jpeg"
        alt="Estoque Aguilera"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}