import React, { Component } from 'react';
import Funfact from './Fact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export default class Testimo extends Component {
  render() {
    return(
      <div>
        <Header />
        <Funfact/>
        <Footer />
      </div>
    )
  }
}