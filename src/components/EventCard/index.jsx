import React, { useContext, useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useEvents } from "../../Hooks/useEvents";
import { useUsers } from "../../Hooks/useUsers";
import { AuthContext } from "../../providers/AuthProvider";

import { Container, EventInfor } from "./styles";

import Button from "../Button";

import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";
import pin from "../../assets/pin.svg";
import createPalette from "@material-ui/core/styles/createPalette";

export default function EventCard(props) {
  const navigate = useHistory();
<<<<<<< HEAD
  const { setEventId, generateTicket, getTicket } = useEvents();
  const { setUserEvent } = useUsers();
=======
  const { setEventId } = useEvents();
  const { setUserEvent, delUserEvent } = useUsers();
>>>>>>> 4bcc54164f7979d8b8132910d45d4906dc7748b4
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState();
  const userId = user.id;

  useEffect(() => {
    if (user.events) {
      if (user.events.includes(`${props.id}`)) {
        setDisabled(true);
        if (props.btn2 === "Unsubscribe") {
          setDisabled(false);
          console.log("Ok")
        }
      }
    }
  }, []);

  function navigateTo() {
    setEventId(props.id);
    if (props.btn1 === "Details") {
      navigate.push(`/user/event-detail/${props.name}`);
    } else if (props.btn1 === "Ticket") {
      const eventId = props.id;
      getTicket({ eventId, userId });
    }
  }
<<<<<<< HEAD
  function handleSubmit(eventId) {
    setUserEvent(eventId, user.username);
    generateTicket({ eventId, userId });
    setDisabled(true);
=======
  function handleSubmit(id) {
    if (props.btn2 === "Subscribe") {
      setUserEvent(id, user.username);
      setDisabled(true);
      console.log("Ok")
    } else if (props.btn2 === "Unsubscribe") {
      delUserEvent(id, user.username)
      console.log(id, user);
    }
>>>>>>> 4bcc54164f7979d8b8132910d45d4906dc7748b4
  }

  return (
    <Container>
      <img className="eventPic" src={props.image}></img>
      <EventInfor>
        <h3>{props.name}</h3>
        <ul>
          <li>
            <img src={calendar}></img>
            {props.date}
          </li>
          <li>
            <img src={clock}></img>
            {props.time}
          </li>
          <li>
            <img src={pin}></img>
            {props.location}
          </li>
        </ul>
      </EventInfor>
      <Button onClick={() => navigateTo()}>{props.btn1}</Button>
      <Button
        onClick={() => {
          handleSubmit(props.id);
        }}
        disabled={disabled}
      >
        {props.btn2}
      </Button>
    </Container>
  );
}
