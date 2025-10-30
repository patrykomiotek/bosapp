// import { useApi } from "@/hooks/useApi";
// import type { ApiListResponse } from "shared/contracts/ApiListResponse";
// import type { ProductDto } from "../contracts/Product.dto";
import { fetchProducts } from "../services/products";
import { useQuery } from "@tanstack/react-query";
import { Button, Header } from "@/ui";
import { ProductsList } from "../components/ProductsList";
import { Link } from "react-router-dom";

export const ProductsListPage = () => {
  // const { isLoading, isError, data } =
  //   useApi<ApiListResponse<ProductDto>>("/products"); // "/products" | fetchProducts
  // const { isLoading, isError, data } =
  //   useApi<ApiListResponse<ProductDto>>(fetchProducts); // "/products" | fetchProducts
  const { isError, data, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const products = data?.records;

  // if (!products) {
  //   return <p>Fail to fetch products</p>;
  // }

  return (
    <div>
      <Header>Products</Header>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! An error has occurred!</p>}
      <div className="flex gap-2 items-center">
        <Button onClick={() => refetch()}>Refetch</Button>
        <Link to="/products/create" className="text-blue-600">
          Create product
        </Link>
      </div>

      {products && <ProductsList products={products} />}
    </div>
  );
};
