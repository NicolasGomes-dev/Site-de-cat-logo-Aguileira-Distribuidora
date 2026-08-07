import Image from "next/image"
import { MapPin } from "lucide-react"
import { stores } from "@/lib/stores"

export function StoresMap() {
  return (
    <div className="relative flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

      <Image
        src="/images/brasil.svg"
        alt="Mapa do Brasil"
        width={700}
        height={700}
        className="w-full max-w-[460px]"
      />

      {stores.map((store) => (
        <div
          key={store.id}
          className="group absolute"
          style={{
            left: store.x,
            top: store.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          {/* Pin com animação */}
          <div className="relative flex items-center justify-center">

            <span className="absolute h-4 w-4 rounded-full bg-brand-red opacity-30 animate-ping"></span>

            <MapPin className="relative h-8 w-8 fill-brand-red text-brand-red drop-shadow-lg transition-all duration-300 group-hover:scale-110" />

          </div>

          {/* Tooltip */}
          <div className="absolute bottom-10 left-1/2 z-20 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl opacity-0 invisible scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:visible group-hover:scale-100">

            <h3 className="text-lg font-bold text-navy">
              {store.name}
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-600">

              <div className="flex items-center gap-2">
                <span className="text-brand-red">✓</span>
                Distribuição de peças
              </div>

              <div className="flex items-center gap-2">
                <span className="text-brand-red">✓</span>
                Atendimento regional
              </div>

              <div className="flex items-center gap-2">
                <span className="text-brand-red">✓</span>
                Logística especializada
              </div>

            </div>

          </div>
        </div>
      ))}

    </div>
  )
}