import { createStore } from 'redux';
import { sort, status } from './actions'
import myReducer from './reducers/index'
const store = createStore(myReducer);

// console.log ('default', store.getState())


//Action 
// thực hiện công việc thay đổi state
// let action = {
//   type : 'TOGGLE_STATUS'
// };
store.dispatch(status());  //gọi store để thực hiện acction

// console.log('togle', store.getState());
// Thực hiện công việc sắp xếp
// let sortAction = {
//   type : 'SORT',
//   sort : {
//     by : 'name',
//     value : -1
//   }
// }
store.dispatch(sort({
  by : 'name',
  value : -1
}));
// console.log('sort', store.getState());
