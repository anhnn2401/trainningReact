import React, { Component } from 'react';

export default class SliderNavs extends Component {
  render () {
    const {  image } = this.props;
    return (
      <img src={ image } alt="images-home" className="image-Nav"/>
    )
  }
}