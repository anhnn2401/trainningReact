import * as types from '../../actions/types';

const data = JSON.parse(localStorage.getItem('contentMessenges'));

let generateID = () =>  {
  let id = Math.random().toString(36).substring(2,8);
  return id;
}

const findIndex = (data, id) => {
  let result = -1;
  data.forEach((messenge, index) => {
    if (messenge.id === id) {
      result = index;
    }
  });
  return result;
}
const initialState = data ? data : [];
const messenges = (state = initialState, action) =>{
  let id = '';
  let index = -1;
  switch(action.type){
    case types.RECEIVE_DATA:
      return Object.assign(state, {
        data : initialState
      });
    case types.SAVE_FORM:
      let newMessenge = {
        id : action.messenge.id,
        name : action.messenge.name,
        content: action.messenge.content
      }
      if(!newMessenge.id){
        newMessenge.id = generateID();
        state.push(newMessenge);
      }else {
        index = findIndex(state, newMessenge.id);
        state[index] = newMessenge;
      }
      localStorage.setItem('contentMessenges', JSON.stringify(state));
      return [...state];
    // case types.ADD_MESSENGE:
    //   let newMessenge = {
    //     id : generateID(),
    //     name : action.messenge.name,
    //     content: action.messenge.content
    //   }
    //   state.push(newMessenge);
    //   localStorage.setItem('contentMessenges', JSON.stringify(state));
    //   return [...state];
    // case types.EDIT_MESSENGE:
    //   id = action.messege.id;
    //   index = findIndex(state, id)
    //   formEditing = action.messege
    //   console.log('form',formEditing);
    //   console.log('state-edit',state);
    //   state.splice(index, 1, formEditing)
    //   return [...state]
    case types.DELETE_MESSENGE:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem('contentMessenges', JSON.stringify(state));
      return [ ...state];
    default: return state;
  }
}
export default messenges;
