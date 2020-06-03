import React, { Component } from 'react';
import Slider from 'react-slick';
import FeedbackNavs from './FeedbackNavs';
import FeedbackFors from './FeedbackFors';
import {loopFeedbacks, feedbackImages} from '../__mock__/Data';


export default class Feedback extends Component {
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
    const navFeedBacks = loopFeedbacks.map((item, index) => {
      return (
        <FeedbackNavs key={index} {...item} />
      )
    })
    const forFeedBacks = feedbackImages.map((feedbackImage, index) => {
      return (
        <FeedbackFors key={index} {...feedbackImage} />
      )
    })
    return (
      <div className="feedback" id="testimonial">
        <h3 className="title-feature wow fadeInRight">What People Say About theHam</h3>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => {this.slider1 = slider}}
          arrows= {false}
          adaptiveHeight= {true}
          slidesToShow={1}
          slidesToScroll={1} 
        >
        { navFeedBacks }
        </Slider>
        <Slider
          ref={c => (this.slider2 = c)}
          asNavFor={this.state.nav1}
          // ref={slider => {this.slider2 = slider}}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          dots={false}
          arrows={false}
          className='feedback-nav'
        >
          { forFeedBacks }
        </Slider>
        
          <div className="button">
            <i className="fa fa-angle-left"  onClick={this.previous}></i>  
            <i className="fa fa-angle-right" onClick={this.next}></i>
          </div>
      </div>
    );
  }
}
