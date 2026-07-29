import Image from "next/image";

const images = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-05.jpg",
];

export function StockGallery() {
  return (
    <section className="mt-24">

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-navy">
          Nosso estoque
        </h3>

        <p className="mt-2 text-slate-600">
          Mais de 1 milhão de peças prontas para entrega.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-72 overflow-hidden rounded-3xl shadow-xl group"
          >
            <Image
              src={image}
              alt="Estoque Aguilera"
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}

      </div>

    </section>
  );
}