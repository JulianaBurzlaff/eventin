import React, { createContext, useCallback, useState } from "react";
import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const registerUser = useCallback(async ({ fullname, username, password }) => {
    const { data } = await api.post("/users", {
      fullname,
      username,
      password,
    });
    setUser(data);
    console.log(user);
    enqueueSnackbar("User successfully registered", {
      variant: "success",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const logout = useCallback(() => {
  //   setUser();
  // }, []);

  // const login = useCallback(async ({ username, password }) => {
  //   try {
  //     const { data } = await api.get(
  //       `/users?username=${username}&password=${password}`
  //     );
  //     const userData = data[0];
  //     setUser(userData);
  //     return userData;
  //   } catch (error) {
  //     return null;
  //   }
  // }, []);

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
