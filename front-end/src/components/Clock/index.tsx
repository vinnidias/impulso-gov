import React from "react";
import { Container } from "./styles";

type IProps = {
  currentTime: string
}

export const Clock:React.FC<IProps> = ({currentTime}) => {

  return(
    <Container>
      <p>{currentTime}</p>
    </Container>
  )
}