import { Button } from '@chakra-ui/button'
import { Spacer, Stack } from '@chakra-ui/layout'
import React from 'react'

const Taskbar: React.FC = () => {
    return (
        <Stack 
            direction='row'
            p={1}
            bg='gray.100'
            borderTop='2px' 
            borderTopColor='gray.300'>

            <Button 
                fontSize='sm'
                color='gray.700'
                bg='gray.300'>
                Check in
            </Button>

            <Button 
                fontSize='sm'
                color='gray.700'
                bg='gray.300'>
                Make a Payment and Check in
            </Button>

            <Button 
                fontSize='sm'
                color='gray.700'
                bg='gray.300'>
                Make a Payment
            </Button>

            <Spacer />

            <Button 
                fontSize='sm'
                color='gray.700'
                bg='gray.300'>
                Cancel
            </Button>

            <Button 
                fontSize='sm'
                colorScheme='blue'>
                Save and Confirm
            </Button>
        </Stack>
    )
}

export default Taskbar
