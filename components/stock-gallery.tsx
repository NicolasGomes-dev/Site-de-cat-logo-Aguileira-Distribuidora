import Image from "next/image";

const images = [
  "/images/gallery/estoque-02.jpeg",
  "/images/gallery/estoque01.png",
  "/images/gallery/estoque-03.jpeg",
];

export function StockGallery() {
  return (
    <section className="mt-20">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-navy">
          Nosso estoque
        </h3>

        <p className="mt-2 text-slate-600">
          Mais de 1 milhão de peças prontas para entrega.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-72 overflow-hidden rounded-3xl shadow-xl group"
          >
            <Image
              src={image}
              alt={`Estoque ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}