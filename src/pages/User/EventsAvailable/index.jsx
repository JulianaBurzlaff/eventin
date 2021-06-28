import React, {useState, useEffect} from 'react'
import Header from "../../../components/Header";
import EventList from "../../../components/EventList";
import UserLayout from '../../../components/UserLayout';

import { api } from "../../../services/api.js";

import { Container } from "./styles";
// Change EventCard to EventList Component

function EventsList() {
 

  return (
    <UserLayout>
      <Header type="user" />
      <Container> 
      <EventList></EventList>
      </Container>
    </UserLayout>
  );
}

export default EventsList;
