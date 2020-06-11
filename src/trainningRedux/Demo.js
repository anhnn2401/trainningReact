import { createStore } from 'redux';
let initialState = {
  status : false,
  sort : {
    by : 'name',
    value : 1 
  }
}
let myReducer = (state= initialState, action) => {
  if (action.type === 'TOGGLE_STATUS') {
    state.status = !state.status; //tra ve state moi co gia tri nguoc lai so voi state cu
    return state;
  }
  return state;
}
const store = createStore(myReducer);
console.log('Default : ', store.getState ());
//thuc hien cong viec thay doi status
let action = { type : 'TOGGLE_STATUS' };
store.dispatch(action);
console.log('TOGGLE_STATUS : ', store.getState ());
let sortAction = {
  type : 'SORT',
  sort : {
    by : 'name',
    value : -1
  }
}
store.dispatch(sortAction);
console.log('SORT: ', store.getState());