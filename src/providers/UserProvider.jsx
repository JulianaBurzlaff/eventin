import React, { createContext } from "react";
// import { useSnackbar } from "notistack";
// import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState();
  // const { enqueueSnackbar } = useSnackbar();

  // const register = useCallback(async ({ fullName, username, password }) => {
  //   try {
  //     const { data } = await api.post("/users", {
  //       fullName,
  //       username,
  //       password,
  //     });
  //     setUser(data);
  //     enqueueSnackbar("Usuário cadastrado com sucesso!", {
  //       variant: "success",
  //     });
  //   } catch (error) {
  //     //
  //   }
  // }, []);

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
    // value={{
    //   user,
    //   register,
    //   logout,
    //   login,
    // }}
    >
      {children}
    </UserContext.Provider>
  );
};
