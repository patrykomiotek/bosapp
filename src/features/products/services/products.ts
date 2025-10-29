import axios from "axios";
import type { ApiListResponse } from "shared/contracts/ApiListResponse";
import type { ProductDto } from "../contracts/Product.dto";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchProducts = async () => {
  try {
    const result = await api.get<ApiListResponse<ProductDto>>("/products");
    // validation

    return result.data;
  } catch {
    // logger
    return undefined;
  }
};

// TODO: implement
// { records: { fields: { name, description, price }}}
export const createProducts = async (data: ProductDto) => {
  try {
    const result = await api.post("/products", data); // TODO: change

    return result;
  } catch {
    // logger
    return undefined;
  }
};

export const fetchProduct = async (id: string) => {
  try {
    const result = await api.get<ProductDto>(`/products/${id}`);

    // validator
    // change structure

    return result.data;
  } catch {
    // logger
    return undefined;
  }
};
