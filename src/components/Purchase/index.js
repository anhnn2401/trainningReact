import Install from './Install';
import Purchase from './Purchase';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export default class Skills extends Component {
  render (){
    return(
      <div>
        <Header/>
        <Purchase />
        <Footer />
      </div>
    )
  }
}
export {
  Install,
  Purchase}