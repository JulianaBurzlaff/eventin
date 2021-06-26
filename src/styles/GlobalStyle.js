import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}
body{
    background: #E5E5E5;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
}
input{    
    font-size: 16px;
    border: 1px solid #A8A8B3;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 13px 12px 13px 16px;
    color: #A8A8B3;
}

`;
