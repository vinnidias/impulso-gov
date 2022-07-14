import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
  body {
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #fff, #fff 50%, #162c3b 50%, #162c3b);
    }

    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(160deg, #3475ca, #3475ca 50%, transparent 50%, transparent);
    }
  
  }
`;