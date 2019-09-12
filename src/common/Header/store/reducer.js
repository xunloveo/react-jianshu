import * as actionType from './action-type'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  // 转换immutable对象
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  pageTotal: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
      // immutable的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象 并没有修改原state
      return state.set('focused', true)
    case actionType.SEARCH_BLUR:
      return state.set('focused', false)
    case actionType.GET_LIST:
      return state.merge({
        list: action.list,
        pageTotal: action.pageTotal
      })
    // return state.set('list', action.list).set('pageTotal', action.pageTotal)
    case actionType.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionType.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionType.CHANGE_PAGE:
      console.log(action.page)
      return state.set('page', action.page)
    default:
      return state
  }
}
