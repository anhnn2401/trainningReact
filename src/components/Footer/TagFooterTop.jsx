import React, { Component } from 'react';

export default class TagFooterTop extends Component {
  render() {
    const delayValues = [1.8, 2.4, 2.8, 1.2];
    const Tags = delayValues.map((delay, index) => {
      return(
        <div key={index} className="tags wow fadeInUp" data-wow-delay={ delay }>
          <a href="#s" className="tags-link">audio</a>
          <a href="#s" className="tags-link">gallery</a>
          <a href="#s" className="tags-link">Image</a>
        </div>
      )
      })
    return (
      <div>
        {Tags}
      </div>
    )
  }
}