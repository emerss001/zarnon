import { categoryTable } from "@/db/schema";
import Link from "next/link";

interface CategorySelectorProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
  return (
    <div className="rounded-3xl bg-[#F4EFFF] p-6">
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="hover:bg-input flex items-center justify-center rounded-full bg-white p-3 text-xs font-semibold"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
