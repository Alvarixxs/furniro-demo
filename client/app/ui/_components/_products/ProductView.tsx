"use client"

import {Product} from "@/app/lib/types";
import {BASE_URL} from "@/app/lib/data";
import Link from "next/link";
import {formatNumber} from "@/app/lib/utils";
import Icon from '@mdi/react';
import { mdiShareVariant, mdiCompareHorizontal,mdiHeartOutline } from '@mdi/js';
import {useContext} from "react";
import {AuthContext} from "@/app/ui/contexts";

function ProductView({product}: {product: Product}) {
  const authContext = useContext(AuthContext);

  const auth = authContext?.auth;

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
            <button className="bg-white py-3 px-12 text-gold font-semibold">Add to cart</button>
            <div className="flex mt-6 gap-4 text-white text-base font-semibold">
              {navItems.map((item) => (
                <Link key={item.slug} href={item.slug} className="flex items-center">
                  <Icon path={item.icon} size={1}/>
                  <p>{item.text}</p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="text-white px-6 text-center font-semibold text-base">
            <p className="inline">Liked our product? Save it to your cart.</p>
            <Link href="/login" className="underline ml-2">Sign in</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductView;

const navItems = [
  {
    text: "Share",
    icon: mdiShareVariant,
    slug: "/"
  },
  {
    text: "Compare",
    icon: mdiCompareHorizontal,
    slug: "/compare"

  },
  {
    text: "Like",
    icon: mdiHeartOutline,
    slug: "/liked"
  }
]

