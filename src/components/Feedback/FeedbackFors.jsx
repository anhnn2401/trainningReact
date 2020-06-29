import React, { Component } from 'react';
export default class FeedbackFors extends Component {
  render () {
    const {image} = this.props;
    return (
      <div className="feedback-nav">
        <div className="div-image">
          <img src={image} alt="feedback" className="image-nav" />
        </div>
      </div>
    )
  }
}