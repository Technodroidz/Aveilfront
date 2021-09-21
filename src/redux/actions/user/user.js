/* import internal modules */
import { HANDLE_USER, HANDLE_LOGIN_DATA } from '../../types/types'

export const setUser = (user) => ({
  type: HANDLE_USER,
  payload: { user },
})

export const setLoginData = (data) => ({
  type: HANDLE_LOGIN_DATA,
  payload: { data },
})
