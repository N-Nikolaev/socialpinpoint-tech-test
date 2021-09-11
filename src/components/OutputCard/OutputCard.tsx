import { ChevronRightIcon } from '@chakra-ui/icons'
import { 
    Box, 
    Divider, 
    Flex, 
    Heading, 
    HStack, 
    Spacer, 
    Stack,
    Text } from '@chakra-ui/react'
import React from 'react'
import '../../assets/css/util.css'

interface ReservationNumberData {
    reservationNumber: string
}

interface DatesAndRoomData {
    checkInDate: string
    checkOutDate: string
    nightsStay: number
    roomsStay: number
}

type Currency = number


interface CostTallyData {
    bookingValue: Currency
    accountBalance: Currency
    departureBalance: Currency
}

interface CityTaxData {
    cityTaxPercent: number
}

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
            p={6} 
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

            <HStack align='center' justify='space-between'>
                <Box>
                    <Text fontSize='sm'>
                        Check in
                    </Text>
                    <Text fontSize='sm' fontWeight='bold' className='util--whitespace'>
                        Thu, 11 Mar
                    </Text>
                </Box>

                <ChevronRightIcon />

                <Box>
                    <Text fontSize='sm'>
                        Check out
                    </Text>
                    <Text fontSize='sm' fontWeight='bold' className='util--whitespace'>
                        Fri, 12 Mar
                    </Text>
                </Box>

                <Box>
                    <Text fontSize='sm'>
                        Nights
                    </Text>
                    <Text fontSize='sm' fontWeight='bold' className='util--whitespace'>
                        1
                    </Text>
                </Box>

                <Box>
                    <Text fontSize='sm'>
                        Rooms
                    </Text>
                    <Text fontSize='sm' fontWeight='bold' className='util--whitespace'>
                        {' '}
                    </Text>
                </Box>
            </HStack>

            <Divider />

{/* //TODO State (Mappable): Cost Tally Items */}
            <Flex direction='row'>
                <Text fontSize='sm'>
                    Booking Value
                </Text>

                <Spacer />

                <Text 
                    fontSize='sm' 
                    fontWeight='medium' 
                    color='gray.400'>
                    $0.00
                </Text>
            </Flex>

            <Flex direction='row'>
                <Text fontSize='sm'>
                    Account Balance
                </Text>

                <Spacer />

                <Text 
                    fontSize='sm' 
                    fontWeight='medium' 
                    color='gray.400'>
                    $0.00
                </Text>
            </Flex>

            <Flex direction='row'>
                <Text fontSize='sm'>
                    Departure Balance
                </Text>

                <Spacer />

                <Text 
                    fontSize='sm' 
                    fontWeight='medium' 
                    color='gray.400'>
                    $0.00
                </Text>
            </Flex>

            <Divider />

            <Flex direction='row'>
                <Text fontSize='sm'>
                    Estimate City Tax (US)
                </Text>

                <Spacer />

                <Text 
                    fontSize='sm' 
                    fontWeight='medium' 
                    color='gray.400'>
                    $0.00
                </Text>
            </Flex>

            <Divider />

            <Flex direction='row'>
                <Text fontWeight='bold'>
                    Total Charge
                </Text>

                <Spacer />

                <Text fontWeight='bold'>
                    $0.00
                </Text>
            </Flex>

        </Stack>
    )
}

export default OutputCard
