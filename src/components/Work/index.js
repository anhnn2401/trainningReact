import Work from './Work';
import React, { Component } from 'react';
import {Header, Footer } from '../../components'


export default class Works extends Component {
  render() {
    return (
      <div>
        <Header />
        <Work />
        <Footer />
      </div>
    )
  }
}