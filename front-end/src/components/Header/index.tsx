import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Container } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <strong>Vini<span>Dias</span></strong>
      <ul>
        <li>
          <a href="https://github.com/vinnidias/impulso-gov" target="_blank"><BsGithub /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vinicius-dias-santos-4901341a2/" target="_blank"><BsLinkedin /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/vinni.diass/" target="_blank"><BsInstagram /></a>
        </li>
      </ul>
    </Container>
  )
}