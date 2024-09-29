import AuthStore from './authStore'
import SpinnerStore from './spinnerStore'

export class RootStore {
  spinnerStore: SpinnerStore
  authStore: AuthStore
  constructor() {
    this.spinnerStore = new SpinnerStore(this)
    this.authStore = new AuthStore(this)
  }
}

export const rootStore = new RootStore()
