import CategorySelector from "@/components/category-selector";
import Header from "@/components/header";
import ProductsList from "@/components/products-list";
import { db } from "@/db";
import Image from "next/image";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src={"/banner-01.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
            alt={"banner - leve uma vida com estilo"}
          />
        </div>

        <ProductsList title="Mais vendidos" products={products} />

        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src={"/banner-02.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
            alt={"banner - autêntico, leve e confortável"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
