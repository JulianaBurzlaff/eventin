import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
