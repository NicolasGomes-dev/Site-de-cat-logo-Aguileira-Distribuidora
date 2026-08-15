"use client"

import { X } from "lucide-react"
import { WhatsAppIcon } from "@/components/social-icons"

type WhatsAppCompany = {
  name: string
  description?: string
  phone: string
}

type WhatsAppSelectorProps = {
  open: boolean
  onClose: () => void
  companies: WhatsAppCompany[]
}

export function WhatsAppSelector({
  open,
  onClose,
  companies,
}: WhatsAppSelectorProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        {/* FECHAR */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            text-slate-400
            transition-colors
            hover:bg-slate-100
            hover:text-slate-700
          "
        >
          <X className="h-5 w-5" />
        </button>

        {/* TÍTULO */}
        <div className="pr-8">
          <h2 className="text-2xl font-bold text-navy">
            Fale com a gente
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Selecione a empresa que você deseja entrar em contato pelo
            WhatsApp.
          </p>
        </div>

        {/* EMPRESAS */}
        <div className="mt-6 space-y-3">
          {companies.map((company) => {
            const whatsappUrl = `https://wa.me/${company.phone}`

            return (
              <a
                key={company.name}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-slate-200
                  p-4
                  transition-all
                  duration-200
                  hover:border-[#25D366]
                  hover:bg-green-50
                  hover:shadow-sm
                "
              >
                {/* ÍCONE */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#25D366]
                    text-white
                  "
                >
                  <WhatsAppIcon className="h-6 w-6" />
                </div>

                {/* INFORMAÇÕES */}
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-navy">
                    {company.name}
                  </p>

                  {company.description && (
                    <p className="mt-1 text-sm text-slate-500">
                      {company.description}
                    </p>
                  )}
                </div>
              </a>
            )
          })}
        </div>

      </div>
    </div>
  )
}