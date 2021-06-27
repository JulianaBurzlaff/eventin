import Header from "../../../components/Header";
import EventCard from "../../../components/EventCard";

import { Container } from "./styles";
// Change EventCard to EventList Component

function EventsList() {
  return (
    <>
      <Header type="user" />
      <Container> 
      <EventCard btn1 = {"Details"} btn2 = {"Subscribe"}></EventCard>
      <EventCard btn1 = {"Details"} btn2 = {"Subscribe"}></EventCard>
      <EventCard btn1 = {"Details"} btn2 = {"Subscribe"}></EventCard>
      </Container>
    </>
  );
}

export default EventsList;
