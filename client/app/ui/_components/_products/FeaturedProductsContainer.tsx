"use client"

import ProductView from "@/app/ui/_components/_products/ProductView";
import {Product, ProductCart, ProductLike} from "@/app/lib/types";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/app/ui/contexts";
import {
  deleteCartProduct,
  deleteLikedProduct,
  fetchUserProducts,
  postCartProduct,
  postLikedProduct
} from "@/app/lib/data";

function FeaturedProductsContainer({products}: {products: Product[]}) {
  const [likedProducts, setLikedProducts] = useState<{id: number, productId: number}[]>([]);
  const [cartProducts, setCartProducts] = useState<{id: number, productId: number}[]>([]);

  const authContext = useContext(AuthContext);

  const auth = authContext?.auth;

  useEffect(() => {
    if (auth) {
      fetchUserProducts(auth)
        .then((res) => {
          setLikedProducts(res['liked_products'].map((product: ProductLike) => ({id: product.userLike.id, productId: product.id})));
          setCartProducts(res['cart_products'].map((product: ProductCart) => ({id: product.userCart.id, productId: product.id})))
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [auth])

  const likeProduct = async (product: Product) => {
    if (auth) {
      const content = await postLikedProduct({userId: auth, productId: product.id});
      setLikedProducts(likedProducts.concat({id: content.id, productId: content.productId}))
    }
  }

  const cartProduct = async (product: Product) => {
    if (auth) {
      const content = await postCartProduct({userId: auth, productId: product.id, quantity: 1});
      setCartProducts(cartProducts.concat({id: content.id, productId: content.productId}))
    }
  }

  const unLikeProduct = async (product: Product) => {
    if (auth) {
      const content = likedProducts.find((item) => item.productId === product.id);
      if (content) {
        await deleteLikedProduct(content.id)
        setLikedProducts(likedProducts.filter((item) => item.productId !== product.id))
      }
    }
  }

  const unCartProduct = async (product: Product) => {
    if (auth) {
      const content = cartProducts.find((item) => item.productId === product.id);
      if (content) {
        await deleteCartProduct(content.id)
        setCartProducts(cartProducts.filter((item) => item.productId !== product.id))
      }
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl overflow-hidden">
      {products.map((product) => (
        <ProductView
          key={product.id}
          auth={auth}
          product={product}
          liked={likedProducts.find((item) => product.id === item.productId) !== undefined}
          carted={cartProducts.find((item) => product.id === item.productId) !== undefined}
          likeProduct={() => likeProduct(product)}
          cartProduct={() => cartProduct(product)}
          unLikeProduct={() => unLikeProduct(product)}
          unCartProduct={() => unCartProduct(product)}
        />
      ))}
    </div>
  )
}

export default FeaturedProductsContainer