
import './App.css'
import { Container, ThemeProvider } from '@mui/material'
import Header from './components/header/Header'
import { theme } from './theme'
import Widget1 from './components/widget1/Widget1'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>

     <Header/>
     <Container maxWidth="xl">
      <Widget1/>
     </Container>
    </ThemeProvider>
    </>
  )
}

export default App
