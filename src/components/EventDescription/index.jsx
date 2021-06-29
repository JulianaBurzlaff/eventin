import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, EventInfor } from "./styles";

import Button from "../Button";

import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";
import pin from "../../assets/pin.svg";

import { AuthContext } from "../../providers/AuthProvider";
import { useEvents } from "../../Hooks/useEvents";

export default function EventDescription(props) {
  const { events, eventId } = useEvents();
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState();
  const navigate = useHistory();

  useEffect(() => {
    if (user.events.includes(`${eventId}`)) {
      setDisabled(true);
    }
  }, []);

  return (
    <Container>
      <img className="eventPic"></img>
      <EventInfor>
        <h3>{events[eventId-1].name}</h3>
        <ul>
          <li>
            <img src={calendar}></img>
            <span>{events[eventId-1].date}</span>
          </li>
          <li>
            <img src={clock}></img>{events[eventId-1].time}
          </li>
          <li>
            <img src={pin}></img>{events[eventId-1].location}
          </li>
        </ul>
        <legend>
        {events[eventId-1].description}
        </legend>
        <Button onClick = {()=> navigate.push(`/user/events-available`)}>{props.btn1}</Button>
        <Button disabled={disabled} >{props.btn2}</Button>
      </EventInfor>
    </Container>
  );
}
