import React from "react";
import * as S from "./styles";

function RegisterTemplate({ children }) {
  return (
    <S.Container>
      <S.Header />

      <S.Form>{children}</S.Form>
    </S.Container>
  );
}

export default RegisterTemplate;
