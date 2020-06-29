import * as types from './../constants/ActionType'

export const status = () => {
  return {
    type : types.TOGGLE_STATUS
  }
}

export const sort = (sort) => { //truyền tham số sort
  return {
    type : types.SORT,
    sort : sort //tham số sort
  }
}