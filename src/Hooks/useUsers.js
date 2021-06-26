import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export function useUsers() {
  const context = useContext(UserContext);

  return context;
}
