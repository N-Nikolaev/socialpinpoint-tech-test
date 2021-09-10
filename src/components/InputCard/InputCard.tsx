import { Heading, VStack, HStack, Box } from '@chakra-ui/layout'
import React from 'react'

const InputCard: React.FC = () => {
    return (
        <VStack 
            h='max-content'
            p={8} 
            background='white' 
            rounded={4} >
            

            <HStack>
//TODO Prop: number
                <Box
                    w='5'
                    h='5'
                    fontSize='xs'
                    color='white'
                    textAlign='center'
                    background='blue.500'
                    rounded='full'>
                    1               
                    </Box>

//TODO Prop: title
                <Heading
                    fontSize='lg'
                    color='blue.500'>
                    Dates and Room  
                </Heading>
            </HStack>
            

            <HStack>
//TODO Prop: children
                
            </HStack>
            
        </VStack>
    )
}

export default InputCard
