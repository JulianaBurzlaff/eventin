import Header from "../../../components/Header";
import EventCard from "../../../components/EventCard";

import { Container } from "./styles";
// Change EventCard to EventList Component

function EventsList() {
  return (
    <>
      <Header type="user" />
      <Container> 
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </Container>
    </>
  );
}

export default EventsList;
