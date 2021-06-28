import React, { createContext, useCallback, useState } from "react";
import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const registerUser = useCallback(
    async ({ fullname, username, password, type, adminId }) => {
      const { data } = await api.post("/users", {
        fullname,
        username,
        password,
        type,
        adminId,
      });
      setUser(data);
      enqueueSnackbar("User successfully registered", {
        variant: "success",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <UserContext.Provider
      value={{
        user,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
