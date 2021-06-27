import React from "react";
import btn from "../../assets/button-icon.svg";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, ContainerLeft, ContainerRight } from "./styles";
export default function Home() {
  return (
    <Container>
      <ContainerLeft>
        <div>
          <Logo width={380} height={65} />
          <legend>
            Your event access <br />
            control platform
          </legend>
        </div>
      </ContainerLeft>
      <ContainerRight>
        <h2>Let’s get started!</h2>
        <Input width={300} height={100} placeholder="Username" />
        <Input width={300} height={100} placeholder="Password" />
        <Button width={300} height={100}>
          <img src={btn} alt="Login" /> Login
        </Button>
      </ContainerRight>
    </Container>
  );
}
