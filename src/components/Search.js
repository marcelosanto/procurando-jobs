import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import '@fontsource/lato'
import { useEffect, useState } from 'react'

export const Search = () => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    console.log('Buscandoooo')
  }, [])

  return (
    <Flex
      flexDir='column'
      w='full'
      bg='blackAlpha.600'
      px='200px'
      py='60px'
      pb='100px'
      alignItems='center'
      borderBottom='1px'
      borderBottomColor='whiteAlpha.200'
    >
      <Box pb='60px'>
        <Heading
          fontWeight='extrabold'
          fontSize={54}
          letterSpacing='1px'
          color='green'
        >
          Ache sua vaga de arcodo com sua Stack.
        </Heading>
      </Box>
      <Box>
        <Stack spacing={4}>
          <InputGroup size='lg' w='600px'>
            <InputLeftElement
              pointerEvents='none'
              children={<Icon as={FiSearch} color='green' />}
            />
            <Input
              focusBorderColor='lime'
              type='text'
              placeholder='Buscar...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </Stack>
      </Box>
    </Flex>
  )
}
