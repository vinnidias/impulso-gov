import React from "react";
import TypeAnimation from 'react-type-animation';
import { Container, StaticText, TextAnimate } from "./styles"

type Props = {
  wordsList: (string | number) [ ]
}

export const AnimatedTyper: React.FC<Props> = ({ wordsList }) => {



  return (
    <Container>
      <StaticText>Texto estático: {" "}</StaticText>
      <TextAnimate 
        cursor={true}
        sequence={[
          "Primeiro Texto", 
          1000,
          "Segundo Texto",
          1000
        ]}
        wrapper="p"
        repeat={Infinity}
      />
    </Container>
  )
}