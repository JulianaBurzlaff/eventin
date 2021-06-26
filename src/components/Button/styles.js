import styled from "styled-components";

export const ButtonComponent = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 116px;
  margin-top: 20px;
  background: #835afd;
  border-radius: 8px;
  border: 1.5px solid #f8f8f8;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #f8f8f8;
  cursor: pointer;
  transition: filter 0.2s;
  img {
    margin-right: 10px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
