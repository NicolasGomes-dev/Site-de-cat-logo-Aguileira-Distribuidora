import Image from "next/image"

type CategoryCardProps = {
  manufacturersTitle: string
  description: string
  manufacturers: {
    name: string
    logo: string
  }[]
}

export function CategoryCard({
    manufacturersTitle,
    description,
    manufacturers,
}: CategoryCardProps) {
    return (
        <div className="w-full border rounded-xl p-6 shadow-sm hover:shadow-md transition">


            <p className="mt-5 mb-3 text-lg font-bold uppercase tracking-wide text-[#303271]">
                Fabricantes
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {
                    manufacturers.map((brand) => (
                        <div
                            key={brand.name}
                            className="flex h-20 w-full items-center justify-center rounded-xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:shadow-lg">
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                width={100}
                                height={50}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}