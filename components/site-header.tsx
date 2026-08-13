"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/social-icons"

// ==============================
// LINKS PRINCIPAIS
// ==============================

const B2B_URL = "https://b2b.castrillon.com.br/portal/login"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "AGUILERA", href: "/aguilera" },
  { label: "LOJAS", href: "/lojas" },
  { label: "FABRICANTES", href: "/#fabricantes" },
  {
    label: "TRABALHE CONOSCO",
    href: "https://wa.me/556295128248?text=Olá!%20Vim%20pelo%20site%20da%20Aguilera%20Distribuidora.%20Tenho%20interesse%20em%20fazer%20parte%20da%20equipe%20e%20gostaria%20de%20saber%20se%20há%20oportunidades%20disponíveis.%20Agradeço%20pela%20atenção!",
  },
]

// ==============================
// REDES SOCIAIS
// ==============================

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/castrillonautopecasoficial/?locale=pt_BR",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aguileradistribuidoradepecas/",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/castrillon-autopecas/posts/?feedView=all",
    Icon: LinkedinIcon,
  },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">

      {/* ==============================
          BARRA SUPERIOR
      ============================== */}

      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

          {/* Telefone */}
          <div className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium lg:flex">
            <span>📞</span>
            <span>(65) 2018 3300</span>
          </div>

          {/* Portal do Cliente */}
          <Link
            href="https://castrillon.portaldocliente.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs font-medium leading-relaxed transition-colors hover:text-brand-red sm:text-sm"
          >
            Acesse o Portal do Cliente para Segunda Via de Boletos e NFe.
          </Link>

          {/* Redes sociais */}
          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} Aguilera`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#C20E1A] hover:bg-[#C20E1A]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* ==============================
          HEADER PRINCIPAL
      ============================== */}

      <div className="border-b border-slate-200 bg-white shadow-md">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-5">

          {/* Logo */}
          <div className="justify-self-start">
            <Logo />
          </div>

          {/* ==============================
              MENU DESKTOP
          ============================== */}

          <div className="hidden justify-self-center lg:block">
            <nav aria-label="Menu principal">
              <ul className="flex items-center gap-8 font-heading text-[15px] font-semibold uppercase tracking-wide text-navy">

                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="relative transition-colors duration-300 hover:text-brand-red after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-brand-red after:transition-all hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

              </ul>
            </nav>
          </div>

          {/* ==============================
              LADO DIREITO
          ============================== */}

          <div className="flex items-center justify-self-end gap-3">

            {/* B2B */}
            <Link
              href={B2B_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-xl bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#a80c17] lg:flex"
            >
              Acessar B2B
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/556295128248?text=Olá!%20Vim%20pela%20página%20da%20Aguilera%20Distribuidora%20e%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1EBE5D] lg:flex"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fale com a gente
            </Link>

            {/* Menu Mobile */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
            >
              {open ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

          </div>

        </div>

        {/* ==============================
            MENU MOBILE
        ============================== */}

        {open && (
          <nav
            className="border-t border-slate-200 bg-white lg:hidden"
            aria-label="Menu principal"
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 font-heading text-sm font-medium tracking-wide text-navy">

              {/* Links */}
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-slate-200 last:border-0"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 transition-colors hover:text-brand-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* ==============================
                  B2B MOBILE
              ============================== */}

              <li className="pt-4">
                <Link
                  href={B2B_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-[#a80c17]"
                >
                  Acessar B2B
                </Link>
              </li>

              {/* ==============================
                  WHATSAPP MOBILE
              ============================== */}

              <li className="pt-3 pb-4">
                <Link
                  href="https://wa.me/556295128248?text=Olá!%20Vim%20pela%20página%20da%20Aguilera%20Distribuidora%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Fale com a gente
                </Link>
              </li>

            </ul>
          </nav>
        )}

      </div>

    </header>
  )
}