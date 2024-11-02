import { Card, CardBody, Divider, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { handleError } from 'API/error'
import { IProduct } from 'interfaces/product'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'
import { toast } from 'react-toastify'

const ProductCard = (props: IProduct) => {
  const { id, name, price, stock, rate, images, description, status } = props
  const router = useRouter()

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    if (id) router.push(`/products/${id}`)
  }

  async function addToCart(): Promise<void> {
    try {
      toast.success('Product added to cart successfully!')
    } catch (error) {
      handleError(error as Error, 'components/ProductList/ProductCard/index.tsx', 'addToCart')
    }
  }

  return (
    <Card onClick={handleClick} cursor="pointer">
      <CardBody>
        <Image
          src={images[0] || 'https://via.placeholder.com/150'}
          boxSize="150px"
          objectFit="contain"
          alt={name}
          borderRadius="sm"
        />
        <Stack mt={3} spacing={2}>
          <Heading size="sm">{name}</Heading>
          {description && <Text fontSize="sm">{description}</Text>}
          <HStack justifyContent="space-between">
            <Text color="teal.600" fontSize="lg">
              ${price}
            </Text>
            <Text color="gray.500" fontSize="sm">
              Stock: {stock}
            </Text>
          </HStack>
          <Text color="yellow.500" fontSize="sm">
            Rating: {rate} / 5
          </Text>
          <Text color={status === 'ACTIVE' ? 'green.500' : 'red.500'} fontSize="sm">
            {status}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  )
}

export default observer(ProductCard)
