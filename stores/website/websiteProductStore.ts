import { handleError } from 'API/error'
import { getWebsiteProductDetail, getWebsiteProducts } from 'API/website/product'
import { IProduct } from 'interfaces/product'
import { ICategory } from 'interfaces/category'
import { makeAutoObservable } from 'mobx'
import { RootStore } from 'stores'
import { PaginationList } from 'types'

export class WebsiteProductStore {
  rootStore: RootStore
  websiteProductList: PaginationList<IProduct> = {
    results: [],
    count: 0,
    pageSize: null,
    pageIndex: null,
    totalPages: 1
  }
  categoryList: ICategory[] = []
  productDetail: IProduct = {} as IProduct
  titleFilter: string = ''

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  async fetchWebsiteProductDetail(id: string) {
    try {
      const productDetail: IProduct = await getWebsiteProductDetail(id)
      this.productDetail = productDetail
    } catch (error) {
      handleError(error as Error, 'stores/WebsiteProductStore.ts', 'fetchWebsiteProductList')
    }
  }

  async fetchWebsiteProductList() {
    try {
      const { products, categories } = await getWebsiteProducts()
      this.websiteProductList = products
      this.categoryList = categories
    } catch (error) {
      handleError(error as Error, 'stores/WebsiteProductStore.ts', 'fetchWebsiteProductList')
    }
  }

  setTitleFilter(title: string): void {
    this.titleFilter = title
  }
}
