import { createGlobalStyle } from 'styled-components';
import RubikSemiBold from 'assets/fonts/rubik-v14-latin-500.woff2';
import WorkSansRegular from 'assets/fonts/work-sans-v13-latin-regular.woff2';
import WorkSansSemibold from 'assets/fonts/work-sans-v13-latin-600.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Rubik-Semibold'),
    url(${RubikSemiBold}) format('woff2');
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Work-Sans-Regular'),
    url(${WorkSansRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Work-Sans-SemiBold'),
          url(${WorkSansSemibold}) format('woff2');
    }

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
    --brandColorPrimary: #1B31A8;
    --brandColorSecondary: #0079FF;
    --blueGray10: #F4F8FA;
    --blueGray50: #E9EEF2;
    --blueGray100: #CBD5DC;
    --blueGray300: #8A9CA9;
    --blueGray400: #708797;
    --blueGray600: #4D6475;
    --blueGray900: #1E2A32;
    --defaultTransition: 0.2s ease-in-out;
  }

  body {
    font-size: 2rem;
    color: var(--blueGray900);
    background-color: var(--blueGray10);
  }

  body, button, input{
    font-family: 'Work Sans', -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    font-weight: 400;
  }

  body,
  #root {
    min-height: 100%;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyles;
