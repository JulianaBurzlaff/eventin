import React, { useState, createContext, useCallback, useEffect } from "react";
import { useSnackbar } from "notistack";
import { api } from "../services/api";

export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState();
  const [newEvent, setNewEvent] = useState();
  const { enqueueSnackbar } = useSnackbar();

  // useEffect(async () => {
  //   console.log("ok");
  //   try {
  //     const { data } = await api.get("/events");
  //     setEvents(data);
  //     console.log(events);
  //   } catch (err) {
  //     return null;
  //   }
  // }, []);

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
      const { data } = await api.post("/events", {
        adminId,
        eventName,
        location,
        date,
        time,
        description,
        image,
      });
      setEvents((prev) => [data, ...prev]);
      enqueueSnackbar("Event successfully registered", {
        variant: "success",
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fetchEvents = useCallback(async (adminId) => {
    try {
      const { data } = await api.get("/events");

      const events = data.filter((usr) => usr.adminId === adminId);

      setEvents(events);
      return events;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteEvent = useCallback(async (eventId) => {
    try {
      await api.delete("/events", { data: { eventId } });

      setEvents((prev) => prev.filter((event) => event.id !== eventId));
      enqueueSnackbar("Event successfully deleted", {
        variant: "success",
      });
      return true;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const Subscribe = useCallback(
  //   async ({ eventId }) => {
  //     const { data } = await api.post("/users", {
  //       eventId,
  //     });
  //     // enqueueSnackbar("User successfully registered", {
  //     //   variant: "success",
  //     // });
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   []
  // );

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        eventId,
        setEventId,
        registerEvent,
        newEvent,
        fetchEvents,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
