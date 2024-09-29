import { api } from 'API'
import { handleError } from 'API/error'
import { AxiosResponse } from 'axios'
import {
  IForgotPasswordRequest,
  ILoginRequest,
  IResetPasswordRequest,
} from 'interfaces/authenticate'
import { IUser, IUserWithPassword } from 'interfaces/user'
import get from 'lodash/get'

export async function login(data: ILoginRequest) {
  try {
    const response = await api.post(`/auth/login`, data)
    return response.data
  } catch (error) {
    const errorMessage: string = get(error, 'data.error.message', '') || JSON.stringify(error)
    handleError(error as Error, 'API/authenticate', 'login')
    throw new Error(errorMessage)
  }
}

export async function forgotPassword(data: IForgotPasswordRequest) {
  try {
    const response = await api.post(`/auth/forgot-password`, data)
    return response.data
  } catch (error) {
    handleError(error as Error, 'API/authenticate', 'forgotPassword')
    return {}
  }
}

export async function resetPassword(data: IResetPasswordRequest) {
  try {
    const response = await api.post(`/auth/reset-password`, data)
    return response.data
  } catch (error) {
    handleError(error as Error, 'API/authenticate', 'resetPassword')
    return {}
  }
}

export async function signup(userFormData: IUserWithPassword): Promise<IUser> {
  try {
    const response: AxiosResponse = await api.post(`/auth/signup`, userFormData)
    return response?.data
  } catch (error) {
    const errorMessage: string = get(error, 'message', '') || JSON.stringify(error)
    handleError(error as Error, 'API/authenticate', 'signup')
    throw new Error(errorMessage)
  }
}
