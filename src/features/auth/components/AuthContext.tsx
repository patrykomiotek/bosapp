// Rect Context Hook Pattern
import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  // setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  logIn: () => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside AuthProvider");
};

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggle = () => setIsLoggedIn((value) => !value);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return { isLoggedIn, toggle, logIn, logOut };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, toggle, logIn, logOut } = useAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggle, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
