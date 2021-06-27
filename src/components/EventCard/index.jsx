import React from "react";

import { Container, EventInfor } from "./styles";

import Button from '../Button'

import calendar from '../../assets/calendar.svg'
import clock from '../../assets/clock.svg'
import pin from '../../assets/pin.svg'

export default function EventCard(props) {
  return (
    <Container>
      <img className="eventPic"></img>
      <EventInfor>
        <h3>Event</h3>
        <ul>
          <li>
            <img src = {calendar}></img>Date
          </li>
          <li>
            <img  src = {clock}></img>Time
          </li>
          <li>
            <img  src = {pin}></img>Location
          </li>
        </ul>
      </EventInfor>
      <Button>{props.btn1}</Button>
      <Button>{props.btn2}</Button>
    </Container>
  );
}
