import React from "react";
import ticket from "../../assets/ticket.svg";
import * as S from "./styles";

export default function Ticket({ height, width }) {
  return (
    <>
      <S.Container>
        <img src={ticket} alt="Eventin ticket" height={height} width={width} />
        <S.Ticket>
          <div id="qrcode"/>
          <S.EventInfo></S.EventInfo>
        </S.Ticket>
      </S.Container>
    </>
  );
}

// return <img src= {ticket} alt="Eventin ticket" height={height} width={width} />;
