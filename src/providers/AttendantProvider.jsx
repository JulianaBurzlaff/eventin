import React, { createContext, useCallback, useState } from "react";
import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const AttendantContext = createContext({});

export const AttendantProvider = ({ children }) => {
  const [newAttendant, setNewAttendant] = useState();
  const [attendants, setAttendants] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const registerAttendant = useCallback(
    async ({ fullname, username, password, type, adminId }) => {
      const { data } = await api.post("/users", {
        fullname,
        username,
        password,
        type,
        adminId,
      });
      setNewAttendant(data);
      enqueueSnackbar("Attendant successfully registered", {
        variant: "success",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fetchAttendants = useCallback(async (adminId) => {
    try {
      const { data } = await api.get("/users");

      const attendants = data.filter(
        (usr) => usr.type === "attendant" && usr.adminId === adminId
      );

      setAttendants(attendants);
      return attendants;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteAttendant = useCallback(async (userId) => {
    try {
      await api.delete("/users", { data: { userId } });

      setAttendants((prev) =>
        prev.filter((attendant) => attendant.id !== userId)
      );
      enqueueSnackbar("Attendant successfully deleted", {
        variant: "success",
      });
      return true;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AttendantContext.Provider
      value={{
        newAttendant,
        attendants,
        registerAttendant,
        fetchAttendants,
        deleteAttendant,
      }}
    >
      {children}
    </AttendantContext.Provider>
  );
};
