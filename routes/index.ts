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
    value: '/reset-password'
  },
  notfoundpage: {
    value: '/404'
  },
  detail: {
    value: (productId: number) => `/detail/${productId}`
  },
  myProfile: {
    value: '/my-profile'
  },
  ...adminRoutes
}

export default routes
