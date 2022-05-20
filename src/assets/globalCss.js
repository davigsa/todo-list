import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  header {
    padding: 8px;
    background: #00e88f;
    text-align: center;
    font-weight: bolder;
  }
`