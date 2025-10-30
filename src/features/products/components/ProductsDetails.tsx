// import { useApi } from "@/hooks/useApi";
import { useQuery } from "@tanstack/react-query";
// import type { ProductDto } from "../contracts/Product.dto";
import { fetchProduct } from "../services/products";
import { ProductCard } from "./ProductCard";

type Props = {
  id: string;
};

export const ProductsDetails = ({ id }: Props) => {
  // const { isLoading, isError, data } = useApi<ProductDto>(`/products/${id}`);
  // const { isLoading, isError, data } = useApi<ProductDto>(`/products/${id}`);
  const { isLoading, isError, data } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no! An error has occurred!</p>;
  }

  if (!data) {
    return <p>Loading error</p>;
  }

  return <ProductCard product={data.fields} />;
};
