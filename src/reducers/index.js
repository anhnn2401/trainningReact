import { combineReducers } from 'redux';
import isDisplayForm from './messenges/isDisplayForm';
// import Tasks from './Tasks';
// import counterReducer from './test/counterReducer';
import messages from './messenges/messengers';
import formEditing from './messenges/formEditing'
export default combineReducers({
  // Tasks, // tasks : tasks;
  messages,
  isDisplayForm,
  formEditing
});
