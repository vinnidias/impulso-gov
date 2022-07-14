import styled from "styled-components";


export const Container = styled.div`
  position: absolute;
  top: 30%;
  width: 200px;
  height: 200px;
  backdrop-filter: blur(25px);
  border-radius: 50%;
  border: 1px solid rgba(255,255,255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Orbitron', sans-serif;
    font-weight: 400;
    font-size: 3rem;
    color: #fff;
  }
`;