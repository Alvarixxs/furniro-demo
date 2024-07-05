"use client"

import {usePathname, useRouter, useSearchParams} from 'next/navigation';

function ShopPagination({totalPages}: {totalPages: number}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const nextPage = currentPage+1 > totalPages ? 1 : currentPage+1;

  return (
    <div className="flex flex-wrap gap-10">
      {Array.from({length: totalPages}).map((value, index) => (
        <button
          key={index}
          className={`py-4 px-7 rounded-xl text-xl ${currentPage === index + 1 ? 'bg-gold text-white' : 'bg-light-beige text-black'}`}
          onClick={() => {
            createPageURL(index + 1)
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`py-4 px-7 rounded-xl text-xl hover:bg-gold hover:text-white bg-light-beige text-black transition duration-500`}
        onClick={() => {
          createPageURL(nextPage)
        }}
      >
        Next
      </button>
    </div>
  )
}

export default ShopPagination;