import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Button } from "@/ui";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <p>Is user logged in? {context?.isLoggedIn ? "YES" : "NO"}</p>
      <Button onClick={() => context?.toggle()}>Toggle</Button>
    </div>
  );
};
