export function StoresSection() {
  return (
    <section
      id="lojas"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-screen-2xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* MAPA */}
          <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-10">
            <h3 className="text-2xl font-bold text-slate-400">
              MAPA DO BRASIL
            </h3>
          </div>

          {/* CONTEÚDO */}
          <div>

            <span className="inline-flex rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold tracking-wide text-brand-red">
              NOSSAS LOJAS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-navy">
              Estamos presentes nos principais polos do agronegócio brasileiro.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A Aguilera possui unidades estrategicamente localizadas para
              garantir atendimento rápido, logística eficiente e disponibilidade
              de peças para nossos clientes.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}