import {fetchProducts} from "@/app/lib/data";
import {ProductQueryParams} from "@/app/lib/types";
import FeaturedProductsContainer from "@/app/ui/_components/_products/FeaturedProductsContainer";

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
    <FeaturedProductsContainer products={products}/>
  )
}

export default FeaturedProducts;