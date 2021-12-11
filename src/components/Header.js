import { Flex, Heading, HStack, Icon, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

export const Header = () => {
  return (
    <Flex
      px="200px"
      py="20px"
      width="full"
      bg="blackAlpha.600"
      alignItems="flex-end"
      justifyContent="space-between"
      borderBottomColor="whiteAlpha.200"
      borderBottomWidth="1px"
    >
      <Flex alignItems="flex-end">
        <Heading
          color="whiteAlpha.900"
          mr="60px"
          fontSize={20}
          letterSpacing={1.5}
        >
          Logo
        </Heading>
        <HStack color="white" spacing="40px">
          <Link>Home</Link>
          <Link>Servicos</Link>
          <Link>Sobre</Link>
        </HStack>
      </Flex>
      <Link color="whiteAlpha.800">
        Github
        <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
      </Link>
    </Flex>
  )
}
