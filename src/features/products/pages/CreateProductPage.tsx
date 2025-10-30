import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { faker } from "@faker-js/faker";

import { Header } from "@/ui";
import { CreateProductForm } from "../components/CreateProductForm";
import type { CreateProductDto } from "../contracts/Product.dto";
import { createProduct } from "../services/products";

export const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateProductDto) => {
    try {
      // for (let i = 0; i < 1000; i++) {
      //   const product: CreateProductDto = {
      //     name: faker.commerce.product(),
      //     description: faker.commerce.productDescription(),
      //     price: parseInt(faker.commerce.price({ min: 10, max: 1234 })),
      //   };
      //   await createProduct(product);
      // }

      toast.success("Great success!");

      const result = await createProduct(data);
      const newProduct = result.records[0];
      // navigate("/products");
      navigate(`/products/${newProduct.id}`);
    } catch {
      toast.success("Oh no!");
    }
  };

  return (
    <div>
      <Header>Create product</Header>
      <CreateProductForm onSubmit={handleSubmit} />
    </div>
  );
};
