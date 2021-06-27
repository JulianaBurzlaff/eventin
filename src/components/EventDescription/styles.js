import styled from "styled-components";

export const Container = styled.div`
  width: 950px;
  padding-bottom: 20px;

  margin-bottom: 20px;
  background: #fefefe;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  border-radius: 8px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .eventPic {
    width: 100%;
    height: 310px;
    background: #f1f1f1;
  }

`;

export const EventInfor = styled.div`
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  margin-top: 5px;

  h3 {
    width: 100%;
    font-weight: 500;
    font-size: 68px;
    line-height: 50px;

    margin: 40px 0 30px 0;
    text-align: center;

    color: #363535;
  }
  ul {
    list-style: none;
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  li {
    height: 30px;

    font-weight: 500px;
    font-size: 30px;
    line-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 30px;
    margin-right: 5px;
  }

  legend {
    margin: 40px 0 35px 0;
    font-weight: 500px;
    font-size: 22px;
    line-height: 35px;

    text-align: justify;
  }

  button {
    width: 252px;
    height: 60px;
    
  }
`;
