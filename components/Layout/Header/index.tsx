import { Link } from '@chakra-ui/react'
import { EBreakPoint } from 'enums/theme'
import useBreakPoint from 'hooks/useBreakPoint'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import routes from 'routes'
import { Container, HeaderWrapper } from './header.styles'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [redirectLink, setRedirectLink] = useState<string>('')
  const isDesktop = useBreakPoint(EBreakPoint.LG)
  const isMobile: boolean = useBreakPoint(EBreakPoint.BASE, EBreakPoint.MD)

  function toggle() {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isDesktop && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isDesktop])

  const router = useRouter()

  function goHomePage(): void {
    router.push(routes.home.value)
  }

  function getRedirectLink(): string {
    return '/'
  }

  useEffect(() => {
    const finalRedirectLink: string = getRedirectLink()
    setRedirectLink(finalRedirectLink)
  }, [])

  return (
    <Container>
      <HeaderWrapper>
        <Link
          isExternal
          href={redirectLink}
          height={isMobile ? '24px' : '33px'}
          marginY={{ base: 2, md: 1, lg: 0 }}
          _focus={{ boxShadow: 'none' }}
        >
          MarketNest
        </Link>
      </HeaderWrapper>
    </Container>
  )
}
export default Header
