import Image from "next/image"
import Link from "next/link"
import { Package, Truck, ShieldCheck, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="mx-auto flex flex-col-reverse lg:flex-row max-w-screen-2xl items-center gap-10 lg:gap-16 px-6">
        {/* Imagem */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/about-aguilera.jpg"
            alt="Aguilera Distribuidora"
            width={900}
            height={700}
            className="w-full h-auto rounded-3xl shadow-xl object-cover" />
        </div>

        {/* Conteúdo */}
        <div className="w-full lg:w-1/2">
          <span className="rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red">
            QUEM SOMOS
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            Mais de 30 anos distribuindo confiança.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            A Aguilera Distribuidora atua há mais de três décadas oferecendo
            peças para Linha Agrícola, Linha Leve, Linha Pesada e Extra Pesada,
            trabalhando apenas com fabricantes reconhecidos e atendimento
            especializado.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="flex items-center gap-4">
              <Package className="text-brand-red" />
              <div>
                <h3 className="font-bold text-navy">+1 milhão</h3>
                <p className="text-slate-500">Peças em estoque</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Truck className="text-brand-red" />
              <div>
                <h3 className="font-bold text-navy">Todo Brasil</h3>
                <p className="text-slate-500">Entrega rápida</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ShieldCheck className="text-brand-red" />
              <div>
                <h3 className="font-bold text-navy">Marcas Originais</h3>
                <p className="text-slate-500">Qualidade garantida</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Users className="text-brand-red" />
              <div>
                <h3 className="font-bold text-navy">Especialistas</h3>
                <p className="text-slate-500">Equipe preparada</p>
              </div>
            </div>

          </div>

          <Link
            href="/aguilera"
            className="mt-10 inline-flex rounded-lg bg-brand-red px-8 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Conheça nossa história
          </Link>

        </div>

      </div>
    </section>
  )
}