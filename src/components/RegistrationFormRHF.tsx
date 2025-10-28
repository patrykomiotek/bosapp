import { type FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // or 'zod/v4'

// react-hook-form
import { Button } from "../ui";

type RegistrationFormDto = {
  email: string;
  password: string;
  language: string;
  country: string;
};

export const RegistrationFormRHF = () => {
  const handleSubmit: FormEventHandler = (event) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <input id="language" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input id="country" />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
