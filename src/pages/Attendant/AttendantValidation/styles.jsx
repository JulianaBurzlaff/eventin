import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  color: #363535;
  opacity: 0.9;
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;

export const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 10px;
  font-size: 16px;
`;

export const Date = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 3px;
  align-items: flex-end;
`;

export const Hour = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 3px;
  align-items: flex-end;
`;

export const Location = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 3px;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 20px;
`;
