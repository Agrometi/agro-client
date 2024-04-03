import { createGlobalStyle } from "styled-components";
import { themeTransition, scrollbar } from "./utils";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    max-width: 100vw;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    ${themeTransition};
    ${scrollbar};
  }

  body:has(.scroll-block){
    overflow: hidden;
  }

  a {
    text-decoration: none;
    font-weight: inherit;
  }
  
  li,
  ul{
    list-style:none;
  }

  button{
    border:none;
    background: none;
    outline:none;
    cursor:pointer;
  }

  a,
  button,
  input,
  textarea{
    color: inherit;
    font-size: inherit;
    font-family: inherit;
  }

`;

export { GlobalStyles };
