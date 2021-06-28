import React, { useState, useEffect } from "react";

import EventCard from "../EventCard";
import { api } from "../../services/api.js";

import { useEvents } from "../../Hooks/useEvents";

export default function EventList(props) {
  const { events } = useEvents();

  

  return (
    <>
      {events.map((event) => (
        <EventCard
          key={event.id}
          id={event.id}
          name={event.name}
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
