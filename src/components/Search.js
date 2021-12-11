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

export const Search = () => {
  return (
    <Flex
      flexDir="column"
      w="full"
      bg="blackAlpha.500"
      px="200px"
      py="60px"
      mb="120px"
      alignItems="center"
    >
      <Box pb="60px">
        <Heading
          fontWeight="extrabold"
          fontSize={54}
          letterSpacing="1px"
          color="green"
        >
          Busca sua vaga de arcodo com sua Stack.
        </Heading>
      </Box>
      <Box>
        <Stack spacing={4}>
          <InputGroup size="lg" w="600px">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FiSearch} color="green" />}
            />
            <Input
              focusBorderColor="lime"
              type="text"
              placeholder="Buscar..."
            />
          </InputGroup>
        </Stack>
      </Box>
    </Flex>
  )
}
