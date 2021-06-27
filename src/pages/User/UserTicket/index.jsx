import Header from "../../../components/Header";
import UserTicket from "../../../components/UserTicket";
import Button from "../../../components/Button";

import { Container } from "./styles";
// Change EventCard to EventList Component

export default function UserEvents() {
  return (
    <>
      <Header type="user" />
      <Container>
        <h2>This QR code is your ticket</h2>
        <h4>Please, present it at the event entrance.</h4>
        <UserTicket height={300} width={600} className="ticket"></UserTicket>
        <div>
          <Button>See other events</Button>
          <Button>Print ticket</Button>
        </div>
      </Container>
    </>
  );
}
