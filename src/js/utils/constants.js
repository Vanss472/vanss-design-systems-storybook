import { createGlobalStyle } from 'styled-components';

export const theme = {
  font: {
    roboto: 'Roboto, sans-serif',
  },
  colors: {
    text: 'black',
    background: 'white',
    primary: 'lightgrey',
  },
  transition: {
    primary: 'all .3s ease-in-out',
  },
  border: {
    borderColor: 'black',
    borderRadius: '3px',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --focus-gold: #ffbf47;
    --hover-rgba: rgba(255, 255, 255, 0.5);
  }

  html {
    font-size: 100%;
    font-family: ${theme.font.roboto};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.background};
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }
`;
