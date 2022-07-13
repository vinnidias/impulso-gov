import React from 'react';
import { AnimatedTyper } from './components/AnimatedTyper';


function App() {
  const wordsList = [
    "Teste 1",
    2000,
    "Teste 2",
    2000,
    "Teste 3",
    2000,
    "Teste 4",
    2000,
  ]

  return (
    <AnimatedTyper wordsList={wordsList} />
  );
}

export default App;
