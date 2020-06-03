import React, { Component } from 'react';

export default class SliderFors extends Component {
  render () {
    const { descrip1, descrip2, description, titleHome, image } = this.props;
    return (
      <div className="slider-for">
        <div className="slide-home">
            <img className="images-home" src={ image } alt="images-home"/>
          <div className="content-home">
            <h3 className="title-home">{ descrip1 } <span className="descrip-home">{ descrip2 }</span></h3>
            <h2 className="title-home-creative">{ titleHome }</h2>
            <p className="descrip-slide">{ description }</p>
          </div>
          <div className="btn-home">
            <button type="button" className="btn btn-lg">explore now</button>
            <button  type="button" className="btn btn-lg">purchase now</button>
          </div>
        </div>
      </div>
    )
  }
}
