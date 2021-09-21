/* import internal modules */
import { HANDLE_UTIL_ALERT, HANLE_SELECTED_THEME } from '../../types/types'

const initialState = {
  handleAlert: { message: '', status: false, severity: 'success' },
  handleSelectedTheme: false,
}

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_UTIL_ALERT:
      return Object.assign({}, state, {
        handleAlert: action.payload.handleAlert,
      })

    case HANLE_SELECTED_THEME:
      return Object.assign({}, state, {
        handleSelectedTheme: action.payload.status,
      })

    default:
      return state
  }
}

export default CommonReducer
