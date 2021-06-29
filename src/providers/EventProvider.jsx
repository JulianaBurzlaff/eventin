import React, { useState, createContext, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAuth } from "../Hooks/useAuth";
import { api } from "../services/api";
var qrcodeGenerator = require("qrcode-generator");

export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
  const history = useHistory();
  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(async () => {
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
  const generateTicket = useCallback(async ({ eventId, userId }) => {
    try {
      const token = `${new Date().getTime()}`;

      const { data } = await api.post("/tickets", {
        token,
        userId,
        eventId,
        validated: false,
      });

      return data;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTicket = useCallback(async ({ eventId, userId }) => {
    try {
      const { data } = await api.get("/tickets");

      const ticket = data.filter(
        (ticket) => ticket.eventId === eventId && ticket.userId === userId
      );

      const token = ticket[0].token;

      var typeNumber = 4;
      var errorCorrectionLevel = "L";
      var qr = qrcodeGenerator(typeNumber, errorCorrectionLevel);
      qr.addData(`http://192.168.15.11:3000/attendant/validation?id=${token}`);
      qr.make();

      document.getElementById("qrcode").innerHTML = qr.createImgTag();

      history.push("/user/my-ticket");
      return ticket;
    } catch (error) {
      return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        eventId,
        setEventId,
        registerEvent,
        fetchEvents,
        deleteEvent,
        generateTicket,
        getTicket,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
