import React, {useState, useEffect} from 'react'
import Header from "../../../components/Header";
import EventList from "../../../components/EventList";

import { api } from "../../../services/api.js";

import { Container } from "./styles";
// Change EventCard to EventList Component

function EventsList() {
 

  return (
    <>
      <Header type="user" />
      <Container> 
      <EventList></EventList>
      </Container>
    </>
  );
}

export default EventsList;
