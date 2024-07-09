"use client"

import {BASE_URL, deleteCartProduct, fetchUserProducts, updateCartProduct} from "@/app/lib/data";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/app/ui/contexts";
import {Product, ProductCart} from "@/app/lib/types";
import {formatNumber} from "@/app/lib/utils";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import {useDebouncedCallback} from "use-debounce";

function Cart() {
  const [cartProducts, setCartProducts] = useState<ProductCart[]>([])
  const router = useRouter()
  const authContext = useContext(AuthContext);

  const auth = authContext?.auth

  useEffect(() => {
    if (auth) {
      fetchUserProducts(auth)
        .then((res) => {
          console.log(res)
          setCartProducts(res['cart_products']);
        })
    }
  }, [auth])

  const handleUnCart = async (product: ProductCart) => {
    if (auth) {
      await deleteCartProduct(product.userCart.id)
      setCartProducts(cartProducts.filter((item) => item.id !== product.id))
    }
  }

  const handleQuantity = useDebouncedCallback(async (product: ProductCart, term: string) => {
    if (auth) {
      await updateCartProduct(product.userCart.id, {userId: auth, productId: product.id, quantity: Number(term)})
    }
  }, 500)

  if (!auth) {
    router.push('/')
    return (
      <div></div>
    )
  }

  const discount = cartProducts.reduce((acc, curr) => acc + curr.price*(curr.discount/100), 0)
  const total = cartProducts.reduce((acc, curr) => acc + curr.price, 0)

  return (
    <div className="px-6 md:px-24 pt-16 pb-20 flex-col md:flex-row flex gap-16 md:gap-8">
      <div className="flex-grow self-start grid grid-cols-5 md:grid-cols-6 gap-y-2">
        <div className="bg-skin py-4 md:mb-12"/>
        <p className="bg-skin font-medium text-sm md:text-base py-4 md:mb-12 text-center">Product</p>
        <p className="bg-skin font-medium text-base py-4 md:mb-12 hidden md:block text-center">Price</p>
        <p className="bg-skin font-medium text-sm md:text-base py-4 md:mb-12 text-center">Quantity</p>
        <p className="bg-skin font-medium text-sm md:text-base py-4 md:mb-12 text-center">Subtotal</p>
        <div className="bg-skin font-medium text-base py-4 md:mb-12 text-center"/>
        {cartProducts.map((product) => (
          <>
            <img src={`${BASE_URL}${product.imageSrc}`} alt="" className="h-14 md:h-28 w-auto rounded-xl self-center"/>
            <p className="text-light-gray font-normal self-center text-center text-sm md:text-base">{product.name}</p>
            <p className="text-light-gray font-normal self-center text-center hidden md:block">Rs. {formatNumber(product.price)}</p>
            <input
              className="rounded-md border border-light-gray font-normal self-center justify-self-center px-3 py-1 text-sm w-10 md:w-16"
              defaultValue={product.userCart.quantity}
              type="number"
              min={1}
              onChange={(e) => handleQuantity(product, e.target.value)}
            />
            <p
              className="font-normal self-center text-center text-sm md:text-base">Rs {formatNumber(product.price - product.price * (product.discount / 100))}</p>
            <button className="text-gold self-center justify-self-center" onClick={() => handleUnCart(product)}><Icon
              path={mdiDelete} size={1}/></button>
          </>
        ))}
      </div>
      <div className="md:w-[400px] px-10 md:px-20 pt-10 pb-20 flex flex-col bg-skin md:self-start">
        <h2 className="text-light-black font-semibold text-3xl text-center">Cart Total</h2>
        <div className="flex items-center justify-between mt-16 gap-2">
          <p className="font-medium">Subtotal</p>
          <p className="text-light-gray">Rs. {formatNumber(total)}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="font-medium">Discount</p>
          <p className="text-light-gray">Rs. {formatNumber(discount)}</p>
        </div>
        <div className="flex items-center justify-between mt-7 gap-2">
          <p className="font-medium">Total</p>
          <p className="text-gold text-xl font-medium">Rs. {formatNumber(total-discount)}</p>
        </div>
        <Link href="/checkout" className="mt-10 rounded-2xl text-xl border border-black py-4 px-12 self-center">Check out</Link>
      </div>
    </div>
  )
}

export default Cart;

const headItems = ['', 'Product', 'Price', 'Quantity', 'Subtotal', '']
