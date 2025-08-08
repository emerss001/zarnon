"use client";

import { productTable, productVariantTable } from "@/db/schema";
import { formatMoneyCents } from "@/helpers/money";
import Image from "next/image";
import Link from "next/link";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}
const ProductsList = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>

      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <Link key={product.id} href={"/"} className="flex flex-col gap-4">
            <Image
              src={product.variants[0].imageUrl}
              alt={product.variants[0].name}
              width={200}
              height={200}
              className="rounded-3xl"
            />

            <div className="flex max-w-[200px] flex-col gap-1">
              <p className="truncate text-sm font-medium">{product.name}</p>
              <p className="text-muted-foreground truncate text-xs font-medium">
                {product.description}
              </p>
              <p className="truncate text-sm font-semibold">
                {formatMoneyCents(product.variants[0].priceInCents)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
