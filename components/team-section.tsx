import Image from "next/image"

const teamImages = [
    {
        src: "/images/equipe/equipe1.jpeg",
        alt: "Equipe Aguilera Distribuidora",
        cover: false,
    },
    {
        src: "/images/equipe/equipe2.jpeg",
        alt: "Equipe Aguilera Distribuidora",
        cover: false,
    },
    {
        src: "/images/equipe/equipe3.jpeg",
        alt: "Equipe Aguilera Distribuidora",
        cover: false,
    },
    {
        src: "/images/equipe/equipe4.jpeg",
        alt: "Equipe Aguilera Distribuidora",
        cover: true,
    },
]

export function TeamSection() {
    return (
        <section className="mt-24">

            {/* Cabeçalho */}
            <div className="mb-10 text-center">
                <span className="inline-block rounded-full bg-brand-red/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-brand-red">
                    Nossa equipe
                </span>

                <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
                    Conheça nossa equipe
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                    Profissionais preparados para oferecer atendimento,
                    suporte e soluções para nossos clientes.
                </p>
            </div>

            {/* Conteúdo */}
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

                {/* Galeria da equipe */}
                <div className="grid grid-cols-2 gap-5">

                    {teamImages.map((image) => (
                        <div
                            key={image.src}
                            className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-lg"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className={`
                  transition-transform
                  duration-500
                  group-hover:scale-105
                  ${image.cover ? "object-cover object-center" : "object-contain"}
                `}
                            />
                        </div>
                    ))}

                </div>

                {/* Texto */}
                <div>

                    <h3 className="text-2xl font-bold text-navy md:text-3xl">
                        Pessoas que fazem a Aguilera acontecer
                    </h3>

                    <p className="mt-5 leading-7 text-slate-600">
                        Nossa equipe oferece atendimento próximo e eficiente,
                        com experiência na distribuição de autopeças e profissionais preparados para atender
                        diferentes segmentos com soluções de qualidade.
                    </p>

                    {/* Destaques */}
                    <div className="mt-8 grid grid-cols-2 gap-4">

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <strong className="block text-lg font-bold text-navy">
                                Atendimento
                            </strong>

                            <span className="mt-1 block text-sm text-slate-500">
                                Próximo e eficiente
                            </span>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <strong className="block text-lg font-bold text-navy">
                                Experiência
                            </strong>

                            <span className="mt-1 block text-sm text-slate-500">
                                Conhecimento do mercado
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}