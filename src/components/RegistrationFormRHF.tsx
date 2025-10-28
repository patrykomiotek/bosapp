import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // or 'zod/v4'

// react-hook-form
import { Button } from "../ui";

const registrationFormSchema = z.object({
  email: z.email(),
  password: z.string().min(3), // refine(data, ctx)
  language: z.enum(["php", "js", "ts"]),
  country: z.string().transform((value) => value.toUpperCase()),
});

type RegistrationFormDto = z.infer<typeof registrationFormSchema>;

// type RegistrationFormDto = {
//   email: string;
//   password: string;
//   language: string;
//   country: string;
// };

export const RegistrationFormRHF = () => {
  const { register, handleSubmit } = useForm<RegistrationFormDto>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      email: "test@onet.pl",
    },
  });

  const handleRegistrationSubmit: SubmitHandler<RegistrationFormDto> = (
    data
  ) => {
    console.log({ data });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistrationSubmit)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input {...register("email")} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} id="password" type="password" />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input {...register("language")} id="language" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input {...register("country")} id="country" />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
