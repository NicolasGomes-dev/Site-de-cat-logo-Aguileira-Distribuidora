import { StoresMap } from "./stores-map"

export function StoresSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* MAPA */}
          <StoresMap />

          {/* CONTEÚDO */}
          <div>

            <span className="inline-flex rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold tracking-wide text-brand-red">
              NOSSAS LOJAS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-navy">
              Estamos presentes nos principais polos do agronegócio brasileiro.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A Aguilera possui presença estratégica nos principais polos do
              agronegócio brasileiro, garantindo atendimento ágil, logística
              eficiente e ampla disponibilidade de peças para seus clientes.
            </p>

            {/* DIFERENCIAIS */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-red/10">
                  <span className="text-sm font-bold text-brand-red">
                    ✓
                  </span>
                </div>

                <span className="text-slate-700">
                  Presença em 5 estados brasileiros
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-red/10">
                  <span className="text-sm font-bold text-brand-red">
                    ✓
                  </span>
                </div>

                <span className="text-slate-700">
                  Logística eficiente para o agronegócio
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-red/10">
                  <span className="text-sm font-bold text-brand-red">
                    ✓
                  </span>
                </div>

                <span className="text-slate-700">
                  Atendimento especializado em peças
                </span>
              </div>

            </div>

            {/* BOTÃO */}
            <a
              href="https://wa.me/556295128248"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center rounded-xl bg-brand-red px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Solicitar orçamento
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}