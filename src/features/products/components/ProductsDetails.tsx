import { useApi } from "@/hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import type { ProductDto } from "../contracts/Product.dto";
import { fetchProduct } from "../services/products";

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

  if (!data) {
    return <p>Loading error</p>;
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! An error has occurred!</p>}

      <h1>{data.fields.name}</h1>
      <div>
        <p>{data.fields.description}</p>
        <p>${data.fields.price}</p>
      </div>
    </div>
  );
};
