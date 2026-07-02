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
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition min-h-[500px] min-w-[1300px]">


            <p className="mt-5 mb-3 text-lg font-bold uppercase tracking-wide text-[#303271]">
                Fabricantes
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {
                    manufacturers.map((brand) => (
                        <div
                            key={brand.name}
                            className="bg-white border border-gray-300 rounded-xl w-50 h-20 flex items-center justify-center p-3">
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