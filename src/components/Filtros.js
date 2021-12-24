import {
  Box,
  Text,
  VStack,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  HStack,
  Flex,
} from '@chakra-ui/react'
import { useState } from 'react'

import { useJobsStore } from '../store'

export default function Filtros() {
  const jobs = useJobsStore((state) => state.jobs)
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <Box flexDir="column" w="full" bg="black" pl="100px" pr="100px" pb="50px">
      <VStack flexDir="row" alignItems="center">
        <Text
          textAlign="center"
          fontWeight="extrabold"
          fontSize={28}
          color="white"
          mr={2}
        >
          Numero de vagas em aberto encontradas:
        </Text>

        <Text
          as="i"
          textAlign="center"
          color="green"
          fontWeight="bold"
          fontSize="20px"
        >
          {jobs.length === 1 ? '1 vaga' : jobs.length + ' vagas'}
        </Text>
      </VStack>
      <HStack justifyContent="space-between" pt={10}>
        <Select maxWidth="400px" size="lg" placeholder="Nível">
          <option value="option1">Júnior</option>
          <option value="option2">Pleno</option>
          <option value="option3">Sênior</option>
        </Select>

        <Select maxWidth="400px" size="lg" placeholder="Formato">
          <option value="option1">PJ</option>
          <option value="option2">CLT</option>
        </Select>

        <Select maxWidth="400px" size="lg" placeholder="Local">
          <option value="option1">Remoto</option>
          <option value="option2">Flexível</option>
          <option value="option2">Hibrido</option>
        </Select>
      </HStack>
    </Box>
  )
}
