import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* @font-face {
    font-family: '';
    src: url('/')
  } */

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    --white: #ffffff;
    --black: #1e2a32;
    --brandColorPrimary: #1B31A8;
    --brandColorSecondary: #0079FF;
    --blueGray10: #F4F8FA;
    --blueGray50: #E9EEF2;
    --blueGray400: #708797;
    --defaultTransition: 0.2s ease-in-out;
  }

  body,
  #root {
    min-height: 100%;
  }

  body {
    /* font-family: ; */
      font-size: 2rem;
      color: var(--black);
      background-color: var(--blueGray10);
  }

  a{
    text-decoration: none;
  }

  /* button{
    font-family: ;
  } */
`;

export default GlobalStyles;
