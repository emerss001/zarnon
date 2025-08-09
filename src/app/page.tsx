import CategorySelector from "@/components/category-selector";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PartnersBrandsList from "@/components/partners-brands-list";
import ProductsList from "@/components/products-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";
import { desc } from "drizzle-orm";
import Image from "next/image";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
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

        <div className="px-5">
          <PartnersBrandsList />
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

        <ProductsList title="Novos produtos" products={newlyCreatedProducts} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
