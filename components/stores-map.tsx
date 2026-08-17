"use client"

import { useEffect, useState } from "react"
import { stores } from "@/lib/stores"

type Store = (typeof stores)[number]

export function StoresMap() {
  const [svg, setSvg] = useState<string>("")

  /*
   * ==========================================
   * ESTADOS QUE DEVEM SER CLICÁVEIS
   * ==========================================
   *
   * 15 = Pará
   * 17 = Tocantins
   * 51 = Mato Grosso
   * 52 = Goiás
   */
  const activeStateCodes = new Set([
    "15",
    "17",
    "51",
    "52",
  ])

  /*
   * ==========================================
   * CARREGA O SVG DO MAPA
   * ==========================================
   */
  useEffect(() => {
    let cancelled = false

    async function loadMap() {
      try {
        const response = await fetch(
          "/images/brasil-estados.svg"
        )

        if (!response.ok) {
          throw new Error(
            "Não foi possível carregar o mapa."
          )
        }

        let svgText = await response.text()

        const parser = new DOMParser()

        const documentSvg =
          parser.parseFromString(
            svgText,
            "image/svg+xml"
          )

        const svgElement =
          documentSvg.documentElement

        /*
         * ======================================
         * CONFIGURAÇÕES DO SVG
         * ======================================
         */

        svgElement.setAttribute(
          "width",
          "100%"
        )

        svgElement.setAttribute(
          "height",
          "100%"
        )

        svgElement.setAttribute(
          "preserveAspectRatio",
          "xMidYMid meet"
        )

        /*
         * ======================================
         * CONFIGURAÇÃO DOS ESTADOS
         * ======================================
         */

        const stateElements =
          svgElement.querySelectorAll(
            "a.estado"
          )

        stateElements.forEach(
          (stateElement) => {
            const code =
              stateElement.getAttribute(
                "code"
              )

            /*
             * TODOS OS ESTADOS
             * ficam em cinza claro
             */
            let fill = "#E2E5F0"

            /*
             * ESTADOS ATIVOS
             * ficam em azul
             */
            if (
              code &&
              activeStateCodes.has(code)
            ) {
              fill = "#303271"
            }

            /*
             * PRINCIPAL OPERAÇÃO
             * Mato Grosso em vermelho
             */
            if (code === "51") {
              fill = "#C20E1A"
            }

            const paths =
              stateElement.querySelectorAll(
                "path"
              )

            paths.forEach((path) => {
              path.setAttribute(
                "fill",
                fill
              )

              path.setAttribute(
                "stroke",
                "#FFFFFF"
              )

              path.setAttribute(
                "stroke-width",
                "1.0404"
              )
            })

            /*
             * Marca estados clicáveis
             */
            if (
              code &&
              activeStateCodes.has(code)
            ) {
              stateElement.setAttribute(
                "data-active",
                "true"
              )

              stateElement.setAttribute(
                "data-state-code",
                code
              )

              stateElement.setAttribute(
                "data-state-name",
                stateElement.getAttribute(
                  "name"
                ) || ""
              )
            }
          }
        )

        /*
         * ======================================
         * ESTILO DOS ESTADOS CLICÁVEIS
         * ======================================
         */

        const style =
          documentSvg.createElement(
            "style"
          )

        style.textContent = `
          a.estado[data-active="true"] {
            cursor: pointer;
          }

          a.estado[data-active="true"] path {
            transition:
              opacity 0.2s ease,
              filter 0.2s ease;
          }

          a.estado[data-active="true"]:hover path {
            opacity: 0.82;
            filter:
              brightness(1.08)
              drop-shadow(
                0 3px 5px
                rgba(15, 23, 42, 0.20)
              );
          }
        `

        svgElement.appendChild(style)

        /*
         * ======================================
         * REMOVE LINKS DO SVG
         * ======================================
         *
         * Os estados não irão navegar para
         * nenhuma página externa.
         *
         * O clique será tratado pelo React.
         */
        stateElements.forEach(
          (stateElement) => {
            stateElement.removeAttribute(
              "xlink:href"
            )

            stateElement.removeAttribute(
              "href"
            )
          }
        )

        svgText =
          svgElement.outerHTML

        if (!cancelled) {
          setSvg(svgText)
        }
      } catch (error) {
        console.error(
          "Erro ao carregar mapa:",
          error
        )
      }
    }

    loadMap()

    return () => {
      cancelled = true
    }
  }, [])

  /*
   * ==========================================
   * ENCONTRA A LOJA PELO CÓDIGO DO ESTADO
   * ==========================================
   */
  function findStoreByCode(
    code: string
  ): Store | undefined {
    const codeMap: Record<
      string,
      string
    > = {
      PA: "15",
      TO: "17",
      MT: "51",
      GO: "52",
    }

    return stores.find((store) => {
      const uf =
        store.uf.split("-")[0]

      return codeMap[uf] === code
    })
  }

  /*
   * ==========================================
   * CLIQUE NO MAPA
   * ==========================================
   *
   * Ao clicar em um dos quatro estados:
   *
   * PA → card do Pará
   * TO → card de Tocantins
   * MT → card de Mato Grosso
   * GO → card de Goiás
   *
   * Não abre popup.
   */
  function handleMapClick(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const target =
      event.target as HTMLElement

    const stateElement =
      target.closest(
        'a.estado[data-active="true"]'
      )

    if (!stateElement) {
      return
    }

    const code =
      stateElement.getAttribute(
        "data-state-code"
      )

    if (!code) {
      return
    }

    const store =
      findStoreByCode(code)

    if (!store) {
      return
    }

    /*
     * ======================================
     * REDIRECIONA DIRETAMENTE PARA O CARD
     * ======================================
     */

    const stateCode =
      store.uf.split("-")[0]

    const card =
      document.getElementById(
        stateCode
      )

    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[620px]
        px-2
        sm:px-4
      "
    >

      {/* ======================================
          MAPA
      ====================================== */}

      <div
        onClick={handleMapClick}
        className="
          relative
          mx-auto
          w-full
          max-w-[500px]
        "
      >

        {/* BRILHO */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-0
            h-[75%]
            w-[75%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-brand-red/5
            blur-3xl
          "
        />

        {/* ======================================
            SVG DO MAPA
        ====================================== */}

        {svg ? (
          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-[450px]
            "
            dangerouslySetInnerHTML={{
              __html: svg,
            }}
          />
        ) : (
          <div
            className="
              flex
              h-[460px]
              items-center
              justify-center
              text-sm
              text-slate-400
            "
          >
            Carregando mapa...
          </div>
        )}

      </div>

      {/* ======================================
          LEGENDA
      ====================================== */}

      <div
        className="
          mx-auto
          mt-5
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-5
          gap-y-2
          text-xs
          text-slate-600
          sm:text-sm
        "
      >

        {/* PRINCIPAL OPERAÇÃO */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              h-3
              w-3
              rounded-sm
              bg-brand-red
            "
          />

          <span>
            Principal operação
          </span>

        </div>

        {/* REGIÕES ATENDIDAS */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              h-3
              w-3
              rounded-sm
              bg-navy
            "
          />

          <span>
            Regiões atendidas
          </span>

        </div>

        {/* OUTRAS REGIÕES */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <span
            className="
              h-3
              w-3
              rounded-sm
              bg-[#E2E5F0]
            "
          />

          <span>
            Outras regiões
          </span>

        </div>

      </div>

    </div>
  )
}