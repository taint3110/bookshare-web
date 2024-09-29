/* eslint-disable max-lines */
import get from 'lodash/get'
import omit from 'lodash/omit'
import { makeAutoObservable } from 'mobx'
import { RootStore } from 'stores'
import { login as loginAPI, signup as signUpAPI } from 'API/authenticate'
import { ETokenKey } from 'API/constants'
import { IUser } from 'interfaces/user'
import { LoginFormData } from 'components/pages/AuthenticatePage/components/LoginForm'
import { toast } from 'react-toastify'
import { SignUpFormData } from 'components/pages/AuthenticatePage/components/SignUpForm'
import router from 'next/router'
import routes from 'routes'

export default class AuthStore {
  rootStore: RootStore
  token?: ETokenKey = undefined
  user: IUser = {}
  isLogin: boolean = false

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  async login(data: LoginFormData): Promise<void> {
    this.rootStore.spinnerStore.showLoading()
    try {
      const res = await loginAPI(omit(data, 'isRemember'))
      this.rootStore.spinnerStore.hideLoading()
    } catch (error) {
      this.rootStore.spinnerStore.hideLoading()
      const errorMessage: string = get(error, 'message', '')
      throw new Error(errorMessage)
    }
  }

  async signUp(data: SignUpFormData): Promise<void> {
    this.rootStore.spinnerStore.showLoading()
    try {
      const user: IUser = await signUpAPI(omit(data, 'confirmPassword'))
      if (user) {
        toast.success('Sign up successfully !')
        router.push(routes.login.value)
      }
      this.rootStore.spinnerStore.hideLoading()
    } catch (error) {
      this.rootStore.spinnerStore.hideLoading()
      const errorMessage: string = get(error, 'message', '')
      throw new Error(errorMessage)
    }
  }
}
