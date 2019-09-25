import { fromJS } from 'immutable'
import * as actionTypes from './action-type'
const defaultState = fromJS({
  login: JSON.parse(sessionStorage.getItem('login')) || false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.TOGGLE_LOGIN) {
    return state.set('login', fromJS(action.data))
  }
  return state
}
