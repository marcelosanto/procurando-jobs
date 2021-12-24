import { Badge, Box, Flex, Wrap, Link } from '@chakra-ui/react'

export const Card = ({ dados }) => {
  return (
    <Flex
      flexDirection='column'
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      <Box p='6'>
        <Box
          pb='3'
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          color='white'
        >
          {dados.title}
        </Box>

        <Wrap
          borderBottom='1px'
          borderBottomColor='whiteAlpha.400'
          pb='10px'
          display='flex'
          alignItems='baseline'
        >
          {dados.labels.map((item) => (
            <Badge mr={2} borderRadius='full' px='2' colorScheme='teal'>
              {item.name.replace(
                /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                ''
              )}
            </Badge>
          ))}
        </Wrap>

        <Box
          pb='4'
          mt='4'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          color='white'
        >
          {dados.body.substring(0, 200) + '...'}
        </Box>
        <Flex justifyContent='flex-end'>
          <Link
            href={dados.html_url}
            borderRadius='md'
            bg='green'
            color='white'
            px={4}
            h={8}
          >
            Ver vaga
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
}
