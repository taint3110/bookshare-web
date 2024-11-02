import { getWebsiteProducts } from 'API/website/product'
import MainLayout from 'components/Layout/MainLayout'
import LandingPage from 'components/pages/LandingPage'
import { observer } from 'mobx-react'
import { IProduct } from 'interfaces/product'
import { ICategory } from 'interfaces/category'

interface IListingPageProps {
  productList: IProduct[]
  countProductList: number
  categoryList: ICategory[]
  pageSize: number | null
  pageIndex: number | null
  totalPages: number | null
}

const ListPage = (props: IListingPageProps) => {
  const { productList, countProductList, categoryList, pageSize, pageIndex, totalPages } = props

  return (
    <MainLayout title="ProductShare | Landing Page">
      <LandingPage
        productList={productList}
        countProductList={countProductList}
        categoryList={categoryList}
        pageSize={pageSize}
        pageIndex={pageIndex}
        totalPages={totalPages}
      />
    </MainLayout>
  )
}

export default observer(ListPage)

export async function getServerSideProps() {
  try {
    const { products, categories } = await getWebsiteProducts()
    return {
      props: {
        productList: products.results,
        countProductList: products.count,
        categoryList: categories,
        pageSize: products.pageSize,
        pageIndex: products.pageIndex,
        totalPages: products.totalPages
      }
    }
  } catch (error) {
    console.log('listing-page: getServerSideProps -> error', error)
    return {
      props: { productList: [], countProductList: 0, categoryList: [], pageSize: 0, pageIndex: 0, totalPages: 0 }
    }
  }
}
