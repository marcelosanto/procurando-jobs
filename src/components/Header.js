import { Button, Flex, Heading, HStack, Icon, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

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
      <Button colorScheme="pink" ariant="solid" leftIcon={<FaGithub />}>
        Github
      </Button>
    </Flex>
  )
}
