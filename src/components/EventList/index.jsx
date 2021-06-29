import React, { useState, useEffect } from "react";

import EventCard from "../EventCard";
import { api } from "../../services/api.js";

import { useEvents } from "../../Hooks/useEvents";
import { useAuth } from "../../Hooks/useAuth";

export default function EventList(props) {
  const { user } = useAuth();
  const { events, fetchEvents } = useEvents();

  useEffect(() => {
    fetchEvents(user.adminId);
  }, []);

  return (
    <>
      {events.map((event) => (
        <EventCard
          image={event.image}
          key={event.id}
          id={event.id}
          name={event.eventName}
          date={event.date}
          time={event.time}
          location={event.location}
          description={event.description}
          btn1={"Details"}
          btn2={"Subscribe"}
        ></EventCard>
      ))}
    </>
  );
}
