/* import internal modules */
import { HANDLE_USER, HANDLE_LOGIN_DATA } from '../../types/types'

const initialState = {
  user: {},
  loginData: { email: '', password: '', remember: false },
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_USER:
      return Object.assign({}, state, { user: action.payload.user })

    case HANDLE_LOGIN_DATA:
      return Object.assign({}, state, { loginData: action.payload.data })

    default:
      return state
  }
}

export default UserReducer
