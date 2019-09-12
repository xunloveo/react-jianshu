import * as actionType from './action-type'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = data => ({
  type: actionType.GET_LIST,
  list: fromJS(data),
  pageTotal: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
})

export const getList = () => {
  return dispatch => {
    axios
      .get('/headerList.json')
      .then(res => {
        const { data } = res.data
        dispatch(changeList(data))
      })
      .catch(err => console.log(err))
  }
}

export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
})

export const changePage = page => ({
  type: actionType.CHANGE_PAGE,
  page: page
})
