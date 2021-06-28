import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  min-height: 40vh;
  align-items: center;
  justify-content: center;
  color: #363535;
  background: #fff;
  border-radius: 10px;
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Phrase = styled.div`
  font-family: "Roboto";
  font-size: 25px;
  max-width: 150px;
  margin-top: 40px;
`;
