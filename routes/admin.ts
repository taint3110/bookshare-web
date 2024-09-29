const adminRoutes = {
  admin: {
    value: '/admin',
    login: {
      value: '/admin/login'
    },
    signUp: {
      value: '/admin/sign-up'
    },
    forgotPassword: {
      value: '/admin/forgot-password'
    },
    resetPassword: {
      value: (resetPasswordToken: string) => `/admin/reset-password/${resetPasswordToken}`
    },
    accountSettings: {
      value: '/admin/account-settings'
    },
    accountManagement: {
      value: '/admin/account-management',
      detail: {
        value: (accountId: string) => `/admin/account-management/account/${accountId}`
      }
    }
  }
}

export default adminRoutes
