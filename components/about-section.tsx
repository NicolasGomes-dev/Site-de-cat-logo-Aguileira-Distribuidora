import Link from "next/link";
import {
  Package,
  Truck,
  ShieldCheck,
  Users,
  ArrowLeft,
} from "lucide-react";

import { AboutVideo } from "./about-video";
import { CompanyShowcase } from "./company-showcase";

export function AboutSection() {
  return (
    <section
      id="conheca-aguilera"
      className="bg-slate-50 pt-12 pb-20 scroll-mt-28"
    >

      <div className="mx-auto max-w-5xl px-6">

        {/* BOTÃO VOLTAR */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar
          </Link>
        </div>

        {/* BADGE */}
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold tracking-wide text-brand-red">
            NOSSA HISTÓRIA
          </span>
        </div>

        {/* TÍTULO */}
        <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
          Uma história construída com trabalho, confiança e resultados.
        </h2>

        {/* TEXTO */}
        <div className="mt-8 max-w-4xl space-y-6 text-lg leading-9 text-slate-600">

          <p>
            A Aguilera Distribuidora de Auto Peças é mais do que uma empresa —
            é a prova viva de que trabalho consistente constrói grandes
            histórias.
          </p>

          <p>
            Em um setor competitivo e em constante transformação, a Aguilera
            se destaca pela sua força operacional, pela parceria sólida com
            fornecedores e pela dedicação em atender cada cliente com
            excelência. Cada peça entregue carrega não apenas qualidade, mas
            também o esforço de uma equipe que acredita que resultados são
            conquistados com disciplina, foco e atitude.
          </p>

          <p>
            O futuro é promissor — e não por acaso. Ele está sendo
            construído agora, com dedicação, estratégia e visão.
            A Aguilera Distribuidora de Auto Peças nasceu de uma empresa com
            mais de <strong>45 anos de história</strong> e seguirá firme,
            acelerando rumo a novos horizontes, consolidando sua marca e
            mostrando que, quando há trabalho de verdade, o sucesso é apenas
            uma consequência.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="mt-20">

          <h3 className="mb-12 text-center text-3xl font-bold text-navy">
            Nossa trajetória
          </h3>

          <div className="relative">

            <div className="absolute left-0 top-6 h-1 w-full rounded-full bg-slate-200" />

            <div className="relative grid grid-cols-3 gap-8">

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold">
                  1
                </div>

                <h4 className="text-xl font-bold text-navy">
                  Fundação
                </h4>

                <p className="mt-2 text-slate-600">
                  Início de uma história construída com dedicação e trabalho.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold">
                  2
                </div>

                <h4 className="text-xl font-bold text-navy">
                  Expansão
                </h4>

                <p className="mt-2 text-slate-600">
                  Crescimento da operação e fortalecimento das parcerias.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold">
                  3
                </div>

                <h4 className="text-xl font-bold text-navy">
                  Hoje
                </h4>

                <p className="mt-2 text-slate-600">
                  Mais de 45 anos levando qualidade para milhares de clientes.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <Package className="mb-3 h-8 w-8 text-brand-red" />

            <h3 className="text-xl font-bold text-navy">
              +1 Milhão
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Peças disponíveis em estoque.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <Truck className="mb-3 h-8 w-8 text-brand-red" />

            <h3 className="text-xl font-bold text-navy">
              5 Estados
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Goiás, Mato Grosso, Tocantins, Pará e Piauí.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <ShieldCheck className="mb-3 h-8 w-8 text-brand-red" />

            <h3 className="text-xl font-bold text-navy">
              Marcas Originais
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Produtos das principais fabricantes do mercado.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <Users className="mb-3 h-8 w-8 text-brand-red" />

            <h3 className="text-xl font-bold text-navy">
              Atendimento Especializado
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-500">
              Equipe preparada para atender empresas e revendedores.
            </p>
          </div>

        </div>

      </div>

      {/* VÍDEO */}
      <div className="mt-24">
        <AboutVideo />
      </div>

      {/* GALERIA */}
      <div className="mt-24">
        <CompanyShowcase />
      </div>

    </section>
  );
}