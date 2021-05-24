import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #101112;
    --text-color: #FFFFFF;
    --secondary-color: #28EBCF;
    --ok-color: #008000;
    --alert-color: #ffa500;
    --danger-color: #ff0000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    max-width: 1120px;
    margin: 0 auto;
    background: var(--background);
    -webkit-font-smoothing: antialiased
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
`
