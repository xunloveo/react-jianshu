import * as actionTypes from './action-type'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = data => ({
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList),
  type: actionTypes.GET_HOME_DATA
})

const changeArticleList = (page, data) => ({
  page,
  articleList: fromJS(data),
  type: actionTypes.GET_MORE_LIST
})

const changeWriterList = (page, data) => ({
  type: actionTypes.GET_WRITE_LIST,
  page,
  data: data
})

export const getHomeData = () => {
  return dispatch => {
    axios
      .get('/home.json')
      .then(res => {
        const { status, data } = res

        if (status === 200) {
          dispatch(changeHomeData(data))
        }
      })
      .catch(err => console.log(err))
  }
}

export const getMoreList = page => {
  return dispatch => {
    axios
      .get(`/articleList.json?page=${page}`)
      .then(res => {
        const { status } = res
        const { data } = res.data
        if (status === 200) {
          dispatch(changeArticleList(page, data))
        }
      })
      .catch(err => console.log(err))
  }
}

export const toggleBackTop = flag => ({
  type: actionTypes.TOGGLE_BACK_TOP,
  data: flag
})

export const getWriterList = page => {
  return dispatch => {
    axios
      .get(`/writerList.json`)
      .then(res => {
        let data = res.data.users
        dispatch(changeWriterList(page, data))
      })
      .catch(err => console.log(err))
  }
}
