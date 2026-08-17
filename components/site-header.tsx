"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Logo } from "@/components/logo"
import { WhatsAppButton } from "@/components/whatsapp-button"

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/social-icons"

// ============================================
// LINK DO PORTAL B2B
// ============================================

const B2B_URL = "https://b2b.castrillon.com.br/portal/login"

// ============================================
// MENU PRINCIPAL
// ============================================

const navItems = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "AGUILERA",
    href: "/aguilera",
  },
  {
    label: "LOJAS",
    href: "/#lojas",
  },
  {
    label: "FABRICANTES",
    href: "/#fabricantes",
  },
  {
    label: "TRABALHE CONOSCO",
    href: "https://wa.me/556295128248?text=Olá!%20Vim%20pelo%20site%20da%20Aguilera%20Distribuidora.%20Tenho%20interesse%20em%20fazer%20parte%20da%20equipe%20e%20gostaria%20de%20saber%20se%20há%20oportunidades%20disponíveis.",
  },
]

// ============================================
// REDES SOCIAIS
// ============================================

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

// ============================================
// HEADER
// ============================================

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-[1000] w-full">

      {/* =====================================================
          BARRA SUPERIOR
      ===================================================== */}

      <div className="w-full bg-navy text-white">

        <div
          className="
            mx-auto
            flex
            min-h-[54px]
            max-w-screen-2xl
            items-center
            justify-between
            gap-4
            px-6
          "
        >

          {/* TELEFONE */}

          <div
            className="
              hidden
              items-center
              gap-2
              whitespace-nowrap
              text-sm
              font-semibold
              lg:flex
            "
          >
            <span className="text-brand-red">
              ☎
            </span>

            <span>
              (65) 2018 3300
            </span>
          </div>


          {/* PORTAL DO CLIENTE */}

          <a
            href="https://castrillon.portaldocliente.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              text-center
              text-xs
              font-semibold
              leading-5
              transition-colors
              duration-200
              hover:text-brand-red
              sm:text-sm
            "
          >
            Acesse o Portal do Cliente para Segunda Via de Boletos e NFe.
          </a>


          {/* REDES SOCIAIS */}

          <div className="flex items-center gap-2">

            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} Aguilera`}
                className="
                  flex
                  h-9
                  w-9
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-brand-red
                  hover:bg-brand-red
                "
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          HEADER PRINCIPAL
      ===================================================== */}

      <div
        className="
          relative
          z-[1001]
          w-full
          border-b
          border-slate-200
          bg-white
          shadow-md
        "
      >

        <div
          className="
            mx-auto
            flex
            min-h-[100px]
            max-w-screen-2xl
            items-center
            justify-between
            gap-6
            px-6
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            aria-label="Aguilera Distribuidora - Página inicial"
            className="
              relative
              z-[1002]
              flex
              shrink-0
              cursor-pointer
              items-center
            "
          >
            <Logo />
          </Link>


          {/* =================================================
              MENU DESKTOP
          ================================================= */}

          <nav
            className="
              hidden
              flex-1
              justify-center
              lg:flex
            "
            aria-label="Menu principal"
          >

            <ul
              className="
                flex
                items-center
                justify-center
                gap-7
                font-heading
                text-[15px]
                font-semibold
                uppercase
                tracking-wide
                text-navy
              "
            >

              {navItems.map((item) => {

                const external = item.href.startsWith("http")

                return (
                  <li key={item.label}>

                    <a
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="
                        relative
                        flex
                        cursor-pointer
                        items-center
                        whitespace-nowrap
                        py-2
                        transition-colors
                        duration-300
                        hover:text-brand-red
                      "
                    >
                      {item.label}

                      <span
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          w-0
                          bg-brand-red
                          transition-all
                          duration-300
                          hover:w-full
                        "
                      />
                    </a>

                  </li>
                )

              })}

            </ul>

          </nav>


          {/* =================================================
              BOTÕES DESKTOP
          ================================================= */}

          <div
            className="
              hidden
              shrink-0
              items-center
              gap-3
              lg:flex
            "
          >

            {/* B2B */}

            <a
              href={B2B_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-[46px]
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                bg-brand-red
                px-5
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:scale-105
                hover:bg-red-700
                active:scale-95
              "
            >
              ACESSAR B2B
            </a>


            {/* WHATSAPP */}

            <WhatsAppButton
              className="
                flex
                h-[46px]
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#25D366]
                px-6
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#1EBE5D]
                active:scale-95
              "
            />

          </div>


          {/* =================================================
              BOTÃO MENU MOBILE
          ================================================= */}

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="
              relative
              z-[1003]
              flex
              h-11
              w-11
              cursor-pointer
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              bg-white
              text-navy
              transition-all
              duration-200
              hover:bg-slate-50
              active:scale-95
              lg:hidden
            "
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>


        {/* =====================================================
            MENU MOBILE
        ===================================================== */}

        {open && (
          <div
            className="
              relative
              z-[1002]
              border-t
              border-slate-200
              bg-white
              shadow-lg
              lg:hidden
            "
          >

            <nav
              aria-label="Menu mobile"
              className="mx-auto max-w-screen-2xl px-6"
            >

              <ul className="flex flex-col">

                {navItems.map((item) => {

                  const external = item.href.startsWith("http")

                  return (
                    <li
                      key={item.label}
                      className="border-b border-slate-200 last:border-0"
                    >

                      <a
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={
                          external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={() => setOpen(false)}
                        className="
                          flex
                          min-h-[52px]
                          cursor-pointer
                          items-center
                          font-heading
                          text-sm
                          font-semibold
                          uppercase
                          tracking-wide
                          text-navy
                          transition-colors
                          duration-200
                          hover:text-brand-red
                        "
                      >
                        {item.label}
                      </a>

                    </li>
                  )

                })}


                {/* B2B MOBILE */}

                <li className="py-4">

                  <a
                    href={B2B_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-[48px]
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-red
                      px-5
                      text-sm
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                      transition-all
                      duration-300
                      hover:bg-red-700
                      active:scale-95
                    "
                  >
                    ACESSAR B2B
                  </a>

                </li>


                {/* WHATSAPP MOBILE */}

                <li className="pb-5">

                  <WhatsAppButton
                    className="
                      flex
                      h-[48px]
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#25D366]
                      px-5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#1EBE5D]
                      active:scale-95
                    "
                  />

                </li>

              </ul>

            </nav>

          </div>
        )}

      </div>

    </header>
  )
}