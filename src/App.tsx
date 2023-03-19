import { ThemeProvider } from 'styled-components'
// import { Header } from './components/Header'
// import { About } from './components/About'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {/* <About /> */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
