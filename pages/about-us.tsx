import React from 'react'
import { VStack, Text, Box, Image, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import MainLayout from 'components/Layout/MainLayout'

const AboutUs = () => {
  return (
    <MainLayout title="Homeroom | About us">
      <VStack
        width="full"
        paddingX={{ base: 4, md: '93px', lg: '200px' }}
        paddingTop={4}
        backgroundColor="orange.50"
        marginX="auto"
        alignItems="flex-start"
        zIndex="10"
        height="full"
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
          About MarketNest
        </Text>

        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" marginBottom={6}>
          Welcome to MarketNest, your go-to destination for a seamless and efficient shopping experience. Our platform
          connects shoppers and sellers, offering a wide range of products with ease of navigation and secure checkout
          processes.
        </Text>

        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="600" color="gray.800" marginBottom={4}>
          Our Mission
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" marginBottom={6}>
          At MarketNest, we strive to create an inclusive marketplace that empowers both users and sellers. Our mission
          is to build a community where users can discover new products, share reviews, and enjoy a hassle-free shopping
          experience.
        </Text>

        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="600" color="gray.800" marginBottom={4}>
          Why Shop with Us?
        </Text>
        <List spacing={3} marginBottom={6} color="gray.600">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Comprehensive product listings with images, descriptions, and reviews.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Easy-to-use filters for tailored product searches.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Secure payment options, including credit cards, PayPal, and more.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Fast shipping with real-time tracking.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Friendly customer support.
          </ListItem>
        </List>

        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="600" color="gray.800" marginBottom={4}>
          Join Us
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" marginBottom={6}>
          Become part of our growing community as a customer or a seller. Experience the future of e-commerce with
          MarketNest!
        </Text>
      </VStack>
    </MainLayout>
  )
}

export default AboutUs
