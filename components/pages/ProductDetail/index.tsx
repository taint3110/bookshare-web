import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr
} from '@chakra-ui/react'
import { handleError } from 'API/error'
import ProductListNoFilter from 'components/ProductListNoFilter'
import { useStores } from 'hooks/useStores'
import { IProduct } from 'interfaces/product'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import ErrorNotFoundPage from 'pages/404'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { maxMobileWidth, maxTabletWidth, textGrey500 } from 'theme/globalStyles'
import { getValidArray } from 'utils/common'
import Paragraph from './FadedParagraph'

const ProductDetail = () => {
  const { websiteProductStore, spinnerStore } = useStores()
  const { productDetail, websiteProductList } = websiteProductStore
  const { isLoading } = spinnerStore
  const router = useRouter()
  const productId: string = String(router.query.id || '')

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const isMobile: boolean = useMediaQuery({ maxWidth: maxMobileWidth })
  const isTabletMobile: boolean = useMediaQuery({ maxWidth: maxTabletWidth })

  useEffect(() => {
    setIsCollapsed(isMobile || isTabletMobile)
  }, [isMobile, isTabletMobile])

  useEffect(() => {
    async function fetchData() {
      spinnerStore.showLoading()
      try {
        await websiteProductStore.fetchWebsiteProductDetail(productId)
        await websiteProductStore.fetchWebsiteProductList()
      } catch (error) {
        handleError(error as Error, 'components/pages/ProductDetail', 'fetchData')
      } finally {
        spinnerStore.hideLoading()
      }
    }

    if (productId) {
      fetchData()
    }
  }, [productId, spinnerStore, websiteProductStore])

  function filterRelatedProducts(): IProduct[] {
    return getValidArray(websiteProductList.results).filter((product) => product.id !== productId)
  }

  if (!productDetail) {
    return <ErrorNotFoundPage />
  }

  const { name, description, price, stock, rate, images, status, shop } = productDetail

  return (
    <Stack paddingLeft={isCollapsed ? 20 : 200} paddingRight={isCollapsed ? 20 : 200} pt={8} pb={8}>
      {/* Product Info */}
      {isCollapsed ? (
        <Stack spacing={32} alignItems="flex-start">
          {/* Product Images */}
          <Box boxSize="540px" shadow="sm" border="1px" borderColor="gray.200" borderRadius="4px">
            <Image
              boxSize="540px"
              objectFit="contain"
              src={images?.[0] || 'https://via.placeholder.com/150'}
              alt={name}
            />
          </Box>
          {/* Product Details */}
          <Stack spacing="16">
            <Stack>
              <Text fontSize="2xl">{name}</Text>
              <Text fontSize="xl" color="teal.800">
                {price} VND
              </Text>
            </Stack>
            <TableContainer>
              <Table variant="striped" colorScheme="teal" size="sm">
                <Tbody>
                  <Tr>
                    <Td minWidth={120}>Shop</Td>
                    <Td minWidth={280}>{shop?.name}</Td>
                  </Tr>
                  <Tr>
                    <Td minWidth={120}>Stock</Td>
                    <Td minWidth={280}>{stock}</Td>
                  </Tr>
                  <Tr>
                    <Td minWidth={120}>Rating</Td>
                    <Td minWidth={280}>{rate} / 5</Td>
                  </Tr>
                  <Tr>
                    <Td minWidth={120}>Status</Td>
                    <Td minWidth={280}>{status}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Button size="lg" variant="solid" onClick={() => alert('Add to cart')} isDisabled={isLoading}>
              Add to cart
            </Button>
          </Stack>
        </Stack>
      ) : (
        <HStack spacing={32} alignItems="flex-start">
          {/* Product Images */}
          <Box boxSize="540px" shadow="sm" border="1px" borderColor="gray.200" borderRadius="4px">
            <Image
              boxSize="540px"
              objectFit="contain"
              src={images?.[0] || 'https://via.placeholder.com/150'}
              alt={name}
            />
          </Box>
          {/* Product Details */}
          <Stack spacing="16">
            <Stack>
              <Text fontSize="2xl">{name}</Text>
              <Text fontSize="xl" color="teal.800">
                {price} VND
              </Text>
            </Stack>
            <TableContainer>
              <Table variant="striped" colorScheme="teal" size="sm">
                <Tbody>
                  <Tr>
                    <Td minWidth={120}>Shop</Td>
                    <Td minWidth={280}>{shop?.name}</Td>
                  </Tr>
                  <Tr>
                    <Td minWidth={120}>Stock</Td>
                    <Td minWidth={280}>{stock}</Td>
                  </Tr>
                  <Tr>
                    <Td minWidth={120}>Rating</Td>
                    <Td minWidth={280}>{rate} / 5</Td>
                  </Tr>
                  <Tr>
                    <Td minWidth={120}>Status</Td>
                    <Td minWidth={280}>{status}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Button size="lg" variant="solid" onClick={() => alert('Add to cart')} isDisabled={isLoading}>
              Add to cart
            </Button>
          </Stack>
        </HStack>
      )}

      {/* Description */}
      {description && (
        <Stack mt={4}>
          <Text fontSize="xl">Description</Text>
          <Paragraph text={description} />
        </Stack>
      )}

      <Divider mt={4} />

      {/* Related Products */}
      <Center>
        <Text p={4} color={textGrey500}>
          RELATED PRODUCTS
        </Text>
      </Center>
      <ProductListNoFilter
        productList={filterRelatedProducts()}
        countProductList={filterRelatedProducts().length}
        gridColumns={isCollapsed ? 2 : 4}
      />
    </Stack>
  )
}

export default observer(ProductDetail)
