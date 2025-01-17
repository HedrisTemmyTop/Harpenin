import { IUser } from "@/types/user";
import { createContext, ReactNode, useState, useContext } from "react";

interface AuthContextType {
  token: string;
  setToken: (token: string) => void;
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  login: (userData: IUser, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create context with a proper default value
const AuthContext = createContext<AuthContextType>({
  token: "",
  setToken: () => {},
  user: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthProvider = function ({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);

  const login = function (userData: IUser, token: string) {
    setUser(userData);
    setToken(token);

    // store user data in  storage and also the token
  };

  const logout = function () {
    setUser(null);
    setToken("");
    // Clear stored data
  };

  const value: AuthContextType = {
    token,
    setToken,
    user,
    setUser,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
