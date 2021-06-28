import Header from "../../../components/Header";
import EventDescription from "../../../components/EventDescription";
import UserLayout from "../../../components/UserLayout";

import { Container } from "./styles";
// Change EventCard to EventList Component

export default function EventDetail() {
  return (
    <UserLayout>
      <Header type="user" />
      <Container>
        <EventDescription
          btn1={"See other events"}
          btn2={"Subscribe"}
        ></EventDescription>
      </Container>
    </UserLayout>
  );
}
