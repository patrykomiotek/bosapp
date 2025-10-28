import { useEffect, useState } from "react";

type Brand<K, T> = K & { __brand: T };
type ProductId = Brand<number, "productId">;
// type CategoryId = Brand<number, "categoryId">;

interface ProductDto {
  id: ProductId;
  name: string;
  description: string;
}

interface TodoDto {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

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

export const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<TodoDto[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((responseData) => {
        setData(responseData);
        // setData(mockData);
        setIsLoading(false);
      })
      .catch(() => {
        console.error("Oh no!");
        setIsError(true);
      });
  }, []);

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
