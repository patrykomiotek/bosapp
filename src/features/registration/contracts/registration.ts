import { z } from "zod";

export const registrationFormSchema = z.object({
  email: z.email({ error: "Email is required" }),
  password: z
    .string()
    .min(3, { error: "Password should be at least 3 characters" }), // refine(data, ctx)
  language: z.enum(["php", "js", "ts"], {
    error: "Choose one of options: php, js, ts",
  }),
  country: z.string().transform((value) => value.toUpperCase()),
});

export type RegistrationFormDto = z.infer<typeof registrationFormSchema>;
