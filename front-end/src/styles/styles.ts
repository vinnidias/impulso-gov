import styled from "styled-components";

export const Container = styled.div`
  z-index: 1000;
  position: relative;

  width: 100vw;
  height: 100vh;
  padding: 100px 0px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;



  h2 {
    color: #162c3b;
    font-family: 'Orbitron', sans-serif;


    :nth-child(2) {
      color: #fff;
  
    }
  }

  @media(max-width: 900px) {
    width: 100%;
    padding: 0px 4em;
  }

`