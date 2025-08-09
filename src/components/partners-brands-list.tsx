import Image from "next/image";
import { Card } from "./ui/card";

const PartnersBrandsList = () => {
  const brands = [
    { name: "Oakley", logo: "/partners-brands/oakley.svg" },
    { name: "Jordan", logo: "/partners-brands/jordan.svg" },
    { name: "Nike", logo: "/partners-brands/nike.svg" },
    { name: "Asics", logo: "/partners-brands/asics.svg" },
    { name: "Under Armour", logo: "/partners-brands/under-armour.svg" },
    { name: "Mizuno", logo: "/partners-brands/mizuno.svg" },
    { name: "Umbro", logo: "/partners-brands/umbro.svg" },
    { name: "Adidas", logo: "/partners-brands/adidas.svg" },
    { name: "Puma", logo: "/partners-brands/puma.svg" },
    { name: "Converse", logo: "/partners-brands/converse.svg" },
    { name: "New Balance", logo: "/partners-brands/newbalance.svg" },
    { name: "Zara", logo: "/partners-brands/zara.svg" },
  ];
  return (
    <div className="space-y-6">
      <h3 className="font-semibold">Nossas Marcas Parceiras</h3>
      <div className="flex w-full gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center gap-4">
            <Card className="flex items-center justify-center p-4">
              <Image
                src={brand.logo}
                alt={`marca parceira ${brand.name}`}
                width={32}
                height={32}
                className="min-h-8 min-w-8"
              />
            </Card>
            <p className="truncate text-sm font-medium">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersBrandsList;
