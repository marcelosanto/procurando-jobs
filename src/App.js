import { ChakraProvider } from '@chakra-ui/react'

import { Header } from './components/Header'
import { Container } from './pages/Container'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Container />
    </ChakraProvider>
  )
}

export default App
