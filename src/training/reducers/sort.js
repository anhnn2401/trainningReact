//Store 
let initialState = {
  by : 'name',
  value : 1
}


//Reducer phân tích hành động dựa vào type
let myReducer = (state = initialState, action) => {
  if (action.type === 'SORT') {
    let { by, value } = action.sort; //tạo biến mới
    return { by, value }
  }
  return state;
}
export default myReducer;