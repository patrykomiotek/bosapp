// import { useApi } from "@/hooks/useApi";
// import type { ApiListResponse } from "shared/contracts/ApiListResponse";
// import type { ProductDto } from "../contracts/Product.dto";
import { fetchProducts } from "../services/products";
import { useQuery } from "@tanstack/react-query";
import { Button, Header } from "@/ui";
import { ProductCard } from "./ProductCard";

export const ProductsList = () => {
  // const { isLoading, isError, data } =
  //   useApi<ApiListResponse<ProductDto>>("/products"); // "/products" | fetchProducts
  // const { isLoading, isError, data } =
  //   useApi<ApiListResponse<ProductDto>>(fetchProducts); // "/products" | fetchProducts
  const { isError, data, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products = data?.records;

  if (!products) {
    return <p>Fail to fetch products</p>;
  }

  return (
    <div>
      <Header>Products</Header>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! An error has occurred!</p>}
      <Button onClick={() => refetch()}>Refetch</Button>
      {products.map((elem) => {
        return (
          <div key={elem.id}>
            <ProductCard product={elem.fields} />
          </div>
        );
      })}
    </div>
  );
};
