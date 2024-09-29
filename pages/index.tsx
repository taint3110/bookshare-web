import MainLayout from 'components/Layout/MainLayout'
import { observer } from 'mobx-react'

interface IListingPageProps {}

const ListPage = (props: IListingPageProps) => {
  return (
    <MainLayout title="MarketNest | Landing Page">
      <div>Listing Page</div>
    </MainLayout>
  )
}

export default observer(ListPage)
