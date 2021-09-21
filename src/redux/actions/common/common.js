/* import internal modules */
import { HANDLE_UTIL_ALERT, HANLE_SELECTED_THEME } from '../../types/types'

export const setHandleAlert = (handleAlert) => ({
  type: HANDLE_UTIL_ALERT,
  payload: { handleAlert },
})

export const setHandleSelectedTheme = (status) => ({
  type: HANLE_SELECTED_THEME,
  payload: { status },
})
