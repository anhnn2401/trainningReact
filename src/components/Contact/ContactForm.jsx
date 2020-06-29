import React, { Component } from 'react';

export default class ContactForm extends Component {

  render() {
    return (
      <div className="contact row">
        <div className="col-md-6">
          <iframe className="mapsStyte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.753356056954!2d108.22151701468418!3d16.078283788875353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183b1ba9d6dd%3A0x96c8743cc749a5f3!2zMzEgQuG6oWNoIMSQ4bqxbmcsIFRo4bqhY2ggVGhhbmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1591936675693!5m2!1svi!2s" title="maps" aria-hidden="false" tabIndex="0"  frameBorder="0" style={{width: 100 + '%', height: 77 + '%'}}/>
          {/* <img src={ requirheight="450"e('../../assets/images/map.jpg') } alt="anh-map" className="image-contact"/> */}
        </div>
        <div className="col-md-6">
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
