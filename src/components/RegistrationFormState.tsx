import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";
import { Button } from "../ui";

export const RegistrationFormState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    setEmail(value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.currentTarget.value;
    setPassword(value);
  };

  const handleLanguageChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.currentTarget.value;
    setLanguage(value);
  };

  return (
    <div>
      <div>
        <p>
          E-mail: {email} password: {password}, language: {language}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input
            id="language"
            name="language"
            onChange={handleLanguageChange}
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
