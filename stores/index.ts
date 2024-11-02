import AuthStore from './authStore'
import SpinnerStore from './spinnerStore'
import { WebsiteProductStore } from './website/websiteProductStore'

export class RootStore {
  spinnerStore: SpinnerStore
  authStore: AuthStore
  websiteProductStore: WebsiteProductStore
  constructor() {
    this.spinnerStore = new SpinnerStore(this)
    this.authStore = new AuthStore(this)
    this.websiteProductStore = new WebsiteProductStore(this)
  }
}

export const rootStore = new RootStore()
