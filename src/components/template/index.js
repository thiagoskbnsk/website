import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../../assets/styles/globalStyle"
import defaultTheme from "../../assets/styles/themes/default"

const Template = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Template
