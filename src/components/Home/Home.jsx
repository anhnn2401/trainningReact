import React, { Component } from "react";
import Slider from "react-slick";
import { sliderFors, sliderNavs } from '../__mock__/products';
import SliderNavs from './SliderNavs';
import SliderFors from './SliderFors'

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.next= this.next.bind(this);
    this.previous= this.previous.bind(this);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
  next () {
    console.log(this.slider)
    this.slider2.slickNext()
  }
  previous() {
    this.slider2.slickPrev();
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    
    const NavSliders = sliderNavs.map((item, index) => {
      return (
        <SliderNavs key={index} { ...item } />
      )
    })
    const ForSliders = sliderFors.map((product, index) => {
      return (
        <SliderFors key={index} { ...product } />
      )
    })
   
    return (
      <div className="home" id="home">

        <Slider
          asNavFor={this.state.nav2}
          ref={slider => {this.slider1 = slider}}
          arrows= {false}
          adaptiveHeight= {true}
          slidesToShow={1}
          slidesToScroll={1}
          
        >
        { ForSliders }
        </Slider>
        <Slider
          // ref={c => (this.slider = c)}
          asNavFor={this.state.nav1}
          ref={c => {this.slider2 = c}}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={false}
          arrows={false}
          className='slider-nav'
        >
          { NavSliders }
        </Slider>        
          <div className="button">
            <i className="fa fa-angle-left"  onClick={this.previous}></i>  
            <i className="fa fa-angle-right" onClick={this.next}></i>
          </div>
      </div>
    );
  }
}
