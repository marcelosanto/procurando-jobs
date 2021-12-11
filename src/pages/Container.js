import { Box } from '@chakra-ui/react'
import { Search } from '../components/Search'
import { Vagas } from './sections/Vagas'

export const Container = () => {
  return (
    <Box>
      <Search />
      <Vagas />
    </Box>
  )
}
