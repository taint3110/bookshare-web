import adminRoutes from './admin'

const routes = {
  home: {
    value: '/'
  },
  login: {
    value: '/login'
  },
  signUp: {
    value: '/sign-up'
  },
  forgotPassword: {
    value: '/forgot-password'
  },
  resetPassword: {
    value: (resetPasswordToken: string) => `/reset-password/${resetPasswordToken}`
  },
  notfoundpage: {
    value: '/404'
  },
  detail: {
    value: (bookId: number) => `/detail/${bookId}`
  },
  myProfile: {
    value: '/my-profile'
  },
  ...adminRoutes
}

export default routes
