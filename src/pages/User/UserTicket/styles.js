import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 40px;

  text-align: center;
  color: #363535;

  h2,
  h4 {
    width: 100%;
  }
  h2 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 5px;
  }
  h4 {
    font-weight: 400;
    font-size: 22px;
  }

  div {
    width: 100%;
    height: 30px;

    display: flex;
    justify-content: center;
  }

  button {
    width: 300px;
    height: 50px;

    margin: 30px 10px 0 10px;
  }
`;
