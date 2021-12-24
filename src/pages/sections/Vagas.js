import { Flex, Wrap } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'

import { useJobsStore } from '../../store'

export const Vagas = () => {
  //const [data, setData] = useState([])

  const jobs = useJobsStore((state) => state.jobs)

  useEffect(() => {
    //fetchVagasData()
  }, [])

  return (
    <Flex py="60px" w="full" px="100px" bg="black">
      <Wrap pb="10px" display="flex" alignItems="baseline">
        {jobs.map((item) => (
          <Card dados={item} />
        ))}
      </Wrap>
    </Flex>
  )
}
