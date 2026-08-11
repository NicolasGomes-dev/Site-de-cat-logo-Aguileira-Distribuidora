import { AlertTriangle, PhoneCall } from "lucide-react"

export function ComplaintsCard() {
  return (
    <section className="mt-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-red-700 to-brand-red p-10 text-white shadow-2xl">

        <div className="flex items-start gap-5">

          <div className="rounded-2xl bg-white/15 p-4">
            <AlertTriangle className="h-10 w-10" />
          </div>

          <div className="flex-1">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-100">
              Canal de Reclamações
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Você não foi atendido?
            </h2>

            <p className="mt-4 max-w-xl text-lg text-red-100">
              Caso sua solicitação não tenha sido resolvida,
              entre em contato diretamente com nossa
              Gerência Geral.
            </p>

            <div className="mt-8 flex items-center gap-3 text-3xl font-bold">
              <PhoneCall className="h-8 w-8" />
              (86) 98895-6222
            </div>

            <a
              href="https://wa.me/5586988956222"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-brand-red transition hover:scale-105"
            >
              Falar com a Gerência
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}