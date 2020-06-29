import React, { Component } from 'react';

export default class FeedbackNavs extends Component {
  render () {
   const { name, descFeedback, work, image } = this.props;
    return (
      <div className="slide-feedback">
        <div className="image-slide">
          <img src= { require('../../assets/images/img-feedback.png') } alt="feedback" />
        </div>
        <div>
          <p className="content-feedback">{ descFeedback }</p>
          <h4 className="name-feedback">{ name }</h4>
          <p className="work-feedback">{ work }</p>
        </div>
        <div className="image-feedback">
          <img src={ image } alt="feedback" className="item-slide" />
        </div>
      </div>
    )
  }
}