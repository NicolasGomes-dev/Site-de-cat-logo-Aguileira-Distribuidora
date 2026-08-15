import { MapPin, Phone } from "lucide-react"
import { stores } from "@/lib/stores"

const storeCoordinates: Record<string, string> = {
  Cuiabá: "-15.636389,-56.044750",
  Araguaína: "-7.216833,-48.245278",
  Pará: "-1.365361,-48.336417",
  Belém: "-1.365361,-48.336417",
  Teresina: "-5.118500,-42.797333",
}

function getMapsUrl(city: string, fallbackUrl?: string) {
  const coordinate = storeCoordinates[city]

  if (coordinate) {
    return `https://www.google.com/maps?q=${coordinate}`
  }

  return fallbackUrl || "#"
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

          {/* TÍTULO */}
          <div className="mb-5 border-b border-slate-200 pb-3">
            <h2 className="text-3xl font-bold text-navy">
              {state.name}
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 gap-6">

            {state.stores.map((store) => {
              const mapsUrl = getMapsUrl(
                store.city,
                store.maps
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

                  <h3 className="text-2xl font-bold text-navy">
                    {store.city}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {store.type}
                  </p>

                  <div className="mt-6 space-y-4">

                    <div className="flex items-center gap-3 text-slate-600">
                      <MapPin className="h-5 w-5 shrink-0 text-brand-red" />

                      <span>
                        {store.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-600">
                      <Phone className="h-5 w-5 shrink-0 text-brand-red" />

                      <span className="font-medium">
                        {store.phone}
                      </span>
                    </div>

                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">

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
                      "
                    >
                      <MapPin className="h-4 w-4" />
                      Ver localização
                    </a>

                    <a
                      href={`https://wa.me/${store.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-green-500
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-green-600
                        hover:shadow-md
                      "
                    >
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