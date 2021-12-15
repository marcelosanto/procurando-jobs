import { Flex, Wrap } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'

import axios from 'axios'

export const Vagas = () => {
  const [data, setData] = useState([])

  const fetchVagasData = async () => {
    const res = await axios.get(
      'https://api.github.com/repos/react-brasil/vagas/issues?page=1&per_page=100'
    )
    //console.log(res.data)
    setData(res.data)
  }

  useEffect(() => {
    fetchVagasData()
  }, [])

  return (
    <Flex py='60px' w='full' px='100px' bg='blackAlpha.600'>
      <Wrap pb='10px' display='flex' alignItems='baseline'>
        {data.map((item) => (
          <Card dados={item} />
        ))}
      </Wrap>
    </Flex>
  )
}
