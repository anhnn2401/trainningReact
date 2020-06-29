import React, { Component } from 'react'
export default class Work extends Component {
  render() {
    return (
      <div className="work" id="work">
        <h3 className="title-feature wow fadeInDown" data-wow-duration="5s">Our Amazing Work</h3>
        <div className="row">
          <ul className="nav-work">
            <li className="nav-item wow fadeInLeft active" data-wow-delay="1.5s" data-filter="all">All</li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="1.2s"  data-filter="1">Graphic Design</li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.9s" data-filter="2">Web Design</li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.6s" data-filter="3">Landing Pages</li>
            <li className="nav-item wow fadeInLeft" data-wow-delay="0.3s" data-filter="4">Wordpress</li>
          </ul>
        </div>
        <div className="filter-container row wow fadeInUp container" data-wow-delay="1.2s">
          <div className="filtr-item col-sm-3 filtr-Work" data-category="@@data">
            <img src={require('../../assets/images/img-1.jpg')} alt="image1" className="image-work"/>
            <img src={require('../../assets/images/img-2.jpg')} alt="image1" className="image-work"/>
            <img src={require('../../assets/images/img-3.jpg')} alt="image1" className="image-work"/>
            <img src={require('../../assets/images/img-4.jpg')} alt="image1" className="image-work"/>
          </div>
        </div>
        <div className="row wow bounceInDown" data-wow-offset="5">
          <button type="button" className="btn"><i className="fa fa-plus"></i> load more</button>
        </div>
      </div>
    )
  }
}
