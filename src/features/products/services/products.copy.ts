import type { ApiListResponse } from "shared/contracts/ApiListResponse";
import type { ProductDto } from "../contracts/Product.dto";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const fetchProductsCopy = async () => {
  try {
    const result = await fetch(`${API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    if (result.ok) {
      const data: ApiListResponse<ProductDto> = await result.json();

      // validator
      // change structure

      return data;
    }
    throw new Error("Request fail");
  } catch {
    // logger
    return undefined;
  }
};

export const createProductsCopy = async (data: ProductDto) => {
  try {
    const result = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    if (result.ok) {
      const data: ApiListResponse<ProductDto> = await result.json();

      // validator
      // change structure

      return data;
    }
    throw new Error("Request fail");
  } catch {
    // logger
    return undefined;
  }
};

export const fetchProductCopy = async (id: string) => {
  try {
    const result = await fetch(`${API_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    if (result.ok) {
      const data: ProductDto = await result.json();

      // validator
      // change structure

      return data;
    }
    throw new Error("Request fail");
  } catch {
    // logger
    return undefined;
  }
};
