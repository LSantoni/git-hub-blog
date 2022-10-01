import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { ListRepositories } from './pages/ListRepositories'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Header />
      <ListRepositories />
    </ThemeProvider>
  )
}
