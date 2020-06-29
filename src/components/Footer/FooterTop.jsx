import React, { Component } from 'react';
import RecentTop from './RecentTop';
import TagFooterTop from './TagFooterTop';
import ImageFooter from './ImageFooter';
export default class FooterTop extends Component {
  render() {
    return(
      <div className="footer-top container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <a href="#a"><img src={ require('../../assets/images/logo.png') } alt="anh" className="logo col-12 wow fadeInUp" data-wow-delay="0.5s" /></a>
            <div className="address wow fadeInLeft" data-wow-delay="1s">
              <p className="wrap-footer">Lorem ipsum dolor sit amet, con is sectetur adipiscing elit. Duis ut lob ortis nulla. Vestibulum ante ipsum primis itrices posuere cubilia.</p>
              <div className="about">
                <p className="title-about">Office:</p>
                <p>795 Folsom Ave, Suite 600</p>
                <p>San Francisco, CA 94107</p>
              </div>
              <div className="about">
                <p><span className="title-about"><b>Phone:</b></span> (91) 8547 632521</p>
                <p><span className="title-about"><b>Fax:</b></span> (91) 11 4752 1433</p>
                <p><span className="title-about"><b>Email:</b></span> info@canvas.com </p>
              </div>
            </div>
          </div>
          <RecentTop />
          <div className="col-lg-3 col-md-6">
            <div className="block-tags">
              <h3 className="col-12 title-footer wow fadeInUp" data-wow-delay="0.5s">tags</h3>

              <TagFooterTop />
              </div>
                <h3 className="title-footer wow fadeInUp" data-wow-delay="3.6s">NEWSLETTER</h3>
                <p className="wow fadeInUp" data-wow-delay="4s">Subscribe to Our Newsletter to get Important News,  Amazing Offers.</p>
                <form action="/action_page.php" className="form-footer wow fadeInUp" data-wow-delay="4.3s">
                  <input type="text" id="lname" name="email" placeholder="Enter email" />
                  <input type="submit" value="Go" />
                </form>
              </div>
            <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="4s">
              <h3 className="col-12 title-footer wow fadeInUp" data-wow-delay="0.5s">flicke feed</h3>
              <ImageFooter/>
            </div>
          </div>
        </div>
    )
  }
}