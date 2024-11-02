import { Divider, Stack, Text } from '@chakra-ui/react'
import NextLink from 'components/NextLink'
import ProductList from 'components/ProductList'
import { ICategory } from 'interfaces/category'
import { IProduct } from 'interfaces/product'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { maxMobileWidth, maxTabletWidth } from 'theme/globalStyles'

export interface IProductListProps {
  products: IProduct[]
  pageSize: number
  listLength: number
  showGoToPage?: boolean
}

interface ILandingPageProps {
  productList: IProduct[]
  countProductList: number
  categoryList: ICategory[]
  pageSize: number | null
  pageIndex: number | null
  totalPages: number | null
}

const LandingPage = (props: ILandingPageProps) => {
  const { productList, countProductList, categoryList, pageSize, pageIndex, totalPages } = props
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const isMobile: boolean = useMediaQuery({ maxWidth: maxMobileWidth })
  const isTabletMobile: boolean = useMediaQuery({ maxWidth: maxTabletWidth })

  useEffect(() => {
    setIsCollapsed(isMobile || isTabletMobile)
  }, [isMobile, isTabletMobile])

  if (isCollapsed) {
    return (
      <Stack paddingLeft="20px" paddingRight="20px" marginTop="4" marginBottom="40">
        <Text fontSize="sm">Choose your favorite products, and pick them up at our store at:</Text>
        <NextLink href="https://goo.gl/maps/5qzXdqKS7sTeToJy5">
          <Text color={'teal.600'}>ProductShare, Prairie Village, KS 66208, United States</Text>
        </NextLink>
        <Divider m="4" />
        {/* Product List Section */}
        <ProductList
          productList={productList}
          categoryList={categoryList}
          countProductList={countProductList}
          pageSize={pageSize}
          pageIndex={pageIndex}
          totalPages={totalPages}
          gridColumns={isCollapsed ? 2 : 4}
        />
      </Stack>
    )
  }
  return (
    <Stack paddingLeft="200px" paddingRight="200px" marginTop="4" marginBottom="40">
      <Text fontSize="sm">Choose your favorite products, and pick them up at our store at:</Text>
      <NextLink href="https://goo.gl/maps/5qzXdqKS7sTeToJy5">
        <Text color={'teal.600'}>ProductShare, Prairie Village, KS 66208, United States</Text>
      </NextLink>
      <Divider m="4" />
      {/* Product List Section */}
      <ProductList
        productList={productList}
        categoryList={categoryList}
        countProductList={countProductList}
        pageSize={pageSize}
        pageIndex={pageIndex}
        totalPages={totalPages}
        gridColumns={isCollapsed ? 2 : 4}
      />
    </Stack>
  )
}

export default LandingPage
