import React from "react";
import Logo from "../Logo";
import * as S from "./styles";

function AttendantHeader() {
  return (
    <S.Header>
      <Logo height={50} width={250} />
    </S.Header>
  );
}

export default AttendantHeader;
