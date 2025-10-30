import { ProductCard } from "./ProductCard";
import type { ProductDto } from "../contracts/Product.dto";

type Props = {
  products: ProductDto[];
};

export const ProductsTable = ({ products }: Props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.fields.name}</td>
                <td>{elem.fields.description}</td>
                <td>${elem.fields.price}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
