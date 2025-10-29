import { createContext, type Dispatch, type SetStateAction } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
});
