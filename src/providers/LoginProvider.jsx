import React, { createContext, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../services/api";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const history = useHistory();
  const [admin, setAdmin] = useState();
  const [user, setUser] = useState();
  const [attendant, setAttendant] = useState();

  const login = useCallback(async ({ username, password }) => {
    try {
      const { data } = await api.get("/users");
      const loginData = data.find((login) => login.username === username);

      if (loginData.password === password) {
        return loginData;
      }
    } catch (error) {
      return null;
    }
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
    <LoginContext.Provider
      value={{
        user,
        admin,
        attendant,
        login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
