import { useContext } from "react";
import { LoginContext } from "../providers/LoginProvider";

export function useLogin() {
  const context = useContext(LoginContext);

  return context;
}
