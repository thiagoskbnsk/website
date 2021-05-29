import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    overflow-x: hidden;
  }
  
  body {
    font-family: ${props => props.theme.font.primary};
    font-size: ${props => props.theme.font.size}px;
    font-display: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.colors.black};
  }
  
  img {
    max-width: 100%;
  }
`

export default GlobalStyle
