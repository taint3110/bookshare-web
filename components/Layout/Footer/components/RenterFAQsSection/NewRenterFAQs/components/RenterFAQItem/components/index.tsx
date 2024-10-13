import React, { useState } from 'react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Collapse, VStack, Text, Button, Link } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { getValidArray } from 'utils/common'
import { IQuestion, renterFAQs } from '../../../constant'

interface IRenterFAQItemProps {
  data: IQuestion
}

const RenterFAQAnswer = (props: IRenterFAQItemProps) => {
  const { data } = props
  const { question, answer, ideas, secondAnswer, haveLink } = data
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleOnclick() {
    setIsOpen(!isOpen)
  }

  return (
    <VStack spacing="0" width="stretch" alignItems="stretch">
      <Button
        minHeight="40px"
        height="fit-content"
        iconSpacing="auto"
        rightIcon={
          isOpen ? (
            <MinusIcon position="absolute" right={0} bottom={4} width="10px" height="10px" />
          ) : (
            <AddIcon position="absolute" right={0} bottom={4} width="10px" height="10px" />
          )
        }
        onClick={handleOnclick}
        colorScheme="teal"
        variant=" solid"
        color="gray.700"
        paddingX={4}
        lineHeight={6}
        _focus={{
          border: 'none'
        }}
        transition="all 250ms"
        textAlign="left"
        whiteSpace="pre-line"
      >
        {question}
      </Button>
      <Collapse in={isOpen}>
        <VStack alignItems="flex-start" background="gray.50" paddingX={4} width="stretch">
          <Text lineHeight={6} fontWeight="500" fontSize="16px" color="gray.700">
            {haveLink && question === renterFAQs[1]?.questions[1]?.question && (
              <>
                Yes, each house sets its own rules. However, to keep our homes happy,{' '}
                <Link
                  _hover={{ color: 'teal.700' }}
                  color="teal.500"
                  href="https://livehomeroom.com/community-policies-rules-terms"
                  isExternal
                >
                  we have outlined our Homes Policies here.
                </Link>
              </>
            )}
            {haveLink && question === renterFAQs[1]?.questions[4]?.question && (
              <>
                All rooms are single occupancy only. For visits, please review our visitor’s Policy here:{' '}
                <Link
                  _hover={{ color: 'teal.700' }}
                  color="teal.500"
                  href="https://livehomeroom.com/community-policies-rules-terms"
                  isExternal
                >
                  Community Policies, Rules & Terms.
                </Link>
              </>
            )}
            {haveLink && question === renterFAQs[3]?.questions[3]?.question && (
              <>
                Your{' '}
                <Link
                  _hover={{ color: 'teal.700' }}
                  color="teal.500"
                  href="https://livehomeroom.com/community-policies-rules-terms"
                  isExternal
                >
                  Resident Portal
                </Link>{' '}
                is available through the pay section in the HomeRoom app. (Pay section)
              </>
            )}
            {!haveLink && answer}
            {!isEmpty(ideas) && (
              <VStack paddingX={3} paddingY={3} alignItems="flex-start" color="gray.700" spacing={3}>
                {getValidArray(ideas).map((idea: string, index: number) => {
                  if (question === renterFAQs[0]?.questions[0]?.question && index === 0) {
                    return (
                      <Text key={index} as="li">
                        Step 1: View our homes: Discover your perfect room{' '}
                        <Link
                          _hover={{ color: 'teal.700' }}
                          color="teal.500"
                          href="https://app.livehomeroom.com/"
                          isExternal
                        >
                          here
                        </Link>{' '}
                      </Text>
                    )
                  }
                  return (
                    <Text key={index} as="li">
                      {idea}
                    </Text>
                  )
                })}
              </VStack>
            )}
            {secondAnswer}
          </Text>
        </VStack>
      </Collapse>
    </VStack>
  )
}

export default RenterFAQAnswer
