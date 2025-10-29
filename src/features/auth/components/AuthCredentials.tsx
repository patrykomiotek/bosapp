import { Button } from "@/ui";
import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <div>
      <p>Is user logged in? {context.isLoggedIn ? "YES" : "NO"}</p>
      <Button onClick={() => context.toggle()}>Toggle</Button>
    </div>
  );
};
