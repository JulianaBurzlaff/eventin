import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useEvents } from "../../Hooks/useEvents";
import { useUsers } from "../../Hooks/useUsers";
import { AuthContext } from "../../providers/AuthProvider";

import { Container, EventInfor } from "./styles";

import Button from "../Button";

import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";
import pin from "../../assets/pin.svg";

export default function EventCard(props) {
  const navigate = useHistory();
  const { setEventId } = useEvents();
  const { setUserEvent } = useUsers();
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    if (user.events.includes(`${props.id}`)) {
      setDisabled(true);
    }
  }, []);

  function navigateTo() {
    setEventId(props.id);
    navigate.push(`/user/event-detail/${props.name}`);
  }
  function handleSubmit(id) {
    setUserEvent(id, user.username);
    setDisabled(true);
  }

  return (
    <Container>
      <img className="eventPic"></img>
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
