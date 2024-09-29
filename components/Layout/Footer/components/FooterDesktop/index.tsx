import { Box as CkBox, HStack, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { Box, CommonDivider, Container, NavigationSection, Text } from '../../footer.styles'

const FooterDesktop = () => {
  return (
    <CkBox as="footer" background="background.primary" display={{ base: 'none', md: 'block' }}>
      <Container>
        <NavigationSection>
          <VStack spacing={8} flex={0} marginTop={{ md: 10, lg: 0 }}>
            <VStack spacing={4} alignItems="flex-start">
              <a href="mailto:21521397@gm.uit.edu.com">
                <HStack spacing={2}>
                  <Text isTitle>General:</Text>
                  <Text>info@marketnest.com</Text>
                </HStack>
              </a>
              <a href="mailto:21521087@gm.uit.edu.com">
                <HStack spacing={2}>
                  <Text isTitle>Investing:</Text>
                  <Text>invest@marketnest.com</Text>
                </HStack>
              </a>
            </VStack>
          </VStack>
        </NavigationSection>
        <CommonDivider />
        <Box>© Copyright {dayjs().year()} MarketNest</Box>
      </Container>
    </CkBox>
  )
}

export default FooterDesktop
