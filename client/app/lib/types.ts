import {Dispatch, SetStateAction, SyntheticEvent} from "react";

export interface Product {
  id: number;
  name: string;
  excerpt: string;
  price: number;
  imageSrc: string;
  new: boolean;
  discount: number;
}

export interface ProductLike extends Product {
  userLike: {
    id: number;
  }
}

export interface ProductCart extends Product {
  userCart: {
    id: number;
    quantity: number;
  }
}

export interface ProductQueryParams {
  query: string;
  currentPage: number;
  range: string,
  numItems: number;
}

export interface ProductUrlParams {
  query?: string;
  page?: number;
  range?: string;
  numItems?: number;
}

export interface ProductTotalQueryParams {
  query: string;
  range: string,
}

export interface ContactFormValues {
  name: string,
  email: string,
  subject: string,
  message: string,
}

export interface NewsletterFormValues {
  email: string;
}

export interface LogInFormValues {
  username: string;
  password: string;
}

export interface SignUpFormValues {
  name: string,
  username: string,
  password: string,
  confirmPassword: string,
}

export interface LikedProductValues {
  userId: number;
  productId: number;
}

export interface CartProductValues {
  userId: number;
  productId: number;
  quantity: number;
}

export interface AuthContextType {
  auth: number | null;
  setAuth: Dispatch<SetStateAction<number | null>>;
}