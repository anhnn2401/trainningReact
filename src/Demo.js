import { createStore } from 'redux'
//Store 
let initialState = {
  status : false,
  sort : {
    by : 'name',
    value : 1
  }
}


//Reducer phân tích hành động dựa vào type
let myReducer = (state = initialState, action) => {
  if (action.type === 'TOGGLE_STATUS') {
    state.status = !state.status;
    return state;
  }
  if (action.type === 'SORT') {
    let { by, value } = action.sort; //tạo biến mới
    let { status } = state; //status = status.state
    return {
      status : status,
      sort : {
        by : by,
        value : value
      }
    }
    console.log('action',action)
  }
  return state;
}
const store = createStore(myReducer);

console.log ('default', store.getState())


//Action 
// thực hiện công việc thay đổi state
let action = {
  type : 'TOGGLE_STATUS'
};
store.dispatch(action);  //gọi store để thực hiện acction

console.log('togle', store.getState());
// Thực hiện công việc sắp xếp
let sortAction = {
  type : 'SORT',
  sort : {
    by : 'name',
    value : -1
  }
}
store.dispatch(sortAction);
console.log('sort', store.getState());
