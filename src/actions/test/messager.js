import * as types from '../types'

export function listAll() {
  return {
    type : types.RECEIVE_DATA,
    // data: [{id: 1}]
    data : JSON.parse(localStorage.getItem('contentMessenges')) || [],
  }
};
export function addMessenge() {
  return {
    type : types.ADD_MESSENGE,
    data : [{ id: 2 }]
  }
}
// export function editMessager (data, c)