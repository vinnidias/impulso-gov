import React, { useEffect, useState } from 'react';
import { AnimatedTyper } from './components/AnimatedTyper';
import { Clock } from './components/Clock';
import { Header } from './components/Header';
import { ApiService } from './services/API';
import { Container, TextContainer } from "./styles/styles"


function App() {
  const [currentTime, setCurrentTime] = useState(" ")
  const wordsList = [
    "Front-End ",
    3500,
    "Mobile",
    3500,
    "Back-End",
    3500,
    "Full-Stack",
    3500,
  ]

  useEffect(() => {
    const minute = 60000

    const getTime = async () => {
      try {
        console.log("iniciou")
        const currentTimer = await ApiService.get("/current_time");
        const res = currentTimer.data
        const currentTime = res.current_time
        setCurrentTime(currentTime)
        console.log("terminou: ", currentTime)
      } catch (error) {
        console.log("api req fail", error)
        setCurrentTime("😴")
      }
    }
    getTime()
    setInterval(() => {
      getTime()
    }, minute)
  }, [])
  return (
    <Container>
      <Header/>
      <TextContainer>
        <h2>Desenvolvedor </h2>
        <AnimatedTyper wordsList={wordsList} wrapper={"h2"}/>
      </TextContainer>
      <Clock currentTime={currentTime}/>
    </Container>

  );
}

export default App;
