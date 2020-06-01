import React, { Component } from "react";
import Slider from "react-slick";
import productNavs, { sliderFors } from '../__mock__/products'

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    var setting = {
      dots: false,
      infinite: true,
    }
    
    const SliderFors = sliderFors.map((product, index) => {
      return (
        <SliderNav key={index} { ...product } />
      )
    })
    const { nav1, nav2 } = this.state
    return (
      <div className="home" id="home">

        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          { SliderFor }
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={true}
        >
          <img src={ require('../../assets/images/img-5.jpg') } alt="anh 1"/>
          <img src={ require('../../assets/images/img-5.jpg') } alt="anh 2"/>
          <img src={ require('../../assets/images/img-5.jpg') } alt="anh 2"/>
          <img src={ require('../../assets/images/img-5.jpg') } alt="anh 2"/>
          <img src={ require('../../assets/images/img-5.jpg') } alt="anh 2"/>
        </Slider>
      </div>
    );
  }
}
