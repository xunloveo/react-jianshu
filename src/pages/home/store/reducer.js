import { fromJS } from 'immutable'
import * as actionTypes from './action-type'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showBackTop: false,
  writerList: [],
  writeCurrentPage: 1,
  writePageSize: 5,
  writeTotalPage: 1
})

const changeHomeData = (state, action) => {
  return state.merge({
    articleList: action.articleList,
    recommendList: action.recommendList
  })
}

const changeArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.articleList),
    articlePage: action.page + 1
  })
}

const changeWriterList = (state, action) => {
  let size = state.get('writePageSize')
  let tmp = action.data.slice(action.page * size, (action.page + 1) * size)
  return state.merge({
    writerList: fromJS(tmp),
    writeCurrentPage: action.page + 1,
    writeTotalPage: action.data.length
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.GET_MORE_LIST:
      return changeArticleList(state, action)
    case actionTypes.TOGGLE_BACK_TOP:
      return state.set('showBackTop', action.data)
    case actionTypes.GET_WRITE_LIST:
      return changeWriterList(state, action)
    default:
      return state
  }
}
