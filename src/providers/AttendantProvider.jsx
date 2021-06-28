import React, { createContext, useCallback, useState } from "react";
import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const AttendantContext = createContext({});

export const AttendantProvider = ({ children }) => {
  const [attendant, setAttendant] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const registerAttendant = useCallback(
    async ({ fullname, username, password, event, type }) => {
      const { data } = await api.post("/users", {
        fullname,
        username,
        password,
        type,
      });
      setAttendant(data);
      enqueueSnackbar("User successfully registered", {
        variant: "success",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <AttendantContext.Provider
      value={{
        attendant,
        registerAttendant,
      }}
    >
      {children}
    </AttendantContext.Provider>
  );
};
