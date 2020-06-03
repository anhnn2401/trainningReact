import React, { Component } from 'react';
import FooterTop from './FooterTop.jsx';
import FooterBot from './FooterBot.jsx';
class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <FooterTop />
        <FooterBot />  
          
      </footer>
    )
  }
}
export default Footer;