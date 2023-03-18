import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { About } from './components/About'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <About />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
