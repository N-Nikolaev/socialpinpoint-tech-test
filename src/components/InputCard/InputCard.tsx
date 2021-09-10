import { 
    Heading, 
    Stack, 
    HStack, 
    Box } from '@chakra-ui/layout'
import React from 'react'

interface IProps {
    number: number
    title: string
    children?: React.ReactNode
}

const InputCard: React.FC<IProps> = ({
    number,
    title,
    children
}) => {
    return (
        <Stack 
            direction='column'
            spacing={4}
            h='max-content'
            p={8} 
            bg='white' 
            rounded={4}
            shadow='sm'>
            

            <HStack>
                <Box
                    w={5}
                    h={5}
                    fontSize='xs'
                    color='white'
                    textAlign='center'
                    bg='blue.500'
                    rounded='full'>
                    {number}</Box>

                <Heading
                    fontSize='lg'
                    color='blue.500'>
                    {title}</Heading>
            </HStack>
            

            {children}
            
        </Stack>
    )
}

export default InputCard
