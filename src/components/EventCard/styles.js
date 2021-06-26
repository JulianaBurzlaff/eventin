import styled from "styled-components";

export const Container = styled.div`
  width: 290px;
  height: 442px;
  background: #fefefe;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  border-radius: 8px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .eventPic {
    width: 100%;
    height: 197px;
    background: #f1f1f1;
  }
  button {
    width: 114px;
    height: 50px;
  }

`;

export const EventInfor = styled.div`
  width: 80%;
  height: 140px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-top: 5px;

  h3 {
    font-weight: 500;
    font-size: 33px;
    line-height: 50px;

    color: #363535;
  }
  ul {
    list-style: none;
    width: 80%;
  }

  li {
    height: 30px;

    font-weight: 500px;
    font-size: 20px;
    line-height: 50px;
  }

  img {
    margin-right: 5px;
  }
`;
