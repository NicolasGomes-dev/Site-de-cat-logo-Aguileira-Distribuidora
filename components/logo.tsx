import Image from "next/image"

export function Logo() {
  return (
    <Image
      src="/logoAguileiraDistribuidora.png"
      alt="Aguilera Autopeças"
      width={220}
      height={70}
      priority
    />
  )
}