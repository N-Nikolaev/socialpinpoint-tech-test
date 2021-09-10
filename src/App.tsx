import { SearchIcon } from '@chakra-ui/icons'
import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/input'
import { 
  Flex, 
  HStack, 
  Spacer, 
  Stack,
  Text } from '@chakra-ui/layout'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/number-input'
import { Select } from '@chakra-ui/select'
import React, { useEffect, useState } from 'react'
import InputCard from './components/InputCard/InputCard'
import { Button } from '@chakra-ui/react'

interface InputCardData {
  data: {
    cardNumber: number
    cardTitle: string
  }[]
}

interface DatesAndRoomCardData {
  data: {
    checkInDates: string[]
    checkOutDates: string[]
    nightsAmount: number
    roomsAmount: number
    selectedCheckInDate: string
    selectedCheckOutDate: string
    selectedNightsAmount: number
    selectedRoomsAmount: number
    tentativeReservation: boolean
  }
}

const App: React.FC = () => {
  
  const [inputCardData] = useState<InputCardData['data']>([
    {cardNumber: 1, cardTitle: 'Dates and Room'},
    {cardNumber: 2, cardTitle: 'Room Requirements'},
    {cardNumber: 3, cardTitle: 'Guest Details'},
  ])

  const [datesAndRoomCardData, setdatesAndRoomCardData] = useState<DatesAndRoomCardData['data']>({
    checkInDates: [
      'Tue 2 Mar 2021',
      'Wed 3 Mar 2021',
    ],
    checkOutDates: [
      'Wed 3 Mar 2021',
      'Thur 4 Mar 2021',
    ],
    nightsAmount: 7,
    roomsAmount: 30,
    selectedCheckInDate: 'Tue 2 Mar 2021',
    selectedCheckOutDate: 'Wed 5 Mar 2021',
    selectedNightsAmount: 1,
    selectedRoomsAmount: 0,
    tentativeReservation: false,
  })

//! Clean Up useEffect after testing
  useEffect(() => {
    console.log(datesAndRoomCardData.selectedNightsAmount)
  }, [datesAndRoomCardData.selectedNightsAmount])

//TODO Text and Layer Styles
//TODO onChange functions
  return (
    <Flex minH='100vh' background='gray.100' p={10}>
      <Stack spacing={6}>

        <InputCard number={inputCardData[0].cardNumber} title={inputCardData[0].cardTitle}>
          <HStack>
            <FormControl id='checkIn'>
              <FormLabel fontSize='sm'>
                Check-in
              </FormLabel>

              <Select 
                bg='gray.50' 
                fontSize='sm'
                onChange={ e => setdatesAndRoomCardData({
                  ...datesAndRoomCardData,
                  selectedCheckInDate: e.target.value
                })}>
                {datesAndRoomCardData
                  .checkInDates
                  .map((date, idx) => {
                    return (
                      <option key={idx} value={date}>{date}</option>
                    )
                  })}
              </Select>
            </FormControl>

            <FormControl id='checkOut'>
              <FormLabel fontSize='sm'>
                Check-out
              </FormLabel>

              <Select 
                bg='gray.50' 
                fontSize='sm'
                onChange={ e => setdatesAndRoomCardData({
                  ...datesAndRoomCardData,
                  selectedCheckOutDate: e.target.value
                })}>
                {datesAndRoomCardData
                  .checkOutDates
                  .map((date, idx) => {
                    return (
                      <option key={idx} value={date}>{date}</option>
                    )
                  })}
              </Select>
            </FormControl>

            <FormControl id='nights' w='fit-content'>
              <FormLabel fontSize='sm'>
                Nights
              </FormLabel>
              
              <NumberInput 
                defaultValue={1}
                min={0} 
                max={datesAndRoomCardData.nightsAmount}
                bg='gray.50' 
                fontSize='sm'
                onChange={ num => setdatesAndRoomCardData({
                  ...datesAndRoomCardData,
                  selectedNightsAmount: parseInt(num)
                })}>
                <NumberInputField/>
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl id='rooms' w='fit-content'>
              <FormLabel fontSize='sm'>
                Rooms
              </FormLabel>
              
              <NumberInput 
                isDisabled 
                defaultValue={0}
                min={0} 
                max={datesAndRoomCardData.roomsAmount}
                bg='gray.50' 
                fontSize='sm'
                onChange={ num => setdatesAndRoomCardData({
                  ...datesAndRoomCardData,
                  selectedRoomsAmount: parseInt(num)
                })}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </HStack>

          <Checkbox onChange={ _ => setdatesAndRoomCardData({
            ...datesAndRoomCardData,
            tentativeReservation: !datesAndRoomCardData.tentativeReservation
          })}>
            <Text fontSize='sm'>Tentative Reservation</Text>
          </Checkbox>
        </InputCard>

        <InputCard number={2} title='Room Requirements'>
          <Flex>
{/* //TODO State: Room */}
            <Text
              px={1}
              fontSize='xs'
              fontWeight='bold'
              color='gray.600'
              background='gray.200'
              rounded={2}>
              Room 1
            </Text>

            <Spacer />

            <Checkbox>
              <Text fontSize='sm'>Do not move</Text>
            </Checkbox>

          </Flex>

          <HStack>
            <FormControl id='adults' w='fit-content'>
              <FormLabel fontSize='sm'>
                Adults
              </FormLabel>
              
              <NumberInput 
                isDisabled 
                defaultValue={0}
                min={0} 
                bg='gray.50' 
                fontSize='sm'>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl id='children' w='fit-content'>
              <FormLabel fontSize='sm'>
                Children
              </FormLabel>
              
              <NumberInput 
                isDisabled 
                defaultValue={0}
                min={0} 
                bg='gray.50' 
                fontSize='sm'>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl id='infant' w='fit-content'>
              <FormLabel fontSize='sm'>
                Infant
              </FormLabel>
              
              <NumberInput 
                isDisabled 
                defaultValue={0}
                min={0} 
                bg='gray.50' 
                fontSize='sm'>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          
            <FormControl id='roomType'>
              <FormLabel fontSize='sm'>
                Room type
              </FormLabel>

{/* //TODO State: Room type */}
              <Select 
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl id='roomAllocation'>
              <FormLabel fontSize='sm'>
                Room allocation
              </FormLabel>

{/* //TODO State: Room allocation */}
              <Select 
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </HStack>
        </InputCard>

        <InputCard number={3} title='Guest Details'>
          <FormControl id='company'>
            <FormLabel fontSize='sm'>
              Company
            </FormLabel>

            <InputGroup 
              bg='gray.50' 
              fontSize='sm'>
              <Input />
              <InputRightElement>
                <Button variant='ghost'>
                  <SearchIcon color='gray.500'/>
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Flex>
            <Text
              px={1}
              fontSize='xs'
              fontWeight='bold'
              color='gray.600'
              background='gray.200'
              rounded={2}>
              Room 1
            </Text>
          </Flex>

          <HStack>
            <FormControl id='title' w='fit-content'>
              <FormLabel fontSize='sm'>
                Title
              </FormLabel>

              <Select 
                placeholder=''
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl id='firstAndLastName'>
              <FormLabel fontSize='sm'>
                First and last name
              </FormLabel>

              <InputGroup 
                bg='gray.50' 
                fontSize='sm'>
                <Input />
                <InputRightElement>
                  <Button variant='ghost'>
                    <SearchIcon color='gray.500'/>
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </HStack>
        </InputCard>

      </Stack>
    </Flex>
  )
}

export default App

