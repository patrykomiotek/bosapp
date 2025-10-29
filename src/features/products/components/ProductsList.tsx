import { useEffect, useState } from "react";
import type { ProductDto } from "../contracts/Product.dto";
import type { ApiListResponse } from "shared/contracts/ApiListResponse";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const ProductsList = () => {
  // const {isLoading, isError, data} = useApi<TodoDto[]>('https://jsonplaceholder.typicode.com/todos')
  // const {isLoading, isError, data} = useApi<TodoDto>('https://jsonplaceholder.typicode.com/todos/123')

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<ProductDto[]>([]);

  const loadData = async () => {
    try {
      const response = await fetch(`${API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      console.log({ response });
      if (response.ok) {
        // 200, 201
        const responseData: ApiListResponse<ProductDto> = await response.json();

        // validator
        setData(responseData.records);
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

  return (
    <div>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! An error has occurred!</p>}
      {data.map((elem) => {
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
