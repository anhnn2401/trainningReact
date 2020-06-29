import React, { Component } from 'react';
import ListProg from './ListProg'
export default class Purchase extends Component {
  render() {
    return(
      <div className="purchase" id="skills">
        <div className="title-purchase-2">
          <h3 className="title-purchase wow fadeInLeft">theham is not only wordpress theme</h3>
          <h4 className="description-purchase wow fadeInRight">it’s also clean and creative design</h4>
        </div>
        <div className="row">
          <div className="col-sm-6 wow fadeInLeft" data-wow-delay="1s" data-wow-duration="5s">
            <img src={require('../../assets/images/img-purchase.png')} alt="anh-laptop" className="image-purchase"/>
          </div>
          <div className="col-sm-6 wow fadeInRight" data-wow-delay="1s" data-wow-duration="5s">
            <ListProg />
            <button type="button" className="btn">purchase now</button>
          </div>
        </div>
      </div>
    )
  }
}
