<<<<<<< Updated upstream
=======
<<<<<<< HEAD
// import { useEffect } from "react";
=======
>>>>>>> db94df8b6e66d2899e8ca34c5b4d311403e3bc30
>>>>>>> Stashed changes
import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";
import UserTicket from "../../../components/UserTicket";
import Button from "../../../components/Button";
import UserLayout from "../../../components/UserLayout";

import { Container } from "./styles";
// var qrcodeGenerator = require("qrcode-generator");
// Change EventCard to EventList Component

export default function UserEvents() {
<<<<<<< Updated upstream
  const navigate = useHistory();
=======
<<<<<<< HEAD
  const history = useHistory();
=======
  const navigate = useHistory();
>>>>>>> db94df8b6e66d2899e8ca34c5b4d311403e3bc30
>>>>>>> Stashed changes
  // useEffect(() => {
  //   var typeNumber = 4;
  //   var errorCorrectionLevel = "L";
  //   var qr = qrcodeGenerator(typeNumber, errorCorrectionLevel);
  //   const token = `${new Date().getTime()}`;
  //   qr.addData(`http://192.168.15.11:3000/attendant/validation?id=${token}`);
  //   qr.make();

  //   document.getElementById("qrcode").innerHTML = qr.createImgTag();
  // }, []);

  const otherEventsClick = () => {
    history.push("/user/my-events");
  };
  return (
    <UserLayout>
      <Header type="user" />
      <Container>
        <h2>This QR code is your ticket</h2>
        <h4>Please, present it at the event entrance.</h4>
        <UserTicket height={300} width={600} className="ticket"></UserTicket>
        <div>
<<<<<<< Updated upstream
          <Button onClick={() => navigate.push("my-events")}>See other events</Button>
=======
<<<<<<< HEAD
          <Button onClick={otherEventsClick}>See other events</Button>
=======
          <Button onClick={() => navigate.push("my-events")}>See other events</Button>
>>>>>>> db94df8b6e66d2899e8ca34c5b4d311403e3bc30
>>>>>>> Stashed changes
          <Button>Print ticket</Button>
        </div>
      </Container>
    </UserLayout>
  );
}
