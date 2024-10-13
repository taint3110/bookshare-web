import React from 'react'
import { Box as CkBox, VStack } from '@chakra-ui/react'
import NewRenterFAQs from './NewRenterFAQs'

const RenterFAQsSection = () => {
  return (
    <CkBox id="faq" background="orange.50">
      <VStack position="relative" width="full">
        <NewRenterFAQs />
      </VStack>
    </CkBox>
  )
}

export default RenterFAQsSection
