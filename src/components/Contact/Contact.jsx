import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact row" id="contact">
        <div className="col-md-6">
          <img src={ require('../../assets/images/map.jpg') } alt="anh-map" className="image-contact wow fadeInLeft" data-wow-delay="0.5s" />
        </div>
        <div className="col-md-6 wow fadeInRight" data-wow-delay="0.5s">
          <h3 className="title-feature">Keep In Touch</h3>
          <form action="/action_page.php" className="contact-form">
            <input type="text" id="fname" name="name" placeholder="Name" />
            <input type="text" id="lname" name="email" placeholder="Email" />
            <textarea type="text" name="Messager" placeholder="Messager"></textarea>
            <input type="submit" value="Send Request" />
          </form>
        </div>
      </div>
    )
  }
}
export default Contact;
