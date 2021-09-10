import { Flex, Stack } from '@chakra-ui/layout'
import React from 'react'
import InputCard from './components/InputCard/InputCard'

const App: React.FC = () => {
  return (
    <Flex h='100vh' background='gray.100' p={10}>
      <Stack>
        <InputCard number={1} title='Dates and Room'>Text</InputCard>
        <InputCard number={2} title='Room Requirements'>Text</InputCard>
        <InputCard number={3} title='Guest Details'>Text</InputCard>
      </Stack>
    </Flex>
  )
}

export default App

