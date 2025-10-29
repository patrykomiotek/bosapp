import { useEffect, useState } from "react";
import { z } from "zod";

// type BrandedId = number & { _________brand: "id" };

type Brand<K, T> = K & { __brand: T };
// type Brand<K> = K & { __brand: unique Symbol };

// const string1: string = 'ala';
// const string2: string = 'ola';

// const string3: Symbol = 'ala'
// const string4: Symbol = 'ola'

type ProductId = Brand<number, "productId">;
// type CategoryId = Brand<number, "categoryId">;

interface ProductDto {
  id: ProductId;
  name: string;
  description: string;
}

const todoSchema = z.array(
  z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    completed: z.boolean(),
  })
);

// interface TodoDto {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
type TodoDto = z.infer<typeof todoSchema>;

// interface CategoryDto {
//   id: CategoryId;
//   name: string;
// }

// const updateProduct = (id: ProductId) => {
//   // fetch()
// };
// const product1: ProductDto = {
//   id: 5 as ProductId,
//   name: "Buty",
//   description: "Test1",
// };
// updateProduct(product1.id);

// const category1: CategoryDto = {
//   id: 43 as CategoryId,
//   name: "Category 1",
// };
// updateProduct(category1.id); // number & { __brand: 'productId' } !== number & { __brand: 'categoryId' }

// Data Transfer Object
const mockData: ProductDto[] = [
  {
    id: 1 as ProductId, // publicId
    name: "Prod 1",
    description: "Lorem ipsum",
  },
  {
    id: 2 as ProductId,
    name: "Prod 2",
    description: "sit dolor",
  },
];

export const ProductsListExample = () => {
  // const {isLoading, isError, data} = useApi<TodoDto[]>('https://jsonplaceholder.typicode.com/todos')
  // const {isLoading, isError, data} = useApi<TodoDto>('https://jsonplaceholder.typicode.com/todos/123')

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<TodoDto>([]);

  useEffect(() => {
    // try/catch
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log({ response });
        if (response.ok) {
          // 200, 201
          return response.json();
        }
        throw new Error("Response error");
      })
      .then((responseData) => {
        // throw new Error("test");

        // debugger;
        const result = todoSchema.safeParse(responseData);
        if (result.success && result.data) {
          setData(result.data);
        }
        console.log({ result });

        // setData(responseData);
        // setData(responseData);
        // setData(mockData);
      })
      .catch(() => {
        console.error("Oh no!");
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {}, [isLoading]); //
  useEffect(() => {}, [isError]); //

  return (
    <div>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! An error has occurred!</p>}
      {data.map((elem) => {
        return <div key={elem.id}>{elem.title}</div>;
      })}
    </div>
  );
};
