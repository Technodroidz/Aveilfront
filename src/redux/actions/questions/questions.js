/* import internal modules */
import { HANDLE_SELECTED_QUESTIONS_HOME } from '../../types/types'

export const setSelectedQuestion = (selectedQuestion) => ({
  type: HANDLE_SELECTED_QUESTIONS_HOME,
  payload: { selectedQuestion },
})
