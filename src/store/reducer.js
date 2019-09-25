import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/Header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as backTopReducer } from '../common/BackTop/store'
import { reducer as loginReducer } from '../pages/login/store'

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  backTop: backTopReducer,
  login: loginReducer
})
