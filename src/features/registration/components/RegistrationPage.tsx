import type { RegistrationFormDto } from "../contracts/registration";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationPage = () => {
  const handleSubmit = (data: RegistrationFormDto) => {
    console.log(data);
    // POST https://example.com
  };

  return (
    <RegistrationForm
      defaultValues={{ country: "PL", email: "test@wp.pl" }}
      onSubmit={handleSubmit}
    />
  );
};
