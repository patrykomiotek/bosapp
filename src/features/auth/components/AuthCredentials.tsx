import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return <p>Is user logged in? {context.isLoggedIn ? "YES" : "NO"}</p>;
};
