import React from "react";
import Logo from "../Logo";
import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <Logo height={237} width={387} />
    </S.Header>
  );
}

export default Header;
