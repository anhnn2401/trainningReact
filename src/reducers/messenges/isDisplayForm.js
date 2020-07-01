import * as types from '../../actions/types';

const initialState = {
  isDisplayForm : true
};

const form = (state = initialState, action) =>{
  switch(action.type){
    case types.TOGGLE_FORM:
      return {
        ...state,
        isDisplayForm: !state.isDisplayForm
      };
    case types.OPEN_FORM:
      return {
        ...state,
        isDisplayForm: false
      };
    case types.CLOSE_FORM:
      return {
        ...state,
        isDisplayForm: true
      };
    default: return state;
  }
}
export default form;
