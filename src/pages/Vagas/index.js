import { Flex, Wrap } from '@chakra-ui/react'

import { Card } from '../../components/Card'

import { useJobsStore } from '../../store'

export const Vagas = () => {
  const filter = useJobsStore((state) => state.filter)
  const jobs = useJobsStore((state) => state.jobs)

  return (
    <Flex py="60px" w="full" px="100px" bg="black">
      <Wrap pb="10px" display="flex" alignItems="baseline">
        {jobs
          .filter(({ title }) =>
            title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
          )
          .slice(0, 20)
          .map((item, index) => (
            <Card key={index} dados={item} />
          ))}
      </Wrap>
    </Flex>
  )
}
