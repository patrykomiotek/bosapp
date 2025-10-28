import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// react-hook-form
import { Button, Input } from "../../../ui";
import {
  registrationFormSchema,
  type RegistrationFormDto,
} from "../contracts/registration";

type Props = {
  defaultValues: Partial<RegistrationFormDto>;
  onSubmit: (data: RegistrationFormDto) => void;
};

export const RegistrationForm = ({ defaultValues, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormDto>({
    resolver: zodResolver(registrationFormSchema),
    // defaultValues: defaultValues,
    defaultValues,
  });

  // formState.errors

  const handleRegistrationSubmit: SubmitHandler<RegistrationFormDto> = (
    data
  ) => {
    // console.log({ data });
    onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistrationSubmit)}>
        <Input
          {...register("email")}
          label="E-mail"
          type="email"
          error={errors.email}
        />
        <Input
          {...register("password")}
          label="Password"
          type="password"
          error={errors.password}
        />
        <Input
          {...register("language")}
          label="Language"
          error={errors.language}
        />
        <Input
          {...register("country")}
          label="Country"
          error={errors.country}
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
