import AuthenticationLayout from 'components/Layout/AuthenticationLayout'
import AuthenticatePage from 'components/pages/AuthenticatePage'
import { AuthenticatePageName, AuthenticatePageType } from 'components/pages/AuthenticatePage/constant'

import { useState } from 'react'

const SignUpPage = () => {
  const [namePage, setNamePage] = useState(AuthenticatePageName.LOGIN)
  return (
    <AuthenticationLayout title={`${namePage}`}>
      <AuthenticatePage type={AuthenticatePageType.SIGN_UP} setNamePage={setNamePage} />
    </AuthenticationLayout>
  )
}

export default SignUpPage
