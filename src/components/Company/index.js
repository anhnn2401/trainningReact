import Company from './Company';
import {Footer, Header } from '../../components';
import React, { Component } from 'react';
import { Install } from '../Purchase';

export default class About extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Company/>
        <Install/>
        <Footer/>
      </div>
      
    )
  }
};