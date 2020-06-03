import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-slick/dist/react-slick.js';
import React from 'react';
import { 
  // Demo, 
  // Test, 
  Header, 
  Breaking, 
  Contact, 
  Company, 
  Funfact, 
  Feature, 
  Footer, 
  Home, 
  Feedback,
  Install,
  Purchase,
  Service,
  Team,
  Work } from './components';




function App() {
  return (
    <>
      <Header />
      <Home />
      <Feature />
      <Company />
      <Work />
      <Service />
      <Install />
      <Breaking />
      <Funfact />
      <Feedback />
      <Team />
      <Purchase />
      <Contact />
      <Footer />
      {/* 
      <Demo />
      <Test />
       */}
    </>
  );
}

export default App;
