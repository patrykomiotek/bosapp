import { Header } from "@/ui";
import type { ProductDto } from "../contracts/Product.dto";

type Props = {
  product: {
    name: ProductDto["fields"]["name"];
    description: ProductDto["fields"]["description"];
    price: ProductDto["fields"]["price"];
  };
};

export const ProductCard = ({ product }: Props) => {
  const { name, description, price } = product;
  return (
    <div className="m-4 p-4 outline rounded-md">
      <Header>{name}</Header>
      <div>
        <p className="font-medium">{description}</p>
        <p className="text-sm text-slate-500">${price}</p>
      </div>
    </div>
  );
};
