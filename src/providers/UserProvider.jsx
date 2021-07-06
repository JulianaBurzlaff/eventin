import React, { createContext, useCallback, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [newUser, setNewUser] = useState();
  const [users, setUsers] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [userDataTicket, setUserDataTicket] = useState();

  useEffect(async () => {
    try {
      const { data } = await api.get("/users");

      setUsers(data);
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const deleteUser = useCallback(async (userId) => {
    try {
      await api.delete("/users", { data: { userId } });

      setUsers((prev) => prev.filter((user) => user.id !== userId));
      enqueueSnackbar("User successfully deleted", {
        variant: "success",
      });
      return true;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setUserEvent = useCallback(
    async (eventId, username) => {
      try {
        const response = await api.put(`/submit/${username}&${eventId}`, {
          username,
          eventId,
        });
        setUsers(response);
      } catch (err) {
        return null;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const delUserEvent = useCallback(
    async (eventId, username) => {
      try {
        const response = await api.put(`/del/${username}&${eventId}`, {
          username,
          eventId,
        });
        setUsers(response);
      } catch (err) {
        return null;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // const getUserDataFromTicket = useCallback(async (userId) => {
  //   try {
  //     const { data } = await api.get("/users");

  //     const user = data.filter((usr) => usr.id === userId);

  //     setUserDataTicket(user);
  //     return user;
  //   } catch (error) {
  //     return null;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <UserContext.Provider
      value={{
        newUser,
        registerUser,
        fetchUsers,
        users,
        setUserEvent,
        deleteUser,
        delUserEvent,
        // getUserDataFromTicket,
        userDataTicket,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
