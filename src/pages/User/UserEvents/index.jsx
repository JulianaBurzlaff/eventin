import Header from "../../../components/Header";
import EventCard from "../../../components/EventCard";

import { Container } from "./styles";
// Change EventCard to EventList Component

export default function UserEvents() {
  return (
    <>
      <Header type="user" />
      <Container> 
        <EventCard btn1 = {"Ticket"} btn2 = {"Unsubscribe"}></EventCard>
        <EventCard btn1 = {"Ticket"} btn2 = {"Unsubscribe"}></EventCard>
      </Container>
    </>
  );
}

