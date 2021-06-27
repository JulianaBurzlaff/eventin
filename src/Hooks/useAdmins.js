import { useContext } from "react";
import { AdminContext } from "../providers/AdminProvider";

export function useAdmin() {
  const context = useContext(AdminContext);

  return context;
}
