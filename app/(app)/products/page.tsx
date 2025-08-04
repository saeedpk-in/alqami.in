import { IProduct } from "@/types&const";
import { getProducts } from "@/actions/products";
import Filters from "@/components/intractive/Filters";
import ProductCard from "@/components/intractive/ProductCard";
import { Metadata } from "next";
import { Fragment, Suspense } from "react";
import { ProductsSkelton } from "@/components/Skeltons";
import { SearchX } from "lucide-react";
export const metadata: Metadata = {
  title: "Products",
};

const ProductsSection = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const { products, totalPages, currentPage } = await getProducts({
    page: Number(params.page),
    limit: 4 * 5,
    category: params.category as string,
    priceSort: params.priceSort as string,
    searchQuery: params.search as string,
  });
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-5 p-12 bg-neutral-100 rounded-3xl">
        <SearchX className="w-12 h-12 text-neutral-600 mb-4" />
        <h3 className="text-lg font-light mb-2">No Products Found</h3>
        <p className="text-neutral-500 mb-4">
          We couldn't find any products for {params.category || params.search}
        </p>
      </div>
    );
  } else if (products.length === 1) {
    return (
      <div className="h-full  grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-10">
        {products.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    );
  } else {
    return (
      <Filters
        currentPage={currentPage as number}
        totalPages={totalPages as number}
      >
        <div className="h-full  grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-10">
          {products.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Filters>
    );
  }
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const header = params.category || params.search;

  return (
    <div className="flex flex-col h-full px-5 md:px-20 pt-10 md:pt-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl  tracking-tight max-w-5xl text-gray-900 mb-3 sm:mb-4">
        {/* From <span className="font-bold" >Retro </span>Vibes to<span className="font-bold"> Future </span>Fits */}
        {header ? header : "Glow naturally, Live purely."}
      </h1>
      <Suspense fallback={<ProductsSkelton />}>
        <ProductsSection searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default page;
