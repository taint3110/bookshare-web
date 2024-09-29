import { Box, Heading } from '@chakra-ui/react'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import { AuthenticatePageName, AuthenticatePageTitle, AuthenticatePageType } from './constant'
const loginBackground: string = 'assets/images/login-background.png'

export interface ILoginProps {
  type?: AuthenticatePageType
  setNamePage: (name: AuthenticatePageName) => void
}

const AuthenticatePage = (props: ILoginProps) => {
  const { type, setNamePage } = props
  const [pageType, setPageType] = useState<AuthenticatePageType | undefined>(type)
  const router: NextRouter = useRouter()
  const isOverflow: boolean = useMediaQuery({ maxHeight: 810 })
  function getTitle(): string {
    switch (pageType) {
      case AuthenticatePageType.LOGIN:
        setNamePage(AuthenticatePageName.LOGIN)
        return AuthenticatePageTitle.LOGIN
      case AuthenticatePageType.FORGOT_PASSWORD:
        setNamePage(AuthenticatePageName.FORGOT_PASSWORD)
        return AuthenticatePageTitle.FORGOT_PASSWORD
      case AuthenticatePageType.RESET_PASSWORD:
        setNamePage(AuthenticatePageName.RESET_PASSWORD)
        return AuthenticatePageTitle.RESET_PASSWORD
      case AuthenticatePageType.SIGN_UP:
        setNamePage(AuthenticatePageName.SIGN_UP)
        return AuthenticatePageTitle.SIGN_UP
      default:
        setNamePage(AuthenticatePageName.LOGIN)
        return AuthenticatePageTitle.LOGIN
    }
  }

  return (
    <Box minHeight={isOverflow ? '810px' : '100vh'} background={`url(${loginBackground})`} backgroundSize="cover">
      <Box width="full" maxWidth="xl" marginX="auto" paddingY={20} marginY="auto">
        <Box
          background="white"
          rounded="2xl"
          marginX={{ base: 8, md: 'auto' }}
          padding="10"
          borderWidth="1px"
          borderColor="gray.200"
          shadow={{ md: 'md' }}
        >
          <Box marginBottom={8} textAlign={{ base: 'center', md: 'center' }}>
            <Heading size="md" marginBottom={2} marginTop={10} fontWeight="extrabold">
              {getTitle()}
            </Heading>
          </Box>
          {pageType === AuthenticatePageType.LOGIN && <LoginForm setPageType={setPageType} />}
          {pageType === AuthenticatePageType.SIGN_UP && <SignUpForm setPageType={setPageType} />}
        </Box>
      </Box>
    </Box>
  )
}

export default AuthenticatePage
