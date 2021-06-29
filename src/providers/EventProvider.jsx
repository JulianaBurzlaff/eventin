import React, { useState, createContext, useCallback, useEffect } from "react";
import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState();
  const [eventId, setEventId] = useState();
  const [newEvent, setNewEvent] = useState();
  const { enqueueSnackbar } = useSnackbar();

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

  const registerEvent = useCallback(
    async ({
      adminId,
      eventName,
      location,
      date,
      time,
      description,
      image,
    }) => {
      const { data } = await api.post("/users", {
        adminId,
        eventName,
        location,
        date,
        time,
        description,
        image,
      });
      setNewEvent(data);
      enqueueSnackbar("User successfully registered", {
        variant: "success",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
    <EventContext.Provider
      value={{
        events,
        setEvents,
        eventId,
        setEventId,
        registerEvent,
        newEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
