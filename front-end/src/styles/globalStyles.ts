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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  
  }
`;