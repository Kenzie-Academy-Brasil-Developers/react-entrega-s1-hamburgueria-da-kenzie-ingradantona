import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    border: none;
  }
  
  :root{
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;

    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #e0e0e0;
    --grey-00: #f5f5f5;

    --negative: #e60000;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155bcb;
  }
`

export const Div = styled.div`

  width: 100vw;
  box-sizing: border-box;

  @media screen and (min-width: 900px){
    display: flex;
    padding: 0 70px;
  }
`