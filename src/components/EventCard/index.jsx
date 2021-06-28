import React from "react";
import { useHistory } from "react-router-dom";
import { useEvents } from "../../Hooks/useEvents";
import { Container, EventInfor } from "./styles";

import Button from "../Button";

import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";
import pin from "../../assets/pin.svg";

export default function EventCard(props) {
  const navigate = useHistory();
  const { setEventId } = useEvents();


  function navigateTo() {
    setEventId(props.id)
    navigate.push(`/user/event-detail/${props.name}`);
  }
  // function handleSubmit(id){
  //   navigate.push('/user/event-detail')
  // }

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
      <Button>{props.btn2}</Button>
    </Container>
  );
}
