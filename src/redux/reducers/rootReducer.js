/* import external modules */
import { combineReducers } from 'redux'

/* import internal modules */
import user from './user/user'
import common from './common/common'
import questions from './messages/questions'

const rootReducer = combineReducers({
  user,
  common,
  questions,
})

export default rootReducer
