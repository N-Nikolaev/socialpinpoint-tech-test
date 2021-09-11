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

type Currency = string


interface CostTallyData {
    bookingValue: Currency
    accountBalance: Currency
    departureBalance: Currency
}

interface CityTaxData {
    cityTaxValue: Currency
}

interface TotalCharge {
    totalValue: Currency
}

interface IProps extends 
    ReservationNumberData, 
    DatesAndRoomData, 
    CostTallyData, 
    CityTaxData,
    TotalCharge {}

const OutputCard: React.FC<IProps> = ({
    reservationNumber,
    checkInDate,
    checkOutDate,
    nightsStay,
    roomsStay,
    bookingValue,
    accountBalance,
    departureBalance,
    cityTaxValue,
    totalValue
}) => {
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
                    {reservationNumber}
                </Heading>
            </Box>

            <HStack align='center' justify='space-between'>
                <Box>
                    <Text fontSize='sm'>
                        Check in
                    </Text>
                    <Text fontSize='sm' fontWeight='bold' className='util--whitespace'>
                        {checkInDate || ' '}
                    </Text>
                </Box>

                <ChevronRightIcon />

                <Box>
                    <Text fontSize='sm'>
                        Check out
                    </Text>
                    <Text fontSize='sm' fontWeight='bold' className='util--whitespace'>
                        {checkOutDate || ' '}
                    </Text>
                </Box>

                <Box>
                    <Text fontSize='sm'>
                        Nights
                    </Text>
                    <Text fontSize='sm' fontWeight='bold' className='util--whitespace'>
                        {nightsStay || ' '}
                    </Text>
                </Box>

                <Box>
                    <Text fontSize='sm'>
                        Rooms
                    </Text>
                    <Text fontSize='sm' fontWeight='bold' className='util--whitespace'>
                        {roomsStay || ' '}
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
                    {bookingValue}
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
                    {accountBalance}
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
                    {departureBalance}
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
                    {cityTaxValue}
                </Text>
            </Flex>

            <Divider />

            <Flex direction='row'>
                <Text fontWeight='bold'>
                    Total Charge
                </Text>

                <Spacer />

                <Text fontWeight='bold'>
                    {totalValue}
                </Text>
            </Flex>

        </Stack>
    )
}

export default OutputCard
