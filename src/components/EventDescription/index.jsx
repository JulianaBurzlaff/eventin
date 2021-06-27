import React from "react";

import { Container, EventInfor } from "./styles";

import Button from "../Button";

import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";
import pin from "../../assets/pin.svg";

export default function EventDescription(props) {
  return (
    <Container>
      <img className="eventPic"></img>
      <EventInfor>
        <h3>Event</h3>
        <ul>
          <li>
            <img src={calendar}></img>
            <span>Date</span>
          </li>
          <li>
            <img src={clock}></img>Time
          </li>
          <li>
            <img src={pin}></img>Location
          </li>
        </ul>
        <legend>
          At Scrum Day Europe 2021, experienced practioners tell stories about
          their successes and failures, facilitate workshops and suggest better
          ways to maximize value for your business and customers. Join us online
          and help maximize the value from our balanced and diverse program. At
          Scrum Day Europe 2021, experienced practioners tell stories about
          their successes and failures, facilitate workshops and suggest better
          ways to maximize value for your business and customers. Join us online
          and help maximize the value from our balanced and diverse program.
        </legend>
        <Button>{props.btn1}</Button>
        <Button>{props.btn2}</Button>
      </EventInfor>
    </Container>
  );
}
