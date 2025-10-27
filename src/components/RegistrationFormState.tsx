import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";
import { Button } from "../ui";

type RegistrationFormDto = {
  email: string;
  password: string;
  language: string;
  country: string;
};

export const RegistrationFormState = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [language, setLanguage] = useState("");
  const [state, setState] = useState<RegistrationFormDto>({
    email: "",
    password: "",
    language: "",
    country: "",
  });

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ state });
  };

  // const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   const value = event.currentTarget.value;
  //   setEmail(value);
  // };

  // const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (
  //   event
  // ) => {
  //   const value = event.currentTarget.value;
  //   setPassword(value);
  // };

  // const handleLanguageChange: ChangeEventHandler<HTMLInputElement> = (
  //   event
  // ) => {
  //   const value = event.currentTarget.value;
  //   setLanguage(value);
  // };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    // this.setState({ email: value })
    const stateCopy = { ...state, [name]: value }; // ...rest
    setState(stateCopy);
  };

  const { email, language, password } = state;

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
          <input id="email" name="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input id="language" name="language" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input id="country" name="country" onChange={handleChange} />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
