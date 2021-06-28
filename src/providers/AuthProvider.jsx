import React, { createContext, useCallback, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const initialUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    initialUser ? JSON.parse(initialUser) : null
  );

  const login = useCallback(async ({ username, password }) => {
    const { data } = await api.post("/login", { username, password });
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  }, []);

  const logout = useCallback(async () => {
    await api.post("/logout");
    localStorage.removeItem("user");
    setUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: user && user.type === "admin",
        isAttendant: user && user.type === "attendant",
        isUser: user && user.type === "user",
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
