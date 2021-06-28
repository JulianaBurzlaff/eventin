import React, {useState, useEffect} from 'react'
import Header from "../../../components/Header";
<<<<<<< HEAD
import EventList from "../../../components/EventList";

import { api } from "../../../services/api.js";
=======
import EventCard from "../../../components/EventCard";
import UserLayout from "../../../components/UserLayout";
>>>>>>> ea053f7f66e937c58922be2a81576d0c2a195f55

import { Container } from "./styles";
// Change EventCard to EventList Component

function EventsList() {
 

  return (
    <UserLayout>
      <Header type="user" />
<<<<<<< HEAD
      <Container> 
      <EventList></EventList>
=======
      <Container>
        <EventCard btn1={"Details"} btn2={"Subscribe"}></EventCard>
        <EventCard btn1={"Details"} btn2={"Subscribe"}></EventCard>
        <EventCard btn1={"Details"} btn2={"Subscribe"}></EventCard>
>>>>>>> ea053f7f66e937c58922be2a81576d0c2a195f55
      </Container>
    </UserLayout>
  );
}

export default EventsList;
