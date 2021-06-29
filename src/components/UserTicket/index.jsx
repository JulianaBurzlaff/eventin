import React from "react";
import ticket from "../../assets/ticket.svg";
import * as S from "./styles";

export default function Ticket({ height, width }) {
  return (
    <>
      <img src={ticket} alt="Eventin ticket" height={height} width={width} />
      <S.Ticket>
        <div id="qrcode"></div>
        <S.EventInfo></S.EventInfo>
      </S.Ticket>
    </>
  );
}

// return <img src= {ticket} alt="Eventin ticket" height={height} width={width} />;
