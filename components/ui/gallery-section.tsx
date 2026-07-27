import Image from "next/image";

const gallery = [
  {
    type: "image",
    src: "/images/gallery/gallery-01.jpg",
    alt: "Estoque Aguilera",
    large: true,
  },
  {
    type: "image",
    src: "/images/gallery/gallery-02.jpg",
    alt: "Centro de Distribuição",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-03.jpg",
    alt: "Equipe Aguilera",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-04.jpg",
    alt: "Expedição",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-05.jpg",
    alt: "Fachada",
  },
];

export function GallerySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-brand-red font-semibold uppercase tracking-widest">
            Nossa Estrutura
          </span>

          <h2 className="mt-4 text-4xl font-bold text-navy">
            Conheça a AGUILERA por dentro
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Nossa estrutura foi planejada para oferecer rapidez,
            organização e segurança no atendimento aos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">

          {gallery.map((item, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-3xl shadow-xl group
                ${item.large ? "lg:col-span-2 lg:row-span-2" : ""}
              `}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}