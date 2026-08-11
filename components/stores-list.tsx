import { MapPin, Phone } from "lucide-react"
import { stores } from "@/lib/stores"

export function StoresList() {
  return (
    <div className="space-y-12">
      {stores.map((state) => (
        <section key={state.id}>
          {/* Título */}
          <div className="mb-5 border-b border-slate-200 pb-3">
            <h2 className="text-3xl font-bold text-navy">
              {state.name}
            </h2>
          </div>

          {/* Card */}
          <div className="grid grid-cols-1">
            {state.stores.map((store) => (
              <div
                key={store.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-navy">
                  {store.city}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Centro de Distribuição
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="h-5 w-5 text-brand-red" />
                    <span>{store.address}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone className="h-5 w-5 text-brand-red" />
                    <span>{store.phone}</span>
                  </div>
                </div>

                <a
                  href={store.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  <MapPin className="h-4 w-4" />
                  Ver localização
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}