import React from "react";
import TypeAnimation from 'react-type-animation';

type IProps = {
  wordsList: (string | number)[];
  wrapper: string
}

export const AnimatedTyper: React.FC<IProps> = ({ wordsList, wrapper }) => {
  return (
    <TypeAnimation
      cursor={true}
      sequence={wordsList}
      wrapper={wrapper}
      repeat={Infinity}
    />

  )
}