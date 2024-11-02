import { ICategory } from 'interfaces/category'
import { IShop } from 'interfaces/shop'

export interface IProduct {
  id: string
  name: string
  description?: string | null
  price: number
  stock: number
  rate: number
  status: string
  createdBy: string
  updatedBy?: string | null
  deletedBy?: string | null
  createdAt: Date | string
  updatedAt?: Date | string | null
  deletedAt?: Date | string | null
  shop: IShop // Use IShop interface for shop details
  categories: ICategory[] // Array of ICategory
  images: string[] // Array of image URLs
}

export const productList: IProduct[] = [
  {
    id: '8d4fae5f-f13c-4b7e-8b82-efd34c9e1e0e',
    createdBy: 'migration',
    updatedBy: null,
    deletedBy: null,
    createdAt: '2024-09-23T14:05:15.461Z',
    updatedAt: '2024-10-23T09:37:05.619Z',
    deletedAt: null,
    name: 'Product 1',
    description: null,
    price: 1000,
    stock: 998,
    rate: 5,
    status: 'ACTIVE',
    shop: {
      id: '1d855ae5-29b8-4b45-95fc-66729940da93',
      createdBy: 'admin',
      updatedBy: null,
      deletedBy: null,
      createdAt: '2024-10-03T02:49:35.562Z',
      updatedAt: '2024-10-03T02:49:35.562Z',
      deletedAt: null,
      name: 'ABC Shop',
      description: 'Shop sells computer, monitor,....',
      image: null,
      status: 'Active',
      city: 'Ho Chi Minh',
      state: null,
      country: null,
      address: null,
      rate: 0
    },
    categories: [
      {
        id: 'd961b588-d108-4c37-b4ca-1adc92f5ac8f',
        name: 'Electric',
        image: null,
        description: 'electric'
      },
      {
        id: '64170133-aa98-4d12-889d-2b7ab4e6fee3',
        name: 'Household',
        image: null,
        description: 'household'
      }
    ],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHl9W1MtYuF9PIHqQ7kKoMWg7Vl3HE-BFeig&s',
      'https://images.everydayhealth.com/images/diet-nutrition/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg'
    ]
  }
]

export const categoryList: ICategory[] = [
  {
    id: 'd961b588-d108-4c37-b4ca-1adc92f5ac8f',
    name: 'Electric',
    image: null,
    description: 'electric'
  },
  {
    id: '64170133-aa98-4d12-889d-2b7ab4e6fee3',
    name: 'Household',
    image: null,
    description: 'household'
  }
]

export const countProductList = productList.length
