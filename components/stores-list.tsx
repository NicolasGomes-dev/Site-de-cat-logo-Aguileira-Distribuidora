import { MapPin, Phone, Building2, MapPinned } from "lucide-react"
import { stores } from "@/lib/stores"

export function StoresList() {
  return (
    <div className="space-y-10">
      {stores.map((state) => (
        <div key={state.id}>
          {/* Nome do Estado */}
          <div className="mb-5 flex items-center gap-3">
            <MapPin className="h-6 w-6 fill-brand-red text-brand-red" />

            <div>
              <h2 className="text-2xl font-bold text-navy">
                {state.name}
              </h2>

              <p className="text-sm text-slate-500">
                {state.stores.length} unidade
                {state.stores.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Lista das lojas */}
          <div className="grid gap-6 md:grid-cols-2">
            {state.stores.map((store) => (
              <div
                key={store.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Cabeçalho */}
                <div>
                  <h3 className="text-lg font-bold text-navy">
                    {store.city}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {state.uf}
                  </p>
                </div>

                {/* Informações */}
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-brand-red" />
                    <span>{store.type}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPinned className="h-4 w-4 text-brand-red" />
                    <span>{store.address}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-red" />
                    <span>{store.phone}</span>
                  </div>
                </div>

                {/* Botão */}
                <a
                  href={store.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-lg bg-brand-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Ver no Google Maps
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}