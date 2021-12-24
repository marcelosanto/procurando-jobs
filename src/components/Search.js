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

import { useJobsStore } from '../store'

export const Search = () => {
  const filter = useJobsStore((state) => state.filter)
  const setFilter = useJobsStore((state) => state.setFilter)

  return (
    <Flex
      flexDir="column"
      w="full"
      bg="black"
      px="200px"
      py="60px"
      pb="100px"
      alignItems="center"
    >
      <Box pb="60px">
        <Heading
          fontWeight="extrabold"
          fontSize={54}
          letterSpacing="1px"
          color="green"
        >
          Ache vaga de arcodo com sua Stack.
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
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </InputGroup>
        </Stack>
      </Box>
    </Flex>
  )
}
