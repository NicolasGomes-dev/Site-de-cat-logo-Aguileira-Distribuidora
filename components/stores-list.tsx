import { MapPin, Phone, MessageCircle } from "lucide-react"
import { stores } from "@/lib/stores"

function getMapsUrl(city: string, fallbackUrl?: string) {
  if (fallbackUrl && fallbackUrl !== "#") {
    return fallbackUrl
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${city}, Brasil`
  )}`
}

function getWhatsAppNumber(phone: string) {
  return phone.replace(/\D/g, "")
}

function getWhatsAppUrl(city: string, phone: string) {
  const number = getWhatsAppNumber(phone)

  const message = encodeURIComponent(
    `Olá! Vim pelo site da Aguilera Distribuidora e gostaria de entrar em contato com a unidade de ${city}.`
  )

  return `https://wa.me/55${number}?text=${message}`
}

export function StoresList() {
  return (
    <div className="space-y-12">

      {stores.map((state) => (
        <section
          key={state.id}
          id={state.uf}
          data-store={state.uf}
          className="scroll-mt-32"
        >

          {/* ==============================
              TÍTULO DO ESTADO
          ============================== */}

          <div className="mb-5 border-b border-slate-200 pb-3">
            <h2 className="text-3xl font-bold text-navy">
              {state.name}
            </h2>
          </div>

          {/* ==============================
              LOJAS
          ============================== */}

          <div className="grid grid-cols-1 gap-6">

            {state.stores.map((store) => {

              const mapsUrl = getMapsUrl(
                store.city,
                store.maps
              )

              const whatsappUrl = getWhatsAppUrl(
                store.city,
                store.phone
              )

              return (
                <div
                  key={store.id}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  {/* ==============================
                      NOME DA CIDADE
                  ============================== */}

                  <h3 className="text-2xl font-bold text-navy">
                    {store.city}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {store.type}
                  </p>

                  {/* ==============================
                      INFORMAÇÕES
                  ============================== */}

                  <div className="mt-6 space-y-4">

                    {/* ENDEREÇO */}

                    <div className="flex items-start gap-3 text-slate-600">

                      <MapPin
                        className="
                          mt-0.5
                          h-5
                          w-5
                          shrink-0
                          text-brand-red
                        "
                      />

                      <span className="leading-6">
                        {store.address}
                      </span>

                    </div>

                    {/* TELEFONE */}

                    <div className="flex items-center gap-3 text-slate-600">

                      <Phone
                        className="
                          h-5
                          w-5
                          shrink-0
                          text-brand-red
                        "
                      />

                      <span className="font-medium">
                        {store.phone}
                      </span>

                    </div>

                  </div>

                  {/* ==============================
                      BOTÕES
                  ============================== */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    {/* GOOGLE MAPS */}

                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-brand-red
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-red-700
                        hover:shadow-md
                        active:scale-95
                      "
                    >
                      <MapPin className="h-4 w-4" />

                      Ver localização
                    </a>

                    {/* WHATSAPP DA UNIDADE */}

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-[#25D366]
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#1EBE5D]
                        hover:shadow-md
                        active:scale-95
                      "
                    >
                      <MessageCircle className="h-4 w-4" />

                      WhatsApp
                    </a>

                  </div>

                </div>
              )
            })}

          </div>

        </section>
      ))}

    </div>
  )
}