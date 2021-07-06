import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Container, EventInfor } from "./styles";

import Button from "../Button";

import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";
import pin from "../../assets/pin.svg";

import { AuthContext } from "../../providers/AuthProvider";
import { useEvents } from "../../Hooks/useEvents";
import { useUsers } from "../../Hooks/useUsers";

export default function EventDescription(props) {
  const { events, fetchEvents, generateTicket } = useEvents();
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState();
  const navigate = useHistory();
  const { event_name } = useParams();

  const { setUserEvent } = useUsers();

  useEffect(() => {
    fetchEvents(user.adminId);

    // if (user.events.includes(`${eventId}`)) {
    //   setDisabled(true);
    // }
  }, []);

  const current = events.filter((e) => e.eventName == event_name);

  function handleSubmit(id) {
    setUserEvent(id, user.username);
    setDisabled(true);
    generateTicket({ eventId: id, userId: user.id });
  }

  return (
    <Container>
      <img className="eventPic" src={current[0].image}></img>
      <EventInfor>
        <h3>{current[0].eventName}</h3>
        <ul>
          <li>
            <img src={calendar}></img>
            <span>{current[0].date}</span>
          </li>
          <li>
            <img src={clock}></img>
            {current[0].time}
          </li>
          <li>
            <img src={pin}></img>
            {current[0].location}
          </li>
        </ul>
        <legend>{current[0].description}</legend>
        <Button onClick={() => navigate.push(`/user/events-available`)}>
          {props.btn1}
        </Button>
        <Button
          onClick={() => {
            handleSubmit(current[0].id);
          }}
          disabled={disabled}
        >
          {props.btn2}
        </Button>
      </EventInfor>
    </Container>
  );
}
