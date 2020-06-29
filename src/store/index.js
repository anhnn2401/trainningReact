import { createStore } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from '../reducers';
import myReducer from './../reducers'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = { tech: "React"};

export const store = createStore(myReducer);
