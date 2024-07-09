import axios from "axios";
import {
  CartProductValues,
  ContactFormValues, LikedProductValues, LogInFormValues,
  NewsletterFormValues,
  Product,
  ProductQueryParams,
  ProductTotalQueryParams, SignUpFormValues
} from "@/app/lib/types";

// Ensure that BASE_URL is defined in your environment variables
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

// client authorization
let token: string | null = null

export const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`
}

const fetchData = async (url: string, params: ProductQueryParams | ProductTotalQueryParams | {}) => {
  const response = await axios.get(`${BASE_URL}${url}`, {params, headers: {authorization: token}});
  return response.data; // Access the data property of the Axios response
}

const postData = async (url: string, data: ContactFormValues | NewsletterFormValues | LogInFormValues | LikedProductValues | CartProductValues) => {
  const response = await axios.post(`${BASE_URL}${url}`, data, {headers: {authorization: token}});
  return response.data;
}

const deleteData = async (url: string, id: number) => {
  console.log(`${BASE_URL}${url}/${id}`)
  await axios.delete(`${BASE_URL}${url}/${id}`, {headers: {authorization: token}})
}

const updateData = async (url: string, id: number, data: CartProductValues) => {
  const response = await axios.put(`${BASE_URL}${url}/${id}`, data, {headers: {authorization: token}})
  return response.data
}

export const fetchProducts = async (query: string = '', currentPage: number =1, range: string = '', numItems= 8): Promise<Product[]> => {
  return await fetchData('/api/products', {query, currentPage, range, numItems});
}

export const fetchTotalProducts = async (query: string = '', range: string = ''): Promise<{totalProducts: number}> => {
  return await fetchData('/api/productsInfo', {query, range})
}

export const postContactInfo = async (data: ContactFormValues) => {
  await postData('/api/contact', data)
}

export const postNewsletterInfo = async (data: NewsletterFormValues) => {
  await postData('/api/newsletter', data)
}

export const postLoginInfo = async (data: LogInFormValues) => {
  return await postData('/api/login', data)
}

export const postSignupInfo = async (data: SignUpFormValues) => {
  return await postData('/api/users', data)
}

export const postLikedProduct = async (data: LikedProductValues) => {
  return await postData('/api/userLikes', data)
}

export const deleteLikedProduct = async (id: number) => {
  await deleteData('/api/userLikes', id)
}

export const postCartProduct = async (data: CartProductValues) => {
  return await postData('/api/userCart', data)
}

export const updateCartProduct = async (id: number, data: CartProductValues) => {
  return await updateData('/api/userCart',id, data)
}

export const deleteCartProduct = async (id: number) => {
  await deleteData('/api/userCart', id)
}

export const fetchUserProducts = async (id: number) => {
  return await fetchData(`/api/users/${id}`, {});
}