import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { 
  Box,
  Flex, 
  HStack, 
  Spacer, 
  Stack,
  Text } from '@chakra-ui/layout'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/number-input'
import { Select } from '@chakra-ui/select'
import React from 'react'
import InputCard from './components/InputCard/InputCard'

const App: React.FC = () => {

//TODO Text and Layer Styles
  return (
    <Flex h='100vh' background='gray.100' p={10}>
      <Stack>

        <InputCard number={1} title='Dates and Room'>
          <HStack>
            <FormControl id='check-in'>
              <FormLabel fontSize='sm'>
                Check-in
              </FormLabel>

{/* //TODO State: Check-in dates */}
              <Select 
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl id='check-out'>
              <FormLabel fontSize='sm'>
                Check-out
              </FormLabel>

{/* //TODO State: Check-out dates */}
              <Select 
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl id='Nights' w='fit-content'>
              <FormLabel fontSize='sm'>
                Nights
              </FormLabel>
              
              <NumberInput 
                defaultValue={1}
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

            <FormControl id='Rooms' w='fit-content'>
              <FormLabel fontSize='sm'>
                Rooms
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
          </HStack>

          <Checkbox>
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
            <FormControl id='Adults' w='fit-content'>
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
          
            <FormControl id='room-type'>
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

            <FormControl id='room-allocation'>
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

        </InputCard>

      </Stack>
    </Flex>
  )
}

export default App

