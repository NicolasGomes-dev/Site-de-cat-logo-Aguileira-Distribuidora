"use client"

import { useState } from "react"
import { WhatsAppSelector } from "@/components/whatsapp-selector"
import { WhatsAppIcon } from "@/components/social-icons"
import { whatsappCompanies } from "@/lib/whatsapp"

type WhatsAppButtonProps = {
  children?: React.ReactNode
  className?: string
}

export function WhatsAppButton({
  children = "Fale com a gente",
  className = "",
}: WhatsAppButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* BOTÃO FLUTUANTE */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir opções de WhatsApp"
          className={`
            relative
            z-[10001]
            pointer-events-auto
            cursor-pointer
            ${className}
          `}
        >
          <WhatsAppIcon className="h-5 w-5" />

          <span>
            {children}
          </span>
        </button>
      )}

      {/* POPUP */}
      <WhatsAppSelector
        open={open}
        onClose={() => setOpen(false)}
        companies={whatsappCompanies}
      />
    </>
  )
}