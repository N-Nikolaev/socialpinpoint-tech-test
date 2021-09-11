import { Divider, Stack } from '@chakra-ui/react'
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

{/* //TODO Reservation Number */}

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
