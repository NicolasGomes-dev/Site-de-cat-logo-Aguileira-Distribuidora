import Link from "next/link"
import { MapPin, Phone, CreditCard } from "lucide-react"
import { Logo } from "@/components/logo"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons"

const cards = ["Mastercard", "Losango", "Elo", "Calcard", "Visa", "Amex", "BNDES", "Hipercard"]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Coluna esquerda */}
          <div>
            <Logo />

            <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/90">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                Avenida Perimetral Norte, 2859 - Fazenda Caveiras, Goiania - GO, 74.445-360
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-red" />
                (65) 2018 3300
              </p>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="space-y-8">
            <div className="text-sm leading-relaxed text-white/90">
              <p>Horário de Atendimento: Segunda a Sexta 07:30 às 18:00</p>
              <p>Sábado: 7:30 às 12:00 (Exceto feriados)</p>
            </div>

            <div>
              <p className="mb-3 text-sm text-white/90">Nossas Redes Sociais:</p>
              <ul className="flex items-center gap-3">
                {[
                    {
                      label: "Facebook",
                      href: "https://facebook.com/",
                      Icon: FacebookIcon,
                    },
                    {
                      label: "Instagram",
                      href: "https://www.instagram.com/aguileradistribuidora/",
                      Icon: InstagramIcon,
                    },
                    {
                      label: "LinkedIn",
                      href: "https://linkedin.com/",
                      Icon: LinkedinIcon,
                    },
                  ]
                    .map(({ label,href, Icon }) => (
                      <li key={label}>
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-light transition-colors hover:bg-brand-red"
                        >
                          <Icon className="h-4 w-4" />
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-relaxed">
            © 2026. Castrillon Autopeças. Todos os direitos reservados.
            <br />
            Castrillon Autopeças Ltda. CNPJ: 37.525.771/0001-02
          </p>
        </div>
      </div>
    </footer>
  )
}
