import React, { createContext, useCallback, useState } from "react";
import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [newUser, setNewUser] = useState();
  const [users, setUsers] = useState();
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
      setNewUser(data);
      enqueueSnackbar("User successfully registered", {
        variant: "success",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fetchUsers = useCallback(async (adminId) => {
    try {
      const { data } = await api.get("/users");

      const users = data.filter(
        (usr) => usr.type === "user" && usr.adminId === adminId
      );

      setUsers(users);
      return users;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setUserEvent = useCallback(
    
  async (eventId, username ) => {
      console.log("aa",username, eventId)
      try {
        const response = api.put(`/submit/${username}&${eventId}`, { username, eventId });
        setUsers(response)
      } catch (err) {
        return null;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <UserContext.Provider
      value={{
        newUser,
        registerUser,
        fetchUsers,
        users,
        setUserEvent
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
