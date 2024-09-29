import Footer from 'components/Layout/Footer'
import Header from 'components/Layout/Header'
import { observer } from 'mobx-react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface IMainLayoutProps {
  title?: string
  children?: ReactNode
}

const MainLayout = (props: IMainLayoutProps) => {
  const { title, children } = props

  return (
    <>
      <Head>
        <title>{title || 'MarketNest'}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer.Desktop />
      <Footer.Mobile />
    </>
  )
}

export default observer(MainLayout)
