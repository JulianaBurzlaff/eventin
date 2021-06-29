// import { useEffect } from "react";
import Header from "../../../components/Header";
import UserTicket from "../../../components/UserTicket";
import Button from "../../../components/Button";
import UserLayout from "../../../components/UserLayout";

import { Container } from "./styles";
// var qrcodeGenerator = require("qrcode-generator");
// Change EventCard to EventList Component

export default function UserEvents() {
  // useEffect(() => {
  //   var typeNumber = 4;
  //   var errorCorrectionLevel = "L";
  //   var qr = qrcodeGenerator(typeNumber, errorCorrectionLevel);
  //   const token = `${new Date().getTime()}`;
  //   qr.addData(`http://192.168.15.11:3000/attendant/validation?id=${token}`);
  //   qr.make();

  //   document.getElementById("qrcode").innerHTML = qr.createImgTag();
  // }, []);

  return (
    <UserLayout>
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
    </UserLayout>
  );
}
