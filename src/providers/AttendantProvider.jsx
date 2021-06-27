import React, { createContext } from "react";
// import { useSnackbar } from "notistack";
// import { api } from "../services/api";

export const AttendantContext = createContext({});

export const AttendantProvider = ({ children }) => {
  return <AttendantContext.Provider>{children}</AttendantContext.Provider>;
};
