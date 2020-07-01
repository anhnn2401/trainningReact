import * as types from '../../actions/types';

const initialState = {};
const formEditing = (state = initialState, action) =>{
  switch(action.type){
    case types.EDIT_MESSENGE:
      state = action.messege;
    default: return state;
  }
}
export default formEditing;
