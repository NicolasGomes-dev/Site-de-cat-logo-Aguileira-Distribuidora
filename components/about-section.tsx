import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Truck,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

import { AboutVideo } from "./about-video";
import { CompanyShowcase } from "./company-showcase";

export function AboutSection() {
  return (
    <section
      id="aguilera"
      className="bg-slate-50 py-20 scroll-mt-32"
    >
      <div className="mx-auto max-w-screen-2xl px-6">

        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_.8fr]">

          {/* IMAGEM */}
          <div className="relative">

            <Image
              src="/about-aguilera.jpg"
              alt="Aguilera Distribuidora"
              width={900}
              height={700}
              className="w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
            />

            <div className="absolute bottom-8 right-8 hidden rounded-3xl bg-white px-8 py-6 shadow-2xl lg:block">

              <h3 className="text-5xl font-black text-brand-red">
                30+
              </h3>

              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-navy">
                Anos de tradição
              </p>

            </div>

          </div>

          {/* CONTEÚDO */}
          <div className="max-w-[580px]">

            <span className="inline-flex rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold tracking-wide text-brand-red">
              QUEM SOMOS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-navy lg:text-6xl">
              Há mais de 30 anos impulsionando o mercado brasileiro de autopeças.
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Há mais de três décadas, a Aguilera Distribuidora conecta fabricantes
              e clientes com eficiência, qualidade e confiança. Atuamos nos
              segmentos Agrícola, Linha Leve, Linha Pesada e Extra Pesada,
              oferecendo um amplo portfólio de produtos das principais marcas
              do mercado, logística ágil e atendimento especializado.
            </p>

            {/* CARDS */}

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <Package className="mb-3 h-8 w-8 text-brand-red" />

                <h3 className="text-xl font-bold text-navy">
                  +1 milhão
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Peças disponíveis em estoque.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <Truck className="mb-3 h-8 w-8 text-brand-red" />

                <h3 className="text-xl font-bold text-navy">
                  5 Estados
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Goiás, Mato Grosso, Tocantins, Pará e Piauí.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <ShieldCheck className="mb-3 h-8 w-8 text-brand-red" />

                <h3 className="text-xl font-bold text-navy">
                  Marcas Originais
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Produtos das principais fabricantes do mercado.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <Users className="mb-3 h-8 w-8 text-brand-red" />

                <h3 className="text-xl font-bold text-navy">
                  Atendimento Especializado
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Equipe preparada para atender empresas e revendedores.
                </p>

              </div>

            </div>

            <Link
              href="/aguilera"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-brand-red px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
            >
              Conheça nossa história

              <ArrowRight className="h-5 w-5" />
            </Link>

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