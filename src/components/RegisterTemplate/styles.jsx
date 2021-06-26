import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.default};
    display: flex;
    height: 200px;
    width: 100%;
    align-items: center;
    justify-content: center;
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    background-color: #fff;
    color: ${theme.palette.text.primary};
    width: 100%;
    max-width: 600px;
    margin-top: -40px;
    border-radius: 10px;
    padding: 60px;
  `}
`;
