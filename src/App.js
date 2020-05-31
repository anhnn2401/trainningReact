import React from 'react';
import Demo from './components/Demo';
import Test from './components/Test';
import Header from './components/Header';
import Breaking from './components/Breaking';
import Contact from './components/Contact';
import Company from './components/Company';
import Fact from './components/fact';
import Feature from './components/Feature';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import './assets/styles/main.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Header />
      <Product />
      {/* <Home /> */}
      <Breaking />
      <Feedback />
      <Feature />
      <Fact />
      <Contact />
      <Company />
      <Demo />
      <Test />
      <Footer />
    </div>
  );
}

export default App;
