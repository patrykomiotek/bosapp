import { Button } from "@/ui";
import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

  // throw new Error("new error");

  const handleClick = () => {
    // throw new Error("callback error");
    context.toggle();
  };

  return (
    <div>
      <p>Is user logged in? {context.isLoggedIn ? "YES" : "NO"}</p>
      <Button onClick={handleClick}>Toggle</Button>
    </div>
  );
};
