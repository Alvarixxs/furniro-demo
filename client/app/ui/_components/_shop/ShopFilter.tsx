"use client"

import Image from "next/image";
import Filtering from "/public/shop/filtering.svg";
import Grid from "/public/shop/grid.svg";
import ViewList from "/public/shop/view-list.svg";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

function ShopFilter({numItems, currentPage, totalProducts}: {numItems: number, currentPage: number, totalProducts: number}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('range', term);
    } else {
      params.delete('range');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const showingProductsInit = numItems*(currentPage-1)+1
  const showingProductsEnd = numItems*currentPage>= totalProducts ? totalProducts : numItems*currentPage

  return (
    <div className="flex gap-6 items-center justify-center flex-wrap">
      <div className="flex gap-2">
        <Image src={Filtering} alt=""/>
        <p className="text-xl">Filter</p>
        <select
          onChange={(e) => {
            handleFilter(e.target.value)
          }}
          defaultValue={searchParams.get('range')?.toString()}
        >
          {rangeItems.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <button><Image src={Grid} alt=""/></button>
        <button><Image src={ViewList} alt=""/></button>
        <div className="h-10 w-0.5 bg-light-gray"></div>
        <p
          className="text-base">{`Showing ${showingProductsInit}-${showingProductsEnd} of ${totalProducts} results`}</p>
      </div>
    </div>
  )
}

export default ShopFilter;

const rangeItems = [
  {
    label: "All",
    value: '',
  },
  {
    label: "Dining",
    value: 'dining',
  },
  {
    label: "Living",
    value: 'living',
  },
  {
    label: "Bedroom",
    value: 'bedroom'
  }
]