import React, { useState } from 'react'
import AuthenticationLayout from 'components/Layout/AuthenticationLayout'
import AuthenticatePage from 'components/pages/AuthenticatePage'
import { AuthenticatePageName, AuthenticatePageType } from 'components/pages/AuthenticatePage/constant'

const OwnerLogin = () => {
  const [namePage, setNamePage] = useState(AuthenticatePageName.RESET_PASSWORD)
  return (
    <AuthenticationLayout title={`Owner Portal ${namePage} | Internal Portal`}>
      <AuthenticatePage type={AuthenticatePageType.RESET_PASSWORD} setNamePage={setNamePage} />
    </AuthenticationLayout>
  )
}

export default OwnerLogin
