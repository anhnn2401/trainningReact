let initialState = [];

let myReducer = (state = initialState, action ) => {
  if (action.type === 'TOGGLE_STATUS') {
    let newState = {...state}
    newState.status = !state.status;
    return newState;
  }
  return state;
};

export default myReducer;