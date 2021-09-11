import { Button } from '@chakra-ui/button'
import { Spacer, Stack } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import React from 'react'

const Taskbar: React.FC = () => {

    const toast = useToast()
    
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
                bg='gray.300'
                onClick={() => {
                    toast({
                        title: 'Successful Check in',
                        status: 'info',
                        position: 'top',
                        duration: 2000,
                        isClosable: true,
                    })
                }}>
                Check in
            </Button>

            <Button 
                fontSize='sm'
                color='gray.700'
                bg='gray.300'
                onClick={() => {
                    toast({
                        title: 'Successful Payment and Check in',
                        status: 'info',
                        position: 'top',
                        duration: 2000,
                        isClosable: true,
                    })
                }}>
                Make a Payment and Check in
            </Button>

            <Button 
                fontSize='sm'
                color='gray.700'
                bg='gray.300'
                onClick={() => {
                    toast({
                        title: 'Successful Payment',
                        status: 'info',
                        position: 'top',
                        duration: 2000,
                        isClosable: true,
                    })
                }}>
                Make a Payment
            </Button>

            <Spacer />

            <Button 
                fontSize='sm'
                color='gray.700'
                bg='gray.300'
                onClick={() => {
                    toast({
                        title: 'Confirmation cancelled',
                        status: 'warning',
                        position: 'top',
                        duration: 2000,
                        isClosable: true,
                    })
                }}>
                Cancel
            </Button>

            <Button 
                fontSize='sm'
                colorScheme='blue'
                onClick={() => {
                    toast({
                        title: 'Saved and Confirmed',
                        status: 'success',
                        position: 'top',
                        duration: 2000,
                        isClosable: true,
                    })
                }}>
                Save and Confirm
            </Button>
        </Stack>
    )
}

export default Taskbar
