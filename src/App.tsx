import { Checkbox } from '@chakra-ui/checkbox'
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
            <Stack>
              <Text fontSize='sm'>
                Check-in
              </Text>

{/* //TODO State: Check-in dates */}
              <Select 
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Stack>

            <Stack>
              <Text fontSize='sm'>
                Check-out
              </Text>

{/* //TODO State: Check-out dates */}
              <Select 
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Stack>

            <Stack>
              <Text fontSize='sm'>
                Nights
              </Text>
              
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
            </Stack>

            <Stack>
              <Text fontSize='sm'>
                Rooms
              </Text>
              
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
            </Stack>
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
            <Stack>
              <Text fontSize='sm'>
                Adults
              </Text>
              
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
            </Stack>

            <Stack>
              <Text fontSize='sm'>
                Children
              </Text>
              
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
            </Stack>

            <Stack>
              <Text fontSize='sm'>
                Infant
              </Text>
              
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
            </Stack>
          
            <Stack>
              <Text fontSize='sm'>
                Room type
              </Text>

{/* //TODO State: Room type */}
              <Select 
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Stack>

            <Stack>
              <Text fontSize='sm'>
                Room allocation
              </Text>

{/* //TODO State: Room allocation */}
              <Select 
                bg='gray.50' 
                fontSize='sm'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Stack>
          </HStack>
        </InputCard>

        <InputCard number={3} title='Guest Details'>Text</InputCard>

      </Stack>
    </Flex>
  )
}

export default App

