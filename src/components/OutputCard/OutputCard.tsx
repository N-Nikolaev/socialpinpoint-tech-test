import { 
    Box, 
    Divider, 
    Heading, 
    Stack,
    Text } from '@chakra-ui/react'
import React from 'react'

const OutputCard: React.FC = () => {
    return (
        <Stack
            direction='column'
            spacing={5}
            h='max-content'
            maxW={[
                'full',
                null,
                null,
                '33%'
            ]}
            w='full'
            p={8} 
            bg='white' 
            rounded={4}
            shadow='sm'>

        <Box>
            <Text fontSize='xs' fontWeight='medium' color='gray.500'>
                Reservation Number
            </Text>
{/* //? Props: Reservation ID */}
            <Heading fontSize='xl'>
                952BE00B4990
            </Heading>
        </Box>

{/* //TODO Check in breadcrumb */}

            <Divider />

{/* //TODO Cost tally */}

            <Divider />

{/* //TODO Tax estimate */}

            <Divider />

{/* //TODO total */}

        </Stack>
    )
}

export default OutputCard
