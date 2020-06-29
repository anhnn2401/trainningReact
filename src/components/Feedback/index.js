import React, { Component } from 'react';
import Header from '../Header/Header';
import { Feedback } from '../';
import Footer from '../Footer/Footer';
export default class Blog extends Component {
  render() {
    return (
      <div>
        <Header />
        <Feedback />
        <Footer />
      </div>
      
    )
  }
}