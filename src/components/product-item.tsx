import { productTable, productVariantTable } from "@/db/schema";
import { formatMoneyCents } from "@/helpers/money";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ProductListProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
  textContainerClassName?: string;
}

const ProductItem = ({ product, textContainerClassName }: ProductListProps) => {
  return (
    <Link key={product.id} href={"/"} className="flex flex-col gap-4">
      <Image
        src={product.variants[0].imageUrl}
        alt={product.variants[0].name}
        sizes="100vw"
        height={0}
        width={0}
        className="h-auto w-full rounded-3xl"
      />

      <div
        className={cn(
          "flex max-w-[200px] flex-col gap-1",
          textContainerClassName,
        )}
      >
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs font-medium">
          {product.description}
        </p>
        <p className="truncate text-sm font-semibold">
          {formatMoneyCents(product.variants[0].priceInCents)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
