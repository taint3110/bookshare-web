import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Checkbox,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  Text
} from '@chakra-ui/react'
import { ICategory } from 'interfaces/category'
import { IProduct } from 'interfaces/product'
import { observer } from 'mobx-react'
import Link from 'next/link'
import React, { useState, useMemo } from 'react'
import { getValidArray, removeItemOnce } from 'utils/common'
import ProductCard from './components/ProductCard'

export interface IProductListProps {
  productList: IProduct[]
  countProductList: number
  categoryList: ICategory[]
  gridColumns: number
  pageSize: number | null
  pageIndex: number | null
  totalPages: number | null
}

const ProductList = (props: IProductListProps) => {
  const { productList, countProductList, categoryList, gridColumns, pageSize, pageIndex, totalPages } = props

  const [selectedSort, setSelectedSort] = useState<string | string[]>()

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    getValidArray(categoryList).map((item) => item.name!)
  )
  const [isCategoryCheckedAll, setIsCategoryCheckedAll] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(pageIndex || 1)

  // Category filter handler
  const handleCategoryChange = (selectedValues: string | string[]) => {
    setSelectedCategories(Array.from(selectedValues))
    setIsCategoryCheckedAll(selectedValues.length === categoryList.length)
  }

  const handleCategoryCheckAllChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setIsCategoryCheckedAll(checked)
    setSelectedCategories(checked ? getValidArray(categoryList).map((item) => item.name!) : [])
  }

  // Sorting handler
  const handleSortChange = (selectedSort: string | string[]) => {
    setSelectedSort(selectedSort)
  }

  // Filtered and sorted data
  const filteredData = useMemo(() => {
    let data = productList

    if (!isCategoryCheckedAll) {
      data = data.filter((product) =>
        product.categories?.some((category) => selectedCategories.includes(category.name!))
      )
    }

    if (selectedSort === 'lowest') {
      data.sort((a, b) => (a.price || 0) - (b.price || 0))
    } else if (selectedSort === 'highest') {
      data.sort((a, b) => (b.price || 0) - (a.price || 0))
    }

    return data
  }, [productList, selectedCategories, selectedSort, isCategoryCheckedAll])

  // Pagination handlers
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    // Add API call here if pagination is server-side
  }

  const renderPaginationControls = () => (
    <Flex justify="center" mt="4">
      <Button onClick={() => handlePageChange(currentPage - 1)} isDisabled={currentPage <= 1}>
        Previous
      </Button>
      <Text mx="2">
        Page {currentPage} of {totalPages}
      </Text>
      <Button onClick={() => handlePageChange(currentPage + 1)} isDisabled={currentPage >= (totalPages || 1)}>
        Next
      </Button>
    </Flex>
  )

  function CategoryCard({ category }: CategoryCardProps) {
    const handleClick = () => {
      if (isCategoryCheckedAll) {
        handleCategoryChange([category.name!])
      } else if (selectedCategories.includes(category.name!)) {
        handleCategoryChange(removeItemOnce(selectedCategories, category.name!))
      } else {
        handleCategoryChange(selectedCategories.concat(category.name!))
      }
    }
    return (
      <Link href={'#'} key={category?.name} onClick={handleClick}>
        <Card maxW="sm">
          <CardBody>
            <Image
              boxSize={'200'}
              objectFit="cover"
              src={'https://via.placeholder.com/150'}
              alt={category?.name}
              borderRadius="lg"
            />
            <Text align={'center'} size="md" mt={4}>
              {category?.name?.toUpperCase()}
            </Text>
          </CardBody>
        </Card>
      </Link>
    )
  }

  return (
    <Stack>
      {/* Categories Section */}
      <Grid templateColumns={{ base: 'repeat(4, 1fr)', lg: 'repeat(8, 1fr)' }} gap={1}>
        {getValidArray(categoryList).map((category: ICategory) => (
          <CategoryCard category={category} key={category.id!} />
        ))}
      </Grid>
      <Divider m="4" />

      {/* Filter and Sort Section */}
      <Container maxW="container.2xl" p="4" shadow="sm" border="1px" borderColor="gray.200" borderRadius="4px">
        <Flex justify="space-between">
          {/* Sort Menu */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Sort by
            </MenuButton>
            <MenuList>
              <MenuOptionGroup type="radio" defaultValue="popularity" value={selectedSort} onChange={handleSortChange}>
                <MenuItemOption value="popularity">Popularity</MenuItemOption>
                <MenuItemOption value="lowest">Price - Lowest</MenuItemOption>
                <MenuItemOption value="highest">Price - Highest</MenuItemOption>
                <MenuItemOption value="newest">Newest</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>

          {/* Category Filter */}
          <Flex>
            <Menu closeOnSelect={false}>
              <MenuButton variant={'outline'} as={Button} rightIcon={<ChevronDownIcon />}>
                Category
              </MenuButton>
              <MenuList>
                <MenuOptionGroup type="checkbox" value={selectedCategories} onChange={handleCategoryChange}>
                  <Checkbox
                    ml="3"
                    defaultChecked
                    isChecked={isCategoryCheckedAll}
                    onChange={handleCategoryCheckAllChanged}
                  >
                    All
                  </Checkbox>
                  {getValidArray(categoryList).map((category: ICategory, indexCategory: number) => (
                    <MenuItemOption value={category.name} key={indexCategory}>
                      {category.name}
                    </MenuItemOption>
                  ))}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>

      {/* Product List Section */}
      {filteredData.length > 0 ? (
        <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={2}>
          {filteredData.slice((currentPage - 1) * pageSize!, currentPage * pageSize!).map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
        </Grid>
      ) : (
        <Center>
          <Text>No product available!</Text>
        </Center>
      )}

      {/* Pagination Controls */}
      {renderPaginationControls()}
    </Stack>
  )
}

interface CategoryCardProps {
  category: ICategory
}

export default observer(ProductList)
