import * as actionTypes from './action-type'
export const toggleLogin = loginStatus => ({
  type: actionTypes.TOGGLE_LOGIN,
  data: loginStatus
})
