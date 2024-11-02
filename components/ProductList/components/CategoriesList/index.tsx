import { Card, CardBody, Grid, Image, Text } from '@chakra-ui/react'
import { ICategory } from 'interfaces/category'
import { observer } from 'mobx-react'
import Link from 'next/link'
import { getValidArray } from 'utils/common'

export interface ICategoriesListProps {
  categories: ICategory[]
}

const CategoriesList = (props: ICategoriesListProps) => {
  const { categories } = props

  return (
    <Grid templateColumns={{ base: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' }} gap={4}>
      {getValidArray(categories).map((category: ICategory) => (
        <Link href={`/category/${category?.id}`} key={category?.id}>
          <Card maxW="sm">
            <CardBody>
              <Image
                boxSize="150px"
                objectFit="cover"
                src={category.image || 'https://via.placeholder.com/150'}
                alt={category?.name}
                borderRadius="lg"
              />
              <Text align="center" fontWeight="bold" mt={2}>
                {category?.name?.toUpperCase()}
              </Text>
            </CardBody>
          </Card>
        </Link>
      ))}
    </Grid>
  )
}

export default observer(CategoriesList)
