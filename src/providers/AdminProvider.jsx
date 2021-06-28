import React, { createContext } from "react";
// import { useSnackbar } from "notistack";
// import { api } from "../services/api";

export const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {
  return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
};
