import React from 'react'
import { VStack, Text } from '@chakra-ui/layout'
import { Box, Image } from '@chakra-ui/react'
import { getValidArray } from 'utils/common'
import RenterFAQItem from './components/RenterFAQItem'
import { IRenterFAQ, renterFAQs } from './constant'

const RenterFAQs = () => {
  return (
    <VStack
      width="full"
      maxWidth={{ base: 'full', md: '768px', lg: '800px' }}
      paddingX={{ base: 4, md: '93px', lg: '90' }}
      paddingTop={4}
      backgroundColor="orange.50"
      marginX="auto"
      alignItems="flex-start"
      minHeight={{ base: 639, md: 607, lg: 'auto' }}
      height="fit-content"
      zIndex="10"
      marginBottom={{ lg: 20 }}
    >
      <Text
        marginTop={{ base: 6, lg: 16 }}
        lineHeight={{ base: 7, md: 9, lg: 10 }}
        fontSize={{ base: 'lg', md: '3xl', lg: '4xl' }}
        fontWeight="700"
        color="gray.800"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        marginBottom={{ base: 4, lg: 8 }}
      >
        Renter FAQs
      </Text>
      <VStack spacing={4} width="stretch">
        {getValidArray(renterFAQs).map((data: IRenterFAQ) => (
          <RenterFAQItem data={data} key={data?.title} />
        ))}
      </VStack>
    </VStack>
  )
}

export default RenterFAQs
