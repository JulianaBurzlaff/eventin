import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, EventInfor } from "./styles";

import Button from "../Button";

import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";
import pin from "../../assets/pin.svg";

import { AuthContext } from "../../providers/AuthProvider";
import { useEvents } from "../../Hooks/useEvents";
import { useUsers } from "../../Hooks/useUsers";


export default function EventDescription(props) {
  const { events, eventId,generateTicket } = useEvents();
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState();
  const [currentEvent, setCurrent] = useState();
  const navigate = useHistory();

  const { setUserEvent } = useUsers();
  const userId = user.id;


  console.log(events[eventId - 1].eventName);
  console.log(events);
  useEffect(() => {
    if (user.events.includes(`${eventId}`)) {
      setDisabled(true);
    }
  }, []);

  // const current = events.filter((e) => e.id == eventId);
  // setCurrent(current);
  // console.log("aaa",events);

  function handleSubmit(id) {
    setUserEvent(id, user.username);
    setDisabled(true);
    generateTicket({ eventId: id, userId: user.id });
    console.log("Ok");
  }

  return (
    <Container>
      <img className="eventPic" src={events[eventId - 1].image}></img>
      <EventInfor>
        <h3>{events[eventId - 1].eventName}</h3>
        <ul>
          <li>
            <img src={calendar}></img>
            <span>{events[eventId - 1].date}</span>
          </li>
          <li>
            <img src={clock}></img>
            {events[eventId - 1].time}
          </li>
          <li>
            <img src={pin}></img>
            {events[eventId - 1].location}
          </li>
        </ul>
        <legend>{events[eventId - 1].description}</legend>
        <Button onClick={() => navigate.push(`/user/events-available`)}>
          {props.btn1}
        </Button>
        <Button
          onClick={() => {
            handleSubmit(eventId);
          }}
          disabled={disabled}
        >
          {props.btn2}
        </Button>
      </EventInfor>
    </Container>
  );
}
