import * as actionTypes from './action-type'
export const toggleBackTop = showBackTop => ({
  type: actionTypes.TOGGLE_BACK_TOP,
  data: showBackTop
})
