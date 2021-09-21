/* import internal modules */
import { HANDLE_SELECTED_QUESTIONS_HOME } from '../../types/types'

const initialState = {
  selectedQuestion: '',
}

const QuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SELECTED_QUESTIONS_HOME:
      return Object.assign({}, state, {
        selectedQuestion: action.payload.selectedQuestion,
      })

    default:
      return state
  }
}

export default QuestionsReducer
