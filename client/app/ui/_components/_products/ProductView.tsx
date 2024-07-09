"use client"

import {Product} from "@/app/lib/types";
import {BASE_URL} from "@/app/lib/data";
import Link from "next/link";
import {formatNumber} from "@/app/lib/utils";
import {mdiCompareHorizontal, mdiHeartOutline, mdiShareVariant} from "@mdi/js";
import Icon from "@mdi/react";

function ProductView({auth, product, liked, carted, likeProduct, cartProduct, unLikeProduct, unCartProduct}: ProductViewProps) {
  return (
    <div className={`bg-very-light-gray relative group`}>
      <Link
        href={`/${product.id}`}
        className="flex flex-col"
      >
        <img src={`${BASE_URL}${product.imageSrc}`} alt=""/>
        <div className="bg-very-light-gray p-4">
          <p className="text-2xl font-semibold">{product.name}</p>
          <p className="text-base font-medium mb-2 text-light-gray">{product.excerpt}</p>
          {product.discount ? (
            <div className="flex items-end gap-4">
              <p
                className="text-light-black font-semibold text-xl mb-4">{`Rp ${formatNumber(product.price - product.price * (product.discount / 100))}`}</p>
              <s className="text-light-gray text-base mb-4">{`Rp ${formatNumber(product.price)}`}</s>
              <div
                className="absolute right-6 top-6 rounded-full py-4 px-1 bg-orange-red text-white">{`- ${product.discount}%`}</div>
            </div>
          ) : (
            <div>
              <p className="text-light-black font-semibold text-xl mb-4">{`Rp ${formatNumber(product.price)}`}</p>
              {product.new ? (
                <div className="absolute right-6 top-6 rounded-full py-4 px-3 bg-turquoise text-white">New</div>
              ) : null}
            </div>
          )}
        </div>
      </Link>
      <div
        className="absolute top-0 left-0 w-full h-full bg-trans-gray hidden group-hover:flex flex-col items-center justify-center pointer-events-none"
      >
        {auth ? (
          <>
            <button className={`${!carted ? 'text-gold bg-white': 'text-white bg-gold'} py-3 px-12 font-semibold pointer-events-auto`} onClick={!carted ? cartProduct : unCartProduct}>
              {!carted ? 'Add to cart' : 'Added to cart'}
            </button>
            <div className="flex mt-6 gap-4 text-white text-base font-semibold">
              <button className="flex items-center pointer-events-auto">
                <Icon path={mdiShareVariant} size={1}/>
                <p>Share</p>
              </button>
              <Link href="/compare" className="flex items-center pointer-events-auto">
                <Icon path={mdiCompareHorizontal} size={1}/>
                <p>Compare</p>
              </Link>
              <button className={`flex items-center pointer-events-auto ${liked ? 'text-red-700' : ''}`} onClick={!liked ? likeProduct : unLikeProduct}>
                <Icon path={mdiHeartOutline} size={1}/>
                <p>{!liked ? 'like' : 'liked'}</p>
              </button>
            </div>
          </>
        ) : (
          <div className="text-white px-6 text-center font-semibold text-base">
            <p className="inline">Liked our product? Save it to your cart.</p>
            <Link href="/login" className="underline ml-2 pointer-events-auto">Sign in</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductView;

interface ProductViewProps {
  auth: number | null | undefined,
  product: Product,
  liked: boolean,
  carted: boolean,
  likeProduct: () => void,
  cartProduct: () => void,
  unLikeProduct: () => void,
  unCartProduct: () => void,
}