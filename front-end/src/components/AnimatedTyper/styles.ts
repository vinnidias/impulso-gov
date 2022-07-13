import styled, { keyframes } from "styled-components";
import TypeAnimation from 'react-type-animation';

const typing = keyframes`
  100% {
    left: 100%;
    margin: 0 -35px 0 35px;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const StaticText = styled.p`
  font-size: 3em;
  font-weight: 400;
 
`;

export const TextAnimate = styled(TypeAnimation)`
  font-size: 3em;
`

