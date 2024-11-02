import { Center, Grid, Stack, Text } from '@chakra-ui/react'
import ProductCard from 'components/ProductList/components/ProductCard'
import { IProduct } from 'interfaces/product'
import { observer } from 'mobx-react'

export interface IProductListProps {
  productList: IProduct[]
  countProductList: number
  gridColumns: number
}

const ProductListNoFilter = ({ productList, countProductList, gridColumns }: IProductListProps) => {
  return (
    <Stack spacing={4}>
      {countProductList > 0 ? (
        <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={4}>
          {productList.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </Grid>
      ) : (
        <Center>
          <Text>No products available!</Text>
        </Center>
      )}
    </Stack>
  )
}

export default observer(ProductListNoFilter)
