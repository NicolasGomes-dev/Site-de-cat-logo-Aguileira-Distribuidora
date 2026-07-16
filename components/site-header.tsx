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

const navItems = [
  { label: "HOME", href: "/" },
  { label: "AGUILEIRA", href: "#" },
  { label: "LOJAS", href: "#" },
  { label: "FABRICANTES", href: "#" },
  { label: "NOVIDADES", href: "#" },
  { label: "TRABALHE CONOSCO", href: "#" },
]

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/castrillonautopecasoficial/?locale=pt_BR",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aguileraatacado/",
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
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Barra superior */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="https://castrillon.portaldocliente.online/"
            className="text-center text-xs font-medium leading-relaxed transition-colors hover:text-brand-red sm:text-left sm:text-sm"
          >
            Acesse o Portal do Cliente para Segunda Via de Boletos e NFe.
          </Link>

          <ul className="flex items-center justify-center gap-2 sm:justify-end">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
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

      {/* Header */}
      <div className="border-b border-border bg-white shadow-md">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-4">

          {/* Logo */}
          <div className="justify-self-start">
            <Logo />
          </div>

          {/* Menu Desktop */}
          <div className="hidden justify-self-center lg:block">
            <nav aria-label="Menu principal">
              <ul className="flex items-center gap-4 font-heading text-sm font-medium tracking-wide text-navy">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="whitespace-nowrap transition-colors hover:text-brand-red"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Direita */}
          <div className="justify-self-end flex items-center gap-3">

            {/* WhatsApp Desktop */}
            <Link
              href="https://wa.me/556295128248?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20da%20Aguilera%20Autope%C3%A7as%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#1EBE5D]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fale com a gente
            </Link>

            {/* Botão Mobile */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
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

        {/* Menu Mobile */}
        {open && (
          <nav
            className="border-t border-border lg:hidden"
            aria-label="Menu principal"
          >
            <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 font-heading text-sm font-medium tracking-wide text-navy">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-border last:border-0"
                >
                  <Link
                    href={item.href}
                    className="block py-3 transition-colors hover:text-brand-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="pt-4">
                <Link
                  href="https://wa.me/556295128248?text=Olá!%20Vim%20pela%20página%20da%20Aguilera%20Distribuidora%20e%20gostaria%20de%20solicitar%20um%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
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