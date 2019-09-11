import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/Header/store'

export default combineReducers({
  header: headerReducer
})
