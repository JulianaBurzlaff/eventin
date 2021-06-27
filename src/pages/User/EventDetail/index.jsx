import Header from "../../../components/Header";
import EventDescription from "../../../components/EventDescription";

import { Container } from "./styles";
// Change EventCard to EventList Component

export default function EventDetail() {
  return (
    <>
      <Header type="user" />
      <Container> 
        <EventDescription btn1 = {"See other events"} btn2 = {"Subscribe"}></EventDescription>
      </Container>
    </>
  );
}

