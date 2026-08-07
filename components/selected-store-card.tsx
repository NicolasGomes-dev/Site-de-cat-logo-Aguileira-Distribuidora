import { Building2, MapPin, MapPinned, Phone } from "lucide-react"

interface Store {
  city: string
  type: string
  address: string
  phone: string
  maps: string
}

interface SelectedStoreCardProps {
  store: Store
}

export function SelectedStoreCard({
  store,
}: SelectedStoreCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">

      <span className="inline-flex rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red">
        {store.type}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-navy">
        {store.city}
      </h3>

      <div className="mt-6 space-y-4">

        <div className="flex items-start gap-3">
          <Building2 className="mt-1 h-5 w-5 text-brand-red" />
          <span>{store.type}</span>
        </div>

        <div className="flex items-start gap-3">
          <MapPinned className="mt-1 h-5 w-5 text-brand-red" />
          <span>{store.address}</span>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 text-brand-red" />
          <span>{store.phone}</span>
        </div>

      </div>

      <a
        href={store.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        <MapPin className="h-5 w-5" />
        Ver no Google Maps
      </a>

    </div>
  )
}