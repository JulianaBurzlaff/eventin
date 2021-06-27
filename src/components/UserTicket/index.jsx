import React from "react";
import ticket from "../../assets/ticket.svg";

export default function Ticket({ height, width }) {
  return <img src= {ticket} alt="Eventin ticket" height={height} width={width} />;
}


