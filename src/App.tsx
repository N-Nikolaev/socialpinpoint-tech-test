import { Flex } from '@chakra-ui/layout'
import React from 'react'
import InputCard from './components/InputCard/InputCard'

const App: React.FC = () => {
  return (
    <Flex h='100vh' background='gray.100' p={10}>
      <InputCard />
    </Flex>
  )
}

export default App

