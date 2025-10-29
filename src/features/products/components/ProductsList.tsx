import { useApi } from "@/hooks/useApi";
import type { ApiListResponse } from "shared/contracts/ApiListResponse";
import type { ProductDto } from "../contracts/Product.dto";

export const ProductsList = () => {
  const { isLoading, isError, data } =
    useApi<ApiListResponse<ProductDto>>("/products");

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
