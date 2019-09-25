import { fromJS } from 'immutable'
import * as actionTypes from './action-type'

const defaultState = fromJS({
  showBackTop: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.TOGGLE_BACK_TOP) {
    return state.set('showBackTop', action.data)
  }
  return state
}
