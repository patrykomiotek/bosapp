import { createContext } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  // setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  logIn: () => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
