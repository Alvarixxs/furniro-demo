"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function ShopSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) =>{
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500)

  const handleItems = useDebouncedCallback((term: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('numItems', term.toString());
    } else {
      params.delete('numItems');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500)

  return(
    <div className="flex gap-4 items-center">
      <p className="text-xl">Show</p>
      <input
        className="p-1 w-14 appearance-none focus:appearance-none"
        placeholder="16"
        type="number"
        min="0"
        onChange={(e) => {
          handleItems(Number(e.target.value));
        }}
        defaultValue={searchParams.get('numItems')?.toString()}
      />
      <p className="text-xl ml-3">Sort by</p>
      <input
        className="p-1 w-40"
        placeholder="Default"
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}

export default ShopSearch;