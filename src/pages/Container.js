import { Box } from '@chakra-ui/react'
import Filtros from '../components/Filtros'
import { Search } from '../components/Search'
import { Vagas } from './Vagas'

export const Container = () => {
  return (
    <Box>
      <Search />
      <Filtros />
      <Vagas />
    </Box>
  )
}
