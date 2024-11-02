import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Container, Flex, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react'
import { observer } from 'mobx-react'
import { ICategory } from 'interfaces/category'
import { useState } from 'react'

export interface IProductFilterProps {
  categories: ICategory[]
  onSortChange: (value: string) => void
  onCategoryChange: (values: string[]) => void
  selectedSort: string
  selectedCategories: string[]
}

const ProductFilter = ({
  categories,
  onSortChange,
  onCategoryChange,
  selectedSort,
  selectedCategories
}: IProductFilterProps) => {
  const [sortOption, setSortOption] = useState(selectedSort)
  const [selectedCategoryValues, setSelectedCategoryValues] = useState(selectedCategories)

  const handleSortChange = (value: string | string[]) => {
    if (typeof value === 'string') {
      setSortOption(value)
      onSortChange(value)
    }
  }

  const handleCategoryChange = (values: string | string[]) => {
    const categoryValues = Array.isArray(values) ? values : [values]
    setSelectedCategoryValues(categoryValues)
    onCategoryChange(categoryValues)
  }

  return (
    <Container maxW="container.2xl" p="4" shadow="sm" border="1px" borderColor="gray.200" borderRadius="4px">
      <Flex justify="space-between">
        {/* Sort Menu */}
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Sort by
          </MenuButton>
          <MenuList>
            <MenuOptionGroup type="radio" value={sortOption} onChange={handleSortChange}>
              <MenuItemOption value="popularity">Popularity</MenuItemOption>
              <MenuItemOption value="lowest">Price - Lowest</MenuItemOption>
              <MenuItemOption value="highest">Price - Highest</MenuItemOption>
              <MenuItemOption value="newest">Newest</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        {/* Category Filter Menu */}
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Category
          </MenuButton>
          <MenuList>
            <MenuOptionGroup type="checkbox" value={selectedCategoryValues} onChange={handleCategoryChange}>
              {categories.map((category: ICategory) => (
                <MenuItemOption value={category.name} key={category.id}>
                  {category.name}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Container>
  )
}

export default observer(ProductFilter)
