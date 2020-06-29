import {Footer, Header } from '../../components';
import React, { Component } from 'react';
import ContactForm from './ContactForm.jsx';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContactForm />
        <Footer />
      </div>
    )
  }
};
