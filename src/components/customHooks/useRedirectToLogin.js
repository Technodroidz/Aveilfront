/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'

/* import internal modules */
import { authStateListener } from '../../apis/users'

export const useRedirectToLogin = () => {
  const history = useHistory()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    redirect()
  }, [history])

  const redirect = () => {
    const isUserAuthenticated = authStateListener()

    if (!isUserAuthenticated) {
      history.push('/')
      setIsAuthenticated(false)
      console.info(isUserAuthenticated)
    }

    if (isUserAuthenticated) {
      setIsAuthenticated(true)
    }
  }

  return isAuthenticated
}
