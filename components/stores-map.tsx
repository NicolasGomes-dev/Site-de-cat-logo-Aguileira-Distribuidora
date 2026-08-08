import Image from "next/image"
import { MapPin } from "lucide-react"
import { stores } from "@/lib/stores"

export function StoresMap() {
  const goToState = (uf: string) => {
    document.getElementById(uf)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <Image
        src="/images/brasil.svg"
        alt="Mapa do Brasil"
        width={700}
        height={700}
        className="h-auto w-full"
      />

      {stores.map((state) => (
        <button
          key={state.id}
          type="button"
          onClick={() => goToState(state.uf)}
          className="group absolute"
          style={{
            left: state.x,
            top: state.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute h-4 w-4 rounded-full bg-brand-red opacity-30 animate-ping"></span>

            <MapPin className="relative h-8 w-8 fill-brand-red text-brand-red transition-all duration-300 group-hover:scale-110" />
          </div>

          <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 w-40 -translate-x-1/2 rounded-xl bg-navy px-3 py-2 text-center text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
            {state.name}
          </div>
        </button>
      ))}
    </div>
  )
}