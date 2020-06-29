//Store 
let initialState = false;


//Reducer phân tích hành động dựa vào type
let myReducer = (state = initialState, action) => {
  if (action.type === 'TOGGLE_STATUS') {
    state = !state;
    return state;
  }
  return state;
}
export default myReducer;