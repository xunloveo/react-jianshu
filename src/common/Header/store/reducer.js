import * as actionType from './action-type'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  // 转换immutable对象
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === actionType.SEARCH_FOCUS) {
    // immutable的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象 并没有修改原state
    return state.set('focused', true)
  }
  if (action.type === actionType.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}
