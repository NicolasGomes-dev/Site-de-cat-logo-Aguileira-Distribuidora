import Link from "next/link"
import { WhatsAppIcon } from "@/components/social-icons"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/556295128248?text=Olá!%20Vim%20pela%20página%20da%20Aguilera%20Autopeças%20e%20gostaria%20de%20solicitar%20um%20orçamento." target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.17_155)] text-white shadow-lg transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </Link>
  )
}
