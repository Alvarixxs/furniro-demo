import ProductView from "@/app/ui/_components/_products/ProductView";
import {fetchProducts} from "@/app/lib/data";
import {ProductQueryParams} from "@/app/lib/types";

async function FeaturedProducts(
  {
    query,
    currentPage,
    range,
    numItems,
  } : ProductQueryParams
) {
  const products = await fetchProducts(query, currentPage, range, numItems);

  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl overflow-hidden">
      {products.map((item) => (
        <ProductView key={item.id} product={item}/>
      ))}
    </div>
  )
}

export default FeaturedProducts;