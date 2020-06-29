import status from './status';
import sort from './sort';
import { combineReducers } from 'redux';

//sử dụng combine để gộp các reducers

const myReducer = combineReducers ({
  status : status,
  sort : sort
})


export default myReducer;