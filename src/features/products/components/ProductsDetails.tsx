import { useEffect, useState } from "react";
import type { ProductDto } from "../contracts/Product.dto";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

type Props = {
  id: string;
};

export const ProductsDetails = ({ id }: Props) => {
  // const {isLoading, isError, data} = useApi<TodoDto[]>('https://jsonplaceholder.typicode.com/todos')
  // const {isLoading, isError, data} = useApi<TodoDto>('https://jsonplaceholder.typicode.com/todos/123')

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<ProductDto>();

  const loadData = async () => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      console.log({ response });
      if (response.ok) {
        // 200, 201
        const responseData: ProductDto = await response.json();

        // validator
        setData(responseData);
      } else {
        throw new Error("Response error");
      }
    } catch {
      console.error("Oh no!");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
