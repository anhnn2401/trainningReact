import React, { Component } from 'react';

export default class BlogBreak extends Component {
  render () {
    const { id, image, delay, titleBreaking } = this.props;
    return (
      <div key={ id } className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay={ delay }>
        <div className="content-breaking">
          <img src={ image } alt="anh new" className="image" />
          <div className="date">
            <p>12</p>
            <p>Feb</p>
          </div>
        </div>
        <div className="title-desc">
          <h3><a className="title-post" href="#a">{ titleBreaking }</a></h3>
          <div className="desc-post">
            <p><a className="desc-link" href="#a">By admin</a></p>
            <p className="desc-link">|</p>
            <p><a className="desc-link" href="#a">2 comment</a></p>
          </div>
        </div>
      </div>
    )
  }
}
