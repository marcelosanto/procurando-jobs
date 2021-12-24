import { Badge, Box, Flex, Wrap, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export const Card = ({ dados }) => {
  return (
    <Flex
      flexDirection="column"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      justifyContent="space-between"
    >
      <Box p="6">
        <Box
          pb="3"
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          color="white"
        >
          {dados.title}
        </Box>

        <Wrap
          borderBottom="1px"
          borderBottomColor="whiteAlpha.400"
          pb="10px"
          display="flex"
          alignItems="baseline"
        >
          {dados.labels.map((item) => (
            <Badge mr={2} borderRadius="full" px="2" colorScheme="teal">
              {item.name.replace(
                /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                '',
              )}
            </Badge>
          ))}
        </Wrap>

        <Box
          pb="4"
          mt="4"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          color="white"
        >
          {dados.body.substring(0, 200) + '...'}
        </Box>
      </Box>
      <Flex flexDir="row" m={10} justifyContent="end">
        <Link
          href={dados.html_url}
          borderRadius="md"
          color="white"
          bg="green.900"
          textAlign="center"
          px={4}
          h={8}
          isExternal
        >
          Visualizar <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Flex>
  )
}
