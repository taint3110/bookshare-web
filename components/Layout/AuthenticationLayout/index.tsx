import Head from 'next/head'
import { ReactNode } from 'react'

interface IAuthenticationLayoutProps {
  title?: string
  children?: ReactNode
}

const AuthenticationLayout = (props: IAuthenticationLayoutProps) => {
  const { title, children } = props
  return (
    <>
      <Head>
        <title>{title || 'MarketNest'}</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default AuthenticationLayout
