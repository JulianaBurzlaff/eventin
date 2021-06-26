import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;
export const ContainerLeft = styled.div`
  background: #835afd;
  width: 49vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-width: 35vw;
    margin: 0 0 20px 0;
  }
  legend {
    width: 380px;
    font-family: "Roboto"; /* //conferir a fonte */
    font-weight: normal;
    font-size: 35px;
    line-height: 1em;
    text-align: left;
    color: #f8f8f8;
    opacity: 0.7;
  }
`;

export const ContainerRight = styled.div`
  width: 48vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 47px;
    line-height: 32px;
    color: #363535;
    opacity: 0.7;
  }
  input {
    margin-top: 20px;
  }
`;
