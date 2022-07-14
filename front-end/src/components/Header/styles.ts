import styled from "styled-components";

export const Container = styled.header`
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 2000;

  display: flex;
  justify-content: space-between;
  padding: 10px 2em;

  strong {
    font-family: 'Orbitron', sans-serif;
    color: #162c3b;
    letter-spacing: 1px;
  }

  span {
    font-family: 'Orbitron', sans-serif;
    color: #fff;
    margin-left: 2px;
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 1em;

    a {
      text-decoration: none;
      color: #162c3b;
      transition: .2s;
      font-size: 1.2em;

      :hover {
        color: #fff;
      }
    }
   
  }
`