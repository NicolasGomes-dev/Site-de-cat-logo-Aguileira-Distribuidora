import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logoAguileiraDistribuidora.png"
        alt="Aguilera Distribuidora"
        width={220}
        height={70}
        priority
        className="h-auto w-[160px] sm:w-[190px] lg:w-[220px]"
      />
    </Link>
  )
}