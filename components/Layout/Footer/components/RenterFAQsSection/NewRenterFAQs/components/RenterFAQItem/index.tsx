import React, { useState } from 'react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Collapse, VStack, Button } from '@chakra-ui/react'
import { getValidArray } from 'utils/common'
import { IQuestion, IRenterFAQ } from '../../constant'
import NewRenterFAQItem from './components'

interface IRenterFAQItemProps {
  data: IRenterFAQ
}

const RenterFAQItem = (props: IRenterFAQItemProps) => {
  const { data } = props
  const { title, questions } = data
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleOnclick() {
    setIsOpen(!isOpen)
  }

  return (
    <VStack spacing="0" width="stretch" alignItems="stretch">
      <Button
        minHeight="56px"
        height="fit-content"
        iconSpacing="auto"
        rightIcon={isOpen ? <MinusIcon width="10px" height="10px" /> : <AddIcon width="10px" height="10px" />}
        onClick={handleOnclick}
        colorScheme="teal"
        variant=" solid"
        background={isOpen ? 'teal.500' : 'white'}
        borderRadius={isOpen ? '6px 6px 0 0' : '6px'}
        color={isOpen ? 'gray.50' : 'gray.700'}
        paddingY={4}
        paddingX={6}
        fontSize={18}
        lineHeight={6}
        transition="all 250ms"
        _hover={{ bg: 'teal.600', color: 'white', transition: 'all 250ms' }}
        _focus={{
          boxShadow: 'unset'
        }}
        textAlign="left"
        whiteSpace="pre-line"
      >
        {title}
      </Button>
      <Collapse in={isOpen}>
        <VStack
          border="solid 1px"
          borderColor="teal.500"
          background="gray.50"
          borderRadius="0px 0px 6px 6px"
          padding="23px"
          width="stretch"
        >
          {getValidArray(questions).map((question: IQuestion) => (
            <NewRenterFAQItem data={question} key={question?.question} />
          ))}
        </VStack>
      </Collapse>
    </VStack>
  )
}

export default RenterFAQItem
