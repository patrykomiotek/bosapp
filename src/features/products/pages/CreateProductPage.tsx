import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Header } from "@/ui";
import { CreateProductForm } from "../components/CreateProductForm";
import type { CreateProductDto } from "../contracts/Product.dto";
import { createProduct } from "../services/products";

export const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateProductDto) => {
    try {
      const result = await createProduct(data);
      toast.success("Great success!");

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
