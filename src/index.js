import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// Store
// import { createStore } from 'redux';
// import myReducer from './reducers/index';
import { Provider } from 'react-redux';
// import TestAnt from './testAnt';
import { Main } from './components';
import { store } from './store';
// import demo from './training/demo'


ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
      {/* <TestAnt /> */}
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
 