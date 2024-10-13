import React from 'react'
import { VStack, Text, Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import MainLayout from 'components/Layout/MainLayout'

const ContactUs = () => {
  return (
    <MainLayout title="Homeroom | Contact us">
      <VStack
        width="full"
        paddingX={{ base: 4, md: '93px', lg: '300px' }}
        paddingTop={4}
        backgroundColor="orange.50"
        alignItems="flex-start"
        height="full"
        zIndex="10"
      >
        <VStack
          marginX="auto"
          alignItems="flex-start"
          width="full"
          maxWidth={{ base: 'full', md: '768px', lg: '800px' }}
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
            Contact Us
          </Text>

          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" marginBottom={6}>
            We’re here to help! Reach out to us for any inquiries, feedback, or support needs.
          </Text>

          <Box width="full" marginBottom="40px">
            <FormControl id="name" marginBottom={4}>
              <FormLabel>Your Name</FormLabel>
              <Input type="text" placeholder="Enter your name" />
            </FormControl>

            <FormControl id="email" marginBottom={4}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl id="message" marginBottom={6}>
              <FormLabel>Your Message</FormLabel>
              <Textarea placeholder="Type your message here..." />
            </FormControl>

            <Button colorScheme="orange" width="full">
              Send Message
            </Button>
          </Box>
        </VStack>
      </VStack>
    </MainLayout>
  )
}

export default ContactUs
