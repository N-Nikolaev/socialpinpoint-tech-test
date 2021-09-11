import { SearchIcon } from '@chakra-ui/icons'
import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/input'
import { 
  Box,
  Flex, 
  HStack, 
  Spacer, 
  Stack,
  Text } from '@chakra-ui/layout'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/number-input'
import { Select } from '@chakra-ui/select'
import React, { useState } from 'react'
import InputCard from './components/InputCard/InputCard'
import Taskbar from './components/Taskbar/Taskbar'


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

interface RoomRequirementsCardData {
  data: {
    doNotMove: boolean
    adultsAmount: number
    childrenAmount: number
    infantAmount: number
    roomType: string[]
    roomAllocation: number[]
    selectedAdultsAmount: number
    selectedChildrenAmount: number
    selectedInfantsAmount: number
    selectedRoomType: string
    selectedRoomAllocation: number    
  }
}

interface GuestDetailsCardData {
  data: {
    companyResult: string
    firstAndLastName: string
    titleList: string[]
    selectedTitle: string
  }
}

const App: React.FC = () => {
  
  const [inputCardData] = useState<InputCardData['data']>([
    {cardNumber: 1, cardTitle: 'Dates and Room'},
    {cardNumber: 2, cardTitle: 'Room Requirements'},
    {cardNumber: 3, cardTitle: 'Guest Details'},
  ])

  const [datesAndRoomCardData, setDatesAndRoomCardData] = useState<DatesAndRoomCardData['data']>({
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

  const [roomRequirementsCardData, setRoomRequirementsCardData] = useState<RoomRequirementsCardData['data']>({
    doNotMove: false,
    adultsAmount: 6,
    childrenAmount: 6,
    infantAmount: 6,
    roomType: [
      'King Twin Room',
    ],
    roomAllocation: [
      12,
      13, 
      14,
    ],
    selectedAdultsAmount: 0,
    selectedChildrenAmount: 0,
    selectedInfantsAmount: 0,
    selectedRoomType: 'King Twin Room',
    selectedRoomAllocation: 12,  
  })

  const [guestDetailsCardData, setGuestDetailsCardData] = useState<GuestDetailsCardData['data']>({
    companyResult: '',
    firstAndLastName: '',
    titleList: [
      '',
      'Mr',
      'Mrs',
      'Ms',
    ],
    selectedTitle: '',
  })

  return (
    <Flex direction='column' minH='100vh' bg='gray.100'>
      <Flex p={10}>
        <Stack spacing={6}>

          <InputCard number={inputCardData[0].cardNumber} title={inputCardData[0].cardTitle}>
            <HStack>
              <FormControl id='checkIn'>
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Check-in
                </FormLabel>

                <Select 
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ e => setDatesAndRoomCardData({
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
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Check-out
                </FormLabel>

                <Select 
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ e => setDatesAndRoomCardData({
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
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Nights
                </FormLabel>
                
                <NumberInput 
                  defaultValue={1}
                  min={0} 
                  max={datesAndRoomCardData.nightsAmount}
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ num => setDatesAndRoomCardData({
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
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Rooms
                </FormLabel>
                
                <NumberInput 
                  isDisabled 
                  defaultValue={0}
                  min={0} 
                  max={datesAndRoomCardData.roomsAmount}
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ num => setDatesAndRoomCardData({
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

            <Checkbox onChange={ _ => setDatesAndRoomCardData({
              ...datesAndRoomCardData,
              tentativeReservation: !datesAndRoomCardData.tentativeReservation
            })}>
              <Text fontSize='sm'>Tentative Reservation</Text>
            </Checkbox>
          </InputCard>

          <InputCard number={inputCardData[1].cardNumber} title={inputCardData[1].cardTitle}>
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

              <Spacer />

              <Checkbox onChange={ _ => setRoomRequirementsCardData({
                ...roomRequirementsCardData,
                doNotMove: !roomRequirementsCardData.doNotMove
              })}>
                <Text fontSize='sm'>Do not move</Text>
              </Checkbox>

            </Flex>

            <HStack>
              <FormControl id='adults' w='fit-content'>
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Adults
                </FormLabel>
                
                <NumberInput 
                  isDisabled 
                  defaultValue={0}
                  min={0}
                  max={roomRequirementsCardData.adultsAmount} 
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ num => setRoomRequirementsCardData({
                    ...roomRequirementsCardData,
                    selectedAdultsAmount: parseInt(num)
                  })}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl id='children' w='fit-content'>
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Children
                </FormLabel>
                
                <NumberInput 
                  isDisabled 
                  defaultValue={0}
                  min={0} 
                  max={roomRequirementsCardData.childrenAmount}
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ num => setRoomRequirementsCardData({
                    ...roomRequirementsCardData,
                    selectedChildrenAmount: parseInt(num)
                  })}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl id='infant' w='fit-content'>
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Infant
                </FormLabel>
                
                <NumberInput 
                  isDisabled 
                  defaultValue={0}
                  min={0} 
                  max={roomRequirementsCardData.infantAmount}
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ num => setRoomRequirementsCardData({
                    ...roomRequirementsCardData,
                    selectedInfantsAmount: parseInt(num)
                  })}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            
              <FormControl id='roomType'>
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Room type
                </FormLabel>

                <Select 
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ e => setRoomRequirementsCardData({
                    ...roomRequirementsCardData,
                    selectedRoomType: e.target.value
                  })}>
                  {roomRequirementsCardData
                    .roomType
                    .map((type, idx) => {
                      return (
                        <option key={idx} value={type}>{type}</option>
                      )
                    })}
                </Select>
              </FormControl>

              <FormControl id='roomAllocation'>
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Room allocation
                </FormLabel>

                <Select 
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={ e => setRoomRequirementsCardData({
                    ...roomRequirementsCardData,
                    selectedRoomAllocation: parseInt(e.target.value)
                  })}>
                  {roomRequirementsCardData
                    .roomAllocation
                    .map((allocation, idx) => {
                      return (
                        <option key={idx} value={allocation}>{allocation}</option>
                      )
                    })}
                </Select>
              </FormControl>
            </HStack>
          </InputCard>

          <InputCard number={inputCardData[2].cardNumber} title={inputCardData[2].cardTitle}>
            <FormControl id='company'>
              <FormLabel 
                color='gray.700'
                fontSize='sm'>
                Company
              </FormLabel>

              <InputGroup 
                bg='gray.50' 
                fontSize='sm'>
                <Input 
                  onChange={e => setGuestDetailsCardData({
                    ...guestDetailsCardData,
                    companyResult: e.target.value
                  })}/>
                <InputRightElement>
                  <SearchIcon color='gray.500'/>
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
              <FormControl id='title' minW='100px' w='fit-content'>
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  Title
                </FormLabel>

                <Select
                  bg='gray.50' 
                  fontSize='sm'
                  onChange={e => setGuestDetailsCardData({
                    ...guestDetailsCardData,
                    selectedTitle: e.target.value
                  })}>
                  {guestDetailsCardData
                  .titleList
                  .map((title, idx) => {
                    return (
                      <option key={idx} value={title}>{title}</option>
                    )
                  })}
                </Select>
              </FormControl>

              <FormControl id='firstAndLastName'>
                <FormLabel 
                  color='gray.700'
                  fontSize='sm'>
                  First and last name
                </FormLabel>

                <InputGroup 
                  bg='gray.50' 
                  fontSize='sm'>
                  <Input 
                    onChange={e => setGuestDetailsCardData({
                      ...guestDetailsCardData,
                      firstAndLastName: e.target.value
                    })}/>
                  <InputRightElement>
                    <SearchIcon color='gray.500'/>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </HStack>
          </InputCard>

        </Stack>
      
      </Flex>

      <Spacer />

      <Taskbar />
    </Flex>
  )
}

export default App

