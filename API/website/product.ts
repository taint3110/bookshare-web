import { api } from 'API'
import { handleError } from 'API/error'
import { ICategory } from 'interfaces/category'
import { IProduct } from 'interfaces/product'
import { get } from 'lodash'
import { PaginationList } from 'types'

export interface GetWebsiteProductsResponse {
  products: PaginationList<IProduct>
  categories: ICategory[]
}

export async function getWebsiteProductDetail(id: string): Promise<IProduct> {
  try {
    const response = await api.get(`/public/products/${id}`)
    return response.data.data.product // Access the product directly from the nested structure
  } catch (error) {
    const errorMessage: string = get(error, 'response.data.error.message', '') || JSON.stringify(error)
    handleError(error as Error, 'API/website/product', 'getWebsiteProductDetail')
    throw new Error(errorMessage)
  }
}

export async function getWebsiteProducts(): Promise<GetWebsiteProductsResponse> {
  try {
    const response = await api.get(`/public/products`)
    const data = response.data.data
    return {
      products: {
        results: data.products,
        count: data.count,
        pageSize: data.pageSize,
        pageIndex: data.pageIndex,
        totalPages: data.totalPages
      },
      categories: data.categories
    }
  } catch (error) {
    const errorMessage: string = get(error, 'response.data.error.message', '') || JSON.stringify(error)
    handleError(error as Error, 'API/website/product', 'getWebsiteProducts')
    throw new Error(errorMessage)
  }
}
