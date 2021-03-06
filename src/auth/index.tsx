import React, { createContext, useContext } from "react";

import { useAuthMachine } from "./machine-development";

export type AuthStatus =
  | "authorized"
  | "unauthorized"
  | "authorizing"
  | "error";

interface AuthProviderContext {
  authStatus: AuthStatus;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const authContext = createContext<AuthProviderContext>({
  authStatus: "unauthorized",
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [state, send] = useAuthMachine();
  const value: AuthProviderContext = {
    authStatus: (state.value as unknown) as AuthStatus,
    login: (email, password) => send({ type: "LOGIN", email, password }),
    logout: () => send({ type: "LOGOUT" }),
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
