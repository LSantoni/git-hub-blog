import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaulTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaulTheme}>
      
    </ThemeProvider>
  )
}
