import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-slick/dist/react-slick.js';
import React from 'react';
import { renderRouter as RenderRouter } from './routes'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RenderRouter/>
    </BrowserRouter>
  );
}

export default App;
