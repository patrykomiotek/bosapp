import { useApi } from "@/hooks/useApi";
import type { ApiListResponse } from "shared/contracts/ApiListResponse";
import type { ProductDto } from "../contracts/Product.dto";
import { fetchProducts } from "../services/products";

export const ProductsList = () => {
  // const { isLoading, isError, data } =
  //   useApi<ApiListResponse<ProductDto>>("/products"); // "/products" | fetchProducts
  const { isLoading, isError, data } =
    useApi<ApiListResponse<ProductDto>>(fetchProducts); // "/products" | fetchProducts

  const products = data?.records;

  if (!products) {
    return <p>Fail to fetch products</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! An error has occurred!</p>}
      {products.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>{elem.fields.name}</h2>
            <p>{elem.fields.description}</p>
            <p>${elem.fields.price}</p>
          </div>
        );
      })}
    </div>
  );
};
