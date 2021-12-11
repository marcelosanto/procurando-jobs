import { Badge, Box, Flex, Wrap } from '@chakra-ui/react'

export const Card = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: '[REMOTO] Tech Lead / Dev Frontend ReactJs Senior @Softo',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
    body: 'Nós estamos com vagas para atuar como consultor em React e/ou React Native. São oportunidades de contratação CLT pela própria Avanade e atuação pondendo ser remota, híbrida ou presencial em uma de nossas sedes.\r\n\r\nA equipe de Software Engineering da Avanade é responsável por entregar a maioria dos projetos de desenvolvimento aos diversos clientes. Como parte desse time, você será capaz de atuar diretamente no cliente, entender e ter experiência de trabalhar com diversos projetos e tecnologias, sendo capaz de se aperfeiçoar cada vez mais.\r\n\r\nNesse cargo, você contribuirá...\r\nEm todas as diferentes fases do projeto, desde a definição de requisitos técnicos, operacionais e do usuário até o planejamento, controle de qualidade e testes. Será responsável por criar e desenvolver aplicações que dê a seus usuários uma experiência nativa com alta performance e opções de solução que correspondam às necessidades dos seus clientes. ',
    labels: [
      {
        id: 557942051,
        node_id: 'MDU6TGFiZWw1NTc5NDIwNTE=',
        url: 'https://api.github.com/repos/react-brasil/vagas/labels/%E2%9A%96%EF%B8%8F%20CLT',
        name: '⚖️ CLT',
        color: '81ea82',
        default: false,
        description: '',
      },
      {
        id: 557942052,
        node_id: 'MDU6TGFiZWw1NTc5NDIwNTI=',
        url: 'https://api.github.com/repos/react-brasil/vagas/labels/%F0%9F%8F%A2%20Remoto',
        name: '🏢 Remoto',
        color: 'c5def5',
        default: false,
        description: '',
      },
      {
        id: 557942055,
        node_id: 'MDU6TGFiZWw1NTc5NDIwNTU=',
        url: 'https://api.github.com/repos/react-brasil/vagas/labels/%F0%9F%91%A8%20Pleno',
        name: '👨 Pleno',
        color: 'c94f2a',
        default: false,
        description: '',
      },
      {
        id: 557942056,
        node_id: 'MDU6TGFiZWw1NTc5NDIwNTY=',
        url: 'https://api.github.com/repos/react-brasil/vagas/labels/%F0%9F%8F%A2%20Presencial',
        name: '🏢 Presencial',
        color: 'c5def5',
        default: false,
        description: '',
      },
      {
        id: 557942057,
        node_id: 'MDU6TGFiZWw1NTc5NDIwNTc=',
        url: 'https://api.github.com/repos/react-brasil/vagas/labels/%F0%9F%91%B4%20Senior',
        name: '👴 Senior',
        color: 'c94f2a',
        default: false,
        description: '',
      },
      {
        id: 1228819640,
        node_id: 'MDU6TGFiZWwxMjI4ODE5NjQw',
        url: 'https://api.github.com/repos/react-brasil/vagas/labels/%F0%9F%92%B0%2010k-15k',
        name: '💰 10k-15k',
        color: '2E7D32',
        default: false,
        description: '',
      },
      {
        id: 1228819894,
        node_id: 'MDU6TGFiZWwxMjI4ODE5ODk0',
        url: 'https://api.github.com/repos/react-brasil/vagas/labels/%F0%9F%92%B0%2015k+',
        name: '💰 15k+',
        color: '2E7D32',
        default: false,
        description: '',
      },
    ],
  }

  return (
    <Flex
      flexDirection='column'
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      <Box p='6'>
        <Box pb='3' mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
          {property.title}
        </Box>

        <Wrap
          borderBottom='1px'
          borderBottomColor='whiteAlpha.400'
          pb='10px'
          display='flex'
          alignItems='baseline'
        >
          {property.labels.map((item) => (
            <Badge mr={2} borderRadius='full' px='2' colorScheme='teal'>
              {item.name.replace(
                /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                ''
              )}
            </Badge>
          ))}
        </Wrap>

        <Box pb='4' mt='4' fontWeight='semibold' as='h4' lineHeight='tight'>
          {property.body.substring(0, 200) + '...'}
        </Box>

        <Box
          as='button'
          borderRadius='md'
          bg='green'
          color='white'
          px={4}
          h={8}
        >
          Ver vaga
        </Box>
      </Box>
    </Flex>
  )
}
