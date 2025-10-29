import { useApi } from "@/hooks/useApi";
import type { ProductDto } from "../contracts/Product.dto";

type Props = {
  id: string;
};

export const ProductsDetails = ({ id }: Props) => {
  const { isLoading, isError, data } = useApi<ProductDto>(`/products/${id}`);

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
