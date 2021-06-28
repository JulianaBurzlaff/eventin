import Header from "../../../components/Header";
import EventCard from "../../../components/EventCard";
import UserLayout from "../../../components/UserLayout";

import { Container } from "./styles";
// Change EventCard to EventList Component

function EventsList() {
  return (
    <UserLayout>
      <Header type="user" />
      <Container>
        <EventCard btn1={"Details"} btn2={"Subscribe"}></EventCard>
        <EventCard btn1={"Details"} btn2={"Subscribe"}></EventCard>
        <EventCard btn1={"Details"} btn2={"Subscribe"}></EventCard>
      </Container>
    </UserLayout>
  );
}

export default EventsList;
