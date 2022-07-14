# Desafio Impulso Gov

Criei esse projeto React App para utilizar o componente de texto animado e para consumir a api que retorna a hora atual!
  
  O projeto pode ser acessado pela build na Vercel [Clicando aqui](https://impulso-gov.vercel.app/);
  
  Ou pode ser instalado para rodar localmente.
  
 ## Instalação e Execução
 
 Para instalação: 
  - clone esse repositório em um repositório local;
  - no terminal navegue até o repositório impulso-gov e rode comando npm install para instalar todas as dependências necessárias;
```bash
npm install
```

Para execução:

   - abra o terminal e navegue para o repositório impulso-gov\front-end;
   - execute o comando npm start;
   - aguarde até o projeto ser aberto e direcionado para um link no seu navegador padrão; 
   - normalmente o projeto é executado no localhost3000 "http://localhost:3000";
   - Pronto! O projeto está rodando localmente;
```bash
npm start
```  

## Implementação do componente

   - O componente de texto animado encontra-se na pasta components/AnimatedTyper;
   - Recebe dois parâmetros como propriedade: 
   - O primeiro é o wordsList que deve ser um array que contenha em sequência a frase a ser animada em string e um inteiro representando o tempo de apresentação da frase em milisegundos;
   - A lista deve sempre respeitar esse padrão: frase tipo string, número tipo inteiro; 
   - O segundo é o wrapper que identifica a tag HTML utilizada para renderizar as frases;
   - O componente foi desenvolvido utilizando uma biblioteca npm para react e adaptada para servir de forma genérica em qualquer momento do código: react-type-animation.
```bash
const wordsList = [
    "Frase um",
    3500,
    "Frase dois",
    3500,
    ];
```

```bash
<AnimatedTyper wordsList={wordsList} wrapper={"h2"}/>
```
## Bibliotecas

- [ReactJs](https://reactjs.org/)
- [react-type-animation](https://www.npmjs.com/package/react-type-animation)
- [styled-components](https://styled-components.com/)
- [axios](https://axios-http.com/ptbr/docs/intro)
- [react-icons](https://react-icons.github.io/react-icons/)
- [Vercel](https://vercel.com/)


 
