import React, { createContext } from "react";
// import { useSnackbar } from "notistack";
// import { api } from "../services/api";

export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
  return <EventContext.Provider>{children}</EventContext.Provider>;
};
