import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// react-hook-form
import { Button, Input } from "@/ui";
import { createProduct } from "../services/products";
import {
  createProductSchema,
  type CreateProductDto,
} from "../contracts/Product.dto";

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(createProductSchema),
  });

  const handleProductSubmit: SubmitHandler<CreateProductDto> = (data) => {
    console.log({ data });
    createProduct(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleProductSubmit)}>
        <Input {...register("name")} label="Name" error={errors.name} />
        <Input
          {...register("description")}
          label="Description"
          error={errors.description}
        />
        <Input
          {...register("price", { valueAsNumber: true })}
          label="Price"
          type="number"
          error={errors.price}
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
