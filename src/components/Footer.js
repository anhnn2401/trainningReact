import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let loopRecents = [
      {
        image: require('../assets/images/img-footer.png'),
        titleRecent: 'A STANDARD IMAGE POST',
        descRecent: 'Lorem ipsum dolor sit amet, con   sectetur adip is lisicing elit, sed do.',
        date: '10 March, 2015',
        delay: '1.2s'
      },
      {
        image: require('../assets/images/img-footer.png'),
        titleRecent: 'A STANDARD IMAGE POST',
        descRecent: 'Lorem ipsum dolor sit amet, con   sectetur adip is lisicing elit, sed do.',
        date: '10 March, 2015',
        delay: '1.2s'
      },{
        image: require('../assets/images/img-footer.png'),
        titleRecent: 'A STANDARD IMAGE POST',
        descRecent: 'Lorem ipsum dolor sit amet, con   sectetur adip is lisicing elit, sed do.',
        date: '10 March, 2015',
        delay: '1.2s'
      }
    ];
    let loopImages = [
      {
        image: require('../assets/images/img-footer.png')
      },
      {
        image: require('../assets/images/img-footer.png')
      },
      {
        image: require('../assets/images/img-footer.png')
      },
      {
        image: require('../assets/images/img-footer.png')
      },
      {
        image: require('../assets/images/img-footer.png')
      },
      {
        image: require('../assets/images/img-footer.png')
      }
    ];
    let loopTags = [
      {
        delay: '1.8',
      },
      {
        delay: '2.4',
      },
      {
        delay: '2.8',
      },
      {
        delay: '1.2',
      }
    ];
    const imageFooter = loopImages.map((loopImage, index) => {
      return (
        <div key={ index } className="col-sm-5 col-3">
          <img src= { loopImage.image } className="image-flicke" alt="anh-footer" />
        </div>
      )
    })
    const tags = loopTags.map((loopTag, index) => {
      return (
        <nav key={index} className="tags wow fadeInUp" data-wow-delay={ loopTag.delay }>
          <a href="#s" className="tags-link">audio</a>
          <a href="#s" className="tags-link">gallery</a>
          <a href="#s" className="tags-link">Image</a>
        </nav>
      )
    })
    const recent = loopRecents.map((loopRecent, index) => {
      return (
        <div key= {index} className="recent wow fadeInUp" data-wow-delay={ loopRecent.delay }>
          <img src={ loopRecent.image } alt="anh" />
          <div className="wrap-recent">
            <a href="#a" className="title-recent">{ loopRecent.titleRecent }</a>
            <p className="desc-recent">{ loopRecent.descRecent }</p>
            <p className="date-recent">{ loopRecent.date }</p>
          </div>
        </div>
      )
    })
    return (
      <footer className="footer-container">
        <div className="footer-top container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a href="#a"><img src={ require('../assets/images/logo.png') } alt="anh" className="logo col-12 wow fadeInUp" data-wow-delay="0.5s" /></a>
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
            <div className="col-lg-4 col-md-6">
              <h3 className="col-12 title-footer wow fadeInUp" data-wow-delay="0.5s">recent post</h3>

              { recent }
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="block-tags">
                <h3 className="col-12 title-footer wow fadeInUp" data-wow-delay="0.5s">tags</h3>

                 { tags }
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
                { imageFooter }
              </div>
            </div>
          </div>
          <div className="footer-bot">
            <p className="footer-content">Copyright 2015 <span className="text-logo">theHam</span> | All Rights Reserved</p>
          </div>
        </footer>

    )
  }
}
export default Footer;