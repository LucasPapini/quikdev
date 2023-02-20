import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --background:#f0f2f5;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
*::before,
*::after{
  box-sizing: inherit;
}

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
    }
    @media (max-width: 720px){
      font-size: 87.5%; //14px
    }
    box-sizing: border-box;
  }

  body, input, textarea, button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
`;
