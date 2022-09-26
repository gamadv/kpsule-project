import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      border: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :focus {
      outline: 0;
  }

  body {
    background: ${(props) => props.theme["bg-color"]};
    color: ${(props) => props.theme["text-color"]} ;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    background: none;
    outline: none;
    border-radius: 4px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93, 75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87, 5%;
    }
  }
`;
