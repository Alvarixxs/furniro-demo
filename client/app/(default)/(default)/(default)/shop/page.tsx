import ShopSearch from "@/app/ui/_components/_shop/ShopSearch";
import ShopPagination from "@/app/ui/_components/_shop/ShopPagination";
import ShopFilter from "@/app/ui/_components/_shop/ShopFilter";
import FeaturedProducts from "@/app/ui/_components/_products/FeaturedProducts";
import {Suspense} from "react";
import {FeaturedProductsSkeleton} from "@/app/ui/_components/_utils/skeletons";
import {ProductUrlParams} from "@/app/lib/types";
import {fetchTotalProducts} from "@/app/lib/data";
import {calculateTotalPages} from "@/app/lib/utils";

async function Shop(
  {
    searchParams,
  }: {
    searchParams? : ProductUrlParams;
  }) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const range = searchParams?.range || '';
  const numItems = Number(searchParams?.numItems) || 16;

  const {totalProducts} = await fetchTotalProducts(query, range)

  return (
    <section>
      <div className="bg-light-beige px-6 md:px-24 py-8 flex justify-between flex-wrap gap-10 md:gap-20">
        <ShopFilter numItems={numItems} currentPage={currentPage} totalProducts={totalProducts}/>
        <ShopSearch/>
      </div>
      <div className="flex justify-center my-16">
        <Suspense key={query+currentPage} fallback={<FeaturedProductsSkeleton numItems={numItems} />}>
          <FeaturedProducts query={query} currentPage={currentPage} range={range} numItems={numItems} />
        </Suspense>
      </div>
      <div className="flex items-center justify-center mb-16">
        <ShopPagination totalPages={calculateTotalPages(totalProducts,numItems)}/>
      </div>
    </section>
)
}

export default Shop;