import { useRef, createRef, type FormEventHandler } from "react";
// react-hook-form
import { Button, Input } from "../ui";

type RegistrationFormDto = {
  email: string;
  password: string;
  language: string;
  country: string;
};

export const RegistrationFormRefs = () => {
  const idsRef = useRef([]); // idRefs.push(4)
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const passwordErrorRef = useRef<HTMLParagraphElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);
  const countryFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    // console.log({ state });

    const emailValue = emailFieldRef.current?.value || "";
    const passwordValue = passwordFieldRef.current?.value || "";
    const languageValue = languageFieldRef.current?.value || "";
    const countryValue = countryFieldRef.current?.value || "";

    if (languageValue.toLowerCase() === "golang") {
      if (languageFieldRef.current) {
        languageFieldRef.current.style.border = "1px red solid;";
        languageFieldRef.current.value = "***";
        if (passwordErrorRef.current) {
          passwordErrorRef.current.innerText = "Language is invalid";
        }
      }
    }

    console.log({
      emailValue,
      passwordValue,
      languageValue,
      countryValue,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          ref={emailFieldRef}
          label="E-mail"
          type="email"
          defaultValue="test@wp.pl"
          // value="test@wp.pl"
          // onChange={() => null}
        />
        {/* <div>
          <label htmlFor="email">E-mail</label>
          <input ref={emailFieldRef} id="email" name="email" type="email" />
        </div> */}
        <Input ref={passwordFieldRef} label="Password" type="password" />
        {/* <div>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordFieldRef}
            id="password"
            name="password"
            type="password"
          />
        </div> */}
        <Input ref={languageFieldRef} label="Language" />
        {/* <div>
          <label htmlFor="language">Language</label>
          <input ref={languageFieldRef} id="language" name="language" />
          <p ref={passwordErrorRef} style={{ color: "red" }}></p>
        </div> */}
        <Input ref={countryFieldRef} label="Country" />
        {/* <div>
          <label htmlFor="country">Country</label>
          <input ref={countryFieldRef} id="country" name="country" />
        </div> */}
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
