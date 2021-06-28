import React, { useState, createContext, useCallback, useEffect } from "react";
// import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState();
  const [eventId, setEventId] = useState();

  useEffect(async () => {
    console.log("ok");
    try {
      const { data } = await api.get("/events");
      setEvents(data);
      console.log(events);
    } catch (err) {
      return null;
    }
  }, []);

  const Subscribe = useCallback(
    async ({ eventId }) => {
      const { data } = await api.post("/users", {
        eventId,
      });
      // enqueueSnackbar("User successfully registered", {
      //   variant: "success",
      // });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <EventContext.Provider value={{ events, setEvents, eventId, setEventId }}>
      {children}
    </EventContext.Provider>
  );
};
