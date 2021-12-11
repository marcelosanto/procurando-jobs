import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { Header } from './components/Header'
import { Container } from './pages/Container'

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container />
    </ChakraProvider>
  )
}

export default App
