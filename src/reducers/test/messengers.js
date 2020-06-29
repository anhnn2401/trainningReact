import * as types from '../../actions/types';
const data = JSON.parse(localStorage.getItem('contentMessenges'));

const initialState = data ? data : [];
const messenges = (state = initialState, action) =>{
  // console.log('action', action);
  switch(action.type){
    case types.RECEIVE_DATA:
      return Object.assign(state, {
        // data : initialState.data
        data: action.data
      });
    case types.ADD_MESSENGE:
      console.log('ADD_MESSENGE',action);
      // return Object.assign(state, {
        // data : action.data
      // })
    default: return state;
  }
}
export default messenges;
